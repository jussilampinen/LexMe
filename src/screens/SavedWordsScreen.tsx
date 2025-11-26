import { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import { savedWordsStyles as styles } from '../styles/savedWordsScreenStyles';

export default function SavedWordsScreen({ navigation }) {
  const [words, setWords] = useState([]);
  const isFocused = useIsFocused();

  async function loadSavedWords() {
    const data = await AsyncStorage.getItem('savedWords');
    setWords(data ? JSON.parse(data) : []);
  }

  useEffect(() => {
    if (isFocused) loadSavedWords();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Words</Text>

      <FlatList
        data={words}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              navigation.navigate('WordDetail', { wordData: item })
            }
          >
            <Text style={styles.word}>{item.word}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={{ marginTop: 20, fontSize: 16 }}>
            No saved words yet.
          </Text>
        }
      />
    </View>
  );
}

