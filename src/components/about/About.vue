<template>
  <div class="user_container-principal container_grip_about">
      <div class="item1_container_grip">
        <img src="../../assets/img/pexels-sdvmovies-29206491.jpg" alt="man working with solar panel" class="image_about_principal">
      </div>
      <div class="aboutUs_container_about item2_container_grip">
        <p class="aboutUs_paragraph">En RAYITOS DE SOL, nos especializamos en ofrecer soluciones de energía solar en Medellín, brindando paneles solares de alta calidad accesibles para todos, con subsidios personalizados que se ajustan a la situación socioeconómica de cada cliente. Además, apoyamos a contratistas conectándolos con personas y empresas interesadas en instalar sistemas solares, generando una red de oportunidades para su crecimiento. Nuestro compromiso es hacer que la energía solar sea una opción viable, sostenible y económica, ayudando tanto a hogares como a profesionales a contribuir al cuidado del medio ambiente mientras optimizan su consumo energético.</p>
      </div>
        <!-- <div class="iconsContainer"> -->
        <div class="iconsContainer_icons item3_container_grip">
          <img src="../../assets/img/solar-cell.png" alt="solar cell icon" class="icons_img">
          <p class="icons_paragraph">En RAYITOS DE SOL puedes encontrar los elementos necesarios para tener tu propio sistema de energía solar, de igual manera  ofrecemos plantas generadoras de electricidad con energía solar y pequeños dispositivos  que usan la energía del sol para convertirla en electricidad aprovechable en el día a día.</p>
        </div>
        <div class="iconsContainer_icons item4_container_grip">
          <img src="../../assets/img/solar-panel.png" alt="solar panel icon" class="icons_img">
          <p class="icons_paragraph">Asesoría especializada y venta de proyectos de generación energética por medio del sol para hogares, empresas, urbanizaciones y entidades, ofreciendo soluciones completas y acompañamiento con el papeleo legal requerido.</p>
        </div>
      <!-- </div> -->
      <div class="isoContainer item5_container_grip">
        <img src="../../assets/img/iso.png" alt="iso icon">
        <img src="../../assets/img/iso1.png" alt="iso icon">
        <img src="../../assets/img/premium.png" alt="iso icon">
      </div>
    </div>
  
</template>

<style scoped>
.user_container-principal {
  margin-top: 5em;
  padding: 3rem 0;
  height: auto;
  width: 100%;
  background-color: #EFE3C2;
  display: flex;
}

.container_grip_about {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Dos columnas */
  grid-template-rows: repeat(3, auto);
  gap: 10px; /* Espaciado entre elementos */
  /* width: 80%;
  margin: auto; */
}

.item1_container_grip,
.item3_container_grip {
  display: flex;
  align-items: center;
  justify-content: center;
}

.image_about_principal {
  max-width: 40rem;
.image {
  max-width: 41rem;
  max-height: 35rem;
  width: 90%;
  height: auto;
}

.item2_container_grip {
  display: flex;
  align-items: center;
  justify-content: center;
}

.aboutUs_container_about {
  margin: 0 auto;
  /* margin-top: 3rem; */
}

.aboutUs_paragraph {
  font-size: 1.25rem; /* Aumenta el tamaño de la letra */
  line-height: 1.75rem; /* Ajusta el interlineado para mejor legibilidad */
  padding: 0 2rem;
}

/* .iconsContainer {
  display: flex;
  flex-flow: column wrap;
  max-width: 50rem;
  justify-content: center;
  margin: 0 auto;
} */

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
  font-size: 1.25rem; /* Aumenta el tamaño de la letra */
}

.item5_container_grip {
    /* grid-row: 2;
  grid-column: 1; */
  grid-column: 1 / -1; /* Ocupa todas las columnas */
  grid-row: 3; /* Se ubica en la tercera fila */
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
  height: auto;
  margin: 0 1rem;
}

@media (max-width: 1023px) {
  .container_grip_about {
    grid-template-columns: 1fr; /* Cambia a una sola columna */
    grid-template-rows: auto; /* Ajusta automáticamente las filas */
  }

  .item5_container_grip {
    grid-row: 5;
    grid-column: 1;
  }

}

@media (min-width: 1024px) and (max-width: 1250px) {
  .aboutUs_paragraph {
    font-size: 1.2rem;
  }

  .icons_paragraph {
    font-size: 1.1rem;
    /* line-height: 2rem; */
  }
}

@media (max-width: 545px) {
  .item3_container_grip,
  .item4_container_grip,
  .item5_container_grip {
    display: flex;
    flex-direction: column;
  }

  .iconsContainer_icons img {
    display: block; /* Necesario para que margin auto funcione */
    margin: 0 auto; /* Centra horizontalmente */
  }

  .iconsContainer_icons p {
    margin: 0;
  }

  .item5_container_grip {
    margin-bottom: 19rem;
  }

  .item5_container_grip img {
    margin: 0.5rem 0;
  }

  .item3_container_grip img,
  .item4_container_grip img {
    margin-bottom: 0.8rem;
  }
}  
</style>
