import {useFonts} from 'expo-font'
import {Poppins_400Regular} from '@expo-google-fonts/poppins'

import {NavigationContainer} from '@react-navigation/native'
import { MainRoutes } from './src/routes/Main';

import {StatusBar} from 'expo-status-bar'
import AppLoading from 'expo-app-loading'

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins':Poppins_400Regular
  })
  if(!fontsLoaded){
    return <AppLoading />
  }
  return (
    <>
      <NavigationContainer>
        <StatusBar style="light" backgroundColor='#FA1313' />
        <MainRoutes />
      </NavigationContainer>
    </>
  );
}
