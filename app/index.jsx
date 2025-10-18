import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";
import { useTheme } from "../context/ThemeContext";

const index = () => {
  const { theme } = useTheme();
  const headingColor = theme.colors.title;
  const linkColor = theme.colors.text;

  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true} style={styles.title}>Sandbox</ThemedText>

      <View style={styles.sectionContainer}>
         <Text style={[styles.sectionTitle, { color: headingColor }]}>Layout Practice</Text>
        <View style={styles.sectionLinks}>
          <View style={styles.linkItem}>
            <Link href={"/one"} style={[styles.link, { color: linkColor }]}>1</Link>
          </View>
          <View style={styles.linkItem}>
            <Link href={"/two"} style={[styles.link, { color: linkColor }]}>2</Link>
          </View>
          <View style={styles.linkItem}>
            <Link href={"/three"} style={[styles.link, { color: linkColor }]}>3</Link>
          </View>
          <View style={styles.linkItem}>
            <Link href={"/four"} style={[styles.link, { color: linkColor }]}>4</Link>
          </View>
        </View>
        </View>

      <View style={styles.sectionContainer}>
        <Text style={[styles.sectionTitle, { color: headingColor }]}>Component Practice</Text>
        <Link href={"/flatlist"} style={[styles.link, { color: linkColor }]}>
          FlatList
        </Link>
        <Link href={"/todo"} style={[styles.link, { color: linkColor }]}>
          To Do List
        </Link>
        <Link href={"/counter"} style={[styles.link, { color: linkColor }]}>
          Counter
        </Link>
        <Link href={"/tipcalc"} style={[styles.link, { color: linkColor }]}>
          Tip Calculator
        </Link>
        <Link href={"/colorbox"} style={[styles.link, { color: linkColor }]}>
          ColorBox
        </Link>
        <Link href={"/hiddenTiles"} style={[styles.link, { color: linkColor }]}>
          Hidden Tiles
        </Link>
      </View>

      <View style={ styles.sectionContainer }>
          <Link href={"/settings"} style={[styles.link, { color: linkColor }]}>Settings</Link> 
      </View>
    </ThemedView>
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
    fontSize: 50,
    fontFamily: "Courier",
    fontWeight: "bold",
    marginBottom: 32,
  },
sectionContainer: {
    width: "100%",
    maxWidth: 640,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 12,
    padding: 16,
    marginBottom: 18,
    alignItems: "center",
  },
  sectionLinks: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between", 
  },
  linkItem: {
    width: "48%",            
    paddingVertical: 8,
    alignItems: "center",
  },
  link: {
    fontSize: 22,
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: "Courier",
    fontWeight: "bold",
    marginBottom: 16,
    textDecorationLine: "underline",
  },
});