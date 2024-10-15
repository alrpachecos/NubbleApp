import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Icon} from './src/components/Icon/Icon';
import {Button} from './src/components/Button/Button';
import {TextInput} from './src/components/TextInput/TextInput';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" marginBottom="spacing8">
            Olá
          </Text>
          <Text preset="paragraphLarge" marginBottom="spacing40">
            Digite seu e-mail e senha para entrar
          </Text>

          <TextInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            errorMessage="Mensagem de erro"
            boxProps={{mb: 'spacing20'}}
          />

          <TextInput
            label="Senha"
            placeholder="Digite sua senha"
            RightComponent={<Icon name="eyeOn" color="gray2" />}
          />

          <Text preset="paragraphSmall" bold color="primary">
            Esqueci minha senha
          </Text>

          <Button title="Entrar" marginTop="spacing48" />
          <Button
            title="Criar uma conta"
            preset="outline"
            marginTop="spacing12"
          />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
