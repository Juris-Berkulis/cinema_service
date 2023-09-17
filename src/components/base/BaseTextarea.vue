<script setup lang="ts">
interface Props {
    inputedValue: string,
    error: string,
    placeholder: string,
    cols?: `${number}` | number,
    rows?: `${number}` | number,
};

defineProps<Props>();

const emit = defineEmits(['update:inputedValue']);

const changeInputedValue = (event: Event): void => {
    emit('update:inputedValue', (event.target as HTMLInputElement).value);
};
</script>

<template>
<div>
    <textarea 
        :value="inputedValue" 
        @input="changeInputedValue" 
        :placeholder="placeholder"
        :cols="cols" 
        :rows="rows"
    ></textarea>
    <div v-if="error">{{ error }}</div>
</div>
</template>

<style scoped lang="scss">
</style>
