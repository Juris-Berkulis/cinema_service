<script setup lang="ts">
import HomeBanner from '@/components/HomeBanner.vue';
import HomeSlider from '@/components/HomeSlider.vue';
import { movie } from '@/assets/data/data';

</script>

<template>
<HomeBanner :banner="movie.banner" />
<HomeSlider :actorsList="movie.actors" />
</template>

<style scoped lang="scss">
</style>
