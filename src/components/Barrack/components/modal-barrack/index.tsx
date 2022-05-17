import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import { View } from 'react-native'
import {
  Container,
  Image,
  Description,
  ItemText,
  Section,
  SectionItem,
  Title,
  Button,
  ButtonText,
  VoteFooter,
  OutsideContainer,
  CloseIcon,
  BarrackVoteModal
} from './components'
import { FontAwesome5 as FA5 } from '@expo/vector-icons'

import VoteBarrackModal from './vote-barrack-modal'

interface ModalBarrackProps {
  navigation: any
  barrack: BarrackType
  setBarrackDetailsOpen: (value: boolean) => void
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

export default function ModalBarrack({
  navigation,
  barrack,
  setBarrackDetailsOpen
}: ModalBarrackProps) {
  const [voteBarrackModalOpen, setVoteBarrackModalOpen] = React.useState(false)

  const [foods, setFoods] = React.useState(barrack.cardapio.comidas)
  const [drinks, setDrinks] = React.useState(barrack.cardapio.bebidas)

  let image

  switch (barrack.id) {
    case 1:
      image = (
        <Image
          source={require('../../../../../assets/barracks_images/1.jpg')}
        />
      )
      break
    case 2:
      image = (
        <Image
          source={require('../../../../../assets/barracks_images/2.jpg')}
        />
      )
      break
    case 3:
      image = (
        <Image
          source={require('../../../../../assets/barracks_images/3.jpg')}
        />
      )
      break
    case 4:
      image = (
        <Image
          source={require('../../../../../assets/barracks/milhosoft.png')}
        />
      )
      break
    case 5:
      image = (
        <Image
          source={require('../../../../../assets/barracks_images/5.jpg')}
        />
      )
      break
    case 6:
      image = (
        <Image
          source={require('../../../../../assets/barracks_images/6.jpg')}
        />
      )
      break
    case 7:
      image = (
        <Image
          source={require('../../../../../assets/barracks_images/7.jpg')}
        />
      )
      break
    case 8:
      image = (
        <Image
          source={require('../../../../../assets/barracks_images/8.jpg')}
        />
      )
      break
    case 9:
      image = (
        <Image
          source={require('../../../../../assets/barracks_images/9.jpg')}
        />
      )
      break
    case 10:
      image = (
        <Image
          source={require('../../../../../assets/barracks_images/10.jpg')}
        />
      )
      break
    case 11:
      image = (
        <Image
          source={require('../../../../../assets/barracks_images/11.jpg')}
        />
      )
      break
    case 12:
      image = (
        <Image
          source={require('../../../../../assets/barracks_images/12.jpg')}
        />
      )
      break
    case 13:
      image = (
        <Image
          source={require('../../../../../assets/barracks_images/13.jpg')}
        />
      )
      break
    case 14:
      image = (
        <Image
          source={require('../../../../../assets/barracks_images/14.jpg')}
        />
      )
      break
    case 15:
      image = (
        <Image
          source={require('../../../../../assets/barracks_images/15.jpg')}
        />
      )
      break
    // case 16:
    //   image = (
    //     <Image source={require('../../../../../assets/barracks_images/16.jpg')} />
    //   )
    //   break
    case 17:
      image = (
        <Image
          source={require('../../../../../assets/barracks_images/17.jpg')}
        />
      )
      break
    case 18:
      image = (
        <Image
          source={require('../../../../../assets/barracks_images/18.jpg')}
        />
      )
      break
    // case 19:
    //   image = (
    //     <Image source={require('../../../../../assets/barracks_images/19.jpg')} />
    //   )
    //   break
    case 20:
      image = (
        <Image
          source={require('../../../../../assets/barracks_images/20.jpg')}
        />
      )
      break
    // case 21:
    //   image = (
    //     <Image source={require('../../../../../assets/barracks_images/21.jpg')} />
    //   )
    //   break
    case 22:
      image = (
        <Image
          source={require('../../../../../assets/barracks_images/22.jpg')}
        />
      )
      break
    case 23:
      image = (
        <Image
          source={require('../../../../../assets/barracks_images/23.jpg')}
        />
      )
      break
    case 24:
      image = (
        <Image
          source={require('../../../../../assets/barracks_images/24.jpg')}
        />
      )
      break
    case 25:
      image = (
        <Image
          source={require('../../../../../assets/barracks_images/25.jpg')}
        />
      )
      break
    case 26:
      image = (
        <Image
          source={require('../../../../../assets/barracks_images/26.jpg')}
        />
      )
      break
    case 27:
      image = (
        <Image
          source={require('../../../../../assets/barracks_images/27.jpg')}
        />
      )
      break
    case 28:
      image = (
        <Image
          source={require('../../../../../assets/barracks_images/28.jpg')}
        />
      )
      break
    case 29:
      image = (
        <Image
          source={require('../../../../../assets/barracks_images/29.jpg')}
        />
      )
      break
    // case 30:
    //   image = (
    //     <Image source={require('../../../../../assets/barracks_images/30.jpg')} />
    //   )
    //   break

    default:
      break
  }

  return (
    <OutsideContainer>
      <Container>
        <CloseIcon
          onPress={() => setBarrackDetailsOpen(false)}
          underlayColor="none"
        >
          <FA5 name="times-circle" color="#484848" size={28} />
        </CloseIcon>

        {image}

        <Title>{barrack.nome}</Title>

        <Section>
          <Description>comidas</Description>

          {foods.map((food) => (
            <SectionItem key={food.nome}>
              <ItemText>{food.nome}</ItemText>

              {food.valor != 0 && (
                <ItemText>
                  {Number(food.valor).toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                  })}
                </ItemText>
              )}
            </SectionItem>
          ))}
        </Section>

        <Section>
          <Description>bebidas</Description>

          {drinks.map((drink) => (
            <SectionItem key={drink.nome}>
              <ItemText>{drink.nome}</ItemText>

              {drink.valor != 0 && (
                <ItemText>
                  {drink.valor.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                  })}
                </ItemText>
              )}
            </SectionItem>
          ))}
        </Section>
      </Container>

      <VoteFooter>
        <Button onPress={() => setVoteBarrackModalOpen(true)}>
          <ButtonText>NOS DÊ SEU VOTO!</ButtonText>
        </Button>
      </VoteFooter>

      <BarrackVoteModal
        animationType="slide"
        transparent={false}
        visible={voteBarrackModalOpen}
        onRequestClose={() => {
          setVoteBarrackModalOpen(false)
        }}
      >
        <VoteBarrackModal
          navigation={navigation}
          barrack={barrack}
          setVoteBarrackModalOpen={setVoteBarrackModalOpen}
        />
      </BarrackVoteModal>
    </OutsideContainer>
  )
}
