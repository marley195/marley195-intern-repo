import * as Linking from "expo-linking";
import type { LinkingOptions } from "@react-navigation/native";
import type { RootStackParamList } from "./types";

// Define the linking configuration
export const prefixes = [Linking.createURL("/")];
// Mapping URLS into navigation stack.
export const linking: LinkingOptions<RootStackParamList> = {
  prefixes,
  config: {
    screens: {
      Home: "home",
      Profile: "profile/:id?", // myapp://profile/123
      Debug: "debug",
      Language: "language",
    },
  },
};
