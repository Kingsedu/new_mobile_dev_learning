import { StyleSheet, Text, TextInput } from "react-native";
import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import Spacer from "@/components/Spacer";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import ThemedButton from "@/components/ThemedButton";
import ThemedTextInput from "@/components/ThemedTextInput";
import { useUser } from "@/hooks/useUser";
export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { user } = useUser();
  const handleSubmit = () => {
    console.log("current User", user);

    console.log("login form submitting", email, password);
  };
  return (
    <ThemedView style={styles.container}>
      <Spacer height={20} width="100%" />
      <ThemedText title={true} style={styles.title}>
        Login to Your Account
      </ThemedText>
      <ThemedTextInput
        style={{ width: "80%", marginBottom: 20 }}
        keyboardType="email-address"
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <ThemedTextInput
        style={{ width: "80%", marginBottom: 20 }}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: "#f2f2f2" }}>Login</Text>
      </ThemedButton>
      <Spacer height={100} width="100%" />
      <Link href="/register">
        <ThemedText style={{ textAlign: "center" }}>
          Regsiter instead
        </ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
  },
  pressed: {
    opacity: 0.8,
  },
});
