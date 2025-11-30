import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import ThemedView from "@/components/ThemedView";
// import LogoStyle from "../assets/img/logo_light.png";
// import contact from "./contact";
import ThemeLogo from "../components/ThemeLogo";
import Spacer from "@/components/Spacer";
import ThemedText from "@/components/ThemedText";

export default function Index() {
  return (
    <ThemedView style={styles.container}>
      <ThemeLogo />
      <Spacer height={20} width="100%" />
      <ThemedText style={[styles.title]} title={true}>
        The Number 1
      </ThemedText>
      <ThemedText
        style={{ marginTop: 10, marginBottom: 20, fontStyle: "italic" }}
      >
        Reading List App
      </ThemedText>
      {/* <ThemedText>Hello, this is a card</ThemedText> */}
      <Spacer width="100%" height={10} />

      <Spacer height={10} width="100%" />
      <Link href="/login" style={styles.link}>
        <ThemedText>Login Page</ThemedText>
      </Link>
      <Spacer height={10} width="100%" />
      <Link href="/register" style={styles.link}>
        <ThemedText>Register Page</ThemedText>
      </Link>
      <Link href="/profile" style={styles.link}>
        <ThemedText>Profile</ThemedText>
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
    fontWeight: "bold",
    fontSize: 18,
  },

  card: {
    backgroundColor: "#eee",
    padding: 20,
    borderRadius: 5,
    boxShadow: "4px 4px rgba(0,0,0,0.1)",
    justifyContent: "center",
  },
  link: {},
});
/* 
The View Component, its a Flex Box Component- default is in the column direction
mostly used as a wrapper, like a Div
styling---NativeWind.. like tailwind 
/inline styles overrides the StylSheet properties
 style={[styles.title, { color: "purple" }]}
*/
