<template>
  <NavBar class="navbar"/>
  <Home />
  <FooterComponent />

</template>

<script>
//import About from "./components/about/About.vue";
//import Calculator from "./components/calculator/Calculator.vue";
//import LoginClient from "./components/client/LoginClient.vue";
//import LoginContractor from "./components/contractor/LoginContractor.vue";
import NavBar from "./components/home/NavBar.vue"; 
//import ClientDashboard from "./components/client/ClientDashboard.vue";
//import ContractorDashboard from "./components/contractor/ContractorDashboard.vue";
import FooterComponent from "./components/home/FooterComponent.vue";
import Home from "./components/home/Home.vue";


// import ContactUs from "./components/ContactUs.vue";
// import LoginClient from "./components/client/LoginClient.vue";


export default {
  name: "App",
  components: {
    NavBar,
    FooterComponent,
    Home,
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
  .navbar{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
  }
  
</style>
