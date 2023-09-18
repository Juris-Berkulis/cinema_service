<script setup lang="ts">
import type { City } from '@/types';
import { ref, type Ref } from 'vue';
import BaseFormFieldError from './BaseFormFieldError.vue';
import IconArrowToDown from '../icons/IconArrowToDown.vue';

interface Props {
    selectedValue: City | '',
    error: string,
    optionsList: Array<City>,
    defaultText: string,
};

defineProps<Props>();

const emit = defineEmits(['update:selectedValue']);

const isShowOptionsList: Ref<boolean> = ref(false);

const changeSelectedValue = (option: City): void => {
    emit('update:selectedValue', option);
};
</script>

<template>
<div class="select container" :class="{error}" @click="isShowOptionsList = !isShowOptionsList">
    <div class="selectedValue" :class="{full: selectedValue}">
        <span>{{ selectedValue || defaultText }}</span>
        <IconArrowToDown class="arrow" :class="{open: isShowOptionsList}" />
    </div>
    <div class="optionsList" :class="{error}" v-if="isShowOptionsList">
        <div class="options" v-for="option of optionsList" :key="option" @click="changeSelectedValue(option)">{{ option }}</div>
    </div>
    <BaseFormFieldError :error="error" />
</div>
</template>

<style scoped lang="scss">
.select {
    position: relative;
    background-color: rgba(255, 255, 255, 0.10);
    transition: all 0.4s linear;

    &.error {
        background-color: rgba(236, 63, 63, 0.20);
    }
}

.selectedValue {
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: 0.4;
    padding: 18px 24px;
    transition: all 0.2s linear;
    cursor: pointer;

    @media (max-width: 1439px) {
        padding: 18px 20px;
    }

    &.full {
        opacity: 1;
    }
}

.arrow {
    transform: translateZ(0);
    transition: all 0.1s linear;

    &.open {
        transform: rotateZ(-180deg);
    }
}

.optionsList {
    position: absolute;
    top: calc(100% - 9px);
    right: 0;
    left: 0;
    padding-bottom: 9px;
    background-color: #2f2f2f;
    transition: all 0.2s linear;
    z-index: 9;
    cursor: pointer;

    &.error {
        background-color: #422020;
    }
}

.options {
    opacity: 0.8;
    padding: 9px 24px;
    transition: all 0.2s linear;

    @media (max-width: 1439px) {
        padding: 9px 20px;
    }

    &:hover {
        opacity: 1;
    }
}
</style>
