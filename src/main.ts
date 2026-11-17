import '@picocss/pico/css/pico.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router.ts'
import { UserService } from './services/users.ts'
import { USER_SERVICE_TOKEN } from './tokens.ts'

const app = createApp(App)

app.use(router)
app.provide(USER_SERVICE_TOKEN, new UserService())

app.mount('#app')
