import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Icon} from '../../../components/Icon/Icon';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';

type Props = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export const SuccessScreen = ({route, navigation}: Props) => {
  const goBackToBegin = () => {
    // TODO: navegar para tela de login
    navigation.goBack();
  };
  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text preset="headingLarge" mt="spacing24">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" mt="spacing16">
        {route.params.description}
      </Text>
      <Button title="Voltar ao início" mt="spacing40" onPress={goBackToBegin} />
    </Screen>
  );
};
