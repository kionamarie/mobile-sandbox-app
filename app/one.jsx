import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const second = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}></View>
      <View style={styles.circle}></View>
    </View>
  );
};

export default second;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "darkkhaki",
  },
  box: {
    width: "90%",
    flex: 5,
    backgroundColor: "darkolivegreen",
    margin: 30,
  },
  container2: {
    alignItems: "bottom",
    justifyContent: "bottom",
  },
  circle: {
    width: 100,
    height: 100,
    position: "absolute",
    zIndex: 1,
    backgroundColor: "burlywood",
    marginTop: "70%",
    marginLeft: "55%",
    borderRadius: 50,
  },
  link: {
    fontSize: 24,
    color: "blue",
  },
});
