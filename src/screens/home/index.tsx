import * as React from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  Container,
  Image,
  MenuButtonText,
  Menu,
  MenuButton
} from '../../components/Container'

export default function Home() {
  return (
    <Container>
      <StatusBar style="auto" />
      <Image source={require('../../../assets/milho_logo.png')} />

      <Menu>
        <MenuButton>
          <MenuButtonText>MAPA</MenuButtonText>
        </MenuButton>

        <MenuButton>
          <MenuButtonText>CARDÁPIO</MenuButtonText>
        </MenuButton>

        <MenuButton>
          <MenuButtonText>BARRACAS</MenuButtonText>
        </MenuButton>

        <MenuButton>
          <MenuButtonText>TICKETS</MenuButtonText>
        </MenuButton>

        <MenuButton>
          <MenuButtonText>INFORMAÇÕES</MenuButtonText>
        </MenuButton>
      </Menu>
    </Container>
  )
}
