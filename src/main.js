import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { createAuth0 } from '@auth0/auth0-vue'

const app = createApp(App)

app.use(
  createAuth0({
    domain: 'dev-yqne2f86vz7fs1zt.us.auth0.com',
    clientId: 'HjI2MtPaYGXQxi90D5fj61W94oI30pKq',
    authorizationParams: {
      redirect_uri: window.location.origin + '/auth-callback',
    },
    cacheLocation: 'localstorage', 
  }),
)
app.use(createPinia())
app.use(router)

app.mount('#app')
