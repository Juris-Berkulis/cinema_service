<script setup lang="ts">
import HomeBanner from '@/components/HomeBanner.vue';
import HomeSlider from '@/components/HomeSlider.vue';
import HomeStills from '@/components/HomeStills.vue';
import HomeMap from '@/components/HomeMap.vue';
import { movie } from '@/assets/data/data';
</script>

<template>
<HomeBanner :banner="movie.banner" />
<HomeSlider :actorsList="movie.actors" />
<HomeStills :stillsList="movie.stills" />
<HomeMap />
</template>

<style scoped lang="scss">
section {
    margin-bottom: 72px;

    @media (max-width: 1439px) {
        margin-bottom: 64px;
    }

    &:last-child {
        margin-bottom: 0;
        padding-bottom: 96px;

        @media (max-width: 1439px) {
            padding-bottom: 0;
        }
    }
}
</style>
