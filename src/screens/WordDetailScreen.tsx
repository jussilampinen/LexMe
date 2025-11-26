import { useEffect, useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchWord } from '../api/dictionary';
import { wordDetailStyles as styles } from '../styles/wordDetailStyles';

export default function WordDetailScreen({ route, navigation }) {
  const { wordData } = route.params;
  const [dictionaryData, setDictionaryData] = useState(null);

  async function loadWordData() {
    const result = await fetchWord(wordData.word);
    if (result && result[0]) {
      setDictionaryData(result[0]);
    }
  }

  function confirmDelete() {
  Alert.alert(
    "Delete Word",
    `Are you sure you want to delete "${wordData.word}"?`,
    [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => performDelete(),
      }
    ]
  );
}

async function performDelete() {
  const saved = await AsyncStorage.getItem('savedWords');
  const savedList = saved ? JSON.parse(saved) : [];

  const newList = savedList.filter(item => item.word !== wordData.word);

  await AsyncStorage.setItem('savedWords', JSON.stringify(newList));

  navigation.goBack();
}


  useEffect(() => {
    loadWordData();
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      <Text style={styles.title}>{wordData.word}</Text>

      {!dictionaryData && (
        <Text style={{ marginTop: 20 }}>Loading...</Text>
      )}

      {dictionaryData && (
        <>
          {/* PHONETICS */}
          {dictionaryData.phonetics?.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Pronunciation</Text>

              {dictionaryData.phonetics.map((p, i) => (
                <View key={i} style={{ marginBottom: 6 }}>
                  <Text style={styles.definition}>
                    {p.text || 'No phonetic text'}
                  </Text>
                </View>
              ))}
            </View>
          )}

          {/* ORIGIN */}
          {dictionaryData.origin && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Origin</Text>
              <Text style={styles.definition}>{dictionaryData.origin}</Text>
            </View>
          )}

          {/* MEANINGS */}
          {dictionaryData.meanings.map((meaning, index) => (
            <View key={index} style={styles.section}>
              <Text style={styles.sectionTitle}>
                {meaning.partOfSpeech.toUpperCase()}
              </Text>

              {/* Global synonyms */}
              {meaning.synonyms?.length > 0 && (
                <Text style={styles.subList}>
                  Synonyms: {meaning.synonyms.join(', ')}
                </Text>
              )}

              {/* Global antonyms */}
              {meaning.antonyms?.length > 0 && (
                <Text style={styles.subList}>
                  Antonyms: {meaning.antonyms.join(', ')}
                </Text>
              )}

              {/* Definitions */}
              {meaning.definitions.map((def, i) => (
                <View key={i} style={styles.definitionBlock}>
                  <Text style={styles.definition}>
                    {i + 1}. {def.definition}
                  </Text>

                  {def.example && (
                    <Text style={styles.example}>
                      Example: "{def.example}"
                    </Text>
                  )}

                  {def.synonyms?.length > 0 && (
                    <Text style={styles.subList}>
                      Def Synonyms: {def.synonyms.join(', ')}
                    </Text>
                  )}

                  {def.antonyms?.length > 0 && (
                    <Text style={styles.subList}>
                      Def Antonyms: {def.antonyms.join(', ')}
                    </Text>
                  )}
                </View>
              ))}
            </View>
          ))}
        </>
      )}

      {/* DELETE BUTTON */}
      <View style={styles.deleteButton}>
        <Text
          style={styles.deleteButtonText}
          onPress={confirmDelete}
        >
          Delete Word
        </Text>
      </View>

    </ScrollView>
  );

}


