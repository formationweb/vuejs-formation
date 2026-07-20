<template>
    <h1>Navbar</h1>
    <Search :userName="defaultName" @onSearch="listenSearch" />
</template>

<script lang="ts" setup>
import Search from './Search.vue';

const defaultName = 'ben'

function listenSearch(userName: string) {
    console.log(userName)
}

</script>