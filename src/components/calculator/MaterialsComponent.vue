<template>
    hola
    <div class="carousel" ref="carousel" @mousedown="onDragStart" @mouseup="onDragEnd" @mouseleave="onDragEnd" @mousemove="onDragMove">
      <div class="carousel__track" :style="{ transform: `translateX(${translateX}px)`, transition: isDragging ? 'none' : 'transform 0.3s ease-out' }">
        <div class="carousel__item" v-for="(item, index) in items" :key="index">
          <img :src="item.image" :alt="item.description" class="carousel__image" />
          <p class="carousel__description">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from "vue";
  
  const items = ref([
    { image: "@/assets/img/images.jpeg", description: "Imagen 1" },
    { image: "https://via.placeholder.com/300x200?text=2", description: "Imagen 2" },
    { image: "https://via.placeholder.com/300x200?text=3", description: "Imagen 3" },
    { image: "https://via.placeholder.com/300x200?text=4", description: "Imagen 4" }
  ]);
  
  const isDragging = ref(false);
  const startX = ref(0);
  const translateX = ref(0);
  const currentIndex = ref(0);
  const itemWidth = ref(0);
  const carousel = ref<HTMLDivElement | null>(null);
  
  onMounted(() => {
    itemWidth.value = carousel.value?.offsetWidth || 0;
    updatePosition();
  });
  
  const updatePosition = () => {
    translateX.value = -currentIndex.value * itemWidth.value;
  };
  
  const onDragStart = (event: MouseEvent) => {
    isDragging.value = true;
    startX.value = event.clientX;
  };
  
  const onDragMove = (event: MouseEvent) => {
    if (!isDragging.value) return;
    const deltaX = event.clientX - startX.value;
    const newTranslateX = -currentIndex.value * itemWidth.value + deltaX;
  
    // Restringe el movimiento dentro de los límites
    if (newTranslateX <= 0 && newTranslateX >= -(items.value.length - 1) * itemWidth.value) {
      translateX.value = newTranslateX;
    }
  };
  
  const onDragEnd = (event: MouseEvent) => {
    if (!isDragging.value) return;
    isDragging.value = false;
  
    const deltaX = event.clientX - startX.value;
  
    if (deltaX > 50 && currentIndex.value > 0) {
      // Mover a la izquierda
      currentIndex.value--;
    } else if (deltaX < -50 && currentIndex.value < items.value.length - 1) {
      // Mover a la derecha
      currentIndex.value++;
    }
  
    updatePosition();
  };
  </script>
  
  <style scoped>
  .carousel {
    overflow: hidden;
    width: 100%;
    max-width: 500px;
    margin: auto;
    cursor: grab;
    position: relative;
  }
  
  .carousel__track {
    display: flex;
    will-change: transform;
  }
  
  .carousel__item {
    min-width: 100%;
    flex-shrink: 0;
    text-align: center;
    padding: 16px;
    box-sizing: border-box;
  }
  
  .carousel__image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 8px;
  }
  
  .carousel__description {
    font-size: 1rem;
    color: #333;
  }
  </style>
  