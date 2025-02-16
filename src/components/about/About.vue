<template>
  <div class="user_container-principal">
      <img src="../../assets/img/pexels-sdvmovies-29206491.jpg" alt="man working with solar panel" class="image">
      <div class="aboutUs">
        <p class="aboutUs_paragraph">En RAYITOS DE SOL, nos especializamos en ofrecer soluciones de energía solar en Medellín, brindando paneles solares de alta calidad accesibles para todos, con subsidios personalizados que se ajustan a la situación socioeconómica de cada cliente. Además, apoyamos a contratistas conectándolos con personas y empresas interesadas en instalar sistemas solares, generando una red de oportunidades para su crecimiento. Nuestro compromiso es hacer que la energía solar sea una opción viable, sostenible y económica, ayudando tanto a hogares como a profesionales a contribuir al cuidado del medio ambiente mientras optimizan su consumo energético.</p>
      </div>
      <div class="iconsContainer">
        <div class="iconsContainer_icons">
          <img src="../../assets/img/solar-cell.png" alt="solar cell icon" class="icons_img">
          <p class="icons_paragraph">En RAYITOS DE SOL, nos dedicamos a ofrecer una amplia variedad de productos y soluciones para que puedas contar con tu propio sistema de energía solar. Desde paneles solares, baterías de almacenamiento, inversores y cables, hasta los componentes más especializados, todo lo necesario para que puedas disfrutar de los beneficios de la energía solar en tu hogar o negocio. Además, contamos con plantas generadoras de electricidad que utilizan la energía solar para proporcionarte una fuente renovable, eficiente y económica de energía, tanto para pequeñas como grandes instalaciones.
</p>
        </div>
        <div class="iconsContainer_icons">

          <p class="icons_paragraph">En RAYITOS DE SOL, ofrecemos asesoría especializada y la venta de proyectos de generación de energía solar diseñados para hogares, empresas, urbanizaciones y diversas entidades. Nos encargamos de guiar a nuestros clientes en cada paso del proceso, desde la planificación y el diseño personalizado de sistemas solares hasta la implementación de soluciones de energía limpia y renovable. Nuestro equipo de expertos está altamente capacitado para recomendar las mejores opciones de acuerdo a las necesidades energéticas específicas de cada cliente, garantizando eficiencia y ahorro a largo plazo.</p>
          <img src="../../assets/img/solar-panel.png" alt="solar panel icon" class="icons_img">
        </div>
      </div>
  </div>
</template>

<style scoped>
.user_container-principal {
  height: 100vh;
  width: 100%;
  background-color: #EFE3C2;
}

.image {
  display: block;
  max-width: 40rem;
  margin: 0 auto;
  width: 100%;
  object-fit: fill;
}

.aboutUs {
  max-width: 70rem;
  margin: 0 auto;
  margin-top: 2rem;
}

.aboutUs_paragraph {
  line-height: 1.5rem;
  padding: 0 1.5rem;
}

.iconsContainer {
  display: flex;
  flex-flow: row nowrap;
  max-width: 70rem;
  justify-content: center;
  margin: 0 auto;
  margin-top: 0.5rem;
}

.iconsContainer_icons {
  display: flex;
  padding: 1rem;
  background-color: var(--color-light-green);
  border-radius: 2rem;
  margin: 0.7rem 0.5rem;
}

.icons_img {
  max-width: 5rem;
  max-height: 5rem;
  width: 100%;
  align-self: center;
}

.icons_paragraph {
  margin-left: 1.5rem;
}

.icons-paragraph:last-child {
  line-height: 5rem;
}

</style>
