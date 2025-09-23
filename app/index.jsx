import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Layout Practice</Text>
      <View style={styles.linkList}>
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
        <Link href={"/seventh"} style={styles.link}>
         Screen 7
        </Link>
        <Link href={"/eighth"} style={styles.link}>
         Screen 8
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
    padding: "10%",
  },
  title: {
    fontSize: 28,
    fontFamily: "Courier",
    fontWeight: "bold",
    color: "darkgoldenrod",
    marginBottom: 32,
  },
  linkList: {
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    fontSize: 22,
    color: "darkkhaki",
    marginVertical: 12,
  },
});