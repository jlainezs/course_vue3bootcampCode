import { createI18n } from "vue-i18n";
import en from "@/locales/en.json";
import ca from "@/locales/ca.json";

export default createI18n({
    locale: "en",
    fallbackLocale: "en",
    messages: {
        en, ca
    },
    numberFormats: {
        en: {
            currency: {
                style: "currency",
                currency: "USD",
            }
        },
        ja: {
            currency: {
                style: "currency",
                currency: "JPY",
                }
        }
    }
});