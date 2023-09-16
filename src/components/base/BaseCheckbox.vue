<script setup lang="ts">
import { ref, watchEffect, type Ref } from 'vue';
import IconCheckmark from '../icons/IconCheckmark.vue';

interface Props {
    isNoted: boolean,
    label: string,
};

const props = defineProps<Props>();

const emit = defineEmits(['update:isNoted']);

const isChecked: Ref<boolean> = ref(props.isNoted);

watchEffect(() => {
    emit('update:isNoted', isChecked.value);
});
</script>

<template>
<div>
    <input 
        class="input"
        id="checkbox"
        type="checkbox" 
        v-model="isChecked"
    >
    <label for="checkbox">
        <div>
            <IconCheckmark v-if="isNoted" />
        </div>
        <span>{{ label }}</span>
    </label>
</div>
</template>

<style scoped lang="scss">
.input {
    display: none;
}
</style>
