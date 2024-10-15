import '@picocss/pico/css/pico.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { UserService } from './services/UserService'

const app = createApp(App)
app.use(router)
app.provide('userService', new UserService())
app.mount('#app')
