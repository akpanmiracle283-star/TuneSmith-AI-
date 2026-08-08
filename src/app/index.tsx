import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  console.log("TuneSmith HomeScreen loaded");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>🎵</Text>
        <Text style={styles.title}>TuneSmith AI</Text>
        <Text style={styles.subtitle}>
          Your AI-powered songwriting assistant
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Welcome</Text>
        <Text style={styles.cardText}>
          Turn your ideas into amazing lyrics, improve existing songs, and
          discover fresh inspiration with AI.
        </Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>📝 Write Lyrics</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>✨ Improve Lyrics</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>🎼 Generate Song Ideas</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Version 1.0 • Built with ❤️ for musicians
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1B2F",
    padding: 24,
    justifyContent: "space-between",
  },

  header: {
    alignItems: "center",
    marginTop: 30,
  },

  logo: {
    fontSize: 70,
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 10,
  },

  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: "#E0E0E0",
    textAlign: "center",
  },

  card: {
    backgroundColor: "#2E2257",
    borderRadius: 18,
    padding: 20,
    marginVertical: 25,
  },

  cardTitle: {
    color: "#FFD700",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },

  cardText: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 24,
  },

  button: {
    backgroundColor: "#6A0DAD",
    paddingVertical: 18,
    borderRadius: 15,
    marginBottom: 18,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FFD700",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  footer: {
    alignItems: "center",
    marginBottom: 20,
  },

  footerText: {
    color: "#B8B8B8",
    fontSize: 14,
  },
});