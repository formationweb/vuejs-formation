import '@picocss/pico/css/pico.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { createPinia } from 'pinia'
import './interceptor'
import { AppService } from './services/app'
import { confirmDirective } from './directives/confirm'

const app = createApp(App)

app.provide('appService', new AppService())
app.directive('confirm', confirmDirective)

app.use(router)
app.use(createPinia())

app.mount('#app')