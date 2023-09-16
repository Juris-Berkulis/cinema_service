<script setup lang="ts">
import { ref, type Ref } from 'vue';
import BaseBtn1 from './BaseBtn1.vue';
import BaseSelect from './BaseSelect.vue';
import BaseInput from './BaseInput.vue';
import BaseTextarea from './BaseTextarea.vue';
import BaseInputFile from './BaseInputFile.vue';
import BaseCheckbox from './BaseCheckbox.vue';
import { type City } from '@/types';

const options: City[] = ['Москва', 'Санкт-Петербург', 'Казань', 'Краснодар', 'Ростов-на-Дону'];

const selectedCity: Ref<City | ''> = ref('');
const inputedName: Ref<string> = ref('');
const inputedEmail: Ref<string> = ref('');
const inputedTel: Ref<string> = ref('');
const inputedRemark: Ref<string> = ref('');
const attachedFile: Ref<string> = ref('');
const isConsent: Ref<boolean> = ref(false);

const submit = (): void => {
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
</script>

<template>
<form class="form" @submit.prevent="submit">
    <BaseSelect v-model:selectedValue="selectedCity" :optionsList="options" defaultText="Выберете город" />
    <BaseInput v-model:inputedValue="inputedName" type="text" label="Имя" />
    <BaseInput v-model:inputedValue="inputedEmail" type="email" label="Email" />
    <BaseInput v-model:inputedValue="inputedTel" type="tel" label="Телефон" />
    <BaseTextarea v-model:inputedValue="inputedRemark" placeholder="Оставьте пометку к заказу" cols="30" rows="10" />
    <BaseInputFile v-model:attachedFile="attachedFile" label="Прикрепите файл" />
    <BaseCheckbox v-model:isNoted="isConsent" label="Даю согласие на обработку своих персональных данных" />
    <BaseBtn1 type="submit" />
</form>
</template>

<style scoped lang="scss">
.form {
    color: #ffffff;
}
</style>
