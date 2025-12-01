import React from "react";
import { StyleSheet, Text } from "react-native";
import { useUser } from "@/hooks/useUser";
import Spacer from "@/components/Spacer";
import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import ThemedButton from "@/components/ThemedButton";

export default function Profile() {
  const { logout, user, authChecked } = useUser();

  const checked = !authChecked ? <ThemedText>Loading...</ThemedText> : null;
  const checkUser = !user ? <ThemedText>No user found</ThemedText> : null;

  return (
    <ThemedView style={styles.container}>
      <Spacer height={40} width="100%" />
      {checked}
      {checkUser}
      <ThemedText title={true} style={styles.heading}>
        {user.email}
      </ThemedText>
      <Spacer height={20} width="100%" />
      <ThemedText>Time to start reading some books...</ThemedText>
      <Spacer height={20} width="100%" />
      <ThemedButton onPress={logout}>
        <Text style={{ color: "#f2f2f2" }}>Logout</Text>
      </ThemedButton>
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
