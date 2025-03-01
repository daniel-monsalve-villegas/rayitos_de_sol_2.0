<template>
  <div>
    <p>Procesando login...</p>

    <!-- Capa de bloqueo para evitar interacción fuera del modal -->
    <div v-if="showNitModal" class="page-blocker"></div>

    <!-- Modal obligatorio para contratistas -->
    <div v-if="showNitModal" class="modal-overlay">
      <div class="modal-content">
        <h2>Ingrese su NIT</h2>
        <input v-model="enteredNit" type="text" placeholder="Ingrese su NIT" ref="nitInput" />
        <p v-if="nitError" class="error-text">❌ NIT incorrecto. Inténtelo de nuevo.</p>
        <button @click="validateNit">Validar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, nextTick } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";
import api from "@/api/axiosInstance";

const { isAuthenticated, user, isLoading, logout } = useAuth0();
const userType = ref(null);
const showNitModal = ref(false);
const enteredNit = ref("");
const nitEnterprise = ref(null);
const nitError = ref(false);
const nitInput = ref(null);

// Bloquear interacciones en la página
const disableInteractions = () => {
  document.body.style.overflow = "hidden"; // Bloquea scroll
  document.querySelectorAll("button, a, input, select").forEach((el) => {
    if (!el.closest(".modal-content")) {
      el.setAttribute("disabled", "true"); // Deshabilita botones y links fuera del modal
    }
  });
};

// Restaurar interacciones en la página
const enableInteractions = () => {
  document.body.style.overflow = "auto";
  document.querySelectorAll("button, a, input, select").forEach((el) => {
    el.removeAttribute("disabled"); // Habilita botones y links
  });
};

// Función para validar usuario
const validateUser = async (email) => {
  console.log("📩 Enviando email a backend:", email);

  try {
    const response = await api.get(`/search/email/${email}`);
    console.log("✅ Resultado de la búsqueda:", response.data);

    if (response.data.idContractor) {
      console.log("🔧 El usuario es un contratista.");
      userType.value = "contractor";
      nitEnterprise.value = response.data.nitEnterprise;
      showNitModal.value = true;
      disableInteractions();

      // Esperar a que el modal se renderice y forzar el focus en el input
      nextTick(() => nitInput.value?.focus());
    } else if (response.data.idClient) {
      console.log("👥 El usuario es un cliente.");
      userType.value = "client";
    } else {
      console.log("⚠️ El usuario no es ni cliente ni contratista.");
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error("❌ Usuario no registrado, cerrando sesión...");
      
    } else {
      console.error("❌ Error al buscar el email:", error);
    }
  }
};

// Validar el NIT ingresado
const validateNit = () => {
  if (enteredNit.value === nitEnterprise.value) {
    console.log("✅ NIT validado correctamente.");
    localStorage.setItem("userType", "contractor");
    showNitModal.value = false;
    enableInteractions();
  } else {
    console.log("❌ NIT incorrecto.");
    nitError.value = true;
  }
};

// Observar cambios en la autenticación
watch(isLoading, (newValue) => {
  if (!newValue && isAuthenticated.value && user.value?.email) {
    console.log("✔ Usuario autenticado:", user.value.email);
    validateUser(user.value.email);
  }
});

// Restaurar interacciones al desmontar el componente
onUnmounted(() => {
  enableInteractions();
});
</script>

<style scoped>
/* Bloqueo total de interacción */
.page-blocker {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 998;
  pointer-events: all;
}

/* Fondo del modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  z-index: 999;
}

/* Contenido del modal */
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

input {
  display: block;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
}

button {
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

.error-text {
  color: red;
  font-size: 14px;
}
</style>
