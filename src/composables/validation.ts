import { ref, type Ref } from "vue";

const requiredField = (value: string | boolean): boolean => {
    const error: Ref<boolean> = ref(false);

    if (!value) error.value = true;

    return error.value
};

const regExpMatching = (value: string, regExp: RegExp): boolean => {
    const error: Ref<boolean> = ref(false);

    if (!regExp.test(value)) error.value = true;

    return error.value
};

export {
    requiredField, 
    regExpMatching, 
};
