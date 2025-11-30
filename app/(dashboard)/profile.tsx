import { StyleSheet } from "react-native";
import Spacer from "@/components/Spacer";
import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import React from "react";

export default function Profile() {
  return (
    <ThemedView style={styles.container}>
      <Spacer height={40} width="100%" />
      <ThemedText title={true} style={styles.heading}>
        Your Email
      </ThemedText>
      <Spacer height={20} width="100%" />
      <ThemedText>Time to start reading some books...</ThemedText>
      <Spacer height={20} width="100%" />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
