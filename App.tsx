import * as React from 'react'

import Home from './src/screens/home'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
  useFonts,
  Poppins_700Bold_Italic,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading'
import FoodMenu from './src/screens/food-menu'

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold_Italic,
    Poppins_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false
          }}
          component={Home}
        />
        <Stack.Screen
          name="Cardápio"
          options={{
            headerShown: false
          }}
          component={FoodMenu}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
