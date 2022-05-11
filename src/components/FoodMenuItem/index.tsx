import { View } from 'react-native'

import { Container, Details, Title, Subtitle } from './components'

import { FontAwesome5 as FA5 } from '@expo/vector-icons'
import { TouchableHighlight } from 'react-native-gesture-handler'

interface FoodMenuItemProps {
  food: FoodType
  navigation: any
}

interface FoodType {
  id: number
  title: string
  barracks: number[]
}

export default function FoodMenuItem({ food, navigation }: FoodMenuItemProps) {
  return (
    <TouchableHighlight
      underlayColor="none"
      onPress={() => navigation.navigate('Barracas', { props: { filteredBarracks: food.barracks } })}
    >
      <Container>
        <Details>
          <Title>{food.title}</Title>
          <Subtitle>
            {food.barracks.length}
            {food.barracks.length > 1 ? ' barracas' : ' barraca'}
          </Subtitle>
        </Details>

        <FA5 name="chevron-right" color="#484848" size={28} />
      </Container>
    </TouchableHighlight>
  )
}
