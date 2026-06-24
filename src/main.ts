import '@picocss/pico/css/pico.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router.ts'
import { UsersService } from './services/users.ts'

const app = createApp(App)

app.use(router)
app.provide('usersService', new UsersService())

app.mount('#app')
