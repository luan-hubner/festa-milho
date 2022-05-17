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
import TextInputMask from 'react-native-text-input-mask'

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

  const [name, setName] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [isStudent, setIsStudent] = React.useState(false)

  const [formInvalid, setFormInvalid] = React.useState(false)
  const [phoneIncorrect, setPhoneIncorrect] = React.useState(false)

  const [formSuccessfullySubmitted, setFormSuccessfullySubmitted] =
    React.useState(false)

  const [keyboardOpen, setKeyboardOpen] = React.useState(false)

  const [disabledButton, setDisabledButton] = React.useState(false)

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

  let image

  switch (barrack.id) {
    case 1:
      image = (
        <Image
          source={require('../../../../../../assets/barracks_images/1.jpg')}
        />
      )
      break
    case 2:
      image = (
        <Image
          source={require('../../../../../../assets/barracks_images/2.jpg')}
        />
      )
      break
    case 3:
      image = (
        <Image
          source={require('../../../../../../assets/barracks_images/3.jpg')}
        />
      )
      break
    case 4:
      image = (
        <Image
          source={require('../../../../../../assets/barracks/milhosoft.png')}
        />
      )
      break
    case 5:
      image = (
        <Image
          source={require('../../../../../../assets/barracks_images/5.jpg')}
        />
      )
      break
    case 6:
      image = (
        <Image
          source={require('../../../../../../assets/barracks_images/6.jpg')}
        />
      )
      break
    case 7:
      image = (
        <Image
          source={require('../../../../../../assets/barracks_images/7.jpg')}
        />
      )
      break
    case 8:
      image = (
        <Image
          source={require('../../../../../../assets/barracks_images/8.jpg')}
        />
      )
      break
    case 9:
      image = (
        <Image
          source={require('../../../../../../assets/barracks_images/9.jpg')}
        />
      )
      break
    case 10:
      image = (
        <Image
          source={require('../../../../../../assets/barracks_images/10.jpg')}
        />
      )
      break
    case 11:
      image = (
        <Image
          source={require('../../../../../../assets/barracks_images/11.jpg')}
        />
      )
      break
    case 12:
      image = (
        <Image
          source={require('../../../../../../assets/barracks_images/12.jpg')}
        />
      )
      break
    case 13:
      image = (
        <Image
          source={require('../../../../../../assets/barracks_images/13.jpg')}
        />
      )
      break
    case 14:
      image = (
        <Image
          source={require('../../../../../../assets/barracks_images/14.jpg')}
        />
      )
      break
    case 15:
      image = (
        <Image
          source={require('../../../../../../assets/barracks_images/15.jpg')}
        />
      )
      break
    // case 16:
    //   image = (
    //     <Image source={require('../../../../../../assets/barracks_images/16.jpg')} />
    //   )
    //   break
    case 17:
      image = (
        <Image
          source={require('../../../../../../assets/barracks_images/17.jpg')}
        />
      )
      break
    case 18:
      image = (
        <Image
          source={require('../../../../../../assets/barracks_images/18.jpg')}
        />
      )
      break
    // case 19:
    //   image = (
    //     <Image source={require('../../../../../../assets/barracks_images/19.jpg')} />
    //   )
    //   break
    case 20:
      image = (
        <Image
          source={require('../../../../../../assets/barracks_images/20.jpg')}
        />
      )
      break
    // case 21:
    //   image = (
    //     <Image source={require('../../../../../../assets/barracks_images/21.jpg')} />
    //   )
    //   break
    case 22:
      image = (
        <Image
          source={require('../../../../../../assets/barracks_images/22.jpg')}
        />
      )
      break
    case 23:
      image = (
        <Image
          source={require('../../../../../../assets/barracks_images/23.jpg')}
        />
      )
      break
    case 24:
      image = (
        <Image
          source={require('../../../../../../assets/barracks_images/24.jpg')}
        />
      )
      break
    case 25:
      image = (
        <Image
          source={require('../../../../../../assets/barracks_images/25.jpg')}
        />
      )
      break
    case 26:
      image = (
        <Image
          source={require('../../../../../../assets/barracks_images/26.jpg')}
        />
      )
      break
    case 27:
      image = (
        <Image
          source={require('../../../../../../assets/barracks_images/27.jpg')}
        />
      )
      break
    case 28:
      image = (
        <Image
          source={require('../../../../../../assets/barracks_images/28.jpg')}
        />
      )
      break
    case 29:
      image = (
        <Image
          source={require('../../../../../../assets/barracks_images/29.jpg')}
        />
      )
      break
    // case 30:
    //   image = (
    //     <Image source={require('../../../../../../assets/barracks_images/30.jpg')} />
    //   )
    //   break

    default:
      break
  }
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
    }, 2000)
  }

  const handleSubmit = () => {
    setFormInvalid(false)

    Keyboard.dismiss()

    const formIsValid = verifyIfFormIsValid()

    if (!formIsValid) {
      setFormInvalid(true)
      return
    }

    if (phone.length < 11) {
      setPhoneIncorrect(true)
      return
    }

    setDisabledButton(true)

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
          console.log(remodelResponse[0])
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
      .then((response) => response.json())
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
      .then((response) => response.json())
      .then(async (response) => {
        await AsyncStorage.setItem(
          '@VOTE_PAYLOAD',
          JSON.stringify({
            id: response.name,
            nome: name,
            fone: phone,
            aluno: isStudent
          })
        )

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
              onChangeText={(text) => {
                setPhone(text)
              }}
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

          {phoneIncorrect && (
            <FormInvalid>
              Telefone inválido, coloque o DDD e o 9 adicional no início.
            </FormInvalid>
          )}

          {formSuccessfullySubmitted && (
            <FormValid>Voto realizado com sucesso.</FormValid>
          )}

          <Button disabled={disabledButton} onPress={() => handleSubmit()}>
            <ButtonText>CONFIRMAR!</ButtonText>
          </Button>
        </Form>
      )}
    </Container>
  )
}
