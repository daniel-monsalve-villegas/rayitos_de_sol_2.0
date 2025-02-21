<template>
    <div class="step5">
      <div class="step5__card step5__welcome">
        <h1>¡Hola!</h1>
        <p>Con Rayitos de Sol tienes el control de tu energía</p>
        <small>
          *Recuerda que estos valores son estimaciones a partir de los datos seleccionados.
        </small>
      </div>
  
      <div class="step5__card step5__savings">
        <div class="step5__savings-icon">💰</div>
        <h2>$732.888* <span>$COP</span></h2>
        <p>Ahorro estimado al mes en factura</p>
      </div>
  
      <div class="step5__card step5__contact">
        <p><strong>William Guzmán</strong></p>
        <p>Team Rayitos de Sol</p>
        <div class="step5__contact-info">
          <span>📧 wguzman@rayitos.sol</span>
          <span>📞 16659652</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Step5",
  };
  </script>
  
  <style scoped>
  .step5 {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    padding: 2rem;
    background-color: #f9f9f9;
  }
  
  .step5__card {
    background-color: #ffffff;
    border-radius: 15px;
    padding: 1.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 600px;
    width: 100%;
  }
  
  .step5__welcome h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  
  .step5__welcome p {
    font-size: 1.25rem;
  }
  
  .step5__savings h2 {
    font-size: 2rem;
    color: #69c17d;
    margin-bottom: 0.5rem;
  }
  
  .step5__savings-icon {
    font-size: 3rem;
  }
  
  .step5__contact-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  
  .step5__contact-info span {
    background-color: #dfead9;
    border-radius: 25px;
    padding: 0.5rem 1rem;
    font-weight: bold;
  }

  @media (max-width: 375px){
    .step5__contact-info{
        font-size: 0.5rem;
    }
  }
  </style>
  