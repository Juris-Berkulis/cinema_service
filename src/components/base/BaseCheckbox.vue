<script setup lang="ts">
import { ref, watchEffect, type Ref } from 'vue';
import IconCheckmark from '../icons/IconCheckmark.vue';
import BaseFormFieldError from './BaseFormFieldError.vue';

interface Props {
    isNoted: boolean,
    error: string,
    label: string,
};

const props = defineProps<Props>();

const emit = defineEmits(['update:isNoted']);

const isChecked: Ref<boolean> = ref(props.isNoted);

watchEffect(() => {
    emit('update:isNoted', isChecked.value);
});
</script>

<template>
<div class="container">
    <input 
        class="input"
        id="checkbox"
        type="checkbox" 
        v-model="isChecked"
    >
    <label class="label" for="checkbox">
        <div class="square" :class="{error}">
            <IconCheckmark v-if="isNoted" />
        </div>
        <span class="labelText">{{ label }}</span>
    </label>
    <BaseFormFieldError :error="error" />
</div>
</template>

<style scoped lang="scss">
.container {
    position: relative;
    font-family: Futura PT;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
}

.input {
    display: none;
}

.label {
    display: flex;
    align-items: center;
}

.square {
    width: 32px;
    min-width: 32px;
    height: 32px;
    min-height: 32px;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.30);
    background-color: rgba(255, 255, 255, 0.15);
    transition: all 0.4s linear;

    @media (max-width: 767px) {
        margin-right: 16px;
    }

    &.error {
        border: 1px solid rgba(236, 63, 63, 0.30);
        background-color: rgba(236, 63, 63, 0.15);
    }
}
</style>
