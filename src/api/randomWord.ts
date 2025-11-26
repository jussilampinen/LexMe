import axios from 'axios';

export async function fetchRandomWord() {
  try {
    const res = await axios.get('https://random-word-api.vercel.app/api?word=1');
    const wordObj = res.data[0];
    console.log("");
    console.log("Fetched random word:", wordObj);

    let word: string;

    word = wordObj[0].word ?? wordObj;

    console.log("Word fetched:", word);
    return word.toLowerCase();
  } catch (error) {
    console.warn("Error fetching random word:", error);
    return null;
  }
}
