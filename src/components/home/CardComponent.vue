<template>
    <div class="card">
      <img :src="iconPath" alt="Icono" class="card__icon" />
      <h2 class="card__title">{{ title }}</h2>
      <p class="card__description">{{ description }}</p>
    </div>
  </template>
  
  <script setup>
  import { computed } from "vue";
  
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  });
  
  // Construye la ruta de la imagen dinámicamente
  const iconPath = computed(() => {
    return new URL(`../../assets/img/${props.icon}`, import.meta.url).href;
  });
  console.log(iconPath.value)
  </script>
  
  <style scoped>
  .card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    text-align: center;
    transition: transform 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-5px);
  }
  
  .card__icon {
    width: 40px;
    height: 40px;
    margin-bottom: 1rem;
  }
  
  .card__title {
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 0.5rem;
  }
  
  .card__description {
    font-size: 1rem;
    color: #666;
  }
  </style>