import {NavigationContainer} from '@react-navigation/native'
import { MainRoutes } from './src/routes/main';

import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <MainRoutes />
    </NavigationContainer>
  );
}
