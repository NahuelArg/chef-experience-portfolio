import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEs from './locales/es/translation.json';
import translationEn from './locales/en/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: translationEs
      },
      en: {
        translation: translationEn
      }
    },
    lng: "es",
    fallbackLng: "es",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
