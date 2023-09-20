<script setup lang="ts">
import BaseFormFieldError from '@/components/base/BaseFormFieldError.vue';

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
<div class="container">
    <textarea 
        class="textarea"
        :class="{error}"
        :value="inputedValue" 
        @input="changeInputedValue" 
        :placeholder="placeholder"
        :cols="cols" 
        :rows="rows"
    ></textarea>
    <BaseFormFieldError :error="error" />
</div>
</template>

<style scoped lang="scss">
.textarea {
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
</style>
