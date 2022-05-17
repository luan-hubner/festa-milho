import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 16px 8px;

  border-radius: 8px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Details = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const Title = styled.Text`
  font-family: 'Archivo_700Bold_Italic';
  font-size: 18px;
  color: #484848;
  max-width: 200px;
`

export const Subtitle = styled.Text`
  font-family: 'Archivo_400Regular_Italic';
  font-size: 14px;
  color: #a5a5a5;
  max-width: 128px;
`

export const Image = styled.Image`
  width: 69px;
  height: 69px;

  margin-right: 16px;

  border-radius: 100px;
`

export const Stars = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Quantity = styled.Text`
  font-family: 'Archivo_700Bold';
  font-size: 14px;
  color: #484848;
  padding-top: 8px;
`

export const BarrackDetails = styled.Modal`
  margin: 20px;
  background-color: white;
  border-radius: 20px;
  padding: 35px;
  align-items: center;
  shadow-color: #000;
  shadow-radius: 4px;
  elevation: 5;
`
