import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'; 
import initAuth from './auth/index';


const app = createApp(App)

initAuth(app);
app.use(createPinia())
app.use(router)


  app.mount('#app')