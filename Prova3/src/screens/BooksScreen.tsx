import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import books from "../../data/books.json";

export default function BooksScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.author}>{item.author}</Text>
            <Text style={styles.publisher}>{item.publisher}</Text>
            <Text style={styles.year}>{item.year}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  author: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  publisher: {
    fontSize: 14,
    color: "#777",
    marginBottom: 4,
  },
  year: {
    fontSize: 14,
    color: "#999",
  },
});
