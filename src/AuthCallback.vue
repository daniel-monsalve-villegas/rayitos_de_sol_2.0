<template>
  <div>
    <p>Procesando inicio de sesión...</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

onMounted(async () => {
  console.log("Iniciando el proceso de callback...");

  // Captura el código de la URL (se espera que esté en la URL después de la redirección de Auth0)
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
  
  if (!code) {
    console.error("No se encontró el código en la URL");
    return;
  }

  try {
    // Enviar el código al backend para obtener el token de acceso
    console.log("Enviando el código al backend para obtener el token...", code);
    const response = await axios.post('http://localhost:8080/api/auth0/token', { code });

    const token = response.data.access_token;
    console.log("Token obtenido:", token);

    // Guardar el token en localStorage para futuras peticiones
    localStorage.setItem('auth0_token', token);

    // Opcional: Hacer una solicitud para obtener la metadata del usuario con el token
    const userMetadata = await axios.get('https://dev-yqne2f86vz7fs1zt.us.auth0.com/userinfo', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Metadata del usuario:", userMetadata.data);

    // Guardar la metadata del usuario en el localStorage (si lo deseas)
    localStorage.setItem('user_metadata', JSON.stringify(userMetadata.data));

    // Redirigir al usuario a la página principal
    router.push('/');
  } catch (error) {
    console.error('Error al obtener el token o la metadata del usuario:', error);
  }
});
</script>
