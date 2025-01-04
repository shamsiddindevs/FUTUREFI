import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsInEng from './locals/en/translation.json';
import translationsInUzbek from './locals/uz/translation.json';
import translationsInRussian from './locals/ru/translation.json';

const resources = {
    en: {
        translation: translationsInEng
    },
    uz: {
        translation: translationsInUzbek
    },
    ru: {
        translation: translationsInRussian
    },
};

const savedLanguage = localStorage.getItem('language') || 'uz';

i18n
  .use(initReactI18next)
  // passes i18n down to react-i18next
  .init({
        resources, // resources are important to load translations for the languages.
        lng:savedLanguage , // if you're using a language detector, do not define the lng option
        fallbackLng: "en", // if selected language is not available, it will use the fallback language. 
        debug: true,
        // use de if selected language is not available
        interpolation: {
            escapeValue: false
        },
      
    });

export default i18n;