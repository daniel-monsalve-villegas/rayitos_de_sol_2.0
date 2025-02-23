<template>
  <div class="user_container-principal">
      <img src="../../assets/img/pexels-sdvmovies-29206491.jpg" alt="man working with solar panel" class="image">
      <div class="aboutUs">
        <p class="aboutUs_paragraph">En RAYITOS DE SOL, nos especializamos en ofrecer soluciones de energía solar en Medellín, brindando paneles solares de alta calidad accesibles para todos, con subsidios personalizados que se ajustan a la situación socioeconómica de cada cliente. Además, apoyamos a contratistas conectándolos con personas y empresas interesadas en instalar sistemas solares, generando una red de oportunidades para su crecimiento. Nuestro compromiso es hacer que la energía solar sea una opción viable, sostenible y económica, ayudando tanto a hogares como a profesionales a contribuir al cuidado del medio ambiente mientras optimizan su consumo energético.</p>
      <div class="iconsContainer">
        <div class="iconsContainer_icons">
          <img src="../../assets/img/solar-cell.png" alt="solar cell icon" class="icons_img">
          <p class="icons_paragraph">en RAYITOS DE SOL puedes encontrar los elementos necesarios para tener tu propio sistema de energía solar, de igual manera  ofrecemos plantas generadoras de electricidad con energía solar y pequeños dispositivos  que usan la energía del sol para convertirla en electricidad aprovechable en el día a día.</p>
        </div>
        <div class="iconsContainer_icons">
          <img src="../../assets/img/solar-panel.png" alt="solar panel icon" class="icons_img">
          <p class="icons_paragraph">Asesoría especializada y venta de proyectos de generación energética por medio del sol para hogares, empresas, urbanizaciones y entidades, ofreciendo soluciones completas y acompañamiento con el papeleo legal requerido.</p>
        </div>
      </div>
  <div class="isoContainer">
    <img src="../../assets/img/iso.png" alt="iso icon">
    <img src="../../assets/img/iso1.png" alt="iso icon"><img src="../../assets/img/premium.png"
    alt="iso icon">
  </div>
  </div>
      </div>
</template>

<style scoped>
.user_container-principal {
  margin-top: 7em;
  height: 100vh;
  width: 100%;
  background-color: #EFE3C2;
  display: flex;
}

.image {
  display: block;
  max-width: 40rem;
  max-height: 35rem;
  margin: 1rem 0 0 5rem;
  width: 100%;
  object-fit: fill;
}

.aboutUs {
  margin: 0 auto;
  margin-top: 3rem;
}

.aboutUs_paragraph {
  line-height: 1.5rem;
  padding: 0 1.5rem;
}

.iconsContainer {
  display: flex;
  flex-flow: column wrap;
  max-width: 50rem;
  justify-content: center;
  margin: 0 auto;
}

.iconsContainer_icons {
  display: flex;
  padding: 2rem;
  background-color: var(--color-light-green);
  border-radius: 2rem;
  margin: 2rem;
}

.icons_img {
  max-width: 5rem;
  max-height: 5rem;
  width: 100%;
}

.icons_paragraph {
  margin-left: 2rem;
}

.isoContainer {
  max-width: 30rem;
  max-height: 8rem;
  display: flex;
  margin: 1rem auto;
  flex-flow: row nowrap;
}

.isoContainer img {
  max-width: 8rem;
  width: 100%;
  margin: 0 1rem;
}
</style>
