import { useForm } from "vee-validate"
import { object, string } from "yup"
import { UserPayload, useUserStore } from "../store/user"
import { ref } from "vue"

export function useUserForm() {
    const loadingCreate = ref(false)
    const userStore = useUserStore()

    const { handleSubmit, defineField, errors, setValues } = useForm({
        validationSchema: object({
            email: string().email().required(),
            name: string().required()
        })
    })

    const createUser = handleSubmit(async (values, { resetForm }) => {
        loadingCreate.value = true
        await userStore.create(values as UserPayload)
        loadingCreate.value = false
        resetForm()
    })

    const editUser = handleSubmit(async (values) => {
        await userStore.update(userStore.userModifying.id, values as UserPayload)
    })
    
    return {
        defineField,
        errors,
        createUser,
        editUser,
        loadingCreate,
        setValues
    }
}