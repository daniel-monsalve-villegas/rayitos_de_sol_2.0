<template>
  <div class="contractorDasboard__container">
    <div class="cdContainer__card">
      <div class="containerCard__menuHamburger">
        <div class="menuHamburger__svg">
          <img src="../../assets/img/hamburger.svg" alt="Menú">
        </div>
        <div class="menuHamburger__exict">
          <p class="exict__size">💨</p>
        </div>
      </div>

      <!-- Avatar -->
      <div class="menuHamburger__containerAvatar">
        <div class="containerAvatar__position">
          <img class="avatar" src="../../assets/img/images.jpeg" alt="Avatar">
        </div>
      </div>

      <!-- Información del contratista -->
      <div class="menuHamburger__contactorInfo" v-if="contractor">
        <div class="contactorInfo__positionLeft">
          <ul class="contactorInfo__Ul">
            <li>ID Contratista</li>
            <li>Nombre de la empresa</li>
            <li>Código contratista</li>
            <li>Nombre contratista</li>
            <li>Datos de contacto</li>
            <li>Experiencia</li>
            <li>Ubicación</li>
            <li>Servicios</li>
          </ul>
        </div>

        <div class="contactorInfo__positionRight">
          <ul class="contactorInfo__Ul">
            <li>{{ contractor.idContractor }}</li>
            <li>{{ contractor.nitEnterprise }}</li>
            <li>{{ contractor.idContractor }}</li>
            <li>{{ contractor.nameContractor }}</li>
            <li class="contractorLiLargo">{{ contractor.emailContractor }} </li>
            <li class="contractorLiLargo">{{ contractor.phoneContractor }}</li>
            <li>{{ contractor.expertiseContractor }}</li>
            <li>{{ contractor.locationContractor }}</li>
            <li>Por definir</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { getDashBoardContractor } from "@/services/dashboardContractors";

export default {
  setup() {
    const contractor = ref(null);

    onMounted(async () => {
      try {
        const response = await getDashBoardContractor();
        contractor.value = response;
      } catch (error) {
        console.error("Error al obtener datos del contratista:", error);
      }
    });

    return {
      contractor
    };
  }
};
</script>

<style scoped>
/* Contenedor principal crema */
.contractorDasboard__container{
  margin-top: 5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-cream);
  width: auto;
  height: 100%;
  padding: 0.1em;
}

/* Contenedor verde donde esta todo "Card" */
.cdContainer__card{
  display: flex;
  flex-direction: column;
  height: auto;
  width: 80%;
  border-radius: 0.2em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 0.7em;
}

.containerCard__menuHamburger{
  display: flex;
  justify-content: space-between;
  height: auto;
  width: 100%;
  background-color: var(--color-light-green);
}

.menuHamburger__svg{
  padding: 0.6em;
}

.menuHamburger__exict{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.7em;
}

.exict__size{
  font-size: 2em;
  width: auto;
}

/* Avatar */
.menuHamburger__containerAvatar{
  display: flex;
  justify-items: center;
  align-items: center;
  height: auto;
  width: 100%;
  background-color: var(--color-light-green);
}

.containerAvatar__position{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  width: 100%;
}

.avatar{
  border: 0.2em solid white;
  height: 100%;
  width: auto;
  border-radius: 50%;
  margin-bottom: 2em;
  max-height: 100%;
  max-width: 100%;
}

/* Información contactor  */
.menuHamburger__contactorInfo{
  display: flex;
  height: 100%;
  width: auto;
  background-color: var(--color-green);
}

.contactorInfo__positionLeft{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
}

.contactorInfo__positionRight{
  display: flex;
  flex-direction: column;
  width: 50%;
}

/* listas */

.contactorInfo__Ul{
  padding: 2em;
  color: var(--color-cream);
}

li{
  padding: 0.3em;
}

@media screen and (max-width: 650px) {
  .avatar {
    width: auto;
    height: 70%;
  }
  .contactorInfo__Ul {
    padding: 1rem;
  }
}

@media screen and (max-width: 650px) {
  .contactorInfo__Ul li {
    font-size: 1rem;
  }
  .contractorLiLargo {
    word-break: break-word; /* Alternativa */
    overflow-wrap: break-word; /* Mejor opción para navegadores modernos */
    max-width: 100%; /* Para asegurarse de que respete el contenedor */
}
}
</style>
