<template>
  <div class="step1-container">
    <h2>Selecciona el tipo de proyecto</h2>
    <div class="options">
      <!-- Opción Residencial -->
      <div class="option-container">
        <img
          src="../../assets/img/calculator/home-calculator.svg"
          alt="Proyecto Residencial"
          @click="selectOption('residencial')"
          :class="{ selected: selectedOption === 'residencial' }"
        />
        <p>Proyecto Residencial</p>
      </div>

      <!-- Opción Comercial -->
      <div class="option-container">
        <img
          src="../../assets/img/calculator/factory-calculator.svg"
          alt="Proyecto Comercial"
          @click="selectOption('comercial')"
          :class="{ selected: selectedOption === 'comercial' }"
        />
        <p>Proyecto Comercial</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, toRefs } from 'vue'

const props = defineProps({
  formData: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['updateOption'])
const selectedOption = ref('')

// Sincroniza el valor de la opción seleccionada con el `formData`
watch(
  () => props.formData.projectType,
  (newValue) => {
    selectedOption.value = newValue
  },
  { immediate: true },
)

// Función para seleccionar la opción
const selectOption = (option) => {
  selectedOption.value = option
  emit('updateOption', option)
}
</script>

<style scoped>
.step1-container {
  display: flex;
  flex-direction: column;
}

.options {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 10px;
  line-height: 30px;
}

.options img {
  width: 100px;
  cursor: pointer;
  transition: border 0.3s ease;
}

.options img.selected {
  border: 3px solid var(--color-light-green);
  border-radius: 8px;
}

.option-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>
