import styled from 'styled-components/native'

export const OutsideContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Container = styled.ScrollView`
  flex: 0.925;
  display: flex;
  flex-direction: column;
  height: 80%;

  padding: 40px 20px 20px 20px;
`

export const Image = styled.Image`
  width: 142px;
  height: 142px;

  margin: 0 auto;

  margin-bottom: 25px;
`

export const CloseIcon = styled.TouchableHighlight`
  position: absolute;
  right: 10px;
  top: 0px;
`

export const Title = styled.Text`
  font-family: Archivo_700Bold_Italic;
  font-size: 32px;
  text-align: center;
  margin-bottom: 25px;
`

export const Section = styled.View`
  display: flex;

  flex-direction: column;

  margin: 17px 0;
`

export const Description = styled.Text`
  font-family: Archivo_700Bold_Italic;
  font-size: 18px;
  color: #beb4b4;
`

export const SectionItem = styled.View`
  display: flex;

  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom-width: 1px;
  border-style: solid;
  border-bottom-color: #f1f1f1;
  margin-bottom: 10px;
`

export const ItemText = styled.Text`
  font-family: Archivo_700Bold_Italic;
  font-size: 18px;
  color: #484848;
  padding: 8px 0;
  max-width: 80%;
`

export const VoteFooter = styled.View`
  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;
  width: 100%;

  padding: 20px 0;
`

export const Button = styled.TouchableHighlight`
  width: 300px;
  height: 52px;
  background-color: #008e1f;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;

  margin: 0 auto;
`

export const ButtonText = styled.Text`
  font-family: Archivo_700Bold_Italic;
  font-size: 20px;
  color: #fff;
`

export const BarrackVoteModal = styled.Modal`
  margin: 20px;
  background-color: white;
  border-radius: 20px;
  padding: 35px;
  align-items: center;
  shadow-color: #000;
  shadow-radius: 4px;
  elevation: 5;
`
