import i18n from 'i18next';
import { initReactI18next, Translation } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// import uzLanguageTranslate from '../public/locals/uz';
// import ruLanguageTranslate from '../public/locals/ru';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    debug: true,
    // resource:{
    //     uz:{translation: uzLanguageTranslate},
    //     ru:{translation: ruLanguageTranslate}
    // }
  });


export default i18n;