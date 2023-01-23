import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { languages, path } from "../constants/constants";

i18n.use(initReactI18next).init({
  fallbackLng: languages.english,
  lng: languages.english,
  resources: {
    en: {
      translations: require(`${path}${languages.english}/${languages.english}.json`),
    },
    hn: {
      translations: require(`${path}${languages.hindi}/${languages.hindi}.json`),
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
});

i18n.languages = [languages.english, languages.hindi];

export default i18n;
