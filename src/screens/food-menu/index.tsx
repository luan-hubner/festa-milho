import * as React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Container } from './components'
import Header from '../../components/Header'

export default function FoodMenu({ navigation }) {
  return (
    <Container>
      <StatusBar style="auto" />

      <Header title="Cardápio" />
    </Container>
  )
}
