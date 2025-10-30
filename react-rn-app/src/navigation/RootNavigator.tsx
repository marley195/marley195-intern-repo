import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { RootStackParamList } from "./types";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import DebugScreen from "../screens/DebugScreen";
import LanguageScreen from "../screens/LanguageScreen";
const stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <stack.Navigator initialRouteName="Home">
      <stack.Screen name="Home" component={HomeScreen} />
      <stack.Screen name="Profile" component={ProfileScreen} />
      <stack.Screen name="Debug" component={DebugScreen} />
      <stack.Screen name="Language" component={LanguageScreen} />
    </stack.Navigator>
  );
}
