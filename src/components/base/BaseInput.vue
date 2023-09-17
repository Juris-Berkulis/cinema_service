<script setup lang="ts">
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
<div>
    <input 
        :type="type"
        :value="mask ? mask(inputedValue) : inputedValue"
        @input="changeInputedValue" 
    >
    <span>{{ label }}</span>
    <div v-if="error">{{ error }}</div>
</div>
</template>

<style scoped lang="scss">
</style>
