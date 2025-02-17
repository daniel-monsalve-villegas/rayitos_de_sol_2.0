<template>
  <NavBar />
  <LoginClient />
  <LoginContractor />
  <ClientDashboard />
  <About />
  <Calculator />
  <Hero />
  <ContractorDashboard />
  <FooterComponent />
</template>

<script>
import About from "./components/about/About.vue";
import Calculator from "./components/calculator/Calculator.vue";
import LoginClient from "./components/client/LoginClient.vue";
import LoginContractor from "./components/contractor/LoginContractor.vue";
import NavBar from "./components/home/NavBar.vue"; 
import ClientDashboard from "./components/client/ClientDashboard.vue";
import Hero from "./components/home/Hero.vue"; 
import ContractorDashboard from "./components/contractor/ContractorDashboard.vue";
import FooterComponent from "./components/home/FooterComponent.vue";
// import Hero from "./components/home/Hero.vue";
// import About from "./components/about/About.vue";
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
    LoginClient,
    LoginContractor,
    ClientDashboard,
    Calculator,
    Hero,
    ContractorDashboard,
    FooterComponent,
    // Hero,
    // Carousel,
    // About,
    // Calculator,
    // LoginClient,
    // ClientDashboard,
    // LoginContractor,
    // ContractorDashboard,
    // ContactUs,
  },
};
</script>

<style lang="css" scoped>
  
  
</style>
