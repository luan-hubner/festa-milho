import * as React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Container, Search, Input, Foods } from './components'
import { FontAwesome5 as FA5 } from '@expo/vector-icons'
import Header from '../../components/Header'
import FoodMenuItem from '../../components/FoodMenuItem'

export default function FoodMenu({ navigation }) {
  const foods = [
    {
      id: 1,
      title: 'Pamonha com Mel',
      barracks: [1, 3, 4]
    },
    {
      id: 2,
      title: 'Espetinho',
      barracks: [1, 2]
    },
    {
      id: 3,
      title: 'Pipoca',
      barracks: [1]
    },
    {
      id: 4,
      title: 'Pipoca',
      barracks: [3]
    },
    {
      id: 5,
      title: 'Pipoca',
      barracks: [4]
    },
    {
      id: 6,
      title: 'Pipoca',
      barracks: [2]
    },
    {
      id: 7,
      title: 'Pipoca',
      barracks: [1]
    },
    {
      id: 8,
      title: 'Pipoca',
      barracks: [1]
    }
  ]

  const [foodList, setFoodList] = React.useState(foods)

  const handleSearch = (value: string) => {
    setFoodList(
      foods.filter((food) =>
        food.title.toLowerCase().includes(value.toLowerCase())
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
          <FoodMenuItem key={food.id} food={food} navigation={navigation} />
        ))}
      </Foods>
    </Container>
  )
}
