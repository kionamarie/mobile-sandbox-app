import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { posts } from "../data/user_posts";
import background from "../assets/images/background.jpg";
import ThemedView from "../components/ThemedView";


const sixth = () => {
  const renderItem = ({ item }) => (
    <ThemedView style={styles.postContainer}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <ThemedView style={styles.overlay}>
        <Text style={styles.username}>{item.username}</Text>
      <Text style={styles.content}>{item.content}</Text>
      </ThemedView>
      <Text style={styles.date}>{item.date}</Text>
    </ThemedView>
  );
// use local pictures for each user post, ex: item.image
  return (
    <ThemedView style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(post) => post.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </ThemedView>
  );
};

export default sixth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listContent: {},
  postContainer: {
    height: 200,
    marginBottom: 20,
    borderRadius: 12,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: 8,
    padding: 8,
    maxWidth: "80%",
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
    color: "#333",
  },
  content: {
    fontSize: 14,
    color: "#333",
  },
  date: {
    position: "absolute",
    bottom: 12,
    right: 12,
    fontSize: 12,
    color: "#666",
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
});