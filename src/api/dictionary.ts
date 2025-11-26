import axios from 'axios';

const BASE = 'https://api.dictionaryapi.dev/api/v2/entries/en';

export async function fetchWord(word: string) {
  try {
    const res = await axios.get(`${BASE}/${word}`);
    return res.data; 
  } catch (err) {
    console.warn('API error:', err);
    return null;
  }
}
