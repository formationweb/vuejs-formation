import '@picocss/pico/css/pico.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { createPinia } from 'pinia'
import './interceptor'
import { confirmDirective } from './directives/confirm'
import { AppService } from './services/App'

const app = createApp(App)

app.directive('confirm', confirmDirective)
app.provide('appService', new AppService())

app.use(createPinia())
app.use(router)
app.mount('#app')
