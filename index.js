import * as React from 'react';
import { AppRegistry, ScrollView, useColorScheme } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import App from './src/App';

export default function Main() {
  global.isDarkMode = useColorScheme() === 'dark' ? true : false;

  return (
      <PaperProvider>
        <App />
      </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);