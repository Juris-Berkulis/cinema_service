<script setup lang="ts">
import { computed, type ComputedRef } from 'vue';
import BaseBtn1 from '@/components/base/BaseBtn1.vue';
import { routesObj } from '@/router';
import type { Banner } from '@/assets/data/data';

interface Props {
    banner: Banner,
};

const props = defineProps<Props>();

const bannerBackground: ComputedRef<string> = computed(() => {
    return `linear-gradient(270deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.00) 51.53%), url(${props.banner.src}), lightgray 0px -185px / 151.975% 279.773% no-repeat`
});
</script>

<template>
<section class="section">
    <h1 class="title">{{ banner.title }}</h1>
    <p class="description">{{ banner.description }}</p>
    <BaseBtn1 :to="routesObj.request">Смотреть сериал</BaseBtn1>
</section>
</template>

<style scoped lang="scss">
.section {
    position: relative;
    max-width: 1440px;
    margin-right: auto;
    margin-left: auto;
    padding: 104px 120px 100px;
    z-index: 2;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        opacity: 0.8;
        background: v-bind(bannerBackground);
        background-position: 35% 25%;
        transform: rotateY(180deg);
        background-size: cover;
    }

    @media (max-width: 1439px) {
        max-width: 768px;
        padding: 60px 64px 76px;
    }

    @media (max-width: 767px) {
        max-width: 360px;
        padding: 56px 16px 73px;
        margin-bottom: 16px;
    }
}

.title {
    margin-bottom: 24px;
    
    @media (max-width: 1439px) {
        margin-bottom: 16px;
    }

    @media (max-width: 767px) {
        margin-bottom: 6px;
    }
}

.description {
    max-width: 424px;
    margin-bottom: 40px;

    @media (max-width: 1439px) {
        max-width: 370px;
        margin-bottom: 48px;
    }

    @media (max-width: 767px) {
        max-width: 280px;
        margin-bottom: 44px;
    }
}
</style>
