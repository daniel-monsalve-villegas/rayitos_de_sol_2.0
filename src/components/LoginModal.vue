<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal">
      <div class="modal-content">
        <button class="close-btn" @click="$emit('close')">✖</button>
        <h2>Iniciar Sesión</h2>

        <div class="toggle-buttons">
          <button @click="login('client')">Soy Cliente</button>
          <button @click="login('contractor')">Soy Contratista</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuth0 } from "@auth0/auth0-vue";
import { ref } from "vue";

const { loginWithRedirect } = useAuth0();
const nit = ref("");

// Función para generar un valor aleatorio (state)
const generateRandomState = () => {
  const array = new Uint8Array(32); // Genera un array de 32 bytes
  window.crypto.getRandomValues(array); // Rellena el array con valores aleatorios
  return btoa(String.fromCharCode.apply(null, array)); // Convierte a Base64
};

const login = async (userType) => {
  if (userType === "contractor") {
    nit.value = prompt("Ingrese su NIT");
    if (!nit.value) {
      alert("Debe ingresar un NIT para continuar.");
      return;
    }
  }

  // Guarda el tipo de usuario y el NIT en el localStorage
  localStorage.setItem("selectedUserType", userType);
  localStorage.setItem("selectedNIT", nit.value || "");

  // Genera un valor aleatorio (state) en Base64
  const state = generateRandomState();
  console.log("State generado en el modal (Base64):", state);

  // Guarda el state en el localStorage para verificarlo después
  localStorage.setItem("auth0_state", state);
  console.log("State guardado en localStorage desde el modal:", state);

  try {
    console.log("Redirigiendo a Auth0 con el state:", state);

    await loginWithRedirect({
      authorizationParams: {
        prompt: "login",
        redirect_uri: `${window.location.origin}/auth-callback`,
        state: state, // Incluye el state en Base64 en la solicitud
      },
    });
  } catch (error) {
    console.error("Error en login:", error);
  }
};

</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  display: flex;
  background: white;
  width: 600px;
  max-width: 90%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  animation: fadeIn 0.3s ease-in-out;
}

.modal-content {
  flex: 1;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #333;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 1em;
  color: #333;
}

.toggle-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.toggle-buttons button {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.toggle-buttons button:first-child {
  background: #007BFF;
  color: white;
}

.toggle-buttons button:first-child:hover {
  background: #0056b3;
}

.toggle-buttons button:last-child {
  background: #28a745;
  color: white;
}

.toggle-buttons button:last-child:hover {
  background: #1e7e34;
}

/* Estilos Responsive */
@media screen and (max-width: 600px) {
  .modal {
    flex-direction: column;
    width: 90%;
  }
}

</style>