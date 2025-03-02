<template>
  <div class="contractorDasboard__container">
    <div class="cdContainer__card">
      <div class="containerCard__menuHamburger">

      </div>

      <!-- Avatar -->
      <div class="menuHamburger__containerAvatar">
        <div class="containerAvatar__position">
          <img class="avatar" src="../../assets/img/images.jpeg" alt="Avatar">
        </div>
      </div>

      <!-- Información del contratista -->
      <div class="menuHamburger__contactorInfo" v-if="client">
        <div class="contactorInfo__positionLeft">
          <ul class="contactorInfo__Ul">
            <li>ID</li>
            <li>Nombre</li>
            <li>Email</li>
            <li>Teléfono</li>
            <li>Ubicación</li>
            <li>Barrio</li>
            <li>Consumo mensual</li>
            <li>Nivel subsidio</li>
          </ul>
        </div>

        <div class="contactorInfo__positionRight">
          <ul class="contactorInfo__Ul">
            <li>{{ client.idClient}}</li>
            <li>{{ client.nameClient}}</li>
            <li>{{ client.emailClient }}</li>
            <li>{{ client.phoneClient }} </li>
            <li>{{ client.cityClient }}</li>
            <li>{{ client.neighborhoodClient }}</li>
            <li>{{ client.monthlyConsumptionClient }}</li>
            <li>{{ client.subsidyLevel }}</li>
          </ul>
        </div>

      </div>
      <div class="container_info_subsidios">
    <div class="subsidio">
        <h3>Nivel 1 - Subsidio Básico</h3>
        <p>✅ <strong>Cobertura:</strong> Hasta el 30% del costo total de los paneles y la instalación.</p>
        <p>✅ <strong>Requisitos:</strong> Disponible para hogares de estratos 1 y 2 o pequeños negocios con consumo bajo.</p>
        <p>✅ <strong>Condiciones:</strong> Se debe demostrar la necesidad del subsidio y el impacto positivo en la reducción de costos energéticos.</p>
    </div>

    <div class="subsidio">
        <h3>Nivel 2 - Subsidio Intermedio</h3>
        <p>✅ <strong>Cobertura:</strong> Hasta el 50% del costo total del sistema solar.</p>
        <p>✅ <strong>Requisitos:</strong> Para viviendas de estratos 3 y 4, medianos comercios o zonas rurales con acceso limitado a la red eléctrica.</p>
        <p>✅ <strong>Condiciones:</strong> Se debe demostrar el uso eficiente de energía y participar en un programa de educación energética.</p>
    </div>

    <div class="subsidio">
        <h3>Nivel 3 - Subsidio Avanzado</h3>
        <p>✅ <strong>Cobertura:</strong> Hasta el 80% del costo total, incluyendo baterías para almacenamiento.</p>
        <p>✅ <strong>Requisitos:</strong> Disponible para comunidades rurales sin acceso a la red eléctrica o proyectos de energías renovables de interés público.</p>
        <p>✅ <strong>Condiciones:</strong> Se debe presentar un proyecto detallado con impacto ambiental positivo y compromiso de mantenimiento a largo plazo.</p>
    </div>
</div>
      <div class="contractorDashboard__danger-zone">
        <h2 class="danger__zone-title">⚠️ Danger Zone</h2>
        <button class="danger__zone-button" @click="openUpdateModal">Modificar Cliente</button>
        <button class="danger__zone-button" @click="openDeleteModal">Eliminar Cliente</button>
      </div>
    </div>
  </div>

  <!-- Modal de actualización -->
  <div v-if="showUpdateModal" class="modal">
  <div class="modal-content">
    <h2 class="modal-title">Actualizar Cliente</h2>
    <form @submit.prevent="updateContractor" class="modal-form">
      <div class="form-grid">
        <label for="nameContractor">Nombre</label>
        <input id="nameContractor" v-model="formData.nameClient" required />

        <label for="phoneContractor">Teléfono</label>
        <input id="phoneContractor" v-model="formData.phoneClient" required />

        <label for="locationContractor">Ubicación</label>
        <input id="locationContractor" v-model="formData.cityClient" required />

        <label for="expertiseContractor">Barrio</label>
        <input id="expertiseContractor" v-model="formData.neighborhoodClient" required />

        <label for="nitEnterprise">Consumo mensual</label>
        <input id="nitEnterprise" v-model="formData.monthlyConsumptionClient" required />

        <div class="checkbox-group">
            <label><input type="checkbox" v-model="formData.lowIncome" /> Bajos ingresos</label>
            <label><input type="checkbox" v-model="formData.singleParent" /> Madre cabeza de hogar</label>
            <label><input type="checkbox" v-model="formData.displaced" /> Desplazado</label>
            <label><input type="checkbox" v-model="formData.disabled" /> Discapacitado</label>
            <label><input type="checkbox" v-model="formData.elderly" /> Adulto mayor</label>
            <label><input type="checkbox" v-model="formData.limitedAccessToServices" /> Acceso limitado a servicios</label>
            <label><input type="checkbox" v-model="formData.inadequateHousing" /> Vivienda inadecuada</label>
        </div>

      </div>

      <div class="form-actions">
        <button type="submit" class="btn-update">Actualizar</button>
        <button type="button" class="btn-cancel" @click="showUpdateModal = false">Cancelar</button>
      </div>
    </form>
  </div>
</div>

  <!-- Modal de eliminación -->
  <div v-if="showDeleteModal" class="modal">
  <div class="modal-content">
    <h2 class="modal-title">Eliminar Contratista</h2>
    <p class="modal-text">Escribe <strong>"ELIMINAR"</strong> para confirmar:</p>
    <input
      v-model="deleteConfirmation"
      @input="formatDeleteInput"
      placeholder="ELIMINAR"
      required
      class="modal-input"
    />

    <div class="form-actions">
      <button
        class="btn-delete"
        @click="deleteContractor"
        :disabled="deleteConfirmation !== 'ELIMINAR'"
      >
        Confirmar
      </button>
      <button class="btn-cancel" @click="showDeleteModal = false">
        Cancelar
      </button>
    </div>
  </div>
</div>

</template>

<script setup>
import { ref, onMounted } from "vue";
import api from "@/api/axiosInstance";
import { getDashboardClient } from "@/services/dashboardClients";
import { useRouter } from "vue-router";

const client = ref(null);
const showUpdateModal = ref(false);
const showDeleteModal = ref(false);
const deleteConfirmation = ref("");
const formData = ref({});
const router = useRouter();


onMounted(async () => {
  try {
    const response = await getDashboardClient();
    client.value = response;
  } catch (error) {
    console.error("Error al obtener datos del cleinte:", error);
  }

});

const openUpdateModal = () => {
  formData.value = { ...client.value };
  showUpdateModal.value = true;
  document.body.classList.add("modal-open");
};

const updateContractor = async () => {
  try {
    await api.put(`/client/${client.value.idClient}`, formData.value);
    showUpdateModal.value = false;
    client.value = { ...formData.value };
    console.log(client.value)
  } catch (error) {
    console.error("Error al actualizar cliente:", error);
  }
};

const openDeleteModal = () => {
  deleteConfirmation.value = "";
  showDeleteModal.value = true;
};

const formatDeleteInput = () => {
  deleteConfirmation.value = deleteConfirmation.value.toUpperCase();
};

const deleteContractor = async () => {
  try {
    await api.delete(`/client/${client.value.idClient}`);
    showDeleteModal.value = false;
    client.value = null;
    router.push("/login");
  } catch (error) {
    console.error("Error al eliminar client:", error);
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

.container_info_subsidios {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    flex-wrap: wrap; /* Permite que los elementos se ajusten en pantallas pequeñas */
    padding: 10px 0;
  }

.subsidio {
    flex: 1;
    min-width: 250px; /* Evita que los contenedores sean demasiado pequeños */
    padding: 10px;
    background-color: #f4f4f4;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
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
.contactorInfo__Ul li {
  max-width: 100%;  /* Para que no crezca demasiado */
  overflow-wrap: break-word; /* Rompe el texto si es necesario */
  word-break: break-word; /* Alternativa para navegadores más antiguos */
  white-space: normal; /* Permite que el texto se ajuste en varias líneas */
  display: block; /* Asegura que ocupe el ancho disponible */
}
li{
  padding: 0.3em;  

}

.contractorDashboard__danger-zone{
  background-color: red;
  margin: 20px;
  padding: 16px;
}

.danger__zone-title{
  color: var(--color-white);
  font-weight: bold;
  font-size: 1.3rem;
  margin-bottom: 16px;
}

.danger__zone-button{
  padding: 5px;
  font-size: 1rem;
  margin-right: 10px;
  border-radius: 8px;
}

.danger__zone-button:hover{
  background-color: var(--color-cream);
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
}

.modal-content {
  background: white;
  width: 90%;
  max-width: 600px; /* Ajusta el ancho según necesites */
  max-height: 90vh; /* Para que no ocupe más del 90% de la pantalla */
  overflow-y: auto; /* Hacer scroll dentro del modal si es muy largo */
  padding: 1em;
  border-radius: 10px;
}

.modal-title {
  text-align: center;
  margin-bottom: 15px;
}

.modal-form {
  display: flex;
  flex-direction: column;
}

.checkbox-group {
  max-height: 200px; /* Ajusta según sea necesario */
  overflow-y: auto; /* Permite hacer scroll en el grupo de checkboxes */
}

body.modal-open {
  overflow: hidden;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  align-items: center;
}

.form-grid label {
  text-align: right;
  font-weight: bold;
}

.form-grid input {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 10px;
}

.btn-update {
  background: #28a745;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.btn-cancel {
  background: #dc3545;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.modal-input{
  width: 100%;
  margin: 10px 0;
  line-height: 1.5rem;
}

.btn-delete{
  background-color: #28a745;
  color: var(--color-white);
  border: none;
  cursor: pointer;
  border-radius: 5px;
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
