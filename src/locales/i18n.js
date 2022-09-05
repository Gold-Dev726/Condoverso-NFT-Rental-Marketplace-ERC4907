import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
//
import enLocales from './en.json';
import ruLocales from './ru.json';
import zhLocales from './zh.json';
import esLocales from './es.json';
import deLocales from './de.json';
import frLocales from './fr.json';
import arLocales from './ar.json';

// ----------------------------------------------------------------------

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translations: enLocales },
      de: { translations: deLocales },
      fr: { translations: frLocales },
      es: { translations: esLocales },
      ru: { translations: ruLocales },
      zh: { translations: zhLocales },
      ar: { translations: arLocales },
    },
    lng: localStorage.getItem('i18nextLng') || 'en',
    fallbackLng: 'en',
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
