import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsInEng from "./locales/en/translation.json";
import translationsInEsp from "./locales/es/translation.json";

const resources = {
  en: {
    translation: translationsInEng,
  },
  es: {
    translation: translationsInEsp,
  },
};

const defaultLang = localStorage.getItem("lang") || "en";

i18n
  .use(initReactI18next)
  .init({
    resources, 
    returnObjects: true,
    lng: defaultLang, 
    debug: false,
    fallbackLng: "en", 
    interpolation: {
      escapeValue: false,
    },
    ns: "translation", 
    defaultNS: "translation",
  });

export default i18n;
