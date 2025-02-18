<template>
    <section class="features">
      <header class="features__content">
        <h2 class="features__title">Energía Solar para un Futuro Sostenible</h2>
        <p class="features__text">Ahorra el dinero y cuida el planeta con nuestros paneles solares de alta eficiencia</p>
        <button class="features__call-to-action">Obtén una Cotización</button>
      </header>
  
      <div class="card-gallery">
        <CardComponent class="card"
          v-for="card in cards"
          :key="card.id"
          :title="card.title"
          :description="card.description"
          :icon="card.icon"
        />
      </div>
    </section>
  </template>
  
  <script>
  import { ref } from "vue";
  import CardComponent from "./CardComponent.vue";
  
  export default {
    name: "FeaturesComponent",
    components: {
      CardComponent,
    },
    setup() {
      const cards = ref([
        { id: 1, title: "Energía Limpia", description: "Reduce tu huella de carbono con energía 100% renovable.", icon: 'sun.svg' },
        { id: 2, title: "Ahorro Garantizado", description: "Disminuye tu factura eléctrica desde el primer mes.", icon: "leaf.svg" },
        { id: 3, title: "Fácil Instalación", description: "Instalación rápida y sin complicaciones.", icon: "tick.svg" },
      ]);
        console.log(cards.value)
      return {
        cards,
      };
    },
  };
  </script>
  
  <style scoped>
    
  .features{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .features__content{
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--background-color-secondary);
    align-items: center;
    color: var(--color-white);
    width: 100%;
    align-items: center;
    text-align: center;
  }

  .features__title{
    font-weight: bold;
    font-size: 2rem;
  }

  .features__call-to-action{
    background-color: var(--color-cream);
    border: none;
    font-size: 1rem;
    padding: 0.8rem;
    border-radius: 15px;
    margin-top: 20px;
  }

  .features__call-to-action:hover{
    background-color: var(--color-dark-green);
    color: var(--color-cream);
  }
  .card-gallery{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 2rem;
    margin: 20px;
    align-items: stretch;
    max-width: 1000px;
    
  }

 .card{
    flex: 1;
    background-color: var(--background-color-primary);
    max-width: 400px;
 }

 @media (max-width: 768px){
    .card-gallery{
        flex-direction: column;
        gap: 2rem;
        align-items: center;
    }
 }

  </style>