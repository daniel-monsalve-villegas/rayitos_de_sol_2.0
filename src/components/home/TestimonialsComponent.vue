<template>
    <div class="container">
        <div class="section-testimonial">
            <h2 class="title">Lo que dicen nuestros clientes</h2>
            <section class="testimonial">
                <CardTestimony v-for="author in authors" :key="author.id" :name="author.name"
                    :description="author.description" :photo="author.photo" />
            </section>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import CardTestimony from "./CardTestimony.vue";

export default {
    name: "TestimonialComponent",
    components: {
        CardTestimony,
    },
    setup() {
        const authors = ref([
            {
                id: 1,
                name: "Mike Hudson",
                description:
                    "Desde que instalamos los paneles solares, nuestra factura de luz se redujo en un 60%. El equipo de instalación fue muy profesional y todo el proceso fue más rápido de lo que esperaba. ¡Recomiendo esta empresa a cualquiera que quiera ahorrar energía y dinero!",
                photo: "mike-hudson.jpeg",

            },
            {
                id: 2,
                name: "Margo Perry",
                photo: "margo-perry.jpeg",
                description:
                    "Estaba preocupada por el costo inicial, pero la asesoría que recibí fue excelente. Me explicaron claramente cómo recuperaría mi inversión en pocos años. Ahora, no solo estoy ahorrando, sino que también estoy contribuyendo al medio ambiente. ¡Muy contenta con mi decisión!",

            },
            {
                id: 3,
                name: "Mila Loo",
                photo: "mila-loo.jpeg",
                description:
                    "La instalación de los paneles solares fue impecable. El equipo llegó puntual, trabajó de manera eficiente y dejó todo limpio. En menos de un día, ya estaba generando mi propia energía. ¡Increíble servicio y resultados!",

            },
            {
                id: 4,
                name: "Pablo Larson",
                photo: "pablo-larson.jpeg",
                description:
                    "Me encanta la tranquilidad de saber que estoy usando energía limpia. Además, el sistema es muy fácil de mantener. La empresa me ha brindado un excelente soporte postventa. ¡No puedo estar más satisfecha con mi experiencia!",


            },
        ]);

        return {
            authors,
        };
    },
};
</script>

<style scoped>
.container {
    display: flex;
    background-color: var(--color-cream);
}

.section-testimonial {
    text-align: center;
    padding-top: 20px;
    background: var(--color-white);
    padding-bottom: 5%;
    width: 100%;
    border-radius: 16px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1),
        0px 4px 8px rgba(0, 0, 0, 0.05);
    margin: 20px 2rem;

}

.title {
    font-size: 1.5rem;
    font-weight: bold;
    background: var(--color-light-green);
    line-height: 2rem;
    display: inline-block;
    text-align: center;
    padding: 15px;
    margin-top: 5%;
    margin-bottom: 10%;
    border: 5px var(--color-dark-green) solid;
}

.testimonial {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
    align-items: start;
    text-align: center;
    padding-left: 10%;
}


@media (max-width: 768px) {
    .testimonial {
        grid-template-columns: 1fr;
        gap: 100px;
    }

    .testimonial__author:nth-child(3) {
        margin-top: 0;
    }
}
</style>
