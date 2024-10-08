import { ref, watchEffect } from "vue";

export const usePhrase = () => {
    const phrase = ref("");
    const reversedPhrase = ref("");
    const num = ref("");

    watchEffect(() => {
       reversedPhrase.value = phrase.value.split("").reverse().join("");
    });

    return { phrase, reversedPhrase, num};
};
