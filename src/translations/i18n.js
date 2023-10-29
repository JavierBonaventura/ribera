import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          family: 'family', 
          history: 'History'
        },
      },
      es: {
        translation: {
            family: 'familia', 
            history: 'Historia'

        },
      },
    },
    lng: 'en', // Idioma predeterminado
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
