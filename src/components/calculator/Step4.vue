<template>
    <div class="step4">

        <div class="step4__form-grid">
            <div class="step4__form-group">
                <label for="nombre">¿Cuál es tu nombre?</label>
                <input type="text" id="nombre" v-model="formData.nombre" placeholder="Ingresa tu nombre" />
            </div>
            <div class="step4__form-group">
                <label for="apellido">¿Cuál es tu apellido?</label>
                <input type="text" id="apellido" v-model="formData.apellido" placeholder="Ingresa tu apellido" />
            </div>
            <div class="step4__form-group">
                <label for="correo">¿Cuál es tu correo electrónico?</label>
                <input type="email" id="correo" v-model="formData.correo" placeholder="Ingresa tu correo" />
            </div>
            <div class="step4__form-group">
                <label for="celular">¿Cuál es tu número de celular?</label>
                <input type="tel" id="celular" v-model="formData.celular" placeholder="Ingresa tu celular" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Step4",
    props: {
        formData: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>
.step4 {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.step4__form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.step4__form-group {
    display: flex;
    flex-direction: column;
}

label {

    margin-bottom: 0.5rem;
}

input {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid var(--color-dark-green);
    border-radius: 5px;
}

input:focus {
    outline: none;
    border-color: var(--color-light-green);
    box-shadow: 0 0 3px var(--color-dark-green);
}



@media (max-width: 768px) {

    .step4__form-grid {
    grid-template-columns: 1fr; /* Cada input ocupa el 100% del ancho en pantallas pequeñas */
  }
}
</style>