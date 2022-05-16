import { View } from 'react-native'

import { Container, Details, Title, Subtitle } from './components'

import { FontAwesome5 as FA5 } from '@expo/vector-icons'
import { TouchableHighlight } from 'react-native-gesture-handler'

interface FoodMenuItemProps {
  food: FoodType
  navigation: any
}

interface FoodType {
  nome: string
  barracas: FoodBarracksProps[]
}

interface FoodBarracksProps {
  id_barraca: number
}


export default function FoodMenuItem({ food, navigation }: FoodMenuItemProps) {
  let barracas = []

  food.barracas.map(barrack => barracas.push(barrack.id_barraca))

  const foodModel = {
    nome: food.nome,
    barracas
  } 
  
  return (
    <TouchableHighlight
      underlayColor="none"
      onPress={() => navigation.navigate('Barracas', { props: { filteredBarracks: foodModel.barracas } })}
    >
      <Container>
        <Details>
          <Title>{food.nome}</Title>
          <Subtitle>
            {food.barracas.length}
            {food.barracas.length > 1 ? ' barracas' : ' barraca'}
          </Subtitle>
        </Details>

        <FA5 name="chevron-right" color="#484848" size={28} />
      </Container>
    </TouchableHighlight>
  )
}
