import {
  Container,
  Details,
  Title,
  Subtitle,
  Image,
  Row,
  Stars,
  Quantity,
  BarrackDetails
} from './components'
import { FontAwesome5 as FA5 } from '@expo/vector-icons'
import { useState } from 'react'
import { TouchableHighlight } from 'react-native-gesture-handler'
import ModalBarrack from './components/modal-barrack'

interface BarrackProps {
  barrack: BarrackType
}

interface BarrackType {
  id: number
  name: string
  course: string
  image: string
  stars: number
}

export default function Barrack({ barrack }: BarrackProps) {
  const [barrackDetailsOpen, setBarrackDetailsOpen] = useState(false)

  return (
    <TouchableHighlight
      underlayColor="none"
      accessibilityRole="link"
      onPress={() => setBarrackDetailsOpen(true)}
    >
      <Container>
        <Row>
          <Image source={barrack.image} />
          <Details>
            <Title>{barrack.name}</Title>
            <Subtitle>{barrack.course}</Subtitle>
          </Details>
        </Row>

        <Stars>
          <FA5 name="star" color="#484848" size={28} />
          <Quantity>{barrack.stars}</Quantity>
        </Stars>

        <BarrackDetails
          animationType="slide"
          transparent={false}
          visible={barrackDetailsOpen}
          onRequestClose={() => {
            setBarrackDetailsOpen(false)
          }}
        >
          <ModalBarrack barrack={barrack} setBarrackDetailsOpen={setBarrackDetailsOpen} />
        </BarrackDetails>
      </Container>
    </TouchableHighlight>
  )
}
