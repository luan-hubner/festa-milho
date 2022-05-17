import {
  TicketBody,
  TicketTab,
  Tck,
  Description,
  Price,
  BarrackName,
  TicketDetails
} from './components'
import React from 'react'
import ModalTicketDetails from '../../screens/tickets/modal-ticket-details'

import { TouchableHighlight } from 'react-native-gesture-handler'

interface TicketProps {
  navigation: any
  ticket: TicketType
  readonly?: boolean
  uploadPage: any
}

interface TicketType {
  descricao: string
  valor: number
  barraca: string
  id_barraca: number
}

export default function Ticket({
  navigation,
  ticket,
  readonly,
  uploadPage
}: TicketProps) {
  const [modalTicketDetailsOpen, setModalTicketDetailsOpen] =
    React.useState(false)

  const closeModal = () => {
    setModalTicketDetailsOpen(false)
    uploadPage(true)
  }

  return (
    <TouchableHighlight
      key={ticket.descricao}
      underlayColor="none"
      onPress={() => {
        !readonly && setModalTicketDetailsOpen(true)
      }}
    >
      <Tck>
        <TicketBody>
          <Description>{ticket.descricao}</Description>

          <Price>
            {Number(ticket.valor).toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL'
            })}
          </Price>
        </TicketBody>

        <TicketTab>
          <BarrackName>{ticket.barraca}</BarrackName>
        </TicketTab>

        <TicketDetails
          animationType="slide"
          transparent={false}
          visible={modalTicketDetailsOpen}
          onRequestClose={() => {
            closeModal
          }}
        >
          <ModalTicketDetails
            navigation={navigation}
            ticket={ticket}
            setModalTicketDetailsOpen={closeModal}
          />
        </TicketDetails>
      </Tck>
    </TouchableHighlight>
  )
}
