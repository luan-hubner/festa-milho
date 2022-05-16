import * as React from 'react'
import {
  Container,
  Title,
  OutsideContainer,
  CloseIcon,
  ButtonText,
  Button,
  TicketInfo,
  Line,
  Warning
} from './components'
import { FontAwesome5 as FA5 } from '@expo/vector-icons'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import base64 from 'react-native-base64'

interface ModalTicketDetailsProps {
  navigation: any
  ticket: TicketDetailsType
  setModalTicketDetailsOpen: (value: boolean) => void
}

interface TicketDetailsType {
  descricao: string
  valor: string
  barraca: string
  id_barraca: number
}

export default function ModalTicketDetails({
  navigation,
  ticket,
  setModalTicketDetailsOpen
}: ModalTicketDetailsProps) {
  const confirmTicketSelection = async () => {
    const userPayload = JSON.parse(await AsyncStorage.getItem('@VOTE_PAYLOAD'))

    fetch(
      `https://festadomilho-d2984-default-rtdb.firebaseio.com/registros/${userPayload.id}/tickets.json?auth=bPJEhIfXgv1iJxaOwQHwQuWz0ct7VDTR7zEFR07w`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${base64.encode('suporte:mfvmbr')}`
        },
        body: JSON.stringify({
          id_barraca: ticket.id_barraca,
          hora: new Date().toISOString()
        })
      }
    )
      .then((response) => response.json())
      .then(async (response) => {
        await AsyncStorage.removeItem('@VOTE_PAYLOAD')
        await AsyncStorage.setItem(
          '@VOTE_PAYLOAD',
          JSON.stringify({
            ...userPayload,
            tickets: [
              {
                id_barraca: ticket.id_barraca,
                hora: new Date().toISOString()
              }
            ]
          })
        )
        setModalTicketDetailsOpen(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <OutsideContainer>
      <Container>
        <CloseIcon
          onPress={() => setModalTicketDetailsOpen(false)}
          underlayColor="none"
        >
          <FA5 name="times-circle" color="#484848" size={28} />
        </CloseIcon>

        <Title>{ticket.descricao}</Title>

        <TicketInfo>
          Você está resgatando o ticket da barraca {ticket.barraca}, o ticket é:{' '}
          {ticket.descricao} no valor de {ticket.valor}.
        </TicketInfo>

        <TicketInfo>
          Para utilizar o ticket apresente o seu aplicativo para a barraca
          responsável pelo ticket selecionado.
        </TicketInfo>

        <Line />

        <Warning>ATENÇÂO</Warning>

        <TicketInfo>
          A partir do momento que confirmar o resgate você terá 15 minutos para
          utilizar o ticket selecionado, caso contrário, perderá o direito ao
          ticket.
        </TicketInfo>

        <Line />

        <Button onPress={() => confirmTicketSelection()} underlayColor="none">
          <ButtonText>CONFIRMAR</ButtonText>
        </Button>
      </Container>
    </OutsideContainer>
  )
}
