import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Slot, Stack } from "expo-router";
import { Colors } from "../constants/colors";
import { ThemeProvider } from "../context/ThemeContext";

const _layout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <SafeAreaProvider>
      <ThemeProvider>
      <Stack
        // screenOptions={{
        //   headerStyle: { backgroundColor: theme.background },
        //   headerTintColor: theme.title }}>
        >
        <Stack.Screen name="index" options={{ title: "Home" }}></Stack.Screen>
      </Stack>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default _layout;

