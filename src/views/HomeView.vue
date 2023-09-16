<script setup lang="ts">
import HomeBanner from '@/components/HomeBanner.vue';
import HomeSlider from '@/components/HomeSlider.vue';
import HomeStills from '@/components/HomeStills.vue';
import { movie } from '@/assets/data/data';

</script>

<template>
<HomeBanner :banner="movie.banner" />
<HomeSlider :actorsList="movie.actors" />
<HomeStills :stillsList="movie.stills" />
</template>

<style scoped lang="scss">
section {
    margin-bottom: 72px;

    @media (max-width: 768px) {
        margin-bottom: 64px;
    }

    &:last-child {
        margin-bottom: 0;
    }
}
</style>
