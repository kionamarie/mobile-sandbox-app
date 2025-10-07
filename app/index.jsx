import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mobile Dev Practice</Text>
      <View style={styles.linkList}>
        <Link href={"/second"} style={styles.link}>
          2
        </Link>
        <Link href={"/third"} style={styles.link}>
          3
        </Link>
        <Link href={"/fourth"} style={styles.link}>
          4
        </Link>
        <Link href={"/fifth"} style={styles.link}>
          5
        </Link>
        <Link href={"/sixth"} style={styles.link}>
          6
        </Link>
        <Link href={"/seventh"} style={styles.link}>
        7
        </Link>
        <Link href={"/eighth"} style={styles.link}>
        8
        </Link>
        <Link href={"/ninth"} style={styles.link}>
        9
        </Link>
        <Link href={"/colorbox"} style={styles.link}>
        10 (ColorBox)
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