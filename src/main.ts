import '@picocss/pico/css/pico.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router.ts'
import { UserService } from './core/services/user.ts'

const app = createApp(App)

app.use(router)
app.provide('userService', new UserService())

app.mount('#app')
