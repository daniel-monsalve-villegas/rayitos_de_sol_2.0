<template>
  <nav class="navbar">
    <!-- Logo -->
    <div class="navbar__logo" @click="goHome">
      <img class="navbarlogo__img" src="../../assets/img/logo.png" alt="Logo" />
    </div>

    <!-- Checkbox para el menú hamburguesa -->
    <input type="checkbox" id="navbar-toggle-menu" class="navbar__checkbox" ref="menuCheckbox" />
    <label for="navbar-toggle-menu" class="navbar__label">
      <img src="../../assets/img/hamburger.svg" alt="Menú" class="navbar__hamburger-svg" />
    </label>

    <!-- Menú de navegación -->
    <ul class="navbar__menu" @click="closeMenu">
      <li class="navbar__item">
        <router-link class="navbar__link" to="/about">Rayitos de sol</router-link>
      </li>
      <li class="navbar__item">
        <router-link class="navbar__link" to="/contratista">Contratistas</router-link>
      </li>
      <li class="navbar__item">
        <router-link class="navbar__link" to="/calculator">Calculadora</router-link>
      </li>
      <li class="navbar__item">
        <router-link class="navbar__link" to="/contact">Contáctanos</router-link>
      </li>
    </ul>

    <!-- Botón de Login / Menú de usuario -->
    <div class="navbar__auth-buttons">
      <button v-if="!isAuthenticated" @click="login" class="navbar__link--login">Login</button>
      <div v-else class="navbar__user">
        <div class="navbar__avatar" @click="toggleDropdown">
          {{ userName.charAt(0).toUpperCase() }}
        </div>
        <div v-if="dropdownVisible" class="navbar__dropdown">
          <button @click="goToDashboard">Dashboard</button>
          <button @click="logoutUser">Logout</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAuth0 } from '@auth0/auth0-vue'
import { useRouter } from 'vue-router'

const { logout, isAuthenticated, user, loginWithRedirect } = useAuth0()
const router = useRouter()

const dropdownVisible = ref(false)
const menuCheckbox = ref(null)

// Función para cerrar el menú hamburguesa
const closeMenu = () => {
  if (menuCheckbox.value) {
    menuCheckbox.value.checked = false
  }
}

// Función para cerrar el dropdown
const closeDropdown = () => {
  dropdownVisible.value = false
}

// Función para redirigir al dashboard y cerrar dropdown
const goToDashboard = () => {
  closeDropdown() // Cierra el dropdown

  const userType = localStorage.getItem('userType')
  if (userType === 'contractor') {
    router.push('/contractor-dashboard')
  } else if (userType === 'client') {
    router.push('/client-dashboard')
  }
}

// Obtener el nombre del usuario desde Auth0
const userName = computed(() => (user.value ? user.value.name : 'Usuario'))

// Función para mostrar/ocultar el menú desplegable
const toggleDropdown = () => {
  dropdownVisible.value = !dropdownVisible.value
}

// Función para ir al Home
const goHome = () => {
  location.href = '/'
}

// Función para iniciar sesión
const login = () => {
  loginWithRedirect()
}

// Función para cerrar sesión
const logoutUser = () => {
  logout({
    logoutParams: {
      returnTo: window.location.origin,
    },
  })
}
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

.navbar__user {
  display: flex;
  align-items: center;
  position: relative;
}

.navbar__avatar {
  width: 40px;
  height: 40px;
  background-color: var(--color-cream); /* Color de fondo (ajústalo según tu diseño) */
  color: var(--color-dark-green);
  font-weight: bold;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%; /* Hace que el div sea un círculo */
  cursor: pointer;
  user-select: none;
}

.navbar__dropdown {
  position: absolute;
  top: 50px;
  right: 0;
  background: var(--color-cream);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  width: 120px;
}

.navbar__dropdown button {
  background: none;
  border: none;
  padding: 10px;
  text-align: left;
  width: 100%;
  cursor: pointer;
}

.navbar__dropdown button:hover {
  background: var(--color-dark-green);
  color: var(--color-cream);
}

.navbar__logo img {
  height: 3.5rem;
  margin-left: 2em;
  width: 5em;
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
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.navbar__link::after {
  content: '';
  height: 4px;
  width: 0;
  background-color: var(--color-cream);
  display: block;
  transition: all 300ms;
}

.navbar__link:hover::after {
  width: 100%;
}

.navbar__link--login {
  background-color: var(--color-light-green);
  color: var(--color-dark-green);
  font-weight: bold;
  padding: 10px 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;
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
    position: relative;
    display: block;
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
