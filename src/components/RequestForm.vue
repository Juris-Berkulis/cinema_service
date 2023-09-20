<script setup lang="ts">
import { ref, watch, type Ref, type ComputedRef, computed, onBeforeUnmount } from 'vue';
import BaseBtn1 from '@/components/base/BaseBtn1.vue';
import BaseSelect from '@/components/base/BaseSelect.vue';
import BaseInput from '@/components/base/BaseInput.vue';
import BaseTextarea from '@/components/base/BaseTextarea.vue';
import BaseInputFile from '@/components/base/BaseInputFile.vue';
import BaseCheckbox from '@/components/base/BaseCheckbox.vue';
import BaseLoader from '@/components/base/BaseLoader.vue';
import { regExpMatching, requiredField } from '@/composables/validation';
import { type City } from '@/types';

const emit = defineEmits(['update:isRequestSent']);

const options: City[] = ['Москва', 'Санкт-Петербург', 'Казань', 'Краснодар', 'Ростов-на-Дону'];
const regExpForEmail = /^[a-z0-9\.\-_]{1,}@[a-z]{2,4}\.[a-z]{2,4}$/;
const regExpForTel = /^[0-9]{10}$/;
const textForEmptedCityError = 'Город не выбран';
const textForRequiredFieldError = 'Поле не заполненно';
const textForRegExpError = 'Неверный формат';

const timerId: Ref<ReturnType<typeof setTimeout> | undefined> = ref();
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

type Field = 'city' | 'name' | 'email' | 'tel' | 'remark' | 'file' | 'consent';

type FieldOptions = { isValidationError: () => boolean, error: Ref<string>, errorText: string };

type ValidatedObj = {
    [key in Field]: FieldOptions[];
};

const validatedObj: ValidatedObj = {
    city: [{ isValidationError: () => requiredField(selectedCity.value), error: errorForSelectedCity, errorText: textForEmptedCityError }],
    name: [{ isValidationError: () => requiredField(inputedName.value), error: errorForInputedName, errorText: textForRequiredFieldError }],
    email: [
        { isValidationError: () => requiredField(inputedEmail.value), error: errorForInputedEmail, errorText: textForRequiredFieldError },
        { isValidationError: () => regExpMatching(inputedEmail.value, regExpForEmail), error: errorForInputedEmail, errorText: textForRegExpError },
    ],
    tel: [
        { isValidationError: () => requiredField(inputedTel.value), error: errorForInputedTel, errorText: textForRequiredFieldError },
        { isValidationError: () => regExpMatching(inputedTel.value, regExpForTel), error: errorForInputedTel, errorText: textForRegExpError },
    ],
    remark: [{ isValidationError: () => requiredField(inputedRemark.value), error: errorForInputedRemark, errorText: textForRequiredFieldError }],
    file: [{ isValidationError: () => requiredField(attachedFile.value), error: errorForAttachedFile, errorText: textForRequiredFieldError }],
    consent: [{ isValidationError: () => requiredField(isConsent.value), error: errorForIsConsent, errorText: textForRequiredFieldError }],
};

const checkField = (field: Field) => {
    for (let i = 0; i < validatedObj[field].length; i++) {
        const fieldOptions: FieldOptions = validatedObj[field][i];

        if (fieldOptions.isValidationError()) {
            fieldOptions.error.value = fieldOptions.errorText; return
        }
    }

    validatedObj[field][0].error.value = '';
};

const checkAllFields = (): void => {
    checkField('city');
    checkField('name');
    checkField('email');
    checkField('tel');
    checkField('remark');
    checkField('file');
    checkField('consent');
};

watch(selectedCity, () => checkField('city'));
watch(inputedName, () => checkField('name'));
watch(inputedEmail, () => checkField('email'));
watch(inputedTel, () => checkField('tel'));
watch(inputedRemark, () => checkField('remark'));
watch(attachedFile, () => checkField('file'));
watch(isConsent, () => checkField('consent'));

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

        const promise: Promise<unknown> = new Promise((resolve) => {
            timerId.value = setTimeout(() => {
                resolve(data);
                clearTimeout(Number(timerId.value));
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

onBeforeUnmount(() => {
    clearTimeout(Number(timerId.value));
});
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
    font-family: 'Futura PT';
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
