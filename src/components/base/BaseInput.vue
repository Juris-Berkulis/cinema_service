<script setup lang="ts">
interface Props {
    type: 'text' | 'email' | 'tel',
    inputedValue: string,
    error: string,
    label: string,
};

defineProps<Props>();

const emit = defineEmits(['update:inputedValue']);

const changeInputedValue = (event: Event): void => {
    emit('update:inputedValue', (event.target as HTMLInputElement).value);
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
