<template>
    <input type="text" v-model="userName">
    <button @click="onSearch" v-if="userName != ''">Rechercher</button>
    <!-- <div v-else-if="userName == 'ana'">Test</div>
    <div v-else>Plus de bouton</div> -->
    <ul>
        <li v-for="(name, index) in firstNames" :key="name">
            {{ index }} - {{  name  }}
        </li>
        <!-- <li v-for="(val, key) in myObj" :key="key">
            {{ key }} - {{  val  }}
        </li> -->
    </ul>
</template>

<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue';

const props = defineProps<{
    name: string
}>()

const emits = defineEmits<{
    'on-search': [string]
}>()

const firstNames = ref(['ana', 'jim', 'ben'])
const userName = ref(props.name)

function onSearch() {
    emits('on-search', userName.value)
}

// watch(() => props.name, (newValue) => {
//     userName.value = newValue
// })

watchEffect(() => {
    userName.value = props.name
})
</script>

<!-- <script lang="ts">
import type { PropType } from 'vue';

export default {
    props: {
        name: {
            type: String as PropType<string>,
            required: true
        }
    },
    emits: ['on-search'],
    data() {
        return {
            userName: this.name,
            firstNames: ['ana', 'jim', 'ben']
            // myObj: {
            //     name: 'ana',
            //     age: 18
            // }
        }
    },
    methods: {
        onSearch() {
            this.$emit('on-search', this.userName)
        }
    },
    watch: {
        name(newVal: string) {
            this.userName = newVal
        }
    }
}
</script> -->