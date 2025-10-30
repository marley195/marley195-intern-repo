import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import * as Linking from "expo-linking";

export default function DebugScreen() {
  const [initialUrl, setInitialUrl] = useState<string | null>(null);
  const [lastEventUrl, setLastEventUrl] = useState<string | null>(null);
  const [composePath, setComposePath] = useState("profile/42");

  useEffect(() => {
    (async () => setInitialUrl(await Linking.getInitialURL()))();
  }, []);

  useEffect(() => {
    const sub = Linking.addEventListener("url", ({ url }) =>
      setLastEventUrl(url)
    );
    return () => sub.remove();
  }, []);

  const composedUrl = Linking.createURL(composePath);

  return (
    <View style={{ padding: 20, gap: 12 }}>
      <Text style={{ fontSize: 18, fontWeight: "700" }}>Deep Link Debug</Text>
      <Text style={{ fontWeight: "600" }}>Initial URL (cold start):</Text>
      <Text selectable>{initialUrl ?? "—"}</Text>

      <Text style={{ fontWeight: "600", marginTop: 10 }}>
        Last URL event (running):
      </Text>
      <Text selectable>{lastEventUrl ?? "—"}</Text>

      <Text style={{ fontWeight: "600", marginTop: 10 }}>Compose link:</Text>
      <TextInput
        style={{ borderWidth: 1, borderRadius: 8, padding: 10 }}
        value={composePath}
        onChangeText={setComposePath}
        placeholder="e.g. profile/99 or debug"
        autoCapitalize="none"
      />
      <Text selectable>{composedUrl}</Text>
      <Button
        title="Log composed URL"
        onPress={() => console.log(composedUrl)}
      />
      <Button
        title="Open composed URL"
        onPress={async () => {
          try {
            await Linking.openURL(composedUrl);
          } catch (e) {
            Alert.alert("Open failed", String(e));
          }
        }}
      />
    </View>
  );
}
