import { View } from "react-native";
import React from "react";
interface SpacerProps {
  width: "100%";
  height: number;
}
export default function Spacer({ width = "100%", height = 40 }: SpacerProps) {
  return <View style={{ width, height }} />;
}
