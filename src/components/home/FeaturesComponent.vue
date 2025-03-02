<template>
    <section class="features">
      <header class="features__content">
        <h2 class="features__title">Energía Solar para un Futuro Sostenible</h2>
        <p class="features__text">Ahorra el dinero y cuida el planeta con nuestros paneles solares de alta eficiencia</p>
        <router-link to="/calculator" class="features__call-to-action">Obtén una Cotización</router-link>
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
    display: flex;
    padding: 4rem 2rem;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--background-color-secondary);
    align-items: center;
    color: var(--color-white);
    width: 100%;
    align-items: center;
    text-align: center;
    padding: 8em;
  }

  .features__title{
    font-weight: bold;
    font-size: 2rem;

  }

  .features__call-to-action{
    background-color: var(--color-dark-green);
    color: var(--color-cream);
    border: none;
    font-size: 1rem;
    padding: 0.8rem;
    border-radius: 15px;
    margin-top: 20px;
    text-decoration: none;
    border-radius: 25px;
    font-weight: bold;
  }

  .features__call-to-action:hover{
    background-color: var(--color-cream);
    color: var(--color-dark-green);
  }

  .card-gallery{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 5em;
    gap: 2rem;
    margin: 20px;
    align-items: stretch;
    max-width: 1000px;

  }

.card{
    flex: 1;
    background-color: var(--background-color-primary);
    max-width: 400px;
    width: 100%;
    border-radius: 10px; /* Bordes redondeados */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra suave */
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transición suave */
}

.card:hover {
    transform: translateY(-5px); /* Efecto de elevación al pasar el mouse */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Sombra más pronunciada */
}

@media (max-width: 768px){
    .card-gallery{
        flex-direction: column;
        gap: 2rem;
        align-items: center;
    }
}

@media (max-width: 426px) {
  .card-gallery{
    padding: 1rem 2rem;
  }
  .features__content{
    padding: 2rem 3rem;
  }
}
  </style>
