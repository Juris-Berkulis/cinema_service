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
    padding: 22px calc((100% - 1440px + 2 * 120px) / 2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000000;

    @media (max-width: 1439px) {
        padding: 14px calc((100% - 768px + 2 * 64px) / 2);
    }

    @media (max-width: 767px) {
        padding: 22px max(16px, calc((100% - 360px + 2 * 16px) / 2));
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
</style>
