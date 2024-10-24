import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '../locales/en.json';
import translationRU from '../locales/ru.json';

const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  }
};

i18n
  .use(initReactI18next) // связываем с React
  .init({
    resources,
    lng: 'en', // язык по умолчанию
    fallbackLng: 'en', // язык по умолчанию, если перевод не найден
    interpolation: {
      escapeValue: false // отключаем экранирование
    }
  });

export default i18n;
