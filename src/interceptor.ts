import axios from "axios";
import { useAuthStore } from "./store/auth";

axios.interceptors.request.use((config) => {
    const auth = useAuthStore()
    config.headers.Authorization = auth.token
    return config
})