import '@picocss/pico/css/pico.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router.ts'
import { UsersService } from './services/users.ts'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.provide('usersService', new UsersService())

app.mount('#app')
