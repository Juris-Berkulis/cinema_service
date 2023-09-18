<script setup lang="ts">
import BaseFormFieldError from './BaseFormFieldError.vue';

interface Props {
    type: 'text' | 'email' | 'tel',
    inputedValue: string,
    error: string,
    label: string,
    mask?: (value: string) => string,
};

const props = defineProps<Props>();

const emit = defineEmits(['update:inputedValue', 'update:inputedOriginalValue']);

const changeInputedValue = (event: Event): void => {
    if (props.mask) {
        const inputedChart: string | null = (event as InputEvent).data;
        const value: string = inputedChart ? props.inputedValue + inputedChart : props.inputedValue.slice(0, -1);
        (event.target as HTMLInputElement).value = props.mask(value);
        emit('update:inputedValue', value);
    } else {
        emit('update:inputedValue', (event.target as HTMLInputElement).value);
    }
};
</script>

<template>
<div class="container">
    <input 
        class="input"
        :class="{error}"
        :type="type"
        :value="mask ? mask(inputedValue) : inputedValue"
        @input="changeInputedValue" 
    >
    <span class="label" :class="{full: inputedValue}">{{ label }}</span>
    <BaseFormFieldError :error="error" />
</div>
</template>

<style scoped lang="scss">
.input {
    padding: 18px 24px;
    background-color: rgba(255, 255, 255, 0.10);
    transition: all 0.2s linear;

    @media (max-width: 1439px) {
        padding: 18px 20px;
    }

    &.error {
        background-color: rgba(236, 63, 63, 0.2);
    }
}

.label {
    position: absolute;
    top: 50%;
    left: 24px;
    transform: translateY(-50%);
    opacity: 0.4;
    transition: all 0.4s linear;

    @media (max-width: 1439px) {
        left: 20px;
    }
}

.label.full, 
.input:focus + .label {
    top: 8px;
    transform: translateY(0);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
}
</style>
