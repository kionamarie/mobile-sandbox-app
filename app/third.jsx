import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const third = () => {
  return (
    <View style={styles.container}>
      <Link href={"/fourth"} style={styles.link}>
        4
      </Link>
      <View style={styles.box}></View>
      <View style={styles.box}></View>
      <View style={styles.box}></View>
      <View style={styles.box}></View>
      <View style={styles.circle}></View>
    </View>
  );
};

export default third;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "darkkhaki",
  },
  box: {
    width: "90%",
    flex: 2,
    backgroundColor: "darkolivegreen",
    margin: 15,
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
    marginTop: "55%",
    marginLeft: "55%",
    borderRadius: 50,
  },
  link: {
    fontSize: 24,
    color: "blue",
  },
});
