import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  flex: 1;
  display: flex;
  flex-direction: column;

  padding: 40px 20px 20px 20px;
`

export const Image = styled.Image`
  width: 142px;
  height: 142px;

  margin: 0 auto;

  margin-bottom: 30px;
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

export const FormInvalid = styled.Text`
  font-family: Archivo_700Bold;
  font-size: 16px;
  color: red;
  text-align: center;
  margin-bottom: 25px;
`

export const FormValid = styled.Text`
  font-family: Archivo_700Bold;
  font-size: 20px;
  color: #008e1f;
  text-align: center;
  margin-bottom: 25px;
`

export const AlreadyVoted = styled.Text`
  font-family: Archivo_700Bold_Italic;
  font-size: 20px;
  color: #008e1f;
  text-align: center;
  margin-bottom: 25px;
`

export const AfterVoteInformation = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ClaimTicket = styled.TouchableHighlight`
  width: 100%;
  height: 62px;
  background-color: #008e1f;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;

  margin: 0 auto;
`

export const Button = styled.TouchableHighlight`
  width: 100%;
  height: 62px;
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

export const Form = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 40px 26px 0 26px;
`

export const Input = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 18px 20px;

  background-color: #e5e5e5;
  border-radius: 5px;

  margin-bottom: 12px;
`

export const TextArea = styled.TextInput`
  font-family: Archivo_700Bold;
  color: #5f5f5f;
  font-size: 18px;
  width: 80%;
`

export const Information = styled.Text`
  font-family: Archivo_700Bold;
  color: #5f5f5f;
  font-size: 18px;
  text-align: center;
`

export const SwitchInput = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 20px 0 40px 0;
`

export const AlreadyIsStudent = styled.Text`
  font-family: Archivo_700Bold;
  color: #5f5f5f;
  font-size: 18px;
`
