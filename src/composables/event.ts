import { onMounted, onUnmounted } from 'vue';

type Target = Window & typeof globalThis | MediaQueryList;
type AppEvent = keyof WindowEventMap;
type Callback = () => any;

export function useEventListener(target: Target, event: AppEvent, callback: Callback) {
    onMounted(() => target.addEventListener(event, callback));
    onUnmounted(() => target.removeEventListener(event, callback));
};
