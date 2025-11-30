import { StyleSheet, useColorScheme, Image } from "react-native";

import { Colors } from "../constants/Colors";
export default function ThemeLogo({ style }: any) {
  const colorSchema = useColorScheme();
  const theme =
    colorSchema === "dark" ? (
      <Image source={require("../assets/img/logo_dark.png")} style={[style]} />
    ) : (
      <Image source={require("../assets/img/logo_light.png")} style={[style]} />
    );
  return theme;
}

const styles = StyleSheet.create({});
