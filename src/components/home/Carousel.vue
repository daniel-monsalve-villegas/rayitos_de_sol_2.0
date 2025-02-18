<script>
import { ref, onMounted, onUnmounted, nextTick, defineComponent } from 'vue';
import img1 from '../../assets/img/panels/panel1.jpg';
import img2 from '../../assets/img/panels/panel2.jpg';
import img3 from '../../assets/img/panels/panel3.jpg';
import img4 from '../../assets/img/panels/panel4.jpg';
import img5 from '../../assets/img/panels/panel5.jpg';

export default defineComponent({
  setup() {
    const carouselRef = ref(null);
    let isDragging = false;
    let startX, startScrollLeft;

    const onDragStart = (e) => {
      if (!carouselRef.value) return;
      isDragging = true;
      startX = (e.touches ? e.touches[0].pageX : e.pageX) - carouselRef.value.offsetLeft;
      startScrollLeft = carouselRef.value.scrollLeft;
      carouselRef.value.style.cursor = 'grabbing';
    };

    const onDragMove = (e) => {
      if (!isDragging || !carouselRef.value) return;
      e.preventDefault();
      const x = (e.touches ? e.touches[0].pageX : e.pageX) - carouselRef.value.offsetLeft;
      const walk = (x - startX) * 2;
      carouselRef.value.scrollLeft = startScrollLeft - walk;
    };

    const onDragEnd = () => {
      isDragging = false;
      if (carouselRef.value) carouselRef.value.style.cursor = 'grab';
    };

    const scrollCarousel = (direction) => {
      if (!carouselRef.value) return;
      const scrollAmount = direction === 'left'
        ? -carouselRef.value.offsetWidth / 3
        : carouselRef.value.offsetWidth / 3;
      carouselRef.value.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    onMounted(async () => {
      await nextTick();
      if (!carouselRef.value) return;
      carouselRef.value.addEventListener('mousedown', onDragStart);
      carouselRef.value.addEventListener('mousemove', onDragMove);
      carouselRef.value.addEventListener('touchstart', onDragStart);
      carouselRef.value.addEventListener('touchmove', onDragMove);
      window.addEventListener('mouseup', onDragEnd);
      window.addEventListener('touchend', onDragEnd);
    });

    onUnmounted(() => {
      if (carouselRef.value) {
        carouselRef.value.removeEventListener('mousedown', onDragStart);
        carouselRef.value.removeEventListener('mousemove', onDragMove);
        carouselRef.value.removeEventListener('touchstart', onDragStart);
        carouselRef.value.removeEventListener('touchmove', onDragMove);
      }
      window.removeEventListener('mouseup', onDragEnd);
      window.removeEventListener('touchend', onDragEnd);
    });

    return {
      carouselRef,
      scrollCarousel,
      images: [img1, img2, img3, img4, img5, img1, img2, img3, img4, img5, img1, img2],
    };
  },
});
</script>

<template>
  <section class="section-carrusel">
    <div class="wrapper">
      <ul class="carousel" ref="carouselRef">
        <li v-for="(image, index) in images" :key="index" class="card">
          <div class="card-img">
            <img :src="image" draggable="false" />
          </div>
          <h2>Paneles</h2>
          <span>Nuestros paneles</span>
          <div class="div-button-card">
            <button class="button-card">Button</button>
          </div>
        </li>
      </ul>
      <i id="left" class="fa-solid fa-angle-left" @click="scrollCarousel('left')"></i>
      <i id="right" class="fa-solid fa-angle-right" @click="scrollCarousel('right')"></i>
    </div>
  </section>
</template>

<style scoped>
.section-carrusel {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  background-color: var(--color-cream);
}
.wrapper {
  position: relative;
  width: 89vw;
}
.carousel {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  user-select: none;
  cursor: grab;
}
.carousel::-webkit-scrollbar {
  display: none;
}
.card {
  flex: 0 0 auto;
  width: 300px;
  margin: 10px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
}
.card-img img {
  width: 100%;
  border-radius: 10px;
  max-height: 200px;
  min-height: 200px;

}
.div-button-card {
  margin-top: 10px;
}
.button-card {
  background: var(--color-green);
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}
.button-card:hover {
  background: var(--color-light-green);
}
#left, #right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  cursor: pointer;
  color: #333;
  z-index: 10;
}
#left {
  left: -40px;
}
#right {
  right: -40px;
}
</style>