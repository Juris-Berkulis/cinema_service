<script setup lang="ts">
import IconPaperclip from '../icons/IconPaperclip.vue';

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
<div>
    <input 
        class="input"
        id="file"
        type="file"
        :value="attachedFile"
        @change="changeInputedValue" 
    >
    <label for="file">
        <span>{{ attachedFile || label }}</span>
        <IconPaperclip />
    </label>
    <div v-if="error">{{ error }}</div>
</div>
</template>

<style scoped lang="scss">
.input {
    display: none;
}
</style>
