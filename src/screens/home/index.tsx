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
import { TouchableHighlight } from 'react-native'

export default function Home({ navigation }) {
  return (
    <Container>
      <StatusBar style="auto" />
      <Image source={require('../../../assets/milho_logo.png')} />

      <Menu>
        <MenuButton>
          <MenuButtonText>MAPA</MenuButtonText>

          <FA5 name="map-marker-alt" color="#484848" size={28} />
        </MenuButton>

        <TouchableHighlight
          underlayColor="none"
          onPress={() => navigation.push('Cardápio')}
        >
          <MenuButton>
            <MenuButtonText>CARDÁPIO</MenuButtonText>

            <FA5 name="utensils" color="#484848" size={28} />
          </MenuButton>
        </TouchableHighlight>

        <MenuButton>
          <MenuButtonText>BARRACAS</MenuButtonText>

          <FA5 name="store" color="#484848" size={28} />
        </MenuButton>

        <MenuButton spaced>
          <MenuButtonText>TICKETS</MenuButtonText>

          <FA5 name="ticket-alt" color="#484848" size={28} />
        </MenuButton>

        <MenuButton>
          <MenuButtonText>INFORMAÇÕES</MenuButtonText>

          <FA5 name="info-circle" color="#484848" size={28} />
        </MenuButton>
      </Menu>
    </Container>
  )
}
