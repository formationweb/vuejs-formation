import axios from "axios";
import { useAuthStore } from "./stores/auth";

axios.interceptors.request.use((config) => {
    const authStore = useAuthStore()
    config.headers.Authorization = authStore.token 
    return config
})