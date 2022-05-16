import * as React from 'react'

import Header from '../../components/Header'

import {
  BarrackName,
  Container,
  Description,
  Price,
  Ticket,
  TicketBody,
  TicketDetails,
  TicketTab
} from './components'

import { Text } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { TouchableHighlight } from 'react-native-gesture-handler'
import ModalTicketDetails from './modal-ticket-details'
import {
  Button,
  ButtonText,
  NeedingVote
} from './modal-ticket-details/components'

interface TicketsScreenProps {
  route: any
  navigation: any
}

interface UserPayloadType {
  id: string
  name: string
  phone: string
  student: string
  tickets: UserPayloadTicketsType
}

interface UserPayloadTicketsType {
  hora: string
  id_barraca: number
}

export default function Tickets({ route, navigation }: TicketsScreenProps) {
  const [userPayload, setUserPayload] = React.useState<UserPayloadType>(null)

  const [modalTicketDetailsOpen, setModalTicketDetailsOpen] =
    React.useState(false)

  const [userTickets, setUserTickets] = React.useState(null)

  const tickets = [
    {
      descricao: '3 por 10',
      valor: '10',
      barraca: 'CABARÉ DAS NUTRI',
      id_barraca: 2
    }
  ]

  navigation.addListener('focus', () => {
    verifyIfUserAlreadyVote()
  })

  const verifyIfUserAlreadyVote = async (): Promise<void> => {
    const payload = await AsyncStorage.getItem('@VOTE_PAYLOAD')

    const payloadParsed = JSON.parse(payload)

    if (payloadParsed.tickets) {
      const ticket = tickets.filter(
        (ticket) => ticket.id_barraca === payloadParsed.tickets[0].id_barraca
      )[0]
      setUserTickets(ticket)
    }

    setUserPayload(payloadParsed)
  }

  React.useEffect(() => {
    verifyIfUserAlreadyVote()
  }, [modalTicketDetailsOpen])

  return (
    <Container>
      <Header title="Tickets" />

      {userPayload ? (
        userPayload.tickets ? (
          <>
            <Text>Seu Ticket</Text>

            <TouchableHighlight
              key={userTickets.descricao}
              underlayColor="none"
            >
              <Ticket>
                <TicketBody>
                  <Description>{userTickets.descricao}</Description>

                  <Price>{userTickets.valor}</Price>
                </TicketBody>

                <TicketTab>
                  <BarrackName>{userTickets.barraca}</BarrackName>
                </TicketTab>
              </Ticket>
            </TouchableHighlight>
          </>
        ) : (
          tickets.map((ticket) => (
            <TouchableHighlight
              key={ticket.descricao}
              underlayColor="none"
              onPress={() => setModalTicketDetailsOpen(true)}
            >
              <Ticket>
                <TicketBody>
                  <Description>{ticket.descricao}</Description>

                  <Price>{ticket.valor}</Price>
                </TicketBody>

                <TicketTab>
                  <BarrackName>{ticket.barraca}</BarrackName>
                </TicketTab>

                <TicketDetails
                  animationType="slide"
                  transparent={false}
                  visible={modalTicketDetailsOpen}
                  onRequestClose={() => {
                    setModalTicketDetailsOpen(false)
                  }}
                >
                  <ModalTicketDetails
                    navigation={navigation}
                    ticket={ticket}
                    setModalTicketDetailsOpen={setModalTicketDetailsOpen}
                  />
                </TicketDetails>
              </Ticket>
            </TouchableHighlight>
          ))
        )
      ) : (
        <>
          <NeedingVote>
            Para poder resgatar tickets você deve votar em alguma barraca.
          </NeedingVote>

          <Button
            underlayColor="none"
            onPress={() => navigation.navigate('Barracas')}
          >
            <ButtonText>SELECIONAR BARRACA</ButtonText>
          </Button>
        </>
      )}
    </Container>
  )
}
