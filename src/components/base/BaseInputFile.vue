<script setup lang="ts">
import IconPaperclip from '../icons/IconPaperclip.vue';
import BaseFormFieldError from './BaseFormFieldError.vue';

interface Props {
    attachedFile: string,
    error: string,
    label: string,
};

defineProps<Props>();

const emit = defineEmits(['update:attachedFile']);

const changeInputedValue = (event: Event): void => {
    emit('update:attachedFile', (event.target as HTMLInputElement).value);
};
</script>

<template>
<div class="container">
    <input 
        class="input"
        id="file"
        type="file"
        :value="attachedFile"
        @change="changeInputedValue" 
    >
    <label class="label" :class="{error}" for="file">
        <span class="fileName" :class="{full: attachedFile}">{{ attachedFile || label }}</span>
        <IconPaperclip />
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
    justify-content: space-between;
    align-items: center;
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

.fileName {
        display: block;
        opacity: 0.4;

        &.full {
            opacity: 1;
        }
    }
</style>
