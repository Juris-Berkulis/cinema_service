<script setup lang="ts">
interface Props {
    inputedValue: string,
};

defineProps<Props>();

defineEmits(['update:inputedValue']);
</script>

<template>
<textarea 
    :value="inputedValue" 
    @input="$emit('update:inputedValue', ($event.target as HTMLInputElement).value)" 
></textarea>
</template>

<style scoped lang="scss">
</style>
