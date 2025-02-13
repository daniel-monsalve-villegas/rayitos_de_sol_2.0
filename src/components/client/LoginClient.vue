<template>
<div class="LoginContractor__container">
  <form class="login__form" @submit.prevent="submitForm">
    <label for="clientEmail" class="login__label">Correo</label>
    <input class="login__input" type="email" id="clientEmail" v-model="email" placeholder="alguien@correo.com"
      required />

    <label for="clientPassword" class="login__label">Contraseña:</label>
    <div class="login__password-container">
      <input class="login__input" :type="fieldType" id="clientPassword" v-model="password" required />
      <button class="login__toggle-password" @click="togglePassword" type="button"
        :aria-label="fieldType === 'password' ? 'Mostrar contraseña' : 'Ocultar contraseña'">
        👀
      </button>
    </div>

    <input class="login__submit" type="submit" value="Login" />

    <div class="container__registerAndRecovery">  
      <p class="paragraph__recoveryPass__left">¿Ha olvidado su contraseña? </p><p class="paragraph__recoveryPass__right"> Registrarse</p> 
    </div>
  </form>
</div>  
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
/* Contenedor principal */
.LoginContractor__container{
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0;
  border: 0;
  background-color: var(--color-cream);
  height: 80vh;
  width: auto;
}

.login__form {
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 55vh;
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
  background-color: var(--color-green);
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login__submit:hover {
  background-color: var(--color-light-green);
}

/* Recuperación y registro */
.container__registerAndRecovery{
  display: flex;
  justify-content: center;
}

.paragraph__recoveryPass__left{
  display: flex;
  justify-content: space-between;
  font-size: 0.75em;
  color: var(--color-green);
  padding: 1em;
  width: 100%;
  font-weight: bold;
}

.paragraph__recoveryPass__left:hover{
  color: var(--color-light-green);
  font-weight: bold;
}

.paragraph__recoveryPass__right{
  display: flex;
  justify-content: center;
  font-size: 0.75em;
  color: var(--color-green);
  padding: 1em;
  width: 50%;
  font-weight: bold;
}

.paragraph__recoveryPass__right:hover{
  color: var(--color-light-green);
  font-weight: bold;
}
</style>
