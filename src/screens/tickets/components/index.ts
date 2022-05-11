import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  padding: 30px 20px 10px 20px;
`

export const Ticket = styled.View`
  width: 100%;
  height: 100px;

  border-radius: 8px;

  display: flex;
  flex-direction: row;

  background-color: red;

  border: 1px solid #ADFF00;

  margin-bottom: 10px;

`

export const TicketBody = styled.View`
  width: 75%;
  height: 100%;

  display: flex;
  flex-direction: column;

  justify-content: space-between;

  border-right-width: 1px;
  border-right-color: #ADFF00;
  padding: 15px;
`

export const Description = styled.Text`
  font-family: 'Archivo_700Bold_Italic';
  font-size: 18px;
  color: #fff;
`

export const Price = styled.Text`
  font-family: 'Archivo_400Regular_Italic';
  font-size: 18px;
  color: #fff;
`

export const BarrackName = styled.Text`
  font-family: 'Archivo_400Regular_Italic';
  font-size: 14px;
  color: #fff;
  text-align: center;
  transform: rotate(90deg);
`

export const TicketTab = styled.View`
  display: flex;

  flex: 1;

  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`