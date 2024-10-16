import axios from "axios";
import { useAuthStore } from "./store/auth";

axios.interceptors.request.use((config) => {
    const authStore = useAuthStore()
    config.headers.Authorization = authStore.token
    return config
})