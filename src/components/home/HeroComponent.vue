<template>
  <section class="hero">
    <div class="hero__background"></div>

    <div class="hero__content">

      <div class="hero__container-left">

        <h1 class="hero__title">Rayitos de Sol</h1>
        <p class="hero__subtitle">Eficiencia al alcance de tus manos</p>
        <div class="hero__paragraph-container">
          <p class="hero__text">Amigable contigo</p>
          <p class="hero__text">Amigable con el ambiente</p>
        </div>

      </div>

      <a href="" class="hero__calculator-link">


        <div class="hero__container-right">

          <svg class="hero__calculator-svg" fill="#123524" height="200px" width="200px" version="1.1" id="Layer_1"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="-33 -33 396.00 396.00" xml:space="preserve" stroke="#4b814f" stroke-width="0.0033"
            transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"
              stroke-width="1.32"></g>
            <g id="SVGRepo_iconCarrier">
              <g id="XMLID_86_">
                <path id="XMLID_87_"
                  d="M150,0H15C6.716,0,0,6.716,0,15v135h150V0z M100,90H90v10c0,8.284-6.717,15-15,15c-8.284,0-15-6.716-15-15 V90H50c-8.284,0-15-6.716-15-15s6.716-15,15-15h10V50c0-8.284,6.716-15,15-15c8.283,0,15,6.716,15,15v10h10c8.283,0,15,6.716,15,15 S108.283,90,100,90z">
                </path>
                <path id="XMLID_90_"
                  d="M0,315c0,8.284,6.716,15,15,15h135V180H0V315z M50,240h50c8.283,0,15,6.716,15,15c0,8.284-6.717,15-15,15 H50c-8.284,0-15-6.716-15-15C35,246.716,41.716,240,50,240z">
                </path>
                <path id="XMLID_93_"
                  d="M315,0H180v330h135c8.283,0,15-6.716,15-15V15C330,6.716,323.283,0,315,0z M280,210h-50 c-8.284,0-15-6.716-15-15s6.716-15,15-15h50c8.283,0,15,6.716,15,15S288.283,210,280,210z M280,150h-50c-8.284,0-15-6.716-15-15 s6.716-15,15-15h50c8.283,0,15,6.716,15,15S288.283,150,280,150z">
                </path>
              </g>
            </g>
          </svg>
          <h2 class="hero__title-calculator">¡Descubre tu ahorro!</h2>

          <p class="hero__text-calculator">Obtén un estimado de costos, ahorro e impacto en el medio ambiente</p>
        </div>


      </a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: var(--color-dark-green);
  font-family: roboto;
}

.hero__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../../assets/img/background-img1280x804.jpg');
  padding: 2rem 2rem;
  background-size: cover;
  background-position: center;
  z-index: -2;
}

.hero__content {
  height: 100%;
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: auto 2rem;
}

.hero__container-left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.hero__title {
  font-size: 5rem;
  margin-top: 40%;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

}

.hero__subtitle {
  font-size: 2.5rem;
}

.hero__paragraph-container {
  margin-bottom: 2rem;
  color: var(--color-cream);
  font-size: 1.2rem;
  text-shadow: 1px 1px 2px var(--color-black);
}

.hero__calculator-link {
  text-decoration: none;
  display: block;
  margin-top: 20%;
  max-height: 40%;
}

.hero__container-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
background: linear-gradient(135deg,
      rgba(62, 123, 39, 0.8) 0%,
      rgba(91, 163, 67, 0.5) 40%,
      rgba(32, 63, 15, 0.9) 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  padding: 10px;
}

.hero__title-calculator {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text-color-primary);
}

.hero__text-calculator {
  color: var(--color-cream);
  text-shadow: 1px 1px 2px var(--color-black);

}


/*Mediaquery imagen de fondo */
@media (min-width: 1440px) {
  .hero {
    border-image: url('../../assets/img/background-img5504x3456.jpg');
  }
}

/*Responsive para moviles */
@media (max-width: 768px) {
  .hero__content {
    flex-direction: column;
  }

  .hero__container-left {
    align-items: center;
    text-align: center;
  }

  .hero__title {
    margin-top: 20%;
  }


  .hero__subtitle {
    font-size: 1.5rem;
  }

  .hero__paragraph-container {
    color: var(--text-color-primary);
  }

  .hero__calculator-link {
    margin-top: 0;
    margin-bottom: 20px;
  }

  .hero__calculator-svg {
    height: 2.5rem;
  }
}

</style>
