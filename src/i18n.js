import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: navigator.language,
		debug: false,
		detection: {
			order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],

			lookupQuerystring: 'lng',
			lookupCookie: 'i18next',
			lookupLocalStorage: 'i18nextLng',
			lookupSessionStorage: 'i18nextLng',
			lookupFromPathIndex: 0,
			lookupFromSubdomainIndex: 0,
			caches: ['localStorage', 'cookie'],
		},
		interpolation: {
			escapeValue: false,
		},
		Cache: {
			enabled: true,
			prefix: 'translation_',
			expirationTime: Infinity,
			Version: {},
		},
	});

export default i18n;
