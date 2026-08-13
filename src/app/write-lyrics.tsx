import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { router } from "expo-router";

const genres = [
  "Afrobeats",
  "Hip-Hop",
  "R&B",
  "Pop",
  "Gospel",
  "Reggae",
];

const moods = [
  "Happy",
  "Sad",
  "Romantic",
  "Motivational",
  "Chill",
  "Energetic",
];

export default function WriteLyricsScreen() {
  const [topic, setTopic] = useState("");
  const [genre, setGenre] = useState("Afrobeats");
  const [mood, setMood] = useState("Happy");
  const [keywords, setKeywords] = useState("");
  const [generatedLyrics, setGeneratedLyrics] = useState("");

  const handleGenerate = () => {
    if (!topic.trim()) {
      setGeneratedLyrics(
        "Tell us what you want your song to be about first."
      );
      return;
    }

    setGeneratedLyrics(
      `Your song idea is ready to be created.\n\nTopic: ${topic}\nGenre: ${genre}\nMood: ${mood}${
        keywords.trim() ? `\nKeywords: ${keywords}` : ""
      }\n\nAI-generated lyrics will appear here once the TuneSmith AI engine is connected.`
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>

        <View style={styles.header}>
          <Text style={styles.logo}>🎵</Text>
          <Text style={styles.title}>Write Lyrics</Text>
          <Text style={styles.subtitle}>
            Turn your idea into a song with TuneSmith AI.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>What's your song about?</Text>

          <TextInput
            style={[styles.input, styles.topicInput]}
            placeholder="e.g. chasing your dreams despite the struggles"
            placeholderTextColor="#999999"
            value={topic}
            onChangeText={setTopic}
            multiline
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Genre</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.optionsRow}
          >
            {genres.map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.option,
                  genre === item && styles.selectedOption,
                ]}
                onPress={() => setGenre(item)}
              >
                <Text
                  style={[
                    styles.optionText,
                    genre === item && styles.selectedOptionText,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Mood</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.optionsRow}
          >
            {moods.map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.option,
                  mood === item && styles.selectedOption,
                ]}
                onPress={() => setMood(item)}
              >
                <Text
                  style={[
                    styles.optionText,
                    mood === item && styles.selectedOptionText,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Keywords (optional)</Text>

          <TextInput
            style={styles.input}
            placeholder="e.g. hustle, family, success, freedom"
            placeholderTextColor="#999999"
            value={keywords}
            onChangeText={setKeywords}
          />
        </View>

        <TouchableOpacity
          style={styles.generateButton}
          onPress={handleGenerate}
        >
          <Text style={styles.generateButtonText}>✨ Generate Lyrics</Text>
        </TouchableOpacity>

        {generatedLyrics ? (
          <View style={styles.resultCard}>
            <Text style={styles.resultTitle}>Your Lyrics</Text>
            <Text style={styles.resultText}>{generatedLyrics}</Text>
          </View>
        ) : null}

        <Text style={styles.footer}>
          TuneSmith AI • Create. Refine. Inspire.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1B2F",
  },

  content: {
    padding: 24,
    paddingBottom: 40,
  },

  backButton: {
    alignSelf: "flex-start",
    marginBottom: 15,
  },

  backText: {
    color: "#FFD700",
    fontSize: 17,
    fontWeight: "600",
  },

  header: {
    alignItems: "center",
    marginBottom: 30,
  },

  logo: {
    fontSize: 55,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 8,
  },

  subtitle: {
    color: "#D0D0D0",
    fontSize: 15,
    textAlign: "center",
    marginTop: 8,
  },

  section: {
    marginBottom: 24,
  },

  label: {
    color: "#FFD700",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 10,
  },

  input: {
    backgroundColor: "#2E2257",
    borderWidth: 1,
    borderColor: "#6A0DAD",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 15,
    color: "#FFFFFF",
    fontSize: 16,
  },

  topicInput: {
    minHeight: 110,
    textAlignVertical: "top",
  },

  optionsRow: {
    paddingRight: 10,
  },

  option: {
    backgroundColor: "#2E2257",
    borderWidth: 1,
    borderColor: "#6A0DAD",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 10,
  },

  selectedOption: {
    backgroundColor: "#6A0DAD",
    borderColor: "#FFD700",
  },

  optionText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },

  selectedOptionText: {
    color: "#FFD700",
  },

  generateButton: {
    backgroundColor: "#6A0DAD",
    borderWidth: 2,
    borderColor: "#FFD700",
    borderRadius: 15,
    paddingVertical: 18,
    alignItems: "center",
    marginTop: 5,
  },

  generateButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  resultCard: {
    backgroundColor: "#2E2257",
    borderRadius: 18,
    padding: 20,
    marginTop: 25,
    borderWidth: 1,
    borderColor: "#6A0DAD",
  },

  resultTitle: {
    color: "#FFD700",
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 12,
  },

  resultText: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 25,
  },

  footer: {
    color: "#888888",
    fontSize: 13,
    textAlign: "center",
    marginTop: 30,
  },
});