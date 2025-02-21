<template>

    <div class="step1-container">
        <h2>Selecciona el tipo de proyecto</h2>
        <div class="options">

            
            <div class="option-container"  >
                <img src="../../assets/img/calculator/home-calculator.svg" alt="Proyecto Residencial"
                @click="selectOption('residencial')"
                style="{background: selectedOption === 'residencial' ? 'green' : 'none'}"
                :class="{ selected: selectedOption === 'residencial' }"
                >
                <p>Proyecto Residencial</p>
            </div>

            <div class="option-container">
                <img src="../../assets/img/calculator/factory-calculator.svg" alt="Proyecto Comercial"
                    @click="selectOption('comercial')">
                <p>Proyecto Comercial</p>
            </div>

        </div>
    </div>

</template>

<script>

export default {
    props: {
        formData: {
            type: Object,
            required: true
        }
    },
    setup(props, { emit }) {
        
        let selectedOption = "";
        const selectOption = (option) => {
            selectedOption = option
            this.classList.toggle("selected");

            console.log(selectedOption)
            emit("updateOption", option)
        }

        return {
            selectOption,
            selectedOption,            
        }
    }
}
</script>

<style scoped>

.step1-container{
    display: flex;
    flex-direction: column;
}

.options{
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin: 10px;
    line-height: 30px;
    
}

.options img{
    width: 100px;
    cursor: pointer;
}           

.options img.selected {
    border: 3px solid blue;
    border-radius: 8px;
}

.option-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
</style>