import i18next from "i18next";
import es from "./constants/languages/es.json";
import en from "./constants/languages/en.json";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  interpolation: {
    // React already does escaping
    escapeValue: false,
  },
  lng: "en", // 'en' | 'es'
  fallbackLng: "es",
  // Using simple hardcoded resources for simple example
  resources: {
    en,
    es,
  },
});

export default i18next;
