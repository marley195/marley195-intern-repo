import React from "react";
import { View, Button, Text } from "react-native";
import { useTranslation } from "react-i18next";
import { setPreferredLanguage } from "./i18nStorage";

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const next = i18n.language.startsWith("fr") ? "en" : "fr";
  const label = t("home.switch_to", {
    lng: next,
    lang: next === "en" ? "English" : "Français",
  });
  const toggle = async () => {
    await setPreferredLanguage(next as "en" | "fr");
  };

  return (
    <View style={{ alignItems: "center", gap: 12 }}>
      <Text style={{ fontSize: 18, fontWeight: "600" }}>{t("home.title")}</Text>
      <Text>
        Current language: {t("home.current_lang", { lng: i18n.language })}
      </Text>
      <Button title={label} onPress={toggle} />
    </View>
  );
}
