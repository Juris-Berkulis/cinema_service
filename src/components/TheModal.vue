<script setup lang="ts">
import IconCrossToClose from './icons/IconCrossToClose.vue';

interface Props {
    isShowModal: boolean,
};

defineProps<Props>();

defineEmits(['update:isShowModal']);
</script>

<template>
<Teleport to="body">
    <Transition name="modal">
        <div v-if="isShowModal" class="modalBack" id="modal">
            <div class="modalContainer">
                <button class="modalCloseBtn" @click="$emit('update:isShowModal', false)">
                    <IconCrossToClose />
                </button>
                <div class="modalSlot">
                    <slot />
                </div>
            </div>
        </div>
    </Transition>
</Teleport>
</template>

<style scoped lang="scss">
.modal-enter-from {
    opacity: 0;
}

.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .modalContainer,
.modal-leave-to .modalContainer {
    transform: scale(1.1);
}

.modalBack {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.40);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s linear;
}

.modalContainer {
    position: relative;
    width: 1080px;
    height: 70vh;
    padding: 56px 80px;
    background-color: #ffffff;
    transition: all 0.4s linear;

    @media (max-width: 1439px) {
        padding: 48px 40px;
    }

    @media (max-width: 1439px) {
        padding: 0 16px;
    }
}

.modalCloseBtn {
    position: absolute;
    top: 32px;
    right: 32px;
    transition: all 0.2s linear;

    @media (max-width: 767px) {
        top: 24px;
        right: 16px;
    }

    &:hover {
        transform: rotateY(180deg);
    }
}

.modalSlot {
    width: 100%;
    height: 100%;
    overflow: auto;

    @media (max-width: 767px) {
        padding: 24px 0;
    }
}
</style>
