<script setup lang="ts">
import { routesObj } from '@/router';
import BaseBtn3 from './base/BaseBtn3.vue';
import logo from '@/assets/img/logo.png';
</script>

<template>
<header class="header">
    <RouterLink :to="routesObj.home">
        <img class="logo" :src="logo" alt="logo">
    </RouterLink>
    <BaseBtn3 class="btn" v-if="routesObj.request !== $route.path" :to="routesObj.request" />
</header>
</template>

<style scoped lang="scss">
.header {
    height: 88px;
    padding: 0 calc((100% - 1440px + 2 * 120px) / 2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000000;

    @media (max-width: 1439px) {
        height: 72px;
        padding: 0 calc((100% - 768px + 2 * 64px) / 2);
    }

    @media (max-width: 767px) {
        height: 80px;
        padding: 0 max(16px, calc((100% - 360px + 2 * 16px) / 2));
    }
}

.logo {
    width: 130px;
    height: 44px;

    @media (max-width: 767px) {
        width: 106px;
        height: 36px;
    }
}

.btn {
    @media (max-width: 767px) {
        padding: 16px 20px;
    }
}
</style>
