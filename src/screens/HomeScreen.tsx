import { View, Text, TouchableOpacity } from 'react-native';
import { homeScreenStyles as styles } from '../styles/homeScreenStyles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LexMe</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Game')}
      >
        <Text style={styles.buttonText}>Start Game</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('SavedWords')}
      >
        <Text style={styles.buttonText}>Saved Words</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('DictionarySearch')}
      >
        <Text style={styles.buttonText}>Dictionary Search</Text>
      </TouchableOpacity>
    </View>
  );
}
