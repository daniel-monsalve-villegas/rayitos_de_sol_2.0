<template>
  <div>
    <p>Procesando login...</p>

    <!-- Bloqueo global cuando cualquier modal está abierto -->
    <div v-if="showNitModal || showRegisterModal" class="page-blocker"></div>

    <!-- Modal de validación de NIT -->
    <div v-if="showNitModal" class="modal-overlay">
      <div class="modal-content">
        <h2>Ingrese su NIT</h2>
        <input v-model="enteredNit" type="text" placeholder="Ingrese su NIT" ref="nitInput" />
        <p v-if="nitError" class="error-text">❌ NIT incorrecto. Inténtelo de nuevo.</p>
        <button @click="validateNit">Validar</button>
      </div>
    </div>

    <!-- Modal de registro obligatorio -->
    <div v-if="showRegisterModal" class="modal-overlay">
      <div class="modal-content">
        <h2>Termina de configurar tu registro</h2>
        <button @click="registerAsContractor">Soy Contratista</button>
        <button @click="registerAsClient">Soy Cliente</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onUnmounted, nextTick, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuth0 } from "@auth0/auth0-vue";
import api from "@/api/axiosInstance";

const router = useRouter();
const { isAuthenticated, user, isLoading } = useAuth0();
const userType = ref(null);
const showNitModal = ref(false);
const showRegisterModal = ref(false);
const enteredNit = ref("");
const nitEnterprise = ref(null);
const nitError = ref(false);
const nitInput = ref(null);
const userEmail = ref("");

// Bloquear interacciones en la página
const disableInteractions = () => {
  document.body.style.overflow = "hidden"; 
  document.querySelectorAll("button, a, input, select").forEach((el) => {
    if (!el.closest(".modal-content")) {
      el.setAttribute("disabled", "true"); 
    }
  });
};

// Restaurar interacciones en la página
const enableInteractions = () => {
  document.body.style.overflow = "auto";
  document.querySelectorAll("button, a, input, select").forEach((el) => {
    el.removeAttribute("disabled"); 
  });
};

// Redirecciones a formulario de registro de contractor o client
const registerAsContractor = () => {
  router.push({ path: "/register-contractor", query: { email: userEmail.value } });
};

const registerAsClient = () => {
  router.push({ path: "/register-client", query: { email: userEmail.value } });
};

// Validar usuario en backend
const validateUser = async (email) => {
  userEmail.value = email; 
  localStorage.setItem("userEmail", userEmail.value);
  try {
    const response = await api.get(`/search/email/${email}`);

    if (response.data.idContractor) {
      userType.value = "contractor";
      nitEnterprise.value = response.data.nitEnterprise;
      showNitModal.value = true;
      disableInteractions();
      nextTick(() => nitInput.value?.focus());
    } else if (response.data.idClient) {
      userType.value = "client";
      localStorage.setItem("userType", userType.value)
      router.push("/");
    } else {
      showRegisterModal.value = true;
      disableInteractions();
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      showRegisterModal.value = true;
      disableInteractions();
    } else {
      console.error();
    }
  }
};

// Validar el NIT ingresado
const validateNit = () => {
  if (enteredNit.value === nitEnterprise.value) {
    localStorage.setItem("userType", "contractor");
    showNitModal.value = false;
    enableInteractions();
    router.push("/");
  } else {
    nitError.value = true;
  }
};

const preventReload = (event) => {
  event.preventDefault();
  event.returnValue = ""; // Necesario para que funcione en algunos navegadores
};
onMounted(() => {
  window.addEventListener("beforeunload", preventReload);
});
onUnmounted(() => {
  window.removeEventListener("beforeunload", preventReload);
});
const disableReloadKeys = (event) => {
  if (
    event.key === "F5" ||
    (event.ctrlKey && event.key === "r") ||
    (event.metaKey && event.key === "r")
  ) {
    event.preventDefault();
  }
};
onMounted(() => {
  window.addEventListener("keydown", disableReloadKeys);
});
onUnmounted(() => {
  window.removeEventListener("keydown", disableReloadKeys);
});
// Observar cambios en la autenticación
watch(isLoading, (newValue) => {
  if (!newValue && isAuthenticated.value && user.value?.email) {
    validateUser(user.value.email);
  }
});

// Restaurar interacciones al desmontar el componente
onUnmounted(() => {
  enableInteractions();
});
</script>

<style scoped>

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
  display: block;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  background: var(--color-green);
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background: var(--color-dark-green);
}

.error-text {
  color: red;
  font-size: 14px;
}
</style>
