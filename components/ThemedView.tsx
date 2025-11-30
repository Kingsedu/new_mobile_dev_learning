import { StyleSheet, View, useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import React from "react";

export default function ThemedView({ style, safe = false, ...props }: any) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme!] ?? Colors.light;
  if (!safe)
    return (
      <View
        style={[{ backgroundColor: theme.background, flex: 1 }, style]}
        {...props}
      />
    );
  const insets = useSafeAreaInsets();
  console.log(insets);
  return (
    <View
      style={[
        {
          backgroundColor: theme.background,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        style,
      ]}
      {...props}
    />
  );
}
