<script setup lang="ts">
import { ref, type Ref } from 'vue';

interface Props {
    type: 'text' | 'email' | 'tel',
    inputedValue: string,
    error: string,
    label: string,
    mask?: (value: string) => string,
};

const props = defineProps<Props>();

const emit = defineEmits(['update:inputedValue']);

const inputedOriginalValue: Ref<string> = ref('');

const changeInputedValue = (event: Event): void => {
    if (props.mask) {
        const inputedChart: string | null = (event as InputEvent).data;
        if (inputedChart) {
            inputedOriginalValue.value += inputedChart;
        } else {
            inputedOriginalValue.value = inputedOriginalValue.value.slice(0, -1);
        }
        emit('update:inputedValue', props.mask(inputedOriginalValue.value));
    } else {
        emit('update:inputedValue', (event.target as HTMLInputElement).value);
    }
};
</script>

<template>
<div>
    <input 
        :type="type"
        :value="inputedValue" 
        @input="changeInputedValue" 
    >
    <span>{{ label }}</span>
    <div v-if="error">{{ error }}</div>
</div>
</template>

<style scoped lang="scss">
</style>
