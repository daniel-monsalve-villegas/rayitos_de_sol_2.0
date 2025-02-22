<template>
  <div class="step3">
    <h2>Selecciona el material de tu techo</h2>
    <select v-model="formData.roofType" class="step3__select">
      <option value="teja de barro">Teja de barro</option>
      <option value="teja eternit">Teja eternit</option>
      <option value="madera">Madera</option>
      <option value="zinc">Zinc</option>
      <option value="termocaustica">Termocaustica</option>
    </select>

    <h2>¿Cuál es el área del proyecto?</h2>
    <input
      type="number"
      v-model="formData.area"
      class="step3__input"
      placeholder="Ingresa el área en m²"
      min="1"
    />
  </div>
</template>

<script setup>

defineProps({
  formData: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.step3 {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.step3__select,
.step3__input {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid var(--color-dark-green);
  border-radius: 5px;
}

.step3__select:focus,
.step3__input:focus {
  outline: none;
  border-color: var(--color-light-green);
  box-shadow: 0 0 3px var(--color-light-green);
}
</style>
