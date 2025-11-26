import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchWord } from "../api/dictionary";
import { dictionarySearchStyles as styles } from '../styles/dictionaryStyles';

export default function DictionarySearchScreen() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState("");

  async function search() {
    if (!query.trim()) return;

    setLoading(true);
    setError("");
    setData(null);

    try {
      const result = await fetchWord(query.trim().toLowerCase());

      if (!result || !result[0]) {
        setError("No results found.");
        setLoading(false);
        return;
      }

      setData(result[0]);
    } catch {
      setError("Error fetching the word.");
    }

    setLoading(false);
  }

  async function saveWord() {
    const savedWord = {
      word: query,
      data,
      date: new Date().toISOString(),
    };

    const existing = await AsyncStorage.getItem("savedWords");
    const list = existing ? JSON.parse(existing) : [];

    list.push(savedWord);

    await AsyncStorage.setItem("savedWords", JSON.stringify(list));

    alert("Word saved!");
  }

  return (
    <ScrollView style={styles.container}
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 100,
      }}
    >
      <Text style={styles.title}>Dictionary Search</Text>

      <TextInput
        style={styles.input}
        placeholder="Search a word..."
        value={query}
        onChangeText={setQuery}
      />

      <TouchableOpacity style={styles.button} onPress={search}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" style={{ marginTop: 20 }} />}

      {error ? <Text style={styles.error}>{error}</Text> : null}

      {data && (
        <View style={styles.card}>
          <Text style={styles.word}>{data.word}</Text>

          {data.phonetics?.[0]?.text && (
            <Text style={styles.phonetic}>/{data.phonetics[0].text}/</Text>
          )}

          {data.meanings.map((meaning, index) => (
            <View key={index} style={styles.section}>
              <Text style={styles.partOfSpeech}>{meaning.partOfSpeech}</Text>

              {meaning.definitions.map((def, i) => (
                <View key={i} style={styles.definitionBlock}>
                  <Text style={styles.definition}>• {def.definition}</Text>
                  {def.example && (
                    <Text style={styles.example}>"{def.example}"</Text>
                  )}
                </View>
              ))}
            </View>
          ))}

          <TouchableOpacity style={styles.saveButton} onPress={saveWord}>
            <Text style={styles.saveButtonText}>Save Word</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}
