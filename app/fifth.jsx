import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const fifth = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.topPanel} />

        <View style={styles.grid}>
          <View style={styles.leftColumn}>
            <View style={styles.panel} />
            <View style={styles.panel} />
            <View style={styles.short_panel} />
          </View>
          <View style={styles.rightColumn}>
            <View style={styles.short_panel} />
            <View style={styles.circlePanel}>
              <View style={styles.circle} />
            </View>
            <View style={styles.panel} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default fifth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkolivegreen",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    width: "75%",
    height: "95%",
    backgroundColor: "darkolivegreen",
    padding: 14,
    borderRadius: 8,
  },
  topPanel: {
    height: 75,
    backgroundColor: "burlywood",
    borderRadius: 6,
    marginBottom: 30,
  },
  grid: {
    flex: 1,
    flexDirection: "row",
  },
  leftColumn: {
    flex: 1,
    marginRight: 25,
  },
  rightColumn: {
    flex: 1,
    justifyContent: "space-between",
  },
  panel: {
    flex: 2,
    backgroundColor: "burlywood",
    borderRadius: 6,
    marginTop: 25,
  },
  short_panel: {
    flex: 1,
    backgroundColor: "burlywood",
    borderRadius: 6,
    marginTop: 25,
  },
  circlePanel: {
    flex: 3,
    backgroundColor: "burlywood",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: "gold",
  },
});
