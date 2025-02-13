<template>
  <form class="login__form" @submit.prevent="submitForm">
    <label for="clientEmail" class="login__label">Correo:</label>
    <input class="login__input" type="email" id="clientEmail" v-model="email" placeholder="alguien@correo.com"
      required />

    <label for="clientPassword" class="login__label">Contraseña:</label>
    <div class="login__password-container">
      <input class="login__input" :type="fieldType" id="clientPassword" v-model="password" required />
      <button class="login__toggle-password" @click="togglePassword" type="button"
        :aria-label="fieldType === 'password' ? 'Mostrar contraseña' : 'Ocultar contraseña'">
        👁️
      </button>
    </div>

    <input class="login__submit" type="submit" value="Login" />
  </form>
</template>

<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
  setup(_, { emit }) {

    const email = ref("");
    const password = ref("");
    const fieldType = ref("password");

    // Función para alternar la visibilidad de la contraseña
    const togglePassword = () => {
      fieldType.value = fieldType.value === "password" ? "text" : "password";
    };

    // Función para el envío del formulario
    const submitForm = () => {
      emit("submitForm", {
        email: email.value, 
        password: password.value });
    };

    return {
      email,
      password,
      fieldType,
      togglePassword,
      submitForm,
    };
  },
});
</script>

<style scoped>
.login__form {
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 350px;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.1);
  background: #fff;
}

.login__label {
  margin-top: 1rem;
  font-weight: bold;
}

.login__input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  margin-top: 5px;
  transition: border-color 0.3s;
}

.login__input:hover {
  border-color: #28a745;
}

.login__password-container {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

.login__toggle-password {
  position: absolute;
  right: 10px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 18px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  width: auto;
}

.login__submit {
  margin-top: 1rem;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #28a745;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login__submit:hover {
  background-color: #218838;
}
</style>
