import * as React from 'react'

import Header from '../../components/Header'

import { Button, ButtonText, Container, DevelopedBy, Line, Text, TextCenter, CourseImage } from './components'

import { StatusBar } from 'expo-status-bar'
import { Linking } from 'react-native'

interface AboutScreenProps {
  route: any
  navigation: any
}

export default function About({ route, navigation }: AboutScreenProps) {
  return (
    <Container>
      <StatusBar style="dark" translucent={false} />

      <Header title="Informações" />

      <Text>
        A Festa do Milho UNIFASIPE chega na sua 15º edição, sendo considerada o maior
        evento gastronômico de Sinop e região. 
      </Text>

      <Text>
        Ela surgiu como uma atividade do curso de
        Administração da instituição, e ainda mantem seu objetivo que é fomentar o
        empreendedorismo, além de demonstrar à sociedade em geral, as qualidades nutricionais do
        milho.
      </Text>

      <Line />

      <Button style={{ marginBottom: 30 }} onPress={() => Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLScsprW5xJhNW0ezGm2ka9t8t9UZuuXPnY2X_nLqiBdvHxVlTw/viewform?usp=sf_link')}>
        <ButtonText>
          DÊ SUA OPINIÃO SOBRE A FESTA DO MILHO
        </ButtonText>
      </Button>

      <Button style={{ marginBottom: 15 }} onPress={() => Linking.openURL('https://www.nivel.com.br/fasipe079')}>
        <ButtonText>
          GANHE CASHBACK
        </ButtonText>
      </Button>

      <TextCenter style={{ marginBottom: 15 }}>você será redirecionado para web ao clicar nos botões acima</TextCenter>

      <Line />

      <DevelopedBy>Aplicativo desenvolvido pelo curso de Análise e Desenvolvimento de Sistemas da UNIFASIPE</DevelopedBy>

      <CourseImage source={require('../../../assets/ads.png')} />
    </Container>
  )
}
