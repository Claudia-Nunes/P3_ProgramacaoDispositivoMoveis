import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import books from "../../data/books.json";

export default function HomeScreen({ navigation }: any) {
  const [stats, setStats] = useState({
    totalDisciplinas: 0,
    totalLivros: 0,
    livroMaisVelho: { title: "", year: 0 },
    livroMaisNovo: { title: "", year: 0 },
  });

  useEffect(() => {
    const disciplinas = new Set(books.map((book) => book.course));
    const anos = books
      .map((book) => ({ title: book.title, year: book.year }))
      .filter((book) => !isNaN(book.year))
      .sort((a, b) => a.year - b.year);

    setStats({
      totalDisciplinas: disciplinas.size,
      totalLivros: books.length,
      livroMaisVelho: anos.length > 0 ? anos[0] : { title: "N/A", year: 0 },
      livroMaisNovo:
        anos.length > 0 ? anos[anos.length - 1] : { title: "N/A", year: 0 },
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bibliografia</Text>
      <View style={styles.card}>
        <Text style={styles.text}>Total de disciplinas: {stats.totalDisciplinas}</Text>
        <Text style={styles.text}>Total de livros: {stats.totalLivros}</Text>
        <Text style={styles.text}>
          Livro mais velho: {stats.livroMaisVelho.title} ({stats.livroMaisVelho.year})
        </Text>
        <Text style={styles.text}>
          Livro mais novo: {stats.livroMaisNovo.title} ({stats.livroMaisNovo.year})
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Lista de livros")}
      >
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
  },
  card: {
    width: "90%",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
