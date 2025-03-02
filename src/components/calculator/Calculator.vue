<template>
  <div class="calculator_container">
    <div class="form">
      <div class="container_calculatorForm">
        <!-- Paso 1: Selección de tipo de proyecto -->
        <div v-if="currentStep === 1">
          <Step1 :formData="formData" @updateOption="updateOption" />
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        </div>
  
        <!-- Paso 2: Información de ubicación y consumo -->
        <div v-if="currentStep === 2">
          <Step2
            v-model:formData="formData"
            v-model:location="formData.location"
            v-model:tariff="formData.tariff"
            v-model:monthlyConsumption="formData.monthlyConsumption"
            :authHeader="authHeader"
          />
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        </div>
  
        <!-- Paso 3: Información sobre el techo -->
        <div v-if="currentStep === 3">
          <Step3 :formData="formData" />
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        </div>
  
        <!-- Paso 4: Información personal -->
        <div v-if="currentStep === 4">
          <Step4 :formData="formData" />
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        </div>
  
        <!-- Paso 5: Resumen y cotización -->
        <div v-if="currentStep === 5">
          <Step5 :formData="formData" :auth-header="authHeader" />
        </div>
  
        <!-- Botones de navegación -->
        <div class="form__navigation-buttons">
          <button v-if="currentStep > 1 && currentStep <= 4" @click="goToPreviousStep">Anterior</button>
          <button v-if="currentStep < 4" @click="validateAndGoToNextStep">Siguiente</button>
          <button v-if="currentStep === 4" @click="submitForm">Enviar</button>
        </div>
    </div>
    </div>
  </div>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue'
  import Step1 from './Step1.vue'
  import Step2 from './Step2.vue'
  import Step3 from './Step3.vue'
  import Step4 from './Step4.vue'
  import Step5 from './Step5.vue'
  import api from '@/api/axiosInstance'
  
  // Datos del formulario
  const formData = reactive({
    projectType: '',
    location: '',
    monthlyConsumption: 0,
    tariff: 0,
    roofType: '',
    area: 0,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  })
  
  const currentStep = ref(1)
  const errorMessage = ref('')
  const username = 'usuario'
  const password = '12345'
  const authHeader = 'Basic ' + btoa(`${username}:${password}`)
  
  // Navegación entre pasos
  const goToNextStep = () => {
    if (currentStep.value < 5) currentStep.value++
  }
  
  const goToPreviousStep = () => {
    if (currentStep.value > 1) currentStep.value--
  }
  
  // Validar campos antes de continuar
  const validateAndGoToNextStep = () => {
    if (currentStep.value === 1 && !formData.projectType) {
      errorMessage.value = 'Por favor, selecciona un tipo de proyecto antes de continuar.'
      return
    }
    if (currentStep.value === 3 && (!formData.roofType || formData.area <= 0)) {
      errorMessage.value = 'Por favor, selecciona un material del techo y un área válida.'
      return
    }
    errorMessage.value = ''
    goToNextStep()
  }
  
  // Validar formulario antes de enviar
  const validateForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phoneNumber) {
      errorMessage.value = 'Por favor, completa todos los campos antes de enviar.'
      return false
    }
    return true
  }
  
  // Enviar el formulario
  const submitForm = () => {
    if (!validateForm()) return
  
    const plainData = JSON.parse(JSON.stringify(formData))
  
    api
      .post('/quotations', plainData)
      .then((response) => {
        formData.quotation = {
          id: response.data.id,
          projectCost: response.data.projectCost.toFixed(2),
          systemPower: response.data.systemPower.toFixed(2),
          energyGeneration: response.data.energyGeneration.toFixed(2),
          monthlySavings: response.data.monthlySavings.toFixed(2),
        }
        errorMessage.value = ''
        goToNextStep()
      })
      .catch(() => {
        errorMessage.value = 'Hubo un error al enviar el formulario. Inténtalo de nuevo.'
      })
  }
  
  // Actualizar tipo de proyecto en Step1
  const updateOption = (option) => {
    formData.projectType = option
  }
  </script>
  
  <style scoped>
  .calculator_container {
    display: flex;
    justify-content: center;
    margin-top: 5em;
    background-color: var(--color-cream);
  }
  
  .form {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    margin: 1.5em;
    padding: 2em;
    min-height: 35em;
    width: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  }
  
  .container_calculatorForm {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 3em;
    border-radius: 10%;
  }
  
  .form__navigation-buttons {
    display: flex;
    justify-content: space-between;
  }
  
  .form__navigation-buttons button {
    font-size: 1rem;
    margin-top: 20px;
    border-radius: 10px;
    padding: 8px;
    background-color: var(--color-light-green);
  }
  
  .error-message {
    color: red;
    font-size: 0.9rem;
    margin-top: 10px;
  }
  
  @media (max-width: 768px) {
    .form {
      width: 300px;
    }
  }
  </style>