<script setup lang="ts">
import type { City } from '@/types';
import { ref, type Ref } from 'vue';

interface Props {
    selectedValue: City | '',
    optionsList: Array<City>,
    defaultText: string,
};

defineProps<Props>();

const emit = defineEmits(['update:selectedValue']);

const changeSelectedValue = (option: City): void => {
    emit('update:selectedValue', option);
};

const isShowOptionsList: Ref<boolean> = ref(false);
</script>

<template>
<div class="select" @click="isShowOptionsList = !isShowOptionsList">
    <div class="text">{{ selectedValue || defaultText }}</div>
    <div class="optionsList" v-if="isShowOptionsList">
        <div class="options" v-for="option of optionsList" :key="option" @click="changeSelectedValue(option)">{{ option }}</div>
    </div>
</div>
</template>

<style scoped lang="scss">
.select {
    position: relative;
    cursor: pointer;
}

.optionsList {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
}
</style>
