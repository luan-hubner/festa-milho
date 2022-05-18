import * as React from 'react'
import { FontAwesome5 as FA5 } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StatusBar } from 'expo-status-bar'

import Home from './screens/home'
import FoodMenu from './screens/food-menu'
import Barracks from './screens/barracks'
import Tickets from './screens/tickets'
import About from './screens/about'
import Map from './screens/map'

export default function BottomRoutes() {
  const Tab = createBottomTabNavigator()

  return (
    <>
      <StatusBar style="dark" />

      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'black'
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarStyle: { display: 'none' },
            tabBarIcon: () => <FA5 name="home" color="#484848" size={28} />
          }}
        />
        <Tab.Screen
          name="Mapa"
          component={Map}
          options={{
            tabBarButton: () => null,
          }}
        />
        <Tab.Screen
          name="Cardápio"
          component={FoodMenu}
          options={{
            tabBarIcon: () => <FA5 name="utensils" color="#484848" size={28} />
          }}
        />
        <Tab.Screen
          name="Barracas"
          component={Barracks}
          initialParams={{
            renderAllBarracks: true
          }}
          options={{
            tabBarIcon: () => <FA5 name="store" color="#484848" size={28} />
          }}
        />
        <Tab.Screen
          name="Tickets"
          component={Tickets}
          options={{
            tabBarIcon: () => (
              <FA5 name="ticket-alt" color="#484848" size={28} />
            )
          }}
        />
        <Tab.Screen
          name="Informações"
          component={About}
          options={{
            tabBarIcon: () => <FA5 name="info" color="#484848" size={28} />
          }}
        />
      </Tab.Navigator>
    </>
  )
}
