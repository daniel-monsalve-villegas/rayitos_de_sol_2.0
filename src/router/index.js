import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/home/Hero.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../components/about/About.vue')
  },
  {
    path: '/carousel',
    name: 'carousel',
    component: () => import('../components/home/Carousel.vue')
  },
  {
    path: '/calculator',
    name: 'calculator',
    component: () => import('../components/calculator/Calculator.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../components/ContactUs.vue')
  },
  {
    path: '/login-client',
    name: 'loginClient',
    component: () => import('../components/client/LoginClient.vue')
  },
  {
    path: '/client-dashboard',
    name: 'clientDashboard',
    component: () => import('../components/client/ClientDashboard.vue')
  },
  {
    path: '/login-contractor',
    name: 'loginContractor',
    component: () => import('../components/contractor/LoginContractor.vue')
  },
  {
    path: '/contractor-dashboard',
    name: 'contractorDashboard',
    component: () => import('../components/contractor/ContractorDashboard.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

console.log("Rutas cargadas:", router.getRoutes());

export default router;
