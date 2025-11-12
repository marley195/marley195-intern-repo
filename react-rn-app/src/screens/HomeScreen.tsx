import React from "react";
import { View, Text, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import * as Linking from "expo-linking";
import LanguageSwitcher from "../LanguageSwitcher";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  const profileUrl = Linking.createURL("profile/123");

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Home Screen</Text>
      <LanguageSwitcher />
      <Button
        title="Go to Profile (id=123)"
        onPress={() => navigation.navigate("Profile", { id: "123" })}
      ></Button>
      <Button
        title="Go to Debug"
        onPress={() => navigation.navigate("Debug")}
      ></Button>
      <Button
        title="Go to Language Settings"
        onPress={() => navigation.navigate("Language")}
      ></Button>
      <Button
        title="Go to Animated Screen"
        onPress={() => navigation.navigate("Animated")}
      ></Button>
      <Button
        title="log deep link to profile"
        onPress={() => console.log(profileUrl)}
      ></Button>
    </View>
  );
}
