<template>
  <div class="body-seccion3">
    <div class="container-seccion3">
      <div class="seccion3-content">
        <div class="card-wrapper" v-for="data in contractor" :key="data.idContractor">
          <div class="card">
            <div class="image-content">
              <span class="overlay-3"></span>
              <div class="card-image">
                <img src="../../assets/img/construction-worker-icon.webp" alt="contratista icono" class="card-img">
              </div>
            </div>
            <div class="card-content">
              <h2 class="name">{{ data.nameContractor }}</h2>
              <p class="description"><strong>Especialidad:</strong> {{ data.expertiseContractor }}</p>
              <p class="description"><strong>Email:</strong> {{ data.emailContractor }}</p>
              <p class="description"><strong>Teléfono:</strong> {{ data.phoneContractor }}</p>
              <p class="description"><strong>Ubicación:</strong> {{ data.locationContractor }}</p>
              <p class="description"><strong>NIT:</strong> {{ data.nitEnterprise }}</p>
              <button class="button-seccion3">Saber Más</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { getContractors } from "@/services/listContractor";

export default {
  setup() {
    const contractor = ref([]);

    onMounted(async () => {
      try {
        const response = await getContractors();
        contractor.value = response;
      } catch (error) {
        console.error("Error al obtener contratistas:", error);
      }
    });

    return {
      contractor
    };
  }
};
</script>

<style>
.body-seccion3 {
  margin-top: 5rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-cream);
  width: 100%;
}
.container-seccion3 {
  max-width: 1120px;
  background-color: var(--color-light-green);
  padding: 2.5rem 1.2rem;
  border-radius: 0.7rem;
}
.seccion3-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.card-wrapper {
  margin-bottom: 1.5rem;
}

.card {
  width: 300px;
  height: 370px;
  border-radius: 25px;
  background-color: #FFF;
  margin: 0 1rem;
  margin-top: -0.8rem;
}

.image-content, .card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 14px;
}
.image-content {
  position: relative;
  row-gap: 5px;
  padding: 25px 0;
}
.overlay-3 {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: var(--color-dark-green);
  border-radius: 25px 25px 0 0;
}
.card-image {
  position: relative;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background: #FFF;
  padding: 3px;
}
.card-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid black;
}
.name {
  font-size: 18px;
  font-weight: 500;
}
.description {
  font-size: 14px;
  color: #707070;
  text-align: center;
}
.button-seccion3 {
  border: none;
  font-size: 16px;
  color: #FFF;
  padding: 8px 16px;
  background-color: var(--color-dark-green);
  border-radius: 6px;
  margin: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.button-seccion3:hover {
  background-color: var(--color-green);
}

@media (max-width: 1100px) {
  .seccion3-content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 700px) {
  .seccion3-content {
    grid-template-columns: repeat(1, 1fr);
  }
  .container-seccion3 {
    padding: 1.7rem 0.2rem 0rem 0.2rem;
  }
}

@media (max-width: 400px) {
  .container-seccion3 {
    padding: 1.7rem 0.2rem 0rem 0.2rem;
  }
  .image-content {
    width: auto;
  }
  .card {
    width: auto;
    height: auto;
  }
  .card-wrapper {
    width: 100%;
  }
  .container-seccion3 {
    width: 90%;
  }
}
</style>