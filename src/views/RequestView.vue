<script setup lang="ts">
import RequestAbout from '@/components/RequestAbout.vue';
import RequestForm from '@/components/RequestForm.vue';
import RequestSuccess from '@/components/RequestSuccess.vue';
import { ref, type Ref } from 'vue';

const isRequestSent: Ref<boolean> = ref(false);
</script>

<template>
<section class="section">
    <h1 class="title" v-if="!isRequestSent">Оставьте заявку</h1>
    <div class="container">
        <RequestSuccess class="request" v-if="isRequestSent" />
        <RequestForm class="request" v-else v-model:isRequestSent="isRequestSent" />
        <RequestAbout />
    </div>
</section>
</template>

<style scoped lang="scss">
.section {
    max-width: 1440px;
    margin: 0 auto;
    padding: 40px 120px 88px;

    @media (max-width: 1439px) {
        max-width: 768px;
        padding: 28px 64px 56px;
    }

    @media (max-width: 767px) {
        max-width: 360px;
        padding: 16px 16px 56px;
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

.request {
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
