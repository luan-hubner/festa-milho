import * as React from 'react'
import {
  Container,
  Image,
  Title,
  Button,
  ButtonText,
  CloseIcon,
  Form,
  Input,
  TextArea,
  Information,
  AlreadyIsStudent,
  SwitchInput,
} from './components'
import { FontAwesome5 as FA5 } from '@expo/vector-icons'
import { Switch } from 'react-native'

interface VoteBarrackModalProps {
  barrack: BarrackType
  setVoteBarrackModalOpen: (value: boolean) => void
}

interface BarrackType {
  id: number
  name: string
  course: string
  image: string
  stars: number
}

export default function VoteBarrackModal({ barrack, setVoteBarrackModalOpen }: VoteBarrackModalProps) {
  const [barrackVoteModalOpen, setBarrackVoteModalOpen] = React.useState(false)

  const [isStudent, setIsStudent] = React.useState(false)

  const toggleSwitch = () => setIsStudent(previousState => !previousState);

  return (
    <Container>
      <CloseIcon onPress={() => setVoteBarrackModalOpen(false)} underlayColor="none">
        <FA5 name="times-circle" color="#484848" size={28} />
      </CloseIcon>

      <Image source={barrack.image} />

      <Title>{barrack.name}</Title>

      <Information>
        Para votar nessa barraca preencha os campos abaixo,
        você poderá votar apenas uma única vez.
      </Information>

      <Form>
        <Input>
          <TextArea placeholder='Nome' />
          <FA5 name="user-alt" color="#484848" size={24} />
        </Input>

        <Input>
          <TextArea placeholder='Telefone' />
          <FA5 name="phone" color="#484848" size={24} />
        </Input>

        <SwitchInput>
          <Switch
            trackColor={{ false: "#767577", true: "#008e1f" }}
            thumbColor={isStudent ? "#ffffff" : "#ffffff"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isStudent}
          />
          
          <AlreadyIsStudent>
            É aluno UNIFASIPE?
          </AlreadyIsStudent>
        </SwitchInput>

        <Button>
          <ButtonText>CONFIRMAR!</ButtonText>
        </Button>
      </Form>
    </Container>
  )
}
