<script setup lang="ts">
import IconPaperclip from '../icons/IconPaperclip.vue';

interface Props {
    attachedFile: string,
    label: string,
};

defineProps<Props>();

defineEmits(['update:attachedFile']);
</script>

<template>
<div>
    <input 
        class="input"
        id="file"
        type="file"
        :value="attachedFile"
        @change="$emit('update:attachedFile', ($event.target as HTMLInputElement).value)" 
    >
    <label for="file">
        <span>{{ attachedFile || label }}</span>
        <IconPaperclip />
    </label>
</div>
</template>

<style scoped lang="scss">
.input {
    display: none;
}
</style>
