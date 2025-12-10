import './styles.css'
import '@picocss/pico/css/pico.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { createPinia } from 'pinia'
import './interceptor'
import { UserService } from './services/user'

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.provide('userService', new UserService())

app.mount('#app')
