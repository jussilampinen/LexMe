import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import GameScreen from '../screens/GameScreen';
import SavedWordsScreen from '../screens/SavedWordsScreen';
import WordDetailScreen from '../screens/WordDetailScreen';
import DictionarySearchScreen from "../screens/DictionarySearchScreen";

type RootStackParamList = {
  Home: undefined;
  Game: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="SavedWords" component={SavedWordsScreen} />
        <Stack.Screen name="WordDetail" component={WordDetailScreen} />
        <Stack.Screen name="DictionarySearch" component={DictionarySearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
