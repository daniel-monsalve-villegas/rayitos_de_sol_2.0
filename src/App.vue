<template>
  <HeroComponent />
  <NavBar/>
  <LoginClient />
  <LoginContractor />
  <ClientDashboard />
  <About />
  <Calculator />
  <ContractorDashboard />
  <FooterComponent />
</template>

<script>
import HeroComponent from "./components/home/HeroComponent.vue"; 
import About from "./components/about/About.vue";
import Calculator from "./components/calculator/Calculator.vue";
import LoginClient from "./components/client/LoginClient.vue";
import LoginContractor from "./components/contractor/LoginContractor.vue";
import NavBar from "./components/home/NavBar.vue"; 
import ClientDashboard from "./components/client/ClientDashboard.vue";
import ContractorDashboard from "./components/contractor/ContractorDashboard.vue";
import FooterComponent from "./components/home/FooterComponent.vue";

export default {
  name: "App",
  components: {
    About,
    NavBar,
    LoginClient,
    LoginContractor,
    ClientDashboard,
    Calculator,
    HeroComponent,
    ContractorDashboard,
    FooterComponent,
  },
};
</script>

<style lang="css" scoped>
  
  
</style>
