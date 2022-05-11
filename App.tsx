import * as React from 'react'
import 'react-native-gesture-handler'
import {
  useFonts,
  Poppins_700Bold_Italic,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'
import {
  Archivo_700Bold_Italic,
  Archivo_700Bold,
  Archivo_400Regular_Italic
} from '@expo-google-fonts/archivo'
import AppLoading from 'expo-app-loading'

import FoodMenu from './src/screens/food-menu'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import BottomRoutes from './src/bottomTabs'
import Barracks from './src/screens/barracks'

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold_Italic,
    Poppins_700Bold,
    Archivo_700Bold_Italic,
    Archivo_700Bold,
    Archivo_400Regular_Italic
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, detachPreviousScreen: true }}>
        <Stack.Screen name="Home" component={BottomRoutes} />
        <Stack.Screen name="Cardápio" component={FoodMenu} />
        <Stack.Screen name="Barracas" component={Barracks} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
