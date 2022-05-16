import * as React from 'react'
import { Container, Search, Input, Foods } from './components'
import { FontAwesome5 as FA5 } from '@expo/vector-icons'
import Header from '../../components/Header'
import FoodMenuItem from '../../components/FoodMenuItem'

import { cardapio } from '../../../assets/barracks.json'

export default function FoodMenu({ navigation }) {
  const [foodList, setFoodList] = React.useState(cardapio)

  const handleSearch = (value: string) => {
    setFoodList(
      cardapio.filter((food) =>
        food.nome.toLowerCase().includes(value.toLowerCase())
      )
    )
  }

  return (
    <Container>

      <Header title="Cardápio" />

      <Search>
        <Input
          placeholder="Pesquisar..."
          keyboardType="default"
          onChangeText={(text) => handleSearch(text)}
        />

        <FA5 name="search" color="#484848" size={28} />
      </Search>

      <Foods showsVerticalScrollIndicator={false}>
        {foodList.map((food) => (
          <FoodMenuItem key={food.nome} food={food} navigation={navigation} />
        ))}
      </Foods>
    </Container>
  )
}
