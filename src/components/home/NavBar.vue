<template>
  
    <nav class="navbar">
  
      <!-- Logo de Rayitos de Sol -->
      <div class="navbar__logo">
        <img src="../../assets/img/images.jpeg" alt="Logo">
      </div>
  
      <!-- Checkbox para el menú hamburguesa -->
      <input type="checkbox" id="navbar-toggle-menu" class="navbar__checkbox">
  
      <!-- Ícono de menú hamburguesa -->
      <label for="navbar-toggle-menu" class="navbar__label">
        <img src="../../assets/img/hamburger.svg" alt="Menú" class="navbar__hamburger-svg">
      </label>
  
      <!-- Menú de navegación -->
      <ul class="navbar__menu">
        <li class="navbar__item">
          <a class="navbar__link" href="#">Rayitos de sol</a>
        </li>
        <li class="navbar__item">
          <a class="navbar__link" href="#">Materiales</a>
        </li>
        <li class="navbar__item">
          <a class="navbar__link" href="#">Contratistas</a>
        </li>
        <li class="navbar__item">
          <a class="navbar__link" href="#">Contáctanos</a>
        </li>
      </ul>
  
      <!-- Botón de Login -->
      <a class="navbar__link--login" href="#">Login</a>
    
    </nav>
  
  </template>
  
  <style scoped>
  
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-dark-green);
    padding: 10px 20px;
    height: 7em;
    max-width: 100%;
    box-sizing: border-box;
    border-bottom: 3px solid var(--color-light-green);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .navbar__logo img {
    height: 5rem;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .navbar__menu {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0 ;
    margin: 0;
    gap: 1rem;
    flex-grow: 1;
  }
  
  .navbar__item {
    white-space: nowrap;
  }
  
  .navbar__link {
    text-decoration: none;
    color: var(--color-cream);
    padding: 8px 0;
    border-radius: 25px;
    font-size: 1em;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  .navbar__link:hover {
    background-color: var(--color-light-green);
    color: var(--color-dark-green);
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
  
  /* Responsive para móviles */
  @media (max-width: 768px) {
    .navbar {
      height: 5.2em;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    .navbar__link{
      display: block;
      width: 100%;
      font-size: 1em;
    }
    .navbar__link--login {
      position: absolute;
      display: block;
      left: 50%;
      transform: translateX(-50%);
    }
  
    .navbar__label {
      display: block;
    }
  
    .navbar__menu {
      position: absolute;
      background: var(--color-dark-green);
      width: 100%;
      top: 5.21em;
      left: 0;
      display: none;
      flex-direction: column;
      padding: 1em 0;
      gap: 1em;
      z-index: 1000;
      text-align: center;
    }
  
    .navbar__checkbox:checked~.navbar__menu {
      display: flex;
    }
  
    .navbar__item{
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
  
    .navbar__menu{
      gap: 2em;
    }
  }
  
  </style>