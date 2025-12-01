import { Stack, Slot } from "expo-router";
import { View, Text, StyleSheet, useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserProvider } from "../context/UserContext";
import { BooksProvider } from "@/context/BooksContext";
export default function RootLayout() {
  const colorScheme = useColorScheme();

  const theme = Colors[colorScheme!] ?? Colors.light;
  console.log(colorScheme);
  return (
    <UserProvider>
      <BooksProvider>
        <StatusBar style="auto" />
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: theme.navBackground },
            headerTintColor: theme.title,
          }}
        >
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />

          <Stack.Screen name="index" options={{ title: "Home" }} />
        </Stack>
      </BooksProvider>
    </UserProvider>
  );
}
/*
when we don't have a layout file d expo, automatically renders the index.tsx file
but when a layout file is present, the expo-router renders the layout file
both with slot, you will not get the automatic backhandle button in the expo-router
stack
|
|profile
|contact
|about
|index
the principle of stack is 
the option properties - mostly for the Stack.Screen tag--->
options ={{}}---object property
the Stack can be a Self closing tag
<Stack/>
<Stack screenOptions={{}}></Stack>
this screenOptions is applied all across the  Screen embeded in the Stack
*/
const styles = StyleSheet.create({});
