import { createApp } from 'vue'
import App from './App.vue'
import '@picocss/pico/css/pico.min.css'
import { router } from './router'
import { UserService } from './services/users'

const app = createApp(App)

app.use(router)

app.provide('userService', new UserService())

app.mount('#app')
