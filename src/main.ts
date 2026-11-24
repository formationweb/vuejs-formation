import '@picocss/pico/css/pico.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import { UserService } from './core/services/user.ts'
import { USER_SERVICE } from './tokens.ts'
import { createPinia } from 'pinia'

const app = createApp(App)

app.provide(USER_SERVICE, new UserService())
app.use(createPinia())

app.mount('#app')
