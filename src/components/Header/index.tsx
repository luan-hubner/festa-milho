import { FontAwesome5 as FA5 } from '@expo/vector-icons'

import { Container, Title } from './components'

interface HeaderProps {
  title: string
}

export default function Header({ title }: HeaderProps) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}
