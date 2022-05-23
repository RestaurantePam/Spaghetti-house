import {NavigationContainer} from '@react-navigation/native'
import { MainRoutes } from './src/routes/Main';

import {StatusBar} from 'expo-status-bar'

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar style="light" backgroundColor='#FA1313' />
        <MainRoutes />
      </NavigationContainer>
    </>
  );
}
