<script setup lang="ts">
import RequestAbout from '@/components/RequestAbout.vue';
import RequestForm from '@/components/RequestForm.vue';
</script>

<template>
<section class="section">
    <h1 class="title">Оставьте заявку</h1>
    <div class="container">
        <RequestForm class="form" />
        <RequestAbout />
    </div>
</section>
</template>

<style scoped lang="scss">
.section {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 120px;

    @media (max-width: 1439px) {
        max-width: 768px;
        padding: 0 64px;
    }

    @media (max-width: 767px) {
        max-width: 360px;
        padding: 0 16px;
    }
}

.title {
    margin-bottom: 48px;

    @media (max-width: 1439px) {
        margin-bottom: 36px;
    }

    @media (max-width: 767px) {
        margin-bottom: 24px;
    }
}

.container {
    display: flex;

    @media (max-width: 767px) {
        flex-direction: column;
    }
}

.form {
    width: 486px;
    margin-right: 126px;

    @media (max-width: 1439px) {
        width: 320px;
        margin-right: 53px;
    }

    @media (max-width: 767px) {
        width: 100%;
        margin-right: 0;
    }
}
</style>
