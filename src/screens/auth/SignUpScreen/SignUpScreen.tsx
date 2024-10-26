import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';

export const SignUpScreen = () => {
  const submitForm = () => {
    // TODO: implementar
  };
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="spacing32">
        Criar uma conta
      </Text>

      <TextInput
        label="Seu username"
        placeholder="@"
        boxProps={{mb: 'spacing20'}}
      />

      <TextInput
        label="Nome completo"
        placeholder="Digite seu nome completo"
        boxProps={{mb: 'spacing20'}}
      />

      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 'spacing20'}}
      />

      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 'spacing48'}}
      />

      <Button title="Criar uma conta" onPress={submitForm} />
    </Screen>
  );
};