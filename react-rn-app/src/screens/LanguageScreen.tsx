import React from "react";
import { View } from "react-native";
import LanguageSwitcher from "../LanguageSwitcher";

export default function LanguageScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <LanguageSwitcher />
    </View>
  );
}
