<template>
    <div class="testimonial__author">
        <div class="testimonial__author-info">
            <div>
                <img class="testimonial__author-photo" :src="pothoPath" alt="Foto" />
            </div>
            <h3 class="testimonial__author-name">{{ name }}</h3>
        </div>
        <p class="testimonial__author-text">{{ description }}</p>
        
    </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    name: {
        type: String,
        required:true,
    },
    description: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
});

const pothoPath = computed(() => {
    return new URL(`../../assets/img/${props.photo}`, import.meta.url).href;
  });
</script>

<style scoped>

.testimonial__author{
    width: 80%;  
}

.testimonial__author:first-of-type{
    margin-top: 100px;
}

.testimonial__author:nth-child(3){
    margin-top: 100px;
}

.testimonial__author-info{
    border: 3px var(--color-green) solid;
    background-color: var(--color-light-green);
}

.testimonial__author-photo{
    width: 35%;
    height: auto;
    min-width: 50px;
    position: relative;
    top: -60px;
    border-radius: 50%;
}

.testimonial__author-name{
    margin-top: -30px;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 1.3rem;
}

.testimonial__author-text{
    margin-top: 20px;
}

.testimonial__author:nth-child(2) > .testimonial__author-info, .testimonial__author:nth-child(3) > .testimonial__author-info{
    border: 3px var(--color-dark-green) solid;
}

@media (max-width: 426px) {
  .testimonial__author{
    width: 100%;  
  }
}

</style>