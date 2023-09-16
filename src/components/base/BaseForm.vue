<script setup lang="ts">
import { ref, type Ref } from 'vue';
import BaseBtn1 from './BaseBtn1.vue';

type City = 'Moscow'
    | 'Saint_Petersburg'
    | 'Kazan'
    | 'Krasnodar'
    | 'Rostov_on_Don';

type Option = {
    value: City,
    text: string,
};

const options: Option[] = [
    {value: 'Moscow', text: 'Москва',},
    {value: 'Saint_Petersburg', text: 'Санкт-Петербург',},
    {value: 'Kazan', text: 'Казань',},
    {value: 'Krasnodar', text: 'Краснодар',},
    {value: 'Rostov_on_Don', text: 'Ростов-на-Дону',},
];

const selectedCity: Ref<City | ''> = ref('');
const inputedName: Ref<string> = ref('');
const inputedEmail: Ref<string> = ref('');
const inputedTel: Ref<number | undefined> = ref();
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

    console.log(data)
}
</script>

<template>
<form class="form" @submit.prevent="submit">
    <select class="select" v-model="selectedCity">
        <option class="option" value="" disabled>Выберете город</option>
        <option 
            class="option" 
            v-for="option of options" 
            :key="option.value" 
            :value="option.value"
        >{{ option.text }}</option>
    </select>
    <input v-model="inputedName" type="text">
    <input v-model="inputedEmail" type="email">
    <input v-model.number="inputedTel" type="tel">
    <textarea v-model="inputedRemark" cols="30" rows="10"></textarea>
    <input @change="(event: Event): string => attachedFile = (event.target as HTMLInputElement).value" :value="attachedFile" type="file">
    <input v-model="isConsent" type="checkbox" id="checkbox">
    <label for="checkbox">Даю согласие на обработку своих персональных данных</label>
    <BaseBtn1 type="submit" />
</form>
</template>

<style scoped lang="scss">
</style>
