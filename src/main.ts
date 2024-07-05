import '@picocss/pico/css/pico.min.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { AppService } from './services/app'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.provide('appService', new AppService())
app.mount('#app')

