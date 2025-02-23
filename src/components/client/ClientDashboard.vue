<template>
  <div class="client_container-principal">
    <div class="stats-card">
        <h1 class="cliente_title_principal">PERFIL DE USUARIO DESPUÉS DEL INGRESO</h1>

<!-- Contenedor Superior -->
    <div class="top-container">

<!-- Caja de Datos Usuario -->
      <div class="box">
        <h2>Datos usuario</h2>
        <div class="content-area">

        </div>
      </div>

<!-- Caja de Cálculo de Instalación -->
      <div class="box ">
        <h2>Calculo de la instalación</h2>
        <div class=" box_ampliable">
          <div class="contenedor_buttons">
            <button class="cliente_buton"><span>Paquete 1</span></button>
            <button class="cliente_buton"><span>Paquete 2</span></button>
            <button class="cliente_buton"><span>Paquete 3</span></button>
          </div>
          <div class="client_container_actualizar">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, autem! Modi, soluta praesentium. Corrupti nulla, consectetur necessitatibus temporibus quisquam maiores aperiam nihil commodi nostrum? Est incidunt rerum tempore fuga laborum!
          </div>
        </div>
      </div>

<!-- Caja de Condición -->
      <div class="box">
        <h2>La condición de la persona</h2>
        <div class="content-area">
          <h3>Lista de tareas</h3>
  <ul class="checklist">
    <li>
      <input type="checkbox" id="task1">
      <label for="task1">Mocho</label>
    </li>
    <li>
      <input type="checkbox" id="task2">
      <label for="task2">Ciego</label>
    </li>
    <li>
      <input type="checkbox" id="task3">
      <label for="task3">Gay</label>
    </li>
    <li>
      <input type="checkbox" id="task3">
      <label for="task3">Negro</label>
    </li>
    <li>
      <input type="checkbox" id="task3">
      <label for="task3">Gordo</label>
    </li>
  </ul>
        </div>
      </div>
    </div>

<!-- Contenedor Inferior -->
    <div class="bottom-container">
<!-- Lista de Paquetes -->
      <div class="packages">
        <p>Paquete 1 30 a 50</p>
        <p>Paquete 2 55 a 60</p>
        <p>Paquete 65 a 85</p>
      </div>

<!-- Caja de Papelería -->
      <div class="paperwork-box">
        <h2>Paquete menos subsidio</h2>
        <div class="paperwork-content">papelería</div>
      </div>

<!-- Caja de Subsidio -->
      <div class="subsidy">
        <p>Subusidio por vulnerabilidad</p>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
:root {
  /* Paleta de colores */
  --color-dark-green: #123524;
  --color-green: #3e7b27;
  --color-light-green: #85a947;
  --color-cream: #efe3c2;

  /* Colores básicos */
  --color-black: #000000;
  --color-white: #ffffff;

  /* Colores de texto */
  --text-color-primary: var(--color-dark-green);
  --text-color-secondary: var(--color-green);

  /* Colores de fondo */
  --background-color-primary: var(--color-cream);
  --background-color-secondary: var(--color-light-green);
}

.client_container-principal {
  margin-top: 7em;
  height: auto;
  min-height: 100vh;
  width: 100%;
  background-color: var(--color-cream);
  padding: 2rem 2rem;
  /* background-image: url('../../assets/img/pexels_evo1.jpg'); 
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat;  */
  display: flex;
  justify-content: center; /* Centra horizontalmente */
}

.stats-card {
  max-width: 85rem;
  background-color: var(--color-light-green);
  backdrop-filter: blur(2px);
  border-radius: 1.5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}


.cliente_title_principal {
  text-align: center;
  font-size: 24px; 
  font-weight: bold; /* Hace el texto más grueso */
  color: #ffffff; 
  border: 1.5px solid #ffffff; 
  padding: 10px 20px; /* Espaciado interno */
  display: inline-block; 
  border-radius: 8px;
  background-color: var(--color-dark-green);
}

/* Contenedor Superior */
.top-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 30px;
}

.box {
    border: 2px solid rgb(255, 255, 255);
    padding: 15px;
    border-radius: 2px;
    color: #ffffff;
    text-align: cPaquete;
}

.box_ampliable {
  height: 100%;
}


.box h2 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #ffffff;
}

.content-area {
    height: 250px;
    /* Área para el contenido futuro */
}

.contenedor_buttons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 10px; /* Espacio entre los botones y el contenido */
}

.cliente_buton {
  padding: 7px 11px;
  border: none;
  background-color: #339b07;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.cliente_buton:hover {
  background-color: #2a8606;
}

.client_container_actualizar {
    border: 2px solid rgb(255, 255, 255);
    padding: 15px;
    border-radius: 2px;
    color: #ffffff;
    text-align: cPaquete;
    height: auto;

}

.checklist {
  list-style: none; /* Quita los puntos de la lista */
  padding: 0;
  color: #ffffff;
}

.checklist li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.checklist input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #85a947; /* Color del checkbox */
}

.checklist label {
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
}

/* Contenedor Inferior */
.bottom-container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 20px;
}

.packages {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #ffffff;
}

.paperwork-box {
    border: 2px solid rgb(255, 255, 255);
    padding: 15px;
    border-radius: 2px;
    color: #ffffff;
}

.paperwork-content {
    text-align: center;
    padding: 20px 0;
}

.subsidy {
    font-weight: 600;
    color: #ffffff;
}

/* Responsive */
@media (max-width: 768px) {
    .top-container {
        grid-template-columns: 1fr;
    }

    .bottom-container {
        grid-template-columns: 1fr;
    }

    .box, .paperwork-box {
        margin-bottom: 20px;
    }

    .packages {
        text-align: center;
    }

    .cliente_buton {
      padding: 4px 6px;
    }

    .contenedor_buttons {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }

  .contenedor_buttons button:nth-child(3) {
    grid-column: span 2; /* Hace que el tercer botón ocupe toda la fila */
    justify-self: center; /* Lo centra horizontalmente */
  }

  .stats-card {
    padding: 1rem 1rem 1rem 1rem;
  }

  .client_container-principal {
  padding: 2rem 1rem;
  }
}
</style>
