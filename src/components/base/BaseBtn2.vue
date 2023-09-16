<script setup lang="ts">
</script>

<template>
<button class="btn">
    <slot>Показать еще</slot>
</button>
</template>

<style scoped lang="scss">
.btn {
    width: 100%;
    padding: 16px 32px;
    border: 1px solid rgba(236, 63, 63, 0.80);
    background-color: rgba(236, 63, 63, 0.10);

    &:hover {
        border: 1px solid #ff1e1e;
        background-color: #ff1e1e;
        box-shadow: 0px 2px 24px 0px rgba(255, 30, 30, 0.50);
    }
}
</style>
