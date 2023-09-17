<script setup lang="ts">
import { ref, type Ref, onUnmounted } from 'vue';
import BaseBtn2 from './base/BaseBtn2.vue';
import type { Stills } from '@/assets/data/data';
import { useEventListener } from '@/composables/event';

interface Props {
    stillsList: Stills[],
};

const props = defineProps<Props>();

const page: Ref<number> = ref(1);
const stillsListForShow: Ref<Array<Stills>> = ref([]);
const stillsCountOnEachPage: Ref<3 | 5> = ref(5);

const addStillsIntoList = (): void => {
    stillsListForShow.value.push(...props.stillsList.slice((page.value - 1) * stillsCountOnEachPage.value, page.value * stillsCountOnEachPage.value));
};

const nextPage = (): void => {
    page.value++;
    addStillsIntoList();
};

const mobileWidthMediaQuery: MediaQueryList = window.matchMedia("(max-width: 767px)");

const changeStills = (event?: MediaQueryListEvent): void => {
    if (event?.matches || mobileWidthMediaQuery.matches) {
        stillsCountOnEachPage.value = 3;
    } else {
        stillsCountOnEachPage.value = 5;
    }
    stillsListForShow.value.length = 0;
    page.value = 1;
    addStillsIntoList();
}

useEventListener(mobileWidthMediaQuery, 'change', changeStills);

changeStills();
</script>

<template>
<section class="section">
    <h2 class="title">Кадры со съемок</h2>
    <div class="stillsList">
        <div class="stillItem" :style="{backgroundImage: `url(${still.src})`}" v-for="still of stillsListForShow" :key="still.id"></div>
    </div>
    <BaseBtn2 v-if="stillsListForShow.length !== stillsList.length" @click="nextPage" />
</section>
</template>

<style scoped lang="scss">
.section {
    padding: 0 120px;

    @media (max-width: 1439px) {
        padding: 0 64px;
    }

    @media (max-width: 767px) {
        padding: 0 16px;
        margin-bottom: 48px;
    }
}

.title {
    margin-bottom: 40px;

    @media (max-width: 1439px) {
        margin-bottom: 24px;
    }
}

.stillsList {
    margin-bottom: 32px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 24px;

    &:last-child {
        margin-bottom: 0;
    }

    @media (max-width: 1439px) {
        margin-bottom: 24px;
        grid-gap: 16px;
    }

    @media (max-width: 767px) {
        grid-template-columns: repeat(1, 1fr);
    }
}

.stillItem{
    width: 100%;
    aspect-ratio: 1;
    background-color: lightgray;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    &:nth-child(5n + 1) {
        grid-row: auto / span 2;
        grid-column: auto / span 2;
    }

    @media (max-width: 767px) {
        aspect-ratio: calc(328 / 212);

        &:nth-child(5n + 1) {
            aspect-ratio: calc(328 / 212);
            grid-row: auto / span 1;
            grid-column: auto / span 1;
        }
    }
}
</style>
