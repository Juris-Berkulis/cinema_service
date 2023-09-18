<script setup lang="ts">
import { ref, watch, type Ref, type ComputedRef, computed } from 'vue';
import BaseBtn1 from '@/components/base/BaseBtn1.vue';
import BaseSelect from '@/components/base/BaseSelect.vue';
import BaseInput from '@/components/base/BaseInput.vue';
import BaseTextarea from '@/components/base/BaseTextarea.vue';
import BaseInputFile from '@/components/base/BaseInputFile.vue';
import BaseCheckbox from '@/components/base/BaseCheckbox.vue';
import { regExpMatching, requiredField } from '@/composables/validation';
import { type City } from '@/types';
import BaseLoader from './base/BaseLoader.vue';

const emit = defineEmits(['update:isRequestSent']);

const options: City[] = ['Москва', 'Санкт-Петербург', 'Казань', 'Краснодар', 'Ростов-на-Дону'];
const regExpForEmail = /^[a-z0-9\.\-_]{1,}@[a-z]{2,4}\.[a-z]{2,4}$/;
const regExpForTel = /^[0-9]{10}$/;
const textForEmptedCityError = 'Город не выбран';
const textForRequiredFieldError = 'Поле не заполненно';
const textForRegExpError = 'Неверный формат';

const isLoading: Ref<boolean> = ref(false);

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

const maskForInputedTel = (value: string): string => {
    let mask: string = '';
    if (value.length) {
        mask += `+7 (${value.slice(0, 3)}`;
        if (value.length > 3) {
            mask += `) ${value.slice(3, 5)}`;
            if (value.length > 5) {
                mask += `-${value.slice(5, 7)}`;
                if (value.length > 7) {
                    mask += `-${value.slice(7, 10)}`;
                    if (value.length > 10) {
                        mask += `; ${value.slice(10)}`;
                    }
                }
            }
        }
    }

    return mask
};

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
};
const checkInputedEmail = (): void => {
    switch (true) {
        case requiredField(inputedEmail.value): errorForInputedEmail.value = textForRequiredFieldError; break;
        case regExpMatching(inputedEmail.value, regExpForEmail): errorForInputedEmail.value = textForRegExpError; break;
        default: errorForInputedEmail.value = '';
    }
};
const checkInputedTel = (): void => {
    switch (true) {
        case requiredField(inputedTel.value): errorForInputedTel.value = textForRequiredFieldError; break;
        case regExpMatching(inputedTel.value, regExpForTel): errorForInputedTel.value = textForRegExpError; break;
        default: errorForInputedTel.value = '';
    }
};
const checkInputedRemark = (): void => {
    switch (true) {
        case requiredField(inputedRemark.value): errorForInputedRemark.value = textForRequiredFieldError; break;
        default: errorForInputedRemark.value = '';
    }
};
const checkAttachedFile = (): void => {
    switch (true) {
        case requiredField(attachedFile.value): errorForAttachedFile.value = textForRequiredFieldError; break;
        default: errorForAttachedFile.value = '';
    }
};
const checkIsConsent = (): void => {
    switch (true) {
        case requiredField(isConsent.value): errorForIsConsent.value = textForRequiredFieldError; break;
        default: errorForIsConsent.value = '';
    }
};

const checkAllFields = (): void => {
    checkSelectedCity();
    checkInputedName();
    checkInputedEmail();
    checkInputedTel();
    checkInputedRemark();
    checkAttachedFile();
    checkIsConsent();
};

watch(selectedCity, checkSelectedCity);
watch(inputedName, checkInputedName);
watch(inputedEmail, checkInputedEmail);
watch(inputedTel, checkInputedTel);
watch(inputedRemark, checkInputedRemark);
watch(attachedFile, checkAttachedFile);
watch(isConsent, checkIsConsent);

const resetForm = (): void => {
    selectedCity.value = '';
    inputedName.value = '';
    inputedEmail.value = '';
    inputedTel.value = '';
    inputedRemark.value = '';
    attachedFile.value = '';
    isConsent.value = false;
};

const submit = (): void => {
    checkAllFields();

    if (!errorForForm.value) {
        isLoading.value = true;

        const data = {
            city: selectedCity.value,
            name: inputedName.value,
            email: inputedEmail.value,
            tel: `+7${inputedTel.value}`,
            remark: inputedRemark.value,
            file: attachedFile.value,
            consent: isConsent.value,
        };

        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, 4000);
        });

        promise.then(() => {
            console.log(data);
            resetForm();
            emit('update:isRequestSent', true);
            isLoading.value = false;
        });
    }
};
</script>

<template>
<form class="form" @submit.prevent="submit">
    <BaseSelect class="field full" v-model:selectedValue="selectedCity" :error="errorForSelectedCity" :optionsList="options" defaultText="Выберете город" />
    <BaseInput class="field full" v-model:inputedValue="inputedName" :error="errorForInputedName" type="text" label="Имя" />
    <BaseInput class="field half" v-model:inputedValue="inputedEmail" :error="errorForInputedEmail" type="email" label="Email" />
    <BaseInput class="field half" v-model:inputedValue="inputedTel" :error="errorForInputedTel" type="tel" label="Телефон" :mask="maskForInputedTel" />
    <BaseTextarea class="field full" v-model:inputedValue="inputedRemark" :error="errorForInputedRemark" placeholder="Оставьте пометку к заказу" cols="30" rows="10" />
    <BaseInputFile class="field full" v-model:attachedFile="attachedFile" :error="errorForAttachedFile" label="Прикрепите файл" />
    <BaseCheckbox class="field full" v-model:isNoted="isConsent" :error="errorForIsConsent" label="Даю согласие на обработку своих персональных данных" />
    <div class="field full">
        <BaseLoader class="loader" v-if="isLoading" />
        <BaseBtn1 class="btn" v-else type="submit" />
    </div>
</form>
</template>

<style scoped lang="scss">
.form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 32px;
    column-gap: 24px;
    color: #ffffff;

    @media (max-width: 767px) {
        margin-bottom: 40px;
    }
}

.field {
    position: relative;
    font-family: Futura PT;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;

    &.full {
        grid-column: 1 / 3;
    }

    &.half {
        @media (max-width: 1439px) {
            grid-column: 1 / 3;
        }
    }
}

.loader {
    height: 56px;
    color: #ec3f3f;
}

.btn {
    @media (max-width: 1439px) {
        width: 100%;
    }
}
</style>
