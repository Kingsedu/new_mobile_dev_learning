import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import ThemedButton from "@/components/ThemedButton";
import Spacer from "@/components/Spacer";
import { Link } from "expo-router";
import React, { useState } from "react";
import ThemedTextInput from "@/components/ThemedTextInput";
export default function Regsiter() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = () => {
    console.log("login form submitting", email, password);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <Spacer height={20} width="100%" />
        <ThemedText title={true} style={styles.title}>
          Register For an Account
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
          <Text style={{ color: "#f2f2f2" }}>Register</Text>
        </ThemedButton>
        <Spacer height={100} width="100%" />
        <Link href="/login">
          <ThemedText style={{ textAlign: "center" }}>
            login instead{" "}
          </ThemedText>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>
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
});
