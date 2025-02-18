<template>
  <NavBar />
  <TestimonialsComponent />
  <HeroComponent />
  <FeaturesComponent />
  <LoginClient />
  <LoginContractor />
  <ClientDashboard />
  <About />
  <Calculator />
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
import ContractorDashboard from "./components/contractor/ContractorDashboard.vue";
import FooterComponent from "./components/home/FooterComponent.vue";
import HeroComponent from "./components/home/HeroComponent.vue";
import FeaturesComponent from "./components/home/FeaturesComponent.vue";
import TestimonialsComponent from "./components/home/TestimonialsComponent.vue";
//import CardComponent from "./components/home/CardComponent.vue";
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
    HeroComponent,
    ContractorDashboard,
    FooterComponent,
    FeaturesComponent,
    TestimonialsComponent,
    // CardComponent,
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
