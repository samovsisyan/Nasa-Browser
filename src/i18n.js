import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        // we init with resources
        resources: {
            en: {
                translations: {
                    'NASA BROWSER': 'NASA BROWSER',
                    'HOME': 'HOME',
                    'NEARBY ASTEROIDS': 'NEARBY ASTEROIDS',
                    'ASTRONOMY PICTURE OF THE DAY': 'ASTRONOMY PICTURE OF THE DAY',
                    'SUBMIT NEW PLANET': 'SUBMIT NEW PLANET',
                }
            },
            ru: {
                translations: {
                    'NASA BROWSER': 'НАСА БРАУЗЕР',
                    'HOME': 'ГЛАВНАЯ',
                    'NEARBY ASTEROIDS': 'БЛИЖАЙШИЕ АСТЕРОИДЫ',
                    'ASTRONOMY PICTURE OF THE DAY': 'АСТРОНОМИЧЕСКАЯ КАРТИНКА ДНЯ',
                    'SUBMIT NEW PLANET': 'ДОБАВИТЬ НОВУЮ ПЛАНЕТУ',
                }
            },
            am: {
                translations: {
                    'NASA BROWSER': 'Նանսայի զննաեկիչ',
                    'HOME': 'ԳԼԽԱՎՈՐ',
                    'NEARBY ASTEROIDS': 'ՄՈՏԱԿԱ ԱՍՏԵՐՈԻԴՆԵՐԸ',
                    'ASTRONOMY PICTURE OF THE DAY': 'ԱՍՏՂԱԳԻՏՈՒԹՅՈՒՆ - ՕՐՎԱ ՆԿԱՐ',
                    'SUBMIT NEW PLANET': 'ԱՎԵԼԱՑՆԵԼ ՆՈՐ ՄՈԼՈՐԱԿ',
                }
            }
        },
        fallbackLng: 'en',
        debug: true,
        // have a common namespace used around the full app
        ns: ['translations'],
        defaultNS: 'translations',
        keySeparator: false, // we use content as keys
        interpolation: {
            escapeValue: false, // not needed for react!!
            formatSeparator: ','
        },
        react: {
            wait: true
        }
    });
export default i18n;