<!-- <script setup>
import { ref, watch } from "vue";
import { useAuth0 } from '@auth0/auth0-vue';
import { useRouter } from 'vue-router';
import api from '@/api/axiosInstance';

const { isAuthenticated, user, isLoading, logout } = useAuth0();
const router = useRouter();

// Validar usuario basado en el email
const validateUser = async (email) => {
  console.log("📩 Enviando email a backend:", email);

  try {
    const response = await api.post("/auth0/validate-user", { email });
    console.log("✅ Respuesta del backend:", response.data);

    // Verificar el rol del usuario y la tabla en la que está registrado
    if (response.data.role === "client") {
      console.log("Usuario validado como Cliente");
      console.log("Datos del usuario:", user.value);  // Muestra los datos del usuario
      console.log("El usuario está en la tabla 'clients'");
      router.push("/dashboard-client");

    } else if (response.data.role === "contractor") {
      console.log("Usuario validado como Contratista");
      console.log("Datos del usuario:", user.value);  // Muestra los datos del usuario
      console.log("El usuario está en la tabla 'contractors'");
      router.push("/dashboard-contractor");
    }

  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.error("❌ Error de validación: El usuario no está registrado en el sistema.");
      alert("El usuario no está registrado en el sistema.");
      logout({ returnTo: window.location.origin });
    } else {
      console.error("❌ Error de validación:", error);
    }
    debugger;  // Para depurar el error si es necesario
  }
};

// Usamos un watcher para validar el usuario cuando el estado de isAuthenticated cambie
watch(isLoading, (newValue) => {
  if (!newValue && isAuthenticated.value && user.value?.email) {
    validateUser(user.value.email);
  }
});
</script>

<template>
  <div>
    <p>Procesando login...</p>
  </div>
</template> -->
<template>
    <div>
      <p>Procesando login...</p>
    </div>
  </template>
  
  <script setup>
  import { watch } from 'vue';
  import { useAuth0 } from '@auth0/auth0-vue';
  import api from '@/api/axiosInstance';
  
  const { isAuthenticated, user, isLoading, logout } = useAuth0();
  
  // Función para validar al usuario en el backend
  const validateUser = async (email) => {
    console.log("📩 Enviando email a backend:", email);
  
    try {
      const response = await api.get(`/search/email/${email}`);
      console.log("✅ Resultado de la búsqueda:", response.data);
  
      // Verificar si la respuesta contiene idContractor o idClient
      if (response.data.idContractor) {
        console.log("🔧 El usuario es un contratista.");
        localStorage.setItem("userType", "contractor");
      } else if (response.data.idClient) {
        console.log("👥 El usuario es un cliente.");
        localStorage.setItem("userType", "client");
      } else {
        console.log("⚠️ El usuario no es ni cliente ni contratista.");
      }
  
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // Si el usuario no se encuentra, cerramos la sesión automáticamente
        console.error("❌ El usuario no se encuentra en el sistema, cerrando sesión...");
        logout({ returnTo: window.location.origin }); // Cierra la sesión y redirige a la página principal
      } else {
        console.error("❌ Error al buscar el email:", error);
      }
    }
  };
  
  // Usar un watcher para validar el usuario cuando el estado de isAuthenticated cambie
  watch(isLoading, (newValue) => {
    if (!newValue && isAuthenticated.value && user.value?.email) {
      console.log("✔ Usuario autenticado con éxito:", user.value.email);
      validateUser(user.value.email);
    }
  });
  </script>
  