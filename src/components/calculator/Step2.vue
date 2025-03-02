<template>
  <div class="step2">
    <label for="location">¿En cuál departamento se encuentra el proyecto?</label>
    <select id="location" v-model="localFormData.location" @change="updateLocation">
      <option v-for="loc in locations" :key="loc.id" :value="loc.id">
        {{ loc.name }}
      </option>
    </select>

    <label for="monthlyConsumption">¿Cuál es el consumo energético al mes? (kWh)</label>
    <input
      id="monthlyConsumption"
      type="number"
      v-model.number="localFormData.monthlyConsumption"
      @input="updateMonthlyConsumption"
      placeholder="Ingresa consumo mensual"
    />

    <div class="tariff">
      <strong>Tarifa: </strong>
      {{ localFormData.tariff }} kWh
    </div>

    <div class="bill">
      <strong>Factura de energía de este mes:</strong>
      {{ calcularConsumo }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import api from "@/api/axiosInstance";


const props = defineProps({
  formData: {
    type: Object,
    required: true
  },
  authHeader: {
    type: String,
    required: true
  }
});

const localFormData = ref({ ...props.formData });
const emit = defineEmits(["update:formData", "update:location", "update:tariff", "update:monthlyConsumption"]);
const locations = ref([]);


watch(
  () => props.formData,
  (newValue) => {
    localFormData.value = { ...newValue };
  },
  { deep: true }
);

// Obtener locaciones desde la base de datos al cargar el componente
const fetchLocations = async () => {
  try {
    const response = await api.get('/departments');
    locations.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

// Actualizar la locación y la tarifa
const updateLocation = (event) => {
  const selectedId = event.target.value;
  const location = locations.value.find(dep => dep.id == selectedId) || {};
 
  localFormData.value.location = selectedId;
  localFormData.value.tariff = location.kwhValue || 0;

  emit("update:location", selectedId);
  emit("update:tariff", location.kwhValue || 0);
};

const updateMonthlyConsumption = () => {
  emit("update:monthlyConsumption", localFormData.value.monthlyConsumption);
};

const calcularConsumo = computed(() => {
  return (localFormData.value.tariff * localFormData.value.monthlyConsumption).toFixed(2);
});

onMounted(fetchLocations);
</script>


<style scoped>
.step2 {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

select,
input {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px var(--color-dark-green) solid;
  border-radius: 5px;
}

select:focus,
input:focus {
  outline: none;
  border-color: var(--color-light-green);
  box-shadow: 0 0 3px var(--color-light-green);
}

.tariff,
.bill {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}
</style>
