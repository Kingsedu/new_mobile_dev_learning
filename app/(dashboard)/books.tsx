import { StyleSheet } from "react-native";
import Spacer from "@/components/Spacer";
import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import React from "react";

export default function Books() {
  return (
    <ThemedView style={styles.container} safe={true}>
      <Spacer height={20} width="100%" />
      <ThemedText>Your Reading List</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "stretch",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});

/* 
EXPO_PUBLIC_APPWRITE_PROJECT_ID=69299c910001ba8133de
EXPO_PUBLIC_APPWRITE_PROJECT_NAME="net-ninja"
EXPO_PUBLIC_APPWRITE_ENDPOINT=https://fra.cloud.appwrite.io/v1
*/