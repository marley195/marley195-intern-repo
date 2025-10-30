// src/i18n.ts
import i18n, { type InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales } from "expo-localization";

import en from "./locales/en.json";
import fr from "./locales/fr.json";

const deviceLang = getLocales()?.[0]?.languageCode ?? "en"; // e.g. "en" | "fr"

const resources = {
  en: { translation: en },
  fr: { translation: fr },
} as const;

const options: InitOptions = {
  resources,
  lng: deviceLang.startsWith("fr") ? "fr" : "en",
  fallbackLng: "en",
  react: { useSuspense: false },
  interpolation: { escapeValue: false },
  // compatibilityJSON: "v4", // optional; you can omit this entirely
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init(options);
}

export default i18n;
