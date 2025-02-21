<template>
  <div class="step2">

    <label for="location">¿En cuál departamento se encuantra el proyecto?</label>
    <select id="location" v-model="selectedLocation" @change="updateTarifa">
      <option v-for="location in locations" :key="location.name" :value="location.name">
        {{ location.name }}
      </option>
    </select>

    <label for="monthlyConsumption">¿Cuál es el consumo energético al mes? (kWh)</label>
    <input id="monthlyConsumption" type="number" v-model.number="formData.monthlyConsumption"
      placeholder="updateTarifa" />

    <div class="tariff">
      <strong>Tarifa: </strong>
      {{ tariff }}
    </div>

    <div class="bill">
      <strong>Factura de energía de este mes:</strong>
      {{ calcularConsumo }}
    </div>

  </div>
</template>

<script>
import { ref, computed, watch } from "vue";

export default {
  props: {
    formData: {
      type: Object,
      required: true
    }
  },
  setup(props, { emit }) {
    // Lista de departamentos con sus tarifas
    const locations = ref([
      { name: "Departamento A", tariff: 0.12 },
      { name: "Departamento B", tariff: 0.15 },
      { name: "Departamento C", tariff: 0.10 }
    ]);

    // Estado local para el departamento seleccionado
    const selectedLocation = ref("");

    // Tarifa actual según el departamento seleccionado
    const tariff = ref(0);

    // Actualizar la tarifa al cambiar de departamento
    const updateTariff = () => {
      const selected = locations.value.find((d) => d.name === selectedLocation.value);
      tariff.value = selected ? selected.tariff : 0;
    };

    // Calcular el consumo total (tarifa * consumo mensual)
    const calcularConsumo = computed(() => {
      return (tariff.value * props.formData.monthlyConsumption).toFixed(2);
    });

    // Sincronizar la tarifa en formData para que se envíe al formulario
    watch(
      tariff,
      (newTariff) => {
        emit("updateTariff", newTariff);
      },
      { immediate: true }
    );

    return {
      locations,
      selectedLocation,
      tariff,
      updateTariff,
      calcularConsumo
    };
  }
};
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