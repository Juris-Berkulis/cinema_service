<script setup lang="ts">
</script>

<template>
<div class="about">
    <p class="descriptiveText">Наша горячая линия</p>
    <a class="mb" href="tel:+78003823112">
        <h2 class="informationText">8 800 38 23 112</h2>
    </a>
    <p class="descriptiveText">Главный офис</p>
    <h3 class="mb informationText">г. Москва, Садовническая ул., 80</h3>
    <p class="descriptiveText">Часы работы</p>
    <h3 class="mb informationText">Пн-Пт с 10:00 до 22:00</h3>
</div>
</template>

<style scoped lang="scss">
.descriptiveText {
    margin-bottom: 8px;

    @media (max-width: 360px) {
        margin-bottom: 4px;
    }
}

a:has(.informationText) {
    display: block;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
}

.mb {
    margin-bottom: 32px;

    @media (max-width: 360px) {
        margin-bottom: 24px;
    }

    &:last-child {
        margin-bottom: 0;
    }
}

.informationText {
    text-align: left;
}
</style>
