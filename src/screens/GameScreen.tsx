import { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { fetchWord } from '../api/dictionary';
import { fetchRandomWord } from '../api/randomWord';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { gameScreenStyles as styles } from '../styles/gameScreenStyles';

export default function GameScreen() {
  const [word, setWord] = useState('');
  const [clues, setClues] = useState<string[]>([]);
  const [visibleClueCount, setVisibleClueCount] = useState(1);
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState('');
  const [solved, setSolved] = useState(false);
  const [guessCount, setGuessCount] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    async function loadScore() {
      const savedScore = await AsyncStorage.getItem('totalScore');
      if (savedScore) {
        setScore(Number(savedScore));
      }
    }

    loadScore();
    startNewRound();
  }, []);

  async function addScore(points: number) {
    const newScore = score + points;
    setScore(newScore);
    await AsyncStorage.setItem('totalScore', newScore.toString());
  }

  const MAX_GUESSES = 5;

  // Start a new round
  async function startNewRound() {
    setGuess('');
    setSolved(false);
    setResult('');
    setGuessCount(0);
    setVisibleClueCount(1);

    const randomWord = await fetchRandomWord();
    if (!randomWord) return;

    setWord(randomWord);

    // Fetch clues from dictionary API
    let dictionaryData;
    try {
      dictionaryData = await fetchWord(randomWord);
    } catch (error) {
      console.warn("Dictionary fetch failed:", error);
      dictionaryData = null;
    }

    let newClues: string[] = [];
    if (dictionaryData && dictionaryData[0]) {
      const meaning = dictionaryData[0].meanings[0];
      const phonetics = dictionaryData[0].phonetics;

      const definition1 =
        meaning.definitions?.[0]?.definition ?? 'No definition available';
      console.log("")
      console.log("First definition fetched:", definition1);

      const definition2 =
        meaning.definitions?.[1]?.definition ?? '';
      console.log("Second definition fetched:", definition2);

      const definition3 =
        meaning.definitions?.[2]?.definition ?? '';
      console.log("Third definition fetched:", definition3);

      const partofSpeech = meaning.partOfSpeech ?? 'No part of speech available';
      console.log("Part of speech fetched:", partofSpeech);

      const phonetic =
        phonetics?.[0]?.text ?? 'No pronunciation available';
      console.log("Phonetic fetched:", phonetic);

      const example =
        meaning.definitions?.[0]?.example ?? 'No example available';
      console.log("Example fetched:", example);

      newClues = [
        `Definition: ${definition1}`,
        `Definition 2: ${definition2}`,
        `Definition 3: ${definition3}`,
        `Part of Speech: ${partofSpeech}`,
        `Pronunciation: ${phonetic}`,
        `Example: ${example}`,
      ];
    } else {
      newClues = ['No clues available for this word.'];
    }

    setClues(newClues);
  }

  // Check answer
  function checkAnswer() {
    const isCorrect = guess.trim().toLowerCase() === word.toLowerCase();

    if (isCorrect) {
      const pointsEarned = Math.max(1, MAX_GUESSES - guessCount);
      addScore(pointsEarned);
      setResult('Correct! The word was "' + word + '".');
      setSolved(true);
      setGuess('');
      return;
    }

    const newCount = guessCount + 1;
    setGuessCount(newCount);

    if (newCount >= MAX_GUESSES) {
      setResult(`Out of guesses! The word was "${word}".`);
      setSolved(true);
    } else if (visibleClueCount < clues.length) {
      setResult('Incorrect! Here’s another clue.');
      setVisibleClueCount(prev =>
        Math.min(prev + 1, clues.length)
      );
    } else {
      setResult('Incorrect, try again.');
    }

    setGuess('');
  }

  async function saveCurrentWord() {
    const savedWord = {
      word,
      clues,
      guessCount,
      date: new Date().toISOString(),
    };

    const existing = await AsyncStorage.getItem('savedWords');
    const savedList = existing ? JSON.parse(existing) : [];

    savedList.push(savedWord);

    await AsyncStorage.setItem('savedWords', JSON.stringify(savedList));

    alert("Word saved!");
  }

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, padding: 20, paddingTop: 60 }}
      contentContainerStyle={{ 
        flexGrow: 1,
        paddingBottom: 200,
      }}
      enableOnAndroid={true}
      extraScrollHeight={100}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Guess the Word</Text>

      <Text style={styles.score}>All Time Score: {score}</Text>

      <Text style={styles.counter}>
        Guesses: {guessCount} / {MAX_GUESSES}
      </Text>

      {clues.slice(0, visibleClueCount).map((clue, index) => (
        <Text key={index} style={styles.clue}>
          {clue}
        </Text>
      ))}

      <TextInput
        placeholder="Enter your guess..."
        value={guess}
        onChangeText={setGuess}
        editable={!solved}
        style={[
          styles.input,
          solved && { backgroundColor: '#ddd' },
        ]}
      />

      <TouchableOpacity
        style={[styles.mainButton, solved && styles.buttonDisabled]}
        onPress={checkAnswer}
        disabled={solved}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {solved && (
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.secondaryButton} onPress={saveCurrentWord}>
            <Text style={styles.buttonText}>Save Word</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton} onPress={startNewRound}>
            <Text style={styles.buttonText}>Next Word</Text>
          </TouchableOpacity>
        </View>
      )}



      {result.length > 0 && (
        <Text style={styles.result}>{result}</Text>
      )}
    </KeyboardAwareScrollView>

  );
}

