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
    padding-bottom: 96px;
    background-color: #181818;

    @media (max-width: 768px) {
        padding-bottom: 0;
    }
}
</style>
