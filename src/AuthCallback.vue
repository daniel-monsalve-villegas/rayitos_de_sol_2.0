<template>
    <div>
      <p>Procesando login...</p>
  
      <!-- Modal para ingresar el NIT si es un contratista -->
      <div v-if="isContractor" class="modal">
        <div class="modal-content">
          <h3>Para continuar con el inicio de sesión, ingresa el NIT de tu empresa</h3>
          <input type="text" v-model="nit" placeholder="NIT" />
          <button @click="submitNIT">Enviar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { watch, ref } from 'vue';
  import { useAuth0 } from '@auth0/auth0-vue';
  import api from '@/api/axiosInstance';
  import { useRouter } from 'vue-router';
  
  const { isAuthenticated, user, isLoading, logout } = useAuth0();
  const router = useRouter();
  
  const isContractor = ref(false);
  const nit = ref("");
  let storedNIT = ""; // Variable para almacenar el NIT del backend
  
  // Función para validar el usuario en el backend
  const validateUser = async (email) => {
    console.log("📩 Enviando email a backend:", email);
  
    try {
      const response = await api.get(`/search/email/${email}`);
      console.log("✅ Resultado de la búsqueda:", response.data);
  
      if (response.data.idContractor) {
        console.log("🔧 El usuario es un contratista.");
        isContractor.value = true; // Establecer que es contratista
        storedNIT = response.data.nitEnterprise; // Guardar el NIT del contratista
        localStorage.setItem("userType", "contractor"); // Guardar tipo de usuario
      } else if (response.data.idClient) {
        console.log("👥 El usuario es un cliente.");
        localStorage.setItem("userType", "client"); // Guardar tipo de usuario
      } else {
        // Si no es ni contratista ni cliente, cerramos sesión
        console.log("⚠️ El usuario no está registrado como contratista ni cliente.");
        logout({ returnTo: window.location.origin }); // Cerrar sesión si no está registrado
      }
  
    } catch (error) {
      console.error("❌ Error al buscar el email:", error);
      // Cerrar sesión si ocurre un error de búsqueda
      logout({ returnTo: window.location.origin });
    }
  };
  
  // Función para enviar el NIT cuando el contratista lo ingresa
  const submitNIT = () => {
    console.log("📑 NIT ingresado por el usuario:", nit.value);
    console.log("📑 NIT recibido del backend:", storedNIT);
  
    if (nit.value === storedNIT) {
      console.log("✅ Los NIT coinciden.");
      localStorage.setItem("contractorNIT", nit.value); // Guardar el NIT en localStorage
      isContractor.value = false; // Cerrar el modal sin cerrar sesión
      // Redirigir al dashboard del contratista
      router.push("/dashboard-contractor");
    } else {
      console.log("❌ Los NIT no coinciden.");
      // Mostrar un mensaje de error si los NIT no coinciden
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
  
  <style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Fondo oscuro */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    pointer-events: all; /* Bloquear interacción con el fondo */
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    width: 300px;
    text-align: center;
  }
  
  .modal h3 {
    font-size: 1.2em;
    margin-bottom: 1rem;
  }
  
  .modal input {
    padding: 10px;
    margin: 10px 0;
    width: 80%;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .modal button {
    padding: 10px 20px;
    background-color: var(--color-dark-green);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .modal button:hover {
    background-color: var(--color-light-green);
  }
  </style>
  