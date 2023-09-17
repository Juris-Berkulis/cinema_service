<script setup lang="ts">
import TheHeader from './components/TheHeader.vue';

</script>

<template>
<TheHeader />
<main>
    <RouterView />
</main>
</template>

<style scoped lang="scss">
main {
    background-color: #181818;
}
</style>
