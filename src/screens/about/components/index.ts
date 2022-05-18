import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  flex: 1;

  height: 100%;

  padding: 30px 20px 50px 20px;
`

export const Text = styled.Text`
  font-family: 'Archivo_400Regular';
  font-size: 22px;
  color: #484848;
  margin-bottom: 20px;
  text-align: justify;
  width: 100%;
`

export const Button = styled.TouchableHighlight`
  width: 300px;
  height: 65px;
  background-color: #008e1f;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;

  margin: 0 auto;
  
  padding: 8px 0;
`

export const ButtonText = styled.Text`
  font-family: Archivo_700Bold_Italic;
  font-size: 20px;
  color: #fff;
  text-align: center;
`

export const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: #484848;
  margin-bottom: 25px;
`

export const TextCenter = styled.Text`
  font-family: 'Archivo_400Regular_Italic';
  font-size: 16px;
  color: #484848;
  margin-bottom: 20px;
  text-align: center;
  max-width: 200px;
  width: 100%;
  margin: 0 auto;
`

export const DevelopedBy = styled.Text`
  font-family: 'Archivo_700Bold_Italic';
  font-size: 16px;
  color: #484848;
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 15px;
`

export const CourseImage = styled.Image`
  height: 135px;
  margin: 0 auto;
  margin-bottom: 50px;
`
