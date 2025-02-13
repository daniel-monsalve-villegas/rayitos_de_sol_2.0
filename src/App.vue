<template>
  <NavBar />
  <ContactUs />
  <LoginClient />
  <LoginContractor />
  <ContractorDashboard />
  <ClientDashboard />
  <About />
  <Calculator />
  <Hero />
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
import ContactUs from "./components/ContactUs.vue";


export default {
  name: "App",
  components: {
    About,
    NavBar,
    LoginClient,
    LoginContractor,
    ClientDashboard,
    Calculator,
    Hero,
    ContractorDashboard,
    FooterComponent,
    ContactUs,
  },
};
</script>

<style scoped>

</style>
