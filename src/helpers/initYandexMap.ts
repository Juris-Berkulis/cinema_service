const createScriptElement = () => {
    const scriptElement = document.createElement("script");
    scriptElement.src = `https://api-maps.yandex.ru/v3/?apikey=${import.meta.env.VITE_API_KEY_FOR_YANDEX_MAP}&lang=ru_RU`;
    document.head.insertAdjacentElement("beforeend", scriptElement);
};

createScriptElement();
