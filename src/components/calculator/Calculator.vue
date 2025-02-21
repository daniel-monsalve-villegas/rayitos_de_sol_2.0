<template>
  <div class="form">
    
    <div v-if="currentStep === 1">
      <Step1 :formData="formData" @updateOption="updateOption"/>
    </div>

    <div v-if="currentStep === 2">
      <Step2 :formData="formData" />
    </div>

    <div v-if="currentStep === 3">
      <Step3 :formData="formData" />
    </div>

    <div v-if="currentStep === 4">
      <Step4 :formData="formData" />
    </div>

    <div v-if="currentStep === 5">
      <Step5 :formData="formData" />
    </div>

    <div class="form__navigation-buttons">

      <button v-if="currentStep > 1 && currentStep <=4" @click="goToPreviousStep">Anterior</button>
      <button v-if="currentStep < 4 " @click="goToNextStep">Siguiente</button>
      <button v-if="currentStep === 4" @click="submitForm">Enviar</button>
    </div>
  </div>
</template>

<script>

import { ref } from "vue";
import Step1 from "./Step1.vue";
import Step2 from "./Step2.vue";
import Step3 from "./Step3.vue";
import Step4 from "./Step4.vue";
import Step5 from "./Step5.vue";

export default {

  components: {
    Step1,
    Step2,
    Step3,
    Step4,
    Step5
  },
  setup() {
    //Datos del formulario
    const formData = ref({
      projectType: 0,
      location: "",
      monthlyConsumption: 0,
      tariff: 0,
      roofType: "",
      area: 0,
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: 0
    });

    //Inicio en vista 1
    const currentStep = ref(1);

    //Navegacion entre pasos
    const goToNextStep = () => {
      if (currentStep.value < 5) currentStep.value++;
    }

    const goToPreviousStep = () => {
      if (currentStep.value > 1) currentStep.value--;
    }

    //Envio del formulario
    const submitForm = () => {
      console.log("Formulario enviado:", formData.value);
      goToNextStep();
    }

    const updateOption = (option) => {
      formData.value.projectType = option; 
    }

    return {
      formData,
      currentStep,
      goToNextStep,
      goToPreviousStep,
      submitForm,
      updateOption
    }

  }
}
</script>



<style scoped>
.form {
  margin: 20px auto;
  width: 500px;
}

.form__navigation-buttons{
  display: flex;
  justify-content: space-between;
}

.form__navigation-buttons button{
  font-size: 1rem;
  margin-top: 20px;
  border-radius: 10px;
  padding: 8px;
  background-color: var(--color-light-green);
}

@media (max-width: 768px){
  .form{
    width: 300px;
  }
}
</style>
