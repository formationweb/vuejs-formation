import '@picocss/pico/css/pico.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router.ts'
import { UserService } from './core/services/user.ts'
import { UserServiceKey } from './keys.ts'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.provide(UserServiceKey, new UserService())

app.mount('#app')
