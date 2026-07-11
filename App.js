import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>🎵 TuneSmith AI</Text>
        <Text style={styles.subtitle}>
          Your AI Songwriting Assistant
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 34,
    color: '#FFD700',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 10,
  },
});