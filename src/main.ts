import '@picocss/pico/css/pico.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { UserService } from './services/UserService'
import { createPinia } from 'pinia'
import './interceptor'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.provide('userService', new UserService())
app.mount('#app')
