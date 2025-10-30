import AsyncStorage from "@react-native-async-storage/async-storage";
import i18n from "./i18n";

const KEY = "@preferred_language";

export async function loadPreferredLanguage(): Promise<string> {
  try {
    const saved = await AsyncStorage.getItem(KEY);
    if (saved && saved !== i18n.language) {
      await i18n.changeLanguage(saved);
    }
    return i18n.language;
  } catch {
    return i18n.language; // safe fallback
  }
}

export async function setPreferredLanguage(lng: "en" | "fr"): Promise<void> {
  await i18n.changeLanguage(lng);
  await AsyncStorage.setItem(KEY, lng);
}
