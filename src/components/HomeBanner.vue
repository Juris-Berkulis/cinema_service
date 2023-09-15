<script setup lang="ts">
import BaseBtn1 from '@/components/base/BaseBtn1.vue';
import banner from '@/assets/img/vedmak/main/001.png';
import { computed, type ComputedRef } from 'vue';

const bannerBackground: ComputedRef<string> = computed(() => {
    return `linear-gradient(270deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.00) 51.53%), url(${banner}), lightgray 0px -185px / 151.975% 279.773% no-repeat`
});
</script>

<template>
<section class="section">
    <h1 class="title">Сериал Ведьмак</h1>
    <p class="description">Геральт из Ривии, наемный охотник за чудовищами, перенесший мутации, идет навстречу своей судьбе в неспокойном мире, где люди часто оказываются куда коварнее чудовищ.</p>
    <BaseBtn1 />
</section>
</template>

<style scoped lang="scss">
.section {
    position: relative;
    width: 100%;
    padding: 104px 120px 100px;
    opacity: 0.8;

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
        background: v-bind(bannerBackground);
        background-position: right 25%;
        transform: rotateY(180deg);
        background-size: cover;
    }
}

.title {
    margin-bottom: 24px;
}

.description {
    max-width: 424px;
    margin-bottom: 40px;
}
</style>
