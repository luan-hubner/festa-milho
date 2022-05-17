import * as React from 'react'

import Header from '../../components/Header'

import { Container } from './components'

import { StatusBar } from 'expo-status-bar'

interface AboutScreenProps {
  route: any
  navigation: any
}

export default function About({ route, navigation }: AboutScreenProps) {
  return (
    <Container>
      <StatusBar style="dark" translucent={false} />

      <Header title="Informações" />
    </Container>
  )
}
