import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Practice Layouts</Text>
      <View style={styles.container2}>
        <Link href={"/second"} style={styles.link}>
          Screen 2
        </Link>
        <Link href={"/third"} style={styles.link}>
          Screen 3
        </Link>
        <Link href={"/fourth"} style={styles.link}>
          Screen 4
        </Link>
        <Link href={"/fifth"} style={styles.link}>
          Screen 5
        </Link>
        <Link href={"/sixth"} style={styles.link}>
          Screen 6
        </Link>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: "10%",
  },
  container2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    fontFamily: "Courier",
    fontWeight: "bold",
    color: "darkgoldenrod",
  },
  link: {
    fontSize: 24,
    color: "darkkhaki",
    margin: 30,
  },
});
