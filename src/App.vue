<template>
  <NavBar />
  <router-view />
  <FooterComponent />
  <!-- <Hero /> -->
  <!-- <Carousel /> -->
  <About />
  <!-- <Calculator /> -->
  <!-- <ContactUs /> -->
  <!-- <LoginClient /> -->
  <!-- <ClientDashboard /> -->
  <!-- <LoginContractor /> -->
  <!-- <ContractorDashboard />  -->
</template>

<script>
import NavBar from "./components/home/NavBar.vue";
import FooterComponent from "./components/home/FooterComponent.vue";
// import Hero from "./components/home/Hero.vue";
import About from "./components/about/About.vue";
// import Carousel from "./components/home/Carousel.vue";
// import Calculator from "./components/calculator/Calculator.vue";
// import ContactUs from "./components/ContactUs.vue";
// import LoginClient from "./components/client/LoginClient.vue";
// import LoginContractor from "./components/contractor/LoginContractor.vue";
// import ClientDashboard from "./components/client/ClientDashboard.vue";
// import ContractorDashboard from "./components/contractor/ContractorDashboard.vue";


export default {
  name: "App",
  components: {
    NavBar,
    FooterComponent,
    // Hero,
    // Carousel,
    About,
    // Calculator,
    // LoginClient,
    // ClientDashboard,
    // LoginContractor,
    // ContractorDashboard,
    // ContactUs,
  },
};
</script>

<style scoped>

</style>
