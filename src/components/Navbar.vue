<template>
    <h1>Navbar</h1>
    <input type="text" v-model="localUserName">
    <button @click="search" v-if="localUserName != ''">Rechercher</button>
    <div v-else>
        Vide
    </div>
    <ul>
        <li v-for="(name, index) in names" :key="name">
            {{ index }} - {{ name }}
        </li>
    </ul>
</template>

<!-- <script lang="ts">
import type { PropType } from 'vue';

export default {
    props: {
        userName: {
            type: String,
            required: true
        },
        myObject: {
            type: Object as PropType<{
                url: string
            }>
        }
    },
    emits: ['runSearch'],
    data() {
        return {
            names: ['ana', 'ben', 'jim'],
            config: {
                url: 'example.com',
                port: 3000
            },
            localUserName: this.userName
        }
    },
    methods: {
        search() {
            this.$emit('runSearch', this.localUserName)
        }
    }
}
</script> -->

<script lang="ts" setup>
import { ref } from 'vue';

// const props = defineProps({
//     userName: {
//         type: String,
//         required: true
//     }
// })

const props = defineProps<{
    userName: string
}>()

const emits = defineEmits<{
    runSearch: [string]
}>()

const localUserName = ref(props.userName)
const names = ref(['ana', 'ben', 'jim'])

function search() {
    emits('runSearch', localUserName.value)
}
</script>

