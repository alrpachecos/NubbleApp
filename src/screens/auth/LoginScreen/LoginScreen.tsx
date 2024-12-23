import React from 'react';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Icon} from '../../../components/Icon/Icon';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';

type Props = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export const LoginScreen = ({navigation}: Props) => {
  const navigateToSignUpScreen = () => {
    navigation.navigate('SignUpScreen');
  };

  const navigateToForgotPasswordScreen = () => {
    navigation.navigate('ForgotPasswordScreen');
  };
  return (
    <Screen>
      <Text preset="headingLarge" marginBottom="spacing8">
        Olá
      </Text>
      <Text preset="paragraphLarge" marginBottom="spacing40">
        Digite seu e-mail e senha para entrar
      </Text>

      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{marginBottom: 'spacing20'}}
      />

      <TextInput
        label="Senha"
        placeholder="Digite sua senha"
        RightComponent={<Icon name="eyeOn" color="gray2" />}
      />

      <Text
        preset="paragraphSmall"
        bold
        color="primary"
        onPress={navigateToForgotPasswordScreen}>
        Esqueci minha senha
      </Text>

      <Button title="Entrar" marginTop="spacing48" />
      <Button
        title="Criar uma conta"
        preset="outline"
        marginTop="spacing12"
        onPress={navigateToSignUpScreen}
      />
    </Screen>
  );
};
