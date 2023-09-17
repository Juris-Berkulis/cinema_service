<script setup lang="ts">
import { ref, watch, type Ref, type ComputedRef, computed } from 'vue';
import BaseBtn1 from './BaseBtn1.vue';
import BaseSelect from './BaseSelect.vue';
import BaseInput from './BaseInput.vue';
import BaseTextarea from './BaseTextarea.vue';
import BaseInputFile from './BaseInputFile.vue';
import BaseCheckbox from './BaseCheckbox.vue';
import { regExpMatching, requiredField } from '@/composables/validation';
import { type City } from '@/types';

const options: City[] = ['Москва', 'Санкт-Петербург', 'Казань', 'Краснодар', 'Ростов-на-Дону'];
const regExpForEmail = /^[a-z0-9\.\-_]{1,}@[a-z]{2,4}\.[a-z]{2,4}$/;
const regExpForTel = /^[0-9]{10}$/;
const textForEmptedCityError = 'Город не выбран';
const textForRequiredFieldError = 'Поле не заполненно';
const textForRegExpError = 'Неверный формат';

const selectedCity: Ref<City | ''> = ref('');
const inputedName: Ref<string> = ref('');
const inputedEmail: Ref<string> = ref('');
const inputedTel: Ref<string> = ref('');
const inputedRemark: Ref<string> = ref('');
const attachedFile: Ref<string> = ref('');
const isConsent: Ref<boolean> = ref(false);

const errorForSelectedCity: Ref<string> = ref('');
const errorForInputedName: Ref<string> = ref('');
const errorForInputedEmail: Ref<string> = ref('');
const errorForInputedTel: Ref<string> = ref('');
const errorForInputedRemark: Ref<string> = ref('');
const errorForAttachedFile: Ref<string> = ref('');
const errorForIsConsent: Ref<string> = ref('');

const errorForForm: ComputedRef<boolean> = computed(() => {
    return !!errorForSelectedCity.value
        || !!errorForInputedName.value
        || !!errorForInputedEmail.value
        || !!errorForInputedTel.value
        || !!errorForInputedRemark.value
        || !!errorForAttachedFile.value
        || !!errorForIsConsent.value
});

const checkSelectedCity = (): void => {
    switch (true) {
        case requiredField(selectedCity.value): errorForSelectedCity.value = textForEmptedCityError; break;
        default: errorForSelectedCity.value = '';
    }
};

const checkInputedName = (): void => {
    switch (true) {
        case requiredField(inputedName.value): errorForInputedName.value = textForRequiredFieldError; break;
        default: errorForInputedName.value = '';
    }
}
const checkInputedEmail = (): void => {
    switch (true) {
        case requiredField(inputedEmail.value): errorForInputedEmail.value = textForRequiredFieldError; break;
        case regExpMatching(inputedEmail.value, regExpForEmail): errorForInputedEmail.value = textForRegExpError; break;
        default: errorForInputedEmail.value = '';
    }
}
const checkInputedTel = (): void => {
    switch (true) {
        case requiredField(inputedTel.value): errorForInputedTel.value = textForRequiredFieldError; break;
        case regExpMatching(inputedTel.value, regExpForTel): errorForInputedTel.value = textForRegExpError; break;
        default: errorForInputedTel.value = '';
    }
}
const checkInputedRemark = (): void => {
    switch (true) {
        case requiredField(inputedRemark.value): errorForInputedRemark.value = textForRequiredFieldError; break;
        default: errorForInputedRemark.value = '';
    }
}
const checkAttachedFile = (): void => {
    switch (true) {
        case requiredField(attachedFile.value): errorForAttachedFile.value = textForRequiredFieldError; break;
        default: errorForAttachedFile.value = '';
    }
}
const checkIsConsent = (): void => {
    switch (true) {
        case requiredField(isConsent.value): errorForIsConsent.value = textForRequiredFieldError; break;
        default: errorForIsConsent.value = '';
    }
}

const checkAllFields = (): void => {
    checkSelectedCity();
    checkInputedName();
    checkInputedEmail();
    checkInputedTel();
    checkInputedRemark();
    checkAttachedFile();
    checkIsConsent();
};

watch(selectedCity, () => {
    checkSelectedCity();
});

watch(inputedName, () => {
    checkInputedName();
});

watch(inputedEmail, () => {
    checkInputedEmail();
});

watch(inputedTel, () => {
    checkInputedTel();
});

watch(inputedRemark, () => {
    checkInputedRemark();
});

watch(attachedFile, () => {
    checkAttachedFile();
});

watch(isConsent, () => {
    checkIsConsent();
});

const submit = (): void => {
    checkAllFields();

    if (!errorForForm.value) {
        const data = {
            selectedCity: selectedCity.value,
            inputedName: inputedName.value,
            inputedEmail: inputedEmail.value,
            inputedTel: inputedTel.value,
            inputedRemark: inputedRemark.value,
            attachedFile: attachedFile.value,
            isConsent: isConsent.value,
        };

        console.log(data);
    }
}
</script>

<template>
<form class="form" @submit.prevent="submit">
    <BaseSelect v-model:selectedValue="selectedCity" :error="errorForSelectedCity" :optionsList="options" defaultText="Выберете город" />
    <BaseInput v-model:inputedValue="inputedName" :error="errorForInputedName" type="text" label="Имя" />
    <BaseInput v-model:inputedValue="inputedEmail" :error="errorForInputedEmail" type="email" label="Email" />
    <BaseInput v-model:inputedValue="inputedTel" :error="errorForInputedTel" type="tel" label="Телефон" />
    <BaseTextarea v-model:inputedValue="inputedRemark" :error="errorForInputedRemark" placeholder="Оставьте пометку к заказу" cols="30" rows="10" />
    <BaseInputFile v-model:attachedFile="attachedFile" :error="errorForAttachedFile" label="Прикрепите файл" />
    <BaseCheckbox v-model:isNoted="isConsent" :error="errorForIsConsent" label="Даю согласие на обработку своих персональных данных" />
    <BaseBtn1 type="submit" />
</form>
</template>

<style scoped lang="scss">
.form {
    color: #ffffff;
}
</style>
