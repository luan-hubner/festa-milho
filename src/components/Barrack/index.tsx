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
  navigation: any
  barrack: BarrackType
}

interface BarrackType {
  id: number
  nome: string
  curso: string
  cardapio: FoodMenuType
}

interface FoodMenuType {
  comidas: FoodType[]
  bebidas: DrinkType[]
}

interface FoodType {
  nome: string
  valor: number
}

interface DrinkType {
  nome: string
  valor: number
}

export default function Barrack({ navigation, barrack }: BarrackProps) {
  const [barrackDetailsOpen, setBarrackDetailsOpen] = useState(false)

  return (
    <TouchableHighlight
      underlayColor="none"
      accessibilityRole="link"
      onPress={() => setBarrackDetailsOpen(true)}
    >
      <Container>
        <Row>
          <Image source={require('../../../assets/barracks/milhosoft.png')} />
          <Details>
            <Title>{barrack.nome}</Title>
            <Subtitle>{barrack.curso}</Subtitle>
          </Details>
        </Row>

        {/* <Stars>
          <FA5 name="star" color="#484848" size={28} />
          <Quantity>{barrack.stars}</Quantity>
        </Stars> */}

        <BarrackDetails
          animationType="slide"
          transparent={false}
          visible={barrackDetailsOpen}
          onRequestClose={() => {
            setBarrackDetailsOpen(false)
          }}
        >
          <ModalBarrack
            navigation={navigation}
            barrack={barrack}
            setBarrackDetailsOpen={setBarrackDetailsOpen}
          />
        </BarrackDetails>
      </Container>
    </TouchableHighlight>
  )
}
