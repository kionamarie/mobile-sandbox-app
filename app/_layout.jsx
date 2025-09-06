import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Slot, Stack } from "expo-router";

const _layout = () => {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Home" }}></Stack.Screen>
      </Stack>
    </SafeAreaProvider>
  );
};

export default _layout;

const styles = StyleSheet.create({});
