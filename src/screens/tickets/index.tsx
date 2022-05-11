import * as React from 'react'

import Header from '../../components/Header'

import { BarrackName, Container, Description, Price, Ticket, TicketBody, TicketTab } from './components'

interface TicketsScreenProps {
  route: any
  navigation: any
}

export default function Tickets({ route, navigation }: TicketsScreenProps) {
  return (
    <Container>
      <Header title="Tickets" />
      
      <Ticket>
        <TicketBody>
          <Description>
            3 por 10
          </Description>

          <Price>
            12,00
          </Price>
        </TicketBody>

        <TicketTab>
          <BarrackName>
            Cabaré das Nutri
          </BarrackName>
        </TicketTab>
      </Ticket>

      <Ticket>
        <TicketBody>
          <Description>
            3 por 10
          </Description>

          <Price>
            12,00
          </Price>
        </TicketBody>

        <TicketTab>
          <BarrackName>
            Milhosoft
          </BarrackName>
        </TicketTab>
      </Ticket>
    </Container>
  )
}
