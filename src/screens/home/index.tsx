import * as React from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  Container,
  Image,
  MenuButtonText,
  Menu,
  MenuButton
} from './components'
import { FontAwesome5 as FA5 } from '@expo/vector-icons'
import { Linking, TouchableHighlight, View } from 'react-native'

export default function Home({ navigation }) {
  return (
    <Container>
      <Image source={require('../../../assets/milho_logo.png')} />

      <Menu>
        <TouchableHighlight
          underlayColor="none"
          onPress={() => Linking.openURL('https://drive.google.com/file/d/1TPoTkAyViKmGs4TrsbjEoIT-uerIDyqr/view?usp=sharing')}
        >
          <MenuButton>
            <MenuButtonText>MAPA</MenuButtonText>

            <FA5 name="map-marker-alt" color="#484848" size={28} />
          </MenuButton>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor="none"
          onPress={() => navigation.navigate('Cardápio')}
        >
          <MenuButton>
            <MenuButtonText>CARDÁPIO</MenuButtonText>

            <FA5 name="utensils" color="#484848" size={28} />
          </MenuButton>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor="none"
          onPress={() => navigation.navigate('Barracas')}
        >
          <MenuButton>
            <MenuButtonText>BARRACAS</MenuButtonText>

            <FA5 name="store" color="#484848" size={28} />
          </MenuButton>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor="none"
          onPress={() => navigation.navigate('Tickets')}
        >
          <MenuButton>
            <MenuButtonText>TICKETS</MenuButtonText>

            <FA5 name="ticket-alt" color="#484848" size={28} />
          </MenuButton>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor="none"
          onPress={() => navigation.navigate('Informações')}
        >
          <MenuButton>
            <MenuButtonText>INFORMAÇÕES</MenuButtonText>

            <FA5 name="info-circle" color="#484848" size={28} />
          </MenuButton>
        </TouchableHighlight>
      </Menu>
    </Container>
  )
}
