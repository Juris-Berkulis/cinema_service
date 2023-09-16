<script setup lang="ts">
interface Props {
    type: 'text' | 'email' | 'tel',
    inputedValue: string,
    label: string,
};

defineProps<Props>();

defineEmits(['update:inputedValue']);
</script>

<template>
<div>
    <input 
        :type="type"
        :value="inputedValue" 
        @input="$emit('update:inputedValue', ($event.target as HTMLInputElement).value)" 
    >
    <span>{{ label }}</span>
</div>
</template>

<style scoped lang="scss">
</style>
