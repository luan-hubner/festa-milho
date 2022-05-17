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

  let image

  switch (barrack.id) {
    case 1:
      image = (
        <Image source={require('../../../assets/barracks_images/1.jpg')} />
      )
      break
    case 2:
      image = (
        <Image source={require('../../../assets/barracks_images/2.jpg')} />
      )
      break
    case 3:
      image = (
        <Image source={require('../../../assets/barracks_images/3.jpg')} />
      )
      break
    case 4:
      image = (
        <Image source={require('../../../assets/barracks/milhosoft.png')} />
      )
      break
    case 5:
      image = (
        <Image source={require('../../../assets/barracks_images/5.jpg')} />
      )
      break
    case 6:
      image = (
        <Image source={require('../../../assets/barracks_images/6.jpg')} />
      )
      break
    case 7:
      image = (
        <Image source={require('../../../assets/barracks_images/7.jpg')} />
      )
      break
    case 8:
      image = (
        <Image source={require('../../../assets/barracks_images/8.jpg')} />
      )
      break
    case 9:
      image = (
        <Image source={require('../../../assets/barracks_images/9.jpg')} />
      )
      break
    case 10:
      image = (
        <Image source={require('../../../assets/barracks_images/10.jpg')} />
      )
      break
    case 11:
      image = (
        <Image source={require('../../../assets/barracks_images/11.jpg')} />
      )
      break
    case 12:
      image = (
        <Image source={require('../../../assets/barracks_images/12.jpg')} />
      )
      break
    case 13:
      image = (
        <Image source={require('../../../assets/barracks_images/13.jpg')} />
      )
      break
    case 14:
      image = (
        <Image source={require('../../../assets/barracks_images/14.jpg')} />
      )
      break
    case 15:
      image = (
        <Image source={require('../../../assets/barracks_images/15.jpg')} />
      )
      break
    // case 16:
    //   image = (
    //     <Image source={require('../../../assets/barracks_images/16.jpg')} />
    //   )
    //   break
    case 17:
      image = (
        <Image source={require('../../../assets/barracks_images/17.jpg')} />
      )
      break
    case 18:
      image = (
        <Image source={require('../../../assets/barracks_images/18.jpg')} />
      )
      break
    // case 19:
    //   image = (
    //     <Image source={require('../../../assets/barracks_images/19.jpg')} />
    //   )
    //   break
    case 20:
      image = (
        <Image source={require('../../../assets/barracks_images/20.jpg')} />
      )
      break
    // case 21:
    //   image = (
    //     <Image source={require('../../../assets/barracks_images/21.jpg')} />
    //   )
    //   break
    case 22:
      image = (
        <Image source={require('../../../assets/barracks_images/22.jpg')} />
      )
      break
    case 23:
      image = (
        <Image source={require('../../../assets/barracks_images/23.jpg')} />
      )
      break
    case 24:
      image = (
        <Image source={require('../../../assets/barracks_images/24.jpg')} />
      )
      break
    case 25:
      image = (
        <Image source={require('../../../assets/barracks_images/25.jpg')} />
      )
      break
    case 26:
      image = (
        <Image source={require('../../../assets/barracks_images/26.jpg')} />
      )
      break
    case 27:
      image = (
        <Image source={require('../../../assets/barracks_images/27.jpg')} />
      )
      break
    case 28:
      image = (
        <Image source={require('../../../assets/barracks_images/28.jpg')} />
      )
      break
    case 29:
      image = (
        <Image source={require('../../../assets/barracks_images/29.jpg')} />
      )
      break
    // case 30:
    //   image = (
    //     <Image source={require('../../../assets/barracks_images/30.jpg')} />
    //   )
    //   break

    default:
      break
  }

  return (
    <TouchableHighlight
      underlayColor="none"
      accessibilityRole="link"
      onPress={() => setBarrackDetailsOpen(true)}
    >
      <Container>
        <Row>
          {image}
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
