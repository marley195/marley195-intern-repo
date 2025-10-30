import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import i18n from "./src/i18n";
import * as Linking from "expo-linking";
import * as Sentry from "@sentry/react-native";

import { linking } from "./src/navigation/linking";
import RootNavigator from "./src/navigation/RootNavigator";
import { loadPreferredLanguage } from "./src/i18nStorage";
import "./src/i18n"; // keep i18n init

// --- Sentry Init ---
Sentry.init({
  dsn: "https://30da28791ff5192cef98bdc24c48c3a6@o4510032351985665.ingest.us.sentry.io/4510032352247808",
  sendDefaultPii: true,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,
  integrations: [Sentry.mobileReplayIntegration()],
  environment: __DEV__ ? "development" : "production",
});

function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      await loadPreferredLanguage();
      setReady(true);
    })();
  }, []);

  if (!ready) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer linking={linking}>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default Sentry.wrap(App);
