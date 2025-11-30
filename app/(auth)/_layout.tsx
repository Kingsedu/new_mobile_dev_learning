import { StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
export default function AuthLayout() {
  return (
    <>
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({});
