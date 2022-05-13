import * as React from 'react'

import Header from '../../components/Header'

import {
  BarrackName,
  Container,
  Description,
  Price,
  Ticket,
  TicketBody,
  TicketTab
} from './components'

import { Text } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { TouchableHighlight } from 'react-native-gesture-handler'

interface TicketsScreenProps {
  route: any
  navigation: any
}

interface TicketType {
  id: string
  nome: string
  phone: string
  student: boolean
}

export default function Tickets({ route, navigation }: TicketsScreenProps) {
  const [userPayload, setUserPayload] = React.useState<TicketType>(
    {} as TicketType
  )

  const verifyIfUserAlreadyVote = async (): Promise<void> => {
    const payload = await AsyncStorage.getItem('@VOTE_PAYLOAD')

    const payloadParsed = JSON.parse(payload)

    setUserPayload(payloadParsed)
  }

  React.useEffect(() => {
    verifyIfUserAlreadyVote()
  }, [])

  return (
    <Container>
      <Header title="Tickets" />

      {userPayload ? (
        <TouchableHighlight onPress={() => teste()}>
          <Ticket>
            <TicketBody>
              <Description>3 por 10</Description>

              <Price>12,00</Price>
            </TicketBody>

            <TicketTab>
              <BarrackName>Cabaré das Nutri</BarrackName>
            </TicketTab>
          </Ticket>
        </TouchableHighlight>
      ) : (
        <Text>Não tem dados</Text>
      )}
    </Container>
  )
}
