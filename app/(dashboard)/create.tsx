import { StyleSheet } from "react-native";
import Spacer from "@/components/Spacer";
import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import React from "react";

export default function Create() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true} style={styles.heading}>
        Add a New Book
      </ThemedText>
      <Spacer height={10} width="100%" />
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
