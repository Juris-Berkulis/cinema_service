<script setup lang="ts">
import logo from '@/assets/img/logo.png';
import IconInstagram from './icons/IconInstagram.vue';
import IconFacebook from './icons/IconFacebook.vue';
import IconVk from './icons/IconVk.vue';
import { ref, type Ref } from 'vue';
import TheModal from './TheModal.vue';
import ThePolicy from './ThePolicy.vue';
import { routesObj } from '@/router';

const isShowPolicy: Ref<boolean> = ref(false);
</script>

<template>
<footer class="footer">
    <RouterLink :to="routesObj.home">
        <img class="logo" :src="logo" alt="logo">
    </RouterLink>
    <button class="btn" @click="isShowPolicy = true">Политика обработки персональных данных</button>
    <div class="socialMediaWrapper">
        <a class="socialMediaLink" href="#" target="_blank">
            <IconInstagram class="socialMedia" />
        </a>
        <a class="socialMediaLink" href="#" target="_blank">
            <IconFacebook class="socialMedia" />
        </a>
        <a class="socialMediaLink" href="#" target="_blank">
            <IconVk class="socialMedia" />
        </a>
    </div>
</footer>
<TheModal v-model:isShowModal="isShowPolicy">
    <ThePolicy />
</TheModal>
</template>

<style scoped lang="scss">
.footer  {
    padding: 42px calc((100% - 1440px + 2 * 120px) / 2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    row-gap: 26px;
    flex-wrap: wrap;
    background-color: #343338;

    @media (max-width: 1439px) {
        padding: 42px calc((100% - 768px + 2 * 64px) / 2);
    }

    @media (max-width: 767px) {
        padding: 28px max(16px, calc((100% - 360px + 2 * 16px) / 2)) 24px;
    }
}

.logo {
    width: 130px;
    height: 44px;
}

.btn {
    max-width: 183px;
    color: #FFF;
    font-family: 'Futura PT';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    text-decoration-line: underline;
    opacity: 0.7;

    &:hover {
        text-decoration: none;
        opacity: 1;
    }

    @media (max-width: 767px) {
        width: 100%;
        max-width: 100%;
        text-align: left;
        order: 2;
    }
}

.socialMediaWrapper {
    display: flex;
}

.socialMediaLink {
    display: block;
    margin-right: 20px;
    font-size: 0;
    line-height: 0;
    border-radius: 50%;
    background-color: transparent;
    transition: all 0.2s linear;

    @media (max-width: 1439px) {
        margin-right: 16px;
    }

    @media (max-width: 767px) {
        margin-right: 12px;
    }

    &:last-child {
        margin-right: 0;
    }

    &:hover {
        background-color: #ffffff;
    }
}

.socialMedia {
    position: relative;
    color: #ffffff;
    opacity: 0.8;
    transition: inherit;
}

.socialMediaLink:hover .socialMedia {
    color: #ff1e1e;
    opacity: 1;
}
</style>
