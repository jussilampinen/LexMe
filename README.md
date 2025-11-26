# LexMe - Word Guessing and Dictionary App
LexMe is a React Native / Expo application that combines a word-guessing game, a dictionary browser, and a saved-words library.
The app fetches real definitions using the Dictionary API and generates random challenge words using the Random Words API.

## Features
Word Guessing Game
- Generates a random word using the [Random Words API](https://random-word-api.vercel.app/)
- Provides multiple clues from the [Dictionary API](https://dictionaryapi.dev/)
- Clues unlock progressively when you guess incorrectly
- Five-guess limit
- Score system
- Optionally save the solved word

Saved Words Library
- Display all saved words
- Taping a word opens its Word Detail page
- Dictionaty information
    - Phonetics
    - All meanings
    - Definitions and examples
    - Synonyms and antonyms
- Delete option with confirmation pop-up
- Presistent storage usinc AsyncStorage

Dictionaty Search
- Search for any English word
- Show full definition like the Saved Words Detail-screen
- Ability to save searched words to your saved list

## Installation Guide
1. Install dependencies
```
npm install
```
2. Start Expo
```
npx expo start
```

## Future Enhancements
- Audio pronunciation playback
- Difficulty settings
- Custom visual themes


