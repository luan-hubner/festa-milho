import React from 'react'

import Home from './src/screens/home'

import { useFonts, Poppins_700Bold_Italic } from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading'

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold_Italic
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return <Home />
}
