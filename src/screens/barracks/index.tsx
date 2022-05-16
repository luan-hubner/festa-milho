import * as React from 'react'
import { Container, Search, Input, BarracksMenu } from './components'
import { FontAwesome5 as FA5 } from '@expo/vector-icons'
import Header from '../../components/Header'
import Barrack from '../../components/Barrack'

import { barracas as listOfBarracks } from '../../../assets/barracks.json'

interface BarracksScreenProps {
  route: any
  navigation: any
}

export default function Barracks({ route, navigation }: BarracksScreenProps) {
  const [barracks, setBarracks] = React.useState([])

  navigation.addListener('focus', () => {
    if (route.params.props) {
      handleFilteredBarracks(route.params.props.filteredBarracks)
    } else {
      setBarracks(listOfBarracks)
    }
  })

  
  navigation.addListener('blur', () => {
    setBarracks(listOfBarracks)
    route.params.props = null
  })

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
          listOfBarracks[index].nome.toLowerCase().includes(value.toLowerCase())
        ) {
          filtered.push(listOfBarracks[index])
        } else {
          if (
            listOfBarracks[index].curso
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
