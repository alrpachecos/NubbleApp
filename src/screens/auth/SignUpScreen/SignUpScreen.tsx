import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const SignUpScreen = ({navigation}: Props) => {
  const {reset} = useResetNavigationSuccess();
  const submitForm = () => {
    reset({
      title: 'Sua conta foi criada com sucesso',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    });
  };
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" marginBottom="spacing32">
        Criar uma conta
      </Text>

      <TextInput
        label="Seu username"
        placeholder="@"
        boxProps={{marginBottom: 'spacing20'}}
      />

      <TextInput
        label="Nome completo"
        placeholder="Digite seu nome completo"
        boxProps={{marginBottom: 'spacing20'}}
      />

      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{marginBottom: 'spacing20'}}
      />

      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{marginBottom: 'spacing48'}}
      />

      <Button title="Criar uma conta" onPress={submitForm} />
    </Screen>
  );
};
