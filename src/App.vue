<template>
  
  <NavBar class="navbar"/>
  <Home />
  <FooterComponent />

</template>

<script>

import NavBar from "./components/home/NavBar.vue"; 
import Home from "./components/home/Home.vue"
import FooterComponent from "./components/home/FooterComponent.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Home,  
    FooterComponent,
   
   
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
