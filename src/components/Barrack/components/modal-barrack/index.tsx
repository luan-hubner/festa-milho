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
import { TouchableHighlight } from 'react-native-gesture-handler'
import VoteBarrackModal from './vote-barrack-modal'

interface ModalBarrackProps {
  barrack: BarrackType
  setBarrackDetailsOpen: (value: boolean) => void
}

interface BarrackType {
  id: number
  name: string
  course: string
  image: string
  stars: number
}

export default function ModalBarrack({ barrack, setBarrackDetailsOpen }: ModalBarrackProps) {
  const [voteBarrackModalOpen, setVoteBarrackModalOpen] = React.useState(false)

  const foodList = [
    {
      nome: 'Espeto de Frango',
      valor: 12
    },
    {
      nome: 'Espeto de Gado',
      valor: 12
    },
    {
      nome: 'Pamonha Recheada',
      valor: 10
    },
    {
      nome: 'Pudim Frito',
      valor: 12
    }
  ]

  const drinkList = [
    {
      nome: 'Cerveja lata',
      valor: 12
    },
    {
      nome: 'Refrigerante lata',
      valor: 8
    },
    {
      nome: 'Cerveja garrafa (600ml)',
      valor: 12
    },
    {
      nome: 'Mé',
      valor: 12
    },
    {
      nome: 'Pinga boaes',
      valor: 12
    },
    {
      nome: 'Pinga boa',
      valor: 12
    },
    {
      nome: 'Pinga boas',
      valor: 12
    },
  ]

  const [foods, setFoods] = React.useState(foodList)
  const [drinks, setDrinks] = React.useState(drinkList)

  return (
    <OutsideContainer>
      <Container>
        <CloseIcon onPress={() => setBarrackDetailsOpen(false)} underlayColor="none">
          <FA5 name="times-circle" color="#484848" size={28} />
        </CloseIcon>

        <Image source={barrack.image} />

        <Title>{barrack.name}</Title>

        <Section>
          <Description>comidas</Description>

          {foods.map((food) => (
            <SectionItem key={food.nome}>
              <ItemText>{food.nome}</ItemText>

              <ItemText>
                {Number(food.valor).toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL'
                })}
              </ItemText>
            </SectionItem>
          ))}
        </Section>

        <Section>
          <Description>bebidas</Description>

          {drinks.map((drink) => (
            <SectionItem key={drink.nome}>
              <ItemText>{drink.nome}</ItemText>

              <ItemText>
                {drink.valor.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL'
                })}
              </ItemText>
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
        <VoteBarrackModal barrack={barrack} setVoteBarrackModalOpen={setVoteBarrackModalOpen} />
      </BarrackVoteModal>
    </OutsideContainer>
  )
}
