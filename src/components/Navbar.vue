<template>
    <h1>{{ title }}</h1>
    <Search />
</template>

<script>
import Search from './Search.vue';

export default {
    data() {
        return {
            title: 'Mon App'
        }
    },
    components: {
        Search
    }
}
</script>