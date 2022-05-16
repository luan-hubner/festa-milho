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

  return (
    <OutsideContainer>
      <Container>
        <CloseIcon
          onPress={() => setBarrackDetailsOpen(false)}
          underlayColor="none"
        >
          <FA5 name="times-circle" color="#484848" size={28} />
        </CloseIcon>

        <Image
          source={require('../../../../../assets/barracks/milhosoft.png')}
        />

        <Title>{barrack.nome}</Title>

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
        <VoteBarrackModal
          navigation={navigation}
          barrack={barrack}
          setVoteBarrackModalOpen={setVoteBarrackModalOpen}
        />
      </BarrackVoteModal>
    </OutsideContainer>
  )
}
