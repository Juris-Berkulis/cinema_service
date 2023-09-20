<script setup lang="ts">
import BaseBtn1 from '@/components/base/BaseBtn1.vue';
import { routesObj } from '@/router';
</script>

<template>
<div class="success">
    <h1 class="title">Заявка отправлена!</h1>
    <h4 class="description">Мы получили вашу заявку. Наши специалисты свяжутся с вами в ближайшее время, чтобы уточнить все детали заказа.</h4>
    <BaseBtn1 class="btn" :to="routesObj.home">Вернуться на главную</BaseBtn1>
</div>
</template>

<style scoped lang="scss">
.success {
    @media (max-width: 767px) {
        margin-bottom: 52px;
    }
}

.title {
    margin-bottom: 24px;

    @media (max-width: 767px) {
        margin-bottom: 16px;
    }
}

.description {
    margin-bottom: 40px;

    @media (max-width: 1439px) {
        margin-bottom: 24px;
    }

    @media (max-width: 767px) {
        margin-bottom: 32px;
    }
}

.btn {
    @media (max-width: 767px) {
        width: 100%;
    }
}
</style>
