import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Icon} from '../../../components/Icon/Icon';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {Alert} from 'react-native';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';

type Props = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

type LoginFormData = {
  email: string;
  password: string;
};

export const LoginScreen = ({navigation}: Props) => {
  const {control, formState, handleSubmit} = useForm<LoginFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = ({email, password}: LoginFormData) => {
    Alert.alert(email, password);
  };

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

      <Controller
        control={control}
        rules={{
          required: 'E-mail obrigatório',
          pattern: {
            value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,
            message: 'E-mail inválido',
          },
        }}
        name="email"
        render={({field, fieldState, formState}) => (
          <TextInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            boxProps={{marginBottom: 'spacing20'}}
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      <Controller
        control={control}
        rules={{
          required: 'Senha obrigatória',
          minLength: {
            value: 8,
            message: 'Senha deve ter no mínimo 8 caracteres',
          },
        }}
        name="password"
        render={({field, fieldState, formState}) => (
          <PasswordInput
            label="Senha"
            placeholder="Digite sua senha"
            boxProps={{marginBottom: 'spacing20'}}
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      <Text
        preset="paragraphSmall"
        bold
        color="primary"
        onPress={navigateToForgotPasswordScreen}>
        Esqueci minha senha
      </Text>

      <Button
        title="Entrar"
        marginTop="spacing48"
        disabled={!formState.isValid}
        onPress={handleSubmit(onSubmit)}
      />
      <Button
        title="Criar uma conta"
        preset="outline"
        marginTop="spacing12"
        onPress={navigateToSignUpScreen}
      />
    </Screen>
  );
};
