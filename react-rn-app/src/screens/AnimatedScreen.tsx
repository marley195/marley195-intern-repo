import { Animated, View, Text } from "react-native";
import { useRef, useEffect } from "react";

export default function AnimatedScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    fadeIn();
  }, []);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Fade In</Text>
    </Animated.View>
  );
}
