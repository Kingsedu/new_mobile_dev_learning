import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { Colors } from "@/constants/Colors";

import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import ThemedButton from "@/components/ThemedButton";
import Spacer from "@/components/Spacer";
import { Link } from "expo-router";
import React, { useState } from "react";
import ThemedTextInput from "@/components/ThemedTextInput";
import { useUser } from "@/hooks/useUser";
export default function Regsiter() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState(null);
  const { user, register } = useUser();
  const handleSubmit = async () => {
    setError(null);
    try {
      await register(email, password);
      console.log("login form submitting", email, password);
      console.log(user);
    } catch (error: any) {
      setError(error.message);
      console.log(error?.message);
    }
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
        <Spacer width="100%" height={20} />
        {error && <Text style={styles.error}>{error}</Text>}
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
  error: {
    color: Colors.warning,
    padding: 10,
    backgroundColor: "#f5c1c8",
    borderColor: Colors.warning,
    borderWidth: 1,
    borderRadius: 6,
    marginHorizontal: 10,
  },
});
