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
            <li>Nit Empresa</li>
            <li>Nombre</li>
            <li>Email</li>
            <li>Teléfono</li>
            <li>Servicios</li>
            <li>Ubicación</li>
          </ul>
        </div>

        <div class="contactorInfo__positionRight">
          <ul class="contactorInfo__Ul">
            <li>{{ contractor.idContractor }}</li>
            <li>{{ contractor.nitEnterprise }}</li>
            <li>{{ contractor.nameContractor }}</li>
            <li class="contractorLiLargo">{{ contractor.emailContractor }} </li>
            <li class="contractorLiLargo">{{ contractor.phoneContractor }}</li>
            <li>{{ contractor.expertiseContractor }}</li>
            <li>{{ contractor.locationContractor }}</li>
          </ul>
        </div>

      </div>
      <div class="contractorDashboard__danger-zone">
        <h2 class="danger__zone-title">⚠️ Danger Zone</h2>
        <button class="danger__zone-button" @click="openUpdateModal">Modificar Contratista</button>
        <button class="danger__zone-button" @click="openDeleteModal">Eliminar Contratista</button>
      </div>
    </div>
  </div>

  <!-- Modal de actualización -->
  <div v-if="showUpdateModal" class="modal">
  <div class="modal-content">
    <h2 class="modal-title">Actualizar Contratista</h2>
    <form @submit.prevent="updateContractor" class="modal-form">
      <div class="form-grid">
        <label for="nitEnterprise">NIT Empresa</label>
        <input id="nitEnterprise" v-model="formData.nitEnterprise" required />

        <label for="nameContractor">Nombre</label>
        <input id="nameContractor" v-model="formData.nameContractor" required />

        <label for="phoneContractor">Teléfono</label>
        <input id="phoneContractor" v-model="formData.phoneContractor" required />

        <label for="expertiseContractor">Servicios</label>
        <input id="expertiseContractor" v-model="formData.expertiseContractor" required />

        <label for="locationContractor">Ubicación</label>
        <input id="locationContractor" v-model="formData.locationContractor" required />
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
import { getDashBoardContractor } from "@/services/dashboardContractors";
import { useRouter } from "vue-router";
import { useAuth0 } from "@auth0/auth0-vue";

const contractor = ref(null);
const showUpdateModal = ref(false);
const showDeleteModal = ref(false);
const deleteConfirmation = ref("");
const formData = ref({});
const router = useRouter();
const { logout } = useAuth0();



onMounted(async () => {
  try {
    const response = await getDashBoardContractor();
    contractor.value = response;
  } catch (error) {
    console.error("Error al obtener datos del contratista:", error);
  }
  
});

const openUpdateModal = () => {
  formData.value = { ...contractor.value };
  showUpdateModal.value = true;
};

const updateContractor = async () => {
  try {
    await api.put(`/contractor/${contractor.value.idContractor}`, formData.value);
    showUpdateModal.value = false;
    contractor.value = { ...formData.value };
  } catch (error) {
    console.error("Error al actualizar contratista:", error);
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
    await api.delete(`/contractor/${contractor.value.idContractor}`);
    showDeleteModal.value = false;
    contractor.value = null;
    logout({ returnTo: window.location.origin });
  } catch (error) {
    console.error("Error al eliminar contratista:", error);
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
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 450px;
  max-width: 90%;
}

.modal-title {
  text-align: center;
  margin-bottom: 15px;
}

.modal-form {
  display: flex;
  flex-direction: column;
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
