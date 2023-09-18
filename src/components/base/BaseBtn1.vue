<script setup lang="ts">
interface Props {
    to?: `/${string}`,
};

defineProps<Props>();
</script>

<template>
<RouterLink class="button btn" v-if="to" :to="to">
    <slot>Подключить подписку</slot>
</RouterLink>
<button class="btn" v-else>
    <slot>Оставить заявку</slot>
</button>
</template>

<style scoped lang="scss">
.btn {
    padding: 16px 32px;
    background-color: #ec3f3f;

    &:hover {
        background: #ff1e1e;
        box-shadow: 0px 2px 24px 0px rgba(255, 30, 30, 0.50);
    }
}
</style>
