<template>

    <div class="card">


    <div class="card-icon">
        <img :src="('@/assets/img/${icon}')" alt="Icono" />
    </div>
    <h2 class="card__title">{{ title }}</h2>
    <p class="card__text">{{description}}</p>

    </div>

</template>

<script>
import { defineProps } from "vue";

export default {

    name: "CardComponent",
    setup() {

        const props = defineProps({
            title:{
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            icon: {
                type: String,
                required: true,
            },
        });
        return{
            props,
        }
    }
}
</script>




<style scoped>
 
 .card{
    background-color: var(--color-cream);
    border: 1px black solid;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 30px;
    color: var(--text-color-primary);
    min-height: 250px;
 }

 .card-icon{
    width: 3rem;
 }

 .card__title{
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 20px;
 }


</style>