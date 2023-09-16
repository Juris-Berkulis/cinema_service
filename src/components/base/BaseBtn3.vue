<script setup lang="ts">
interface Props {
    to: `/${string}`,
};

defineProps<Props>();
</script>

<template>
<RouterLink class="button btn" :to="to">
    <slot>Подключить подписку</slot>
</RouterLink>
</template>

<style scoped lang="scss">
.btn {
    padding: 16px 32px;
    border: 1px solid rgba(236, 63, 63, 0.80);
    background-color: rgba(236, 63, 63, 0.15);

    &:hover {
        border: 1px solid #ff1e1e;
        background-color: #ff1e1e;
        box-shadow: 0px 2px 24px 0px rgba(255, 30, 30, 0.50);
    }
}
</style>
