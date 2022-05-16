import * as React from 'react'

import Header from '../../components/Header'

import {
  Container,
  Hour,
  User,
  YourTicketInformationText,
  YourTicketInformationTitle
} from './components'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { TouchableHighlight } from 'react-native-gesture-handler'
import {
  Button,
  ButtonText,
  NeedingVote
} from './modal-ticket-details/components'

import { ticket as tickets } from '../../../assets/barracks.json'
import Ticket from '../../components/Ticket'
import { StatusBar } from 'expo-status-bar'

interface TicketsScreenProps {
  route: any
  navigation: any
}

interface UserPayloadType {
  id: string
  nome: string
  fone: string
  aluno: string
  tickets: UserPayloadTicketsType
}

interface UserPayloadTicketsType {
  hora: string
  id_barraca: number
}

export default function Tickets({ route, navigation }: TicketsScreenProps) {
  const [userPayload, setUserPayload] = React.useState<UserPayloadType>(null)

  const [userTickets, setUserTickets] = React.useState(null)
  const [limitHour, setLimitHour] = React.useState('')

  const [uploadPage, setUploadPage] = React.useState(false)

  navigation.addListener('focus', () => {
    verifyIfUserAlreadyVote()
  })

  const verifyIfUserAlreadyVote = async (): Promise<void> => {
    const payload = await AsyncStorage.getItem('@VOTE_PAYLOAD')

    if (!payload) {
      return
    }

    const payloadParsed = JSON.parse(payload)

    if (payloadParsed.tickets) {
      const ticket = tickets.filter(
        (ticket) => ticket.id_barraca === payloadParsed.tickets[0].id_barraca
      )[0]
      setLimitHour(payloadParsed.tickets[0].hora)
      setUserTickets(ticket)
    }

    setUserPayload(payloadParsed)
  }

  React.useEffect(() => {
    verifyIfUserAlreadyVote()
  }, [uploadPage])

  return (
    <Container>
      <StatusBar style='dark' translucent={false} />

      <Header title="Tickets" />

      {userPayload ? (
        userTickets ? (
          <>
            <User>{userPayload.nome}</User>

            <YourTicketInformationTitle>VOCÊ POSSUI UM TICKET RESGATADO</YourTicketInformationTitle>

            <Ticket navigation={navigation} ticket={userTickets} readonly />

            <YourTicketInformationText>RESGATE O SEU PRODUTO ATÉ:</YourTicketInformationText>

            <Hour>{limitHour.split(':')[0] + ':' + limitHour.split(':')[1]}</Hour>
          </>
        ) : (
          tickets.map((ticket) => (
            <Ticket navigation={navigation} ticket={ticket} key={ticket.descricao} uploadPage={setUploadPage} />
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
