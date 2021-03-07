import i18next from "i18next";
import es from "./constants/languages/es.json";
import en from "./constants/languages/en.json";
import LanguageDetector from "i18next-browser-languagedetector";

i18next.use(LanguageDetector).init({
  interpolation: {
    // React already does escaping
    escapeValue: false,
  },
  lng: "en", // 'en' | 'es'
  // Using simple hardcoded resources for simple example
  resources: {
    en,
    es,
  },
});

export default i18next;
