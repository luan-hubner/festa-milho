import * as React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Container, Search, Input, BarracksMenu } from './components'
import { FontAwesome5 as FA5 } from '@expo/vector-icons'
import Header from '../../components/Header'
import Barrack from '../../components/Barrack'

interface BarracksScreenProps {
  route: any
  navigation: any
}

export default function Barracks({ route, navigation }: BarracksScreenProps) {
  const listOfBarracks = [
    {
      id: 1,
      name: 'Milhosoft',
      course: 'Análise e Desenv. de Sistemas',
      image: require('../../../assets/barracks/milhosoft.png'),
      stars: 215
    },
    {
      id: 2,
      name: 'asdasdsad',
      course: 'Engenharia Civil',
      image: require('../../../assets/barracks/milhosoft.png'),
      stars: 45
    },
    {
      id: 3,
      name: 'Cabaré das Nutri',
      course: 'Nutrição',
      image: require('../../../assets/barracks/milhosoft.png'),
      stars: 33
    },
    {
      id: 4,
      name: 'ADMilhão',
      course: 'Administração',
      image: require('../../../assets/barracks/milhosoft.png'),
      stars: 98
    }
  ]

  const [barracks, setBarracks] = React.useState([])

  React.useEffect(() => {
    if (route.params.props) {
      handleFilteredBarracks(route.params.props.filteredBarracks)
    } else {
      setBarracks(listOfBarracks)
    }
  }, [route.params])

  const handleFilteredBarracks = (filteredBarracks: number[]) => {
    let barracksArr = []

    for (const barrackId of filteredBarracks) {
      barracksArr.push(
        listOfBarracks.filter((barrack) => barrack.id === barrackId)[0]
      )
    }

    setBarracks(barracksArr)
  }

  const handleSearch = async (value: string) => {
    if (!value) {
      setBarracks(listOfBarracks)
    } else {
      let filtered = []

      for (let index = 0; index < listOfBarracks.length; index++) {
        if (
          listOfBarracks[index].name.toLowerCase().includes(value.toLowerCase())
        ) {
          filtered.push(listOfBarracks[index])
        } else {
          if (
            listOfBarracks[index].course
              .toLowerCase()
              .includes(value.toLowerCase())
          ) {
            filtered.push(listOfBarracks[index])
          }
        }

        if (index === listOfBarracks.length - 1) {
          setBarracks(filtered)
        }
      }
    }
  }

  return (
    <Container>
      <Header title="Barracas" />

      <Search>
        <Input
          placeholder="Pesquisar..."
          keyboardType="default"
          onChangeText={(text) => handleSearch(text)}
        />

        <FA5 name="search" color="#484848" size={28} />
      </Search>

      <BarracksMenu showsVerticalScrollIndicator={false}>
        {barracks.map((barrack) => (
          <Barrack navigation={navigation} key={barrack.id} barrack={barrack} />
        ))}
      </BarracksMenu>
    </Container>
  )
}
