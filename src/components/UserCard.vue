<template>
    <article>
        <slot name="header" v-bind="user">{{ user.name }}</slot>
        <p>{{ user.email }}</p>
        <slot name="footer" :active="active" v-bind="user"></slot>
        <slot>
            Valeur
        </slot>
        <input type="checkbox" v-model="active">
        <footer>
            <button 
                v-confirm="{
                    message: 'Etes vous sur ...',
                    onConfirm: () => emits('deleteUser', user.id)
                }">Supprimer
            </button>
            <RouterLink :to="{ name: 'userEdit', params: { id: user.id } }">
                <button>Modifier</button>
            </RouterLink>
        </footer>
    </article>
</template>

<script setup lang="ts">
import type { User } from '@/core/interfaces/User';
import { ref, type PropType } from 'vue';

const active = ref(false)

// defineProps({
//     user: {
//         type: Object as PropType<User>,
//         required: true
//     }
// })

defineProps<{
    user: User
}>()

const emits = defineEmits<{
    deleteUser: [number]
}>()

</script>

