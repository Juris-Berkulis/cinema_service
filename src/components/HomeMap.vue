<script setup lang="ts">
import { ref, type Ref, onBeforeUnmount } from "vue";
import type { LngLat, YMap, YMapMarker, YMapLocationRequest } from "@yandex/ymaps3-types";
import point from '@/assets/img/point.png';

const isMobile: boolean = document.documentElement.clientWidth <= 767;
const mapRef: Ref<HTMLElement | null> = ref(null);
const timerId: Ref<ReturnType<typeof setTimeout> | undefined> = ref();

interface Point {
    latitude: number, 
    longitude: number,
};

const pointsList: Point[] = [
    {latitude: 37.622218, longitude: 55.750906},
    {latitude: 37.552725, longitude: 55.754544},
    {latitude: 37.528613, longitude: 55.777323},
];

const createImageElement = (): HTMLImageElement => {
    const imageElement: HTMLImageElement = document.createElement('img');
    imageElement.src = point;
    imageElement.alt = 'point';
    imageElement.className = 'map__point';

    return imageElement
};

const createMarker = (latitude: number, longitude: number, markerElement: HTMLImageElement): YMapMarker => {
    const marker: YMapMarker = new ymaps3.YMapMarker({
        source: 'markerSource',
        coordinates: [latitude, longitude],
        draggable: false,
        mapFollowsOnDrag: false,
    }, markerElement);

    return marker
};

const startingLocation = (): YMapLocationRequest => {
    if (isMobile)  {
        return {
            center: [37.579829, 55.752643] as LngLat, 
            zoom: 12,
        }
    } else {
        return {
            center: [37.622591, 55.750105] as LngLat, 
            zoom: 12,
        }
    }
};

const initMap = (): void => {
    ymaps3.ready.then(() => {
        if (mapRef.value) {
            const map: YMap = new ymaps3.YMap(mapRef.value, {
                location: startingLocation(),
            });

            map.addChild(new ymaps3.YMapDefaultSchemeLayer({theme: 'light'}));

            map.addChild(new ymaps3.YMapFeatureDataSource({
                id: 'markerSource',
            }));

            map.addChild(new ymaps3.YMapLayer({
                source: 'markerSource',
                type: 'markers',
                zIndex: 2020,
            }));

            pointsList.forEach((point: Point) => {
                map.addChild(createMarker(point.latitude, point.longitude, createImageElement()));
            });
        }
    });
};

timerId.value = setTimeout(() => {
    initMap();
}, 2000);

onBeforeUnmount(() => {
    clearTimeout(Number(timerId.value));
});
</script>

<template>
<section class="section">
    <h2 class="title">Магазины мерча ведьмака</h2>
    <div class="map" ref="mapRef"></div>
</section>
</template>

<style scoped lang="scss">
.section {
    max-width: 1440px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 120px;

    @media (max-width: 1439px) {
        max-width: 768px;
        padding: 0;
    }

    @media (max-width: 767px) {
        max-width: 360px;
    }
}

.title {
    margin-bottom: 40px;

    @media (max-width: 1439px) {
        margin-bottom: 24px;
        padding: 0 64px;
    }

    @media (max-width: 767px) {
        padding: 0 16px;
    }
}

.map {
    width: 100%;
    height: 540px;

    @media (max-width: 1439px) {
        height: 400px;
    }
}
</style>

<style lang="scss">
.map canvas {
    filter: grayscale(1) brightness(0.5);
}

.map .ymaps3x0--map-copyrights {
    display: none;
}

.map__point {
    height: 40px;
    width: 40px;
    transform: translate(-50%, -50%);
}
</style>
