import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";
import React from "react";

export default function ThemedText({ style, title = false, ...props }: any) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme!] ?? Colors.light;
  const textColor = title ? theme.title : theme.text;
  return <Text style={[{ color: textColor }, style]} {...props} />;
}

const styles = StyleSheet.create({});
