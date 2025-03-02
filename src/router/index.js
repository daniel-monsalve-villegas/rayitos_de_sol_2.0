import { createRouter, createWebHistory } from 'vue-router'
import { useAuth0 } from '@auth0/auth0-vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/home/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../components/about/About.vue'),
  },
  {
    path: '/contratista',
    name: 'contratista',
    component: () => import('../components/contractor/SectionContractor.vue'),
  },
  {
    path: '/carousel',
    name: 'carousel',
    component: () => import('../components/home/Carousel.vue'),
  },
  {
    path: '/calculator',
    name: 'calculator',
    component: () => import('../components/calculator/Calculator.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../components/ContactUs.vue'),
  },
  {
    path: '/register-client',
    name: 'registerClient',
    component: () => import('../components/client/RegisterClient.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/client-dashboard',
    name: 'clientDashboard',
    component: () => import('../components/client/ClientDashboard.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/register-contractor',
    name: 'registerContractor',
    component: () => import('../components/contractor/RegisterContractor.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/contractor-dashboard',
    name: 'contractorDashboard',
    component: () => import('../components/contractor/ContractorDashboard.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/Department-List-view',
    name: 'DepartmentList',
    component: () => import('../components/DepartmentList.vue'),
  },
  {
    path: '/auth-callback',
    name: 'authCallback',
    component: () => import('../AuthCallback.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, left: 0, behavior: 'smooth' } // Siempre comienza en la parte superior con desplazamiento suave
  },
})

router.beforeEach((to, from, next) => {
  const auth0 = useAuth0()

  if (to.meta.requiresAuth && !auth0.isAuthenticated.value) {
    auth0.loginWithRedirect()
  } else {
    next()
  }
})

export default router
