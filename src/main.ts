import { createApp } from 'vue'
import App from './App.vue'
import '@picocss/pico/css/pico.min.css'
import { router } from './router'
import { UserService } from './services/users'
import { createPinia } from 'pinia'
import './interceptor'

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.provide('userService', new UserService())

app.mount('#app')
