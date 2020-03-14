import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

const options = {
    interpolation: {
        escapeValue: false, // not needed for react!!
    },

    debug: true,

    // lng: 'en',

    // resources: {
    //     pt: {
    //         common: pt_BR['pt-BR'],
    //     },
    //     en: {
    //         common: en.en,
    //     },
    //     'en-US': {
    //         common: en.en,
    //     },
    // },

    fallbackLng: 'en-US',

    ns: ['common'],

    defaultNS: 'common',

    react: {
        wait: false,
        bindI18n: 'languageChanged loaded',
        bindStore: 'added removed',
        nsMode: 'default'
    },

    backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
    }
};

i18n
    .use(XHR)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init(options);

export default i18n;