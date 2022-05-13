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
  FormInvalid,
  AlreadyVoted,
  FormValid,
  ClaimTicket,
  AfterVoteInformation
} from './components'
import { FontAwesome5 as FA5 } from '@expo/vector-icons'
import { Keyboard, Switch } from 'react-native'
import base64 from 'react-native-base64'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface VoteBarrackModalProps {
  navigation: any
  barrack: BarrackType
  setVoteBarrackModalOpen: (value: boolean) => void
}

interface BarrackType {
  id: number
  nome: string
  curso: string
  cardapio: FoodMenuType
}

interface FoodMenuType {
  comidas: FoodType[]
  bebidas: DrinkType[]
}

interface FoodType {
  nome: string
  valor: number
}

interface DrinkType {
  nome: string
  valor: number
}

export default function VoteBarrackModal({
  navigation,
  barrack,
  setVoteBarrackModalOpen
}: VoteBarrackModalProps) {
  const [userAlreadyHaveVote, setUserAlreadyHaveVote] = React.useState(false)

  const [barrackVoteModalOpen, setBarrackVoteModalOpen] = React.useState(false)

  const [name, setName] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [isStudent, setIsStudent] = React.useState(false)

  const [formInvalid, setFormInvalid] = React.useState(false)
  const [formSuccessfullySubmitted, setFormSuccessfullySubmitted] =
    React.useState(false)

  const [keyboardOpen, setKeyboardOpen] = React.useState(false)

  React.useEffect(() => {
    const verifyIfUserAlreadyVote = async (): Promise<void> => {
      const vote = await AsyncStorage.getItem('@VOTE_PAYLOAD')

      if (vote) {
        setUserAlreadyHaveVote(true)
      }
    }

    verifyIfUserAlreadyVote()
  }, [])

  Keyboard.addListener('keyboardDidShow', () => {
    setKeyboardOpen(true)
  })

  Keyboard.addListener('keyboardDidHide', () => {
    setKeyboardOpen(false)
  })

  const toggleSwitch = () => setIsStudent((previousState) => !previousState)

  const verifyIfFormIsValid = (): boolean => {
    if (!name || !phone) {
      return false
    } else {
      return true
    }
  }

  const handleSubmitSuccess = () => {
    setName('')
    setPhone('')
    setIsStudent(false)

    setFormSuccessfullySubmitted(true)

    setTimeout(() => {
      setFormSuccessfullySubmitted(false)
      setUserAlreadyHaveVote(true)
    }, 5000)
  }

  const handleSubmit = () => {
    Keyboard.dismiss()

    const formIsValid = verifyIfFormIsValid()

    if (!formIsValid) {
      setFormInvalid(true)
      return
    }

    fetch(
      `https://festadomilho-d2984-default-rtdb.firebaseio.com/registros.json?auth=bPJEhIfXgv1iJxaOwQHwQuWz0ct7VDTR7zEFR07w&orderBy=%22fone%22&equalTo=%22${phone}%22`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${base64.encode('suporte:mfvmbr')}`
        }
      }
    )
      .then((response) => response.json())
      .then(async (response) => {
        let userId: string

        const remodelResponse = Object.keys(response).map((key, index) => {
          /*   
            CONVERTE RETORNO DO FIREBASE QUE VEM
            COMO OBJETO DE OBJETOS PARA ARRAY DE
            OBJETOS PARA FACILITAR O MANUSEIO DOS DADOS
          */

          if (index === 0) {
            userId = key
          }

          return response[key]
        })

        if (remodelResponse.length) {
          // USUÁRIO JÁ VOTOU UMA VEZ (VERIFICADO ATRAVÉS DO NÚMERO DE TELEFONE)

          await AsyncStorage.setItem(
            '@VOTE_PAYLOAD',
            JSON.stringify({
              id: userId,
              name: remodelResponse[0].nome,
              phone: remodelResponse[0].fone,
              student: remodelResponse[0].aluno
            })
          )

          return setUserAlreadyHaveVote(true)
        } else {
          // USUÁRIO AINDA NÃO VOTOU (CHAMAR FUNÇÃO PARA REGISTRAR O VOTO)

          registerNewVote()
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const registerNewVote = async () => {
    fetch(
      `https://festadomilho-d2984-default-rtdb.firebaseio.com/votacao/${barrack.id}.json?auth=bPJEhIfXgv1iJxaOwQHwQuWz0ct7VDTR7zEFR07w`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${base64.encode('suporte:mfvmbr')}`
        },
        body: JSON.stringify({
          voto: 1
        })
      }
    )
      .then((response) => response.json)
      .then((response) => {
        registerNewVoter()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const registerNewVoter = () => {
    fetch(
      `https://festadomilho-d2984-default-rtdb.firebaseio.com/registros.json?auth=bPJEhIfXgv1iJxaOwQHwQuWz0ct7VDTR7zEFR07w`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${base64.encode('suporte:mfvmbr')}`
        },
        body: JSON.stringify({
          nome: name,
          fone: phone,
          aluno: isStudent
        })
      }
    )
      .then((response) => response.json)
      .then((response) => {
        handleSubmitSuccess()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Container>
      <CloseIcon
        onPress={() => setVoteBarrackModalOpen(false)}
        underlayColor="none"
      >
        <FA5 name="times-circle" color="#484848" size={28} />
      </CloseIcon>

      {!keyboardOpen ? (
        <>
          <Image
            source={require('../../../../../../assets/barracks/milhosoft.png')}
          />

          <Title>{barrack.nome}</Title>

          {!userAlreadyHaveVote && (
            <Information>
              Para votar nessa barraca preencha os campos abaixo, você poderá
              votar apenas uma única vez.
            </Information>
          )}
        </>
      ) : (
        <Title>{barrack.nome}</Title>
      )}

      {userAlreadyHaveVote ? (
        <AfterVoteInformation>
          <AlreadyVoted>
            Você realizou o seu voto. Não é possível votar mais de uma vez.
          </AlreadyVoted>

          <AlreadyVoted>
            Agora você está disponível para resgatar um ticket.
          </AlreadyVoted>

          <ClaimTicket onPress={() => navigation.navigate('Tickets')}>
            <ButtonText>RESGATAR TICKET</ButtonText>
          </ClaimTicket>
        </AfterVoteInformation>
      ) : (
        <Form>
          <Input>
            <TextArea
              placeholder="Nome"
              onChangeText={(text) => setName(text)}
              value={name}
            />
            <FA5 name="user-alt" color="#484848" size={24} />
          </Input>

          <Input>
            <TextArea
              placeholder="Telefone"
              keyboardType="phone-pad"
              maxLength={11}
              onChangeText={(text) => setPhone(text)}
              value={phone}
            />
            <FA5 name="phone" color="#484848" size={24} />
          </Input>

          <SwitchInput>
            <Switch
              trackColor={{ false: '#767577', true: '#008e1f' }}
              thumbColor={isStudent ? '#ffffff' : '#ffffff'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isStudent}
            />

            <AlreadyIsStudent>É aluno UNIFASIPE?</AlreadyIsStudent>
          </SwitchInput>

          {formInvalid && <FormInvalid>Preencha todos os campos.</FormInvalid>}

          {formSuccessfullySubmitted && (
            <FormValid>Voto realizado com sucesso.</FormValid>
          )}

          <Button onPress={() => handleSubmit()}>
            <ButtonText>CONFIRMAR!</ButtonText>
          </Button>
        </Form>
      )}
    </Container>
  )
}
