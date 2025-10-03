import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigator } from './src/navigators/app-navigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

function App() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

export default App;
