import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import ThemedView from "../../components/ThemedView";

const three = () => {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.circle}></View>
      <View style={styles.box}></View>
      <View style={styles.container2}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>
      <View style={styles.container3}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>
      <View style={styles.container4}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>
    </ThemedView>
  );
};

export default three;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  box: {
    width: "90%",
    flex: 2,
    backgroundColor: "darkolivegreen",
    margin: 15,
    borderRadius: 25,
  },
  container2: {
    flex: 1,
    width: "90%",
    flexDirection: "row",
  },
  container3: {
    flex: 1,
    flexDirection: "row",
    width: "90%",
  },
  container4: {
    flex: 1,
    flexDirection: "row",
    width: "90%",
  },
  circle: {
    width: 100,
    height: 100,
    position: "absolute",
    zIndex: 1,
    backgroundColor: "burlywood",
    marginTop: "27%",
    marginLeft: "60%",
    borderRadius: 50,
  },
  link: {
    fontSize: 24,
    color: "blue",
  },
});
