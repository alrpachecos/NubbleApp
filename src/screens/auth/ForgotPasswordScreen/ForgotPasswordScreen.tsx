import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ForgotPasswordScreen = ({navigation}: ScreenProps) => {
  const {reset} = useResetNavigationSuccess();
  const submitRecoveryPassword = () => {
    //TODO: recuperar senha do usuário
    reset({
      title: `Enviamos as instruções para seu e-mail`,
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    });
  };
  return (
    <Screen canGoBack>
      <Text preset="headingLarge" marginBottom="spacing16">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" marginBottom="spacing32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>

      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{marginBottom: 'spacing40'}}
      />

      <Button
        title="Recuperar senha"
        preset="primary"
        onPress={submitRecoveryPassword}
      />
    </Screen>
  );
};
