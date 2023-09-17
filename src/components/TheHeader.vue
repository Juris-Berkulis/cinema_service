<script setup lang="ts">
import BaseBtn3 from './base/BaseBtn3.vue';
import logo from '@/assets/img/logo.png';
</script>

<template>
<header class="header">
    <RouterLink to="/">
        <img class="logo" :src="logo" alt="logo">
    </RouterLink>
    <BaseBtn3 to="/request" />
</header>
</template>

<style scoped lang="scss">
.header {
    padding: 22px 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000000;

    @media (max-width: 1439px) {
        padding: 14px 64px;
    }

    @media (max-width: 767px) {
        padding: 22px 16px;
    }
}

.logo {
    width: 130px;
    height: 44px;

    @media (max-width: 1439px) {
        width: 130px;
        height: 44px;
    }

    @media (max-width: 767px) {
        width: 106px;
        height: 36px;
    }
}
</style>
