<template>
  <nav class="navbar">
    <!-- Logo -->
    <div class="navbar__logo">
      <img src="../../assets/img/logo.png" alt="Logo">
    </div>

    <!-- Checkbox para el menú hamburguesa -->
    <input type="checkbox" id="navbar-toggle-menu" class="navbar__checkbox">
    <label for="navbar-toggle-menu" class="navbar__label">
      <img src="../../assets/img/hamburger.svg" alt="Menú" class="navbar__hamburger-svg">
    </label>

    <!-- Menú de navegación -->
    <ul class="navbar__menu">
      <li class="navbar__item">
        <router-link class="navbar__link" to="/about">Rayitos de sol</router-link>
      </li>
      <li class="navbar__item">
        <router-link class="navbar__link" to="/client-dashboard">Materiales</router-link>
      </li>
      <li class="navbar__item">
        <router-link class="navbar__link" to="/login-contractor">Contratistas</router-link>
      </li>
      <li class="navbar__item">
        <router-link class="navbar__link" to="/contact">Contáctanos</router-link>
      </li>
    </ul>

    <!-- Botón de Login / Menú de usuario -->
    <div class="navbar__auth-buttons">
      <button v-if="!isAuthenticated" @click="login" class="navbar__link--login">Login</button>
      <div v-else>
        <button class="navbar__link--login" @click="toggleDropdown">
          {{ userName }}
        </button>
        <div v-if="dropdownVisible" class="navbar__dropdown">
          <button @click="goToDashboard">Dashboard</button>
          <button @click="logoutUser">Logout</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useAuth0 } from '@auth0/auth0-vue';
import { useRouter } from 'vue-router';

const { logout, isAuthenticated, user, loginWithRedirect } = useAuth0();
const router = useRouter();
const dropdownVisible = ref(false);

// Obtener el nombre del usuario desde Auth0
const userName = computed(() => user.value ? user.value.name : 'Usuario');

// Función para mostrar/ocultar el menú desplegable
const toggleDropdown = () => {
  dropdownVisible.value = !dropdownVisible.value;
}

// Función para redirigir al dashboard según el tipo de usuario
const goToDashboard = () => {
  const userType = localStorage.getItem("userType");
  if (userType === "contractor") {
    router.push("/contractor-dashboard");
  } else if (userType === "client") {
    router.push("/client-dashboard");
  }
};

// Función para iniciar sesión
const login = () => {
  loginWithRedirect();
};

// Función para cerrar sesión
const logoutUser = () => {
  logout({
    logoutParams: {
      returnTo: window.location.origin
    }
  });
};
</script>
<style scoped>

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-dark-green);
  padding: 0 2rem;
  height: 5em;
  max-width: 100%;
  box-sizing: border-box;
  border-bottom: 3px solid var(--color-light-green);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.navbar__logo img {
  height: 3.5rem;
}


.navbar__menu {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 1rem;
  flex-grow: 1;
}

.navbar__item {
  display: flex;
  align-items: center;
  white-space: nowrap;
}

.navbar__link {
  text-decoration: none;
  color: var(--color-cream);
  padding: 8px 8px;
  border-radius: 25px;
  font-size: 1em;
  transition: background-color 0.3s ease, color 0.3s ease;
}




.navbar__link::after{
  content: "";
  height: 4px;
  width: 0;
  background-color: var(--color-cream);
  display: block;
  transition: all 300ms;
}

.navbar__link:hover::after{
  width: 100%;
}

.navbar__link--login {
  background-color: var(--color-light-green);
  color: var(--color-dark-green);
  font-weight: bold;
  padding: 10px 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  margin-left: auto;
}

.navbar__link--login:hover {
  background-color: var(--color-cream);
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);
}

.navbar__checkbox {
  display: none;
}

.navbar__label {
  display: none;
  cursor: pointer;
}

.navbar__hamburger-svg {
  width: 30px;
}

/* Agregar los estilos para el menú desplegable */
.navbar__dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: var(--color-dark-green);
  color: var(--color-cream);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
}

.navbar__dropdown button {
  background-color: transparent;
  color: inherit;
  border: none;
  padding: 10px;
  text-align: left;
  width: 100%;
  cursor: pointer;
  font-size: 1em;
}

.navbar__dropdown button:hover {
  background-color: var(--color-cream);
  color: var(--color-dark-green);
}

@media (max-width: 768px) {
  .navbar {
    height: 5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navbar__link {
    display: block;
    width: 100%;
    font-size: 1em;
  }

  /* por terminar */
  .navbar__link--login {
    position: absolute;
    display: block;
    margin: 0 auto;
    left: 50%;
    transform: translateX(-50%);
    width: 5.5rem;
    background-color: var(--color-green);
    margin-left: 0.9rem;
  }

  .navbar__label {
    display: block;
  }

  .navbar__menu {
    position: absolute;
    background: var(--color-dark-green);
    width: 100%;
    top: 5em;
    left: 0;
    display: none;
    flex-direction: column;
    padding: 1em 0;
    gap: 1em;
    z-index: 1000;
    text-align: center;
  }

  .navbar__checkbox:checked ~ .navbar__menu {
    display: flex;
  }

  .navbar__item {
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 825px) {
  .navbar__link--login {
    font-size: 0.9em;
    padding: 8px 16px;
  }
}

@media (min-width: 768px) and (max-width: 900px) {
  .navbar__link {
    font-size: 0.8em;
  }
}

@media (min-width: 1440px) {
  .navbar__link {
    font-size: 1.2em;
  }

  .navbar__menu {
    gap: 2em;
  }
}
</style>