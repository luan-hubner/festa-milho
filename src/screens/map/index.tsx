import * as React from 'react'

import Header from '../../components/Header'

import { Container } from './components'

import { StatusBar } from 'expo-status-bar'
import { Animated, Dimensions, Image, View } from 'react-native'

import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view'
import { PinchGestureHandler } from 'react-native-gesture-handler'

const { width } = Dimensions.get("window")
const SIZE = width

export default function Map({ route, navigation }) {
  return (
    <Container>
      <StatusBar style="dark" translucent={false} />

      <ReactNativeZoomableView maxZoom={1.5} minZoom={1} zoomStep={0.5} initialZoom={1}>
        <Animated.Image style={{ width: SIZE, height: SIZE, resizeMode: "cover" }} source={require('../../../assets/mapa.png')} />
      </ReactNativeZoomableView>
    </Container>
  )
}
