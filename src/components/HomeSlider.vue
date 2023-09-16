<script setup lang="ts">
import { ref, type ComputedRef, type Ref, computed, watchEffect, onUnmounted } from 'vue';
import IconArrowToNext from './icons/IconArrowToNext.vue';
import IconArrowToPrev from './icons/IconArrowToPrev.vue';
import type { Actor } from '@/assets/data/data';

interface Props {
    actorsList: Actor[],
};

defineProps<Props>();

const sliderMovementStep: number = 10;
const intervalId: Ref<ReturnType<typeof setInterval> | undefined> = ref();
const decorRef: Ref<Element | null> = ref(null);
const actorsListRef: Ref<Element | null> = ref(null);
const maxSliderDisplacement: Ref<number> = ref(0);
const actorsListTranslateNumber: Ref<number> = ref(0);

const actorsListTranslate: ComputedRef<string> = computed(() => {
    return `translateX(${actorsListTranslateNumber.value}px)`
});

const isSliderBtnPrevDisabled: ComputedRef<boolean> = computed(() => {
    return actorsListTranslateNumber.value === 0
});

const isSliderBtnNextDisabled: ComputedRef<boolean> = computed(() => {
    return (actorsListTranslateNumber.value === maxSliderDisplacement.value && maxSliderDisplacement.value !== 0)
        || (!!actorsListRef.value && !!decorRef.value && actorsListRef.value.scrollWidth === decorRef.value.scrollWidth)
});

const changeMaxSliderDisplacement = (): void => {
    if (decorRef.value && actorsListRef.value) {
        maxSliderDisplacement.value = decorRef.value.scrollWidth - actorsListRef.value.scrollWidth;
    }
};

const changeParametres = (): void => {
    changeMaxSliderDisplacement();
    if (actorsListTranslateNumber.value < maxSliderDisplacement.value) {
        actorsListTranslateNumber.value = maxSliderDisplacement.value;
    }
};

watchEffect(() => {
    changeMaxSliderDisplacement();
});

window.addEventListener('resize', changeParametres);

onUnmounted(() => {
    window.removeEventListener('resize', changeParametres);
});

const stopSlider = (): void => {
    clearInterval(Number(intervalId.value));
};

const moveSlider = (direction: 'prev' | 'next'): void => {
    intervalId.value = setInterval(() => {
        switch (direction) {
            case 'prev': 
                if (isSliderBtnPrevDisabled.value) break;
                if (actorsListTranslateNumber.value + sliderMovementStep < 0) {
                    actorsListTranslateNumber.value += sliderMovementStep;
                } else {
                    actorsListTranslateNumber.value = 0;
                }
                break;
            case 'next': 
                if (isSliderBtnNextDisabled.value) break;
                if (maxSliderDisplacement.value < actorsListTranslateNumber.value - sliderMovementStep) {
                    actorsListTranslateNumber.value -= sliderMovementStep;
                } else {
                    actorsListTranslateNumber.value = maxSliderDisplacement.value;
                }
                break;
        }
    }, 10);
};

const actorItemBackground = (src: string): string => {
    return `url(${src})`
};
</script>

<template>
<section class="section">
    <div class="top">
        <h2 class="title">Актерский состав</h2>
        <div class="sliderBtns">
            <button class="sliderBtn" :disabled="isSliderBtnPrevDisabled">
                <IconArrowToPrev 
                    @mousedown="moveSlider('prev')" 
                    @mouseup="stopSlider" 
                    @touchstart="moveSlider('prev')" 
                    @touchend="stopSlider"
                    @toucemove="stopSlider" 
                    @contextmenu.prevent
                />
            </button>
            <button class="sliderBtn" :disabled="isSliderBtnNextDisabled">
                <IconArrowToNext 
                    @mousedown="moveSlider('next')" 
                    @mouseup="stopSlider" 
                    @touchstart="moveSlider('next')" 
                    @touchend="stopSlider"
                    @toucemove="stopSlider" 
                    @contextmenu.prevent
                />
            </button>
        </div>
    </div>
    <div class="decor" :class="{decor__75: !isSliderBtnPrevDisabled && !isSliderBtnNextDisabled, decor__100: isSliderBtnNextDisabled}" ref="decorRef"></div>
    <div class="actors__list" ref="actorsListRef">
        <div class="actor__item" :style="{backgroundImage: actorItemBackground(actor.src)}" v-for="actor of actorsList" :key="actor.id">
            <div class="actor__main">
                <h4 class="actor__movieHero"><b>{{ actor.movieHero }}</b></h4>
                <h4 class="actor__name">{{ actor.actorName }}</h4>
            </div>
            <p class="actor__description">{{ actor.description }}</p>
        </div>
    </div>
</section>
</template>

<style scoped lang="scss">
.section {
    padding: 0 120px;
    overflow: hidden;

    @media (max-width: 768px) {
        padding: 0 64px;
    }

    @media (max-width: 360px) {
        padding: 0 16px;
    }
}

.top {
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 360px) {
        margin-bottom: 16px;
    }
}

.sliderBtns {
    display: flex;
    gap: 24px;
}

.sliderBtn {
    width: 32px;
    height: 32px;
    color: #ec3f3f;

    &:hover {
        color: #ff1e1e;
    }

    &:disabled {
        color: #ffffff;
        opacity: 0.3;
        cursor: default;
    }

    @media (max-width: 360px) {
        width: 28px;
        height: 28px;
    }
}

.decor {
    position: relative;
    height: 2px;
    margin-bottom: 32px;
    opacity: 0.3;
    background-color: #ffffff;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 50%;
        background-color: #ec3f3f;
        transition: all 0.4s linear;
    }

    &__75::before {
        width: 75%;
    }

    &__100::before {
        width: 100%;
    }

    @media (max-width: 768px) {
        margin-bottom: 24px;
    }
}

.actors__list {
    display: flex;
    transition: all 0.4s linear;
    transform: v-bind(actorsListTranslate);
}

.actor__item {
    width: 282px;
    min-width: 282px;
    height: 400px;
    margin-right: 24px;
    padding: 24px 24px 32px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: lightgray;

    @media (max-width: 768px) {
        width: 256px;
        min-width: 256px;
        height: 360px;
        padding: 16px 16px 24px;
    }

    @media (max-width: 360px) {
        width: 216px;
        min-width: 216px;
        height: 280px;
        margin-right: 16px;
        padding: 16px;
    }

    &:last-child {
        margin-right: 0;
    }
}

.actor__movieHero {
    margin-bottom: 4px;
}

.actor__description {
    display: none;
    margin-top: auto;
}

.actor__item:hover .actor__description {
    display: block;
}
</style>
