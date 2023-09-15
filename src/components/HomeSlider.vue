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

const changeMaxSliderDisplacement = (): void => {
    if (decorRef.value && actorsListRef.value) {
        maxSliderDisplacement.value = decorRef.value.scrollWidth - actorsListRef.value.scrollWidth;
    }
};

const changeParametres = () => {
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
    clearInterval(intervalId.value);
};

const moveSlider = (direction: 'prev' | 'next'): void => {
    intervalId.value = setInterval(() => {
        switch (direction) {
            case 'prev': 
                if (actorsListTranslateNumber.value + sliderMovementStep < 0) {
                    actorsListTranslateNumber.value += sliderMovementStep;
                } else {
                    actorsListTranslateNumber.value = 0;
                }
                break;
            case 'next': 
                if (maxSliderDisplacement.value < actorsListTranslateNumber.value - sliderMovementStep) {
                    actorsListTranslateNumber.value -= sliderMovementStep;
                } else {
                    actorsListTranslateNumber.value = maxSliderDisplacement.value;
                }
                break;
        }
    }, 1);
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
            <button>
                <IconArrowToPrev 
                    @mousedown="moveSlider('prev')" 
                    @mouseup="stopSlider" 
                    @touchstart="moveSlider('prev')" 
                    @touchend="stopSlider"
                    @toucemove="stopSlider" 
                    @contextmenu.prevent
                />
            </button>
            <button>
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
    <div class="decor" ref="decorRef"></div>
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
}

.top {
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
}

.sliderBtns {
    display: flex;
    gap: 24px;
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
        max-width: 588px;
        background-color: #ec3f3f;;
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
