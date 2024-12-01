import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

//Initializining using HTTP backend to load the translation files, and bine the i18n to React
i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        lng: typeof window !== 'undefined' ? localStorage.getItem('language') || 'en' : 'en',
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        ns: ['bio', 'botleft', 'joinus','name', 'navBar', 'save', 'bodyMd', 'dropdown', 'nextStreamTimer', 'otherSocials', 'missionIn'],
        defaultNS: 'navBar',
    });

console.log('i18n is being initialized...');

export default i18n;

