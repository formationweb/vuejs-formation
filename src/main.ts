import '@picocss/pico/css/pico.min.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { useAuthStore } from './store/auth'

axios.interceptors.request.use((config) => {
    const authStore = useAuthStore()
    if (authStore.isAuth) {
        config.headers.Authorization = authStore.token
    }
    return config
})

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
