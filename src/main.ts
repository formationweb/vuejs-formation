import '@picocss/pico/css/pico.min.css'
import { createApp } from "vue";
import App from "./App.vue";
import { router } from './router';
import { createPinia } from 'pinia';
import { confirmDirective } from './directives/confirm';
import { AppService } from './services/App';
import './interceptor'

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.directive('confirm', confirmDirective)
app.provide('appService', new AppService())

app.mount('#app')