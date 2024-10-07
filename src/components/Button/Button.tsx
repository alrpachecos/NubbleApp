import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '../Text/Text';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../theme/theme';

export const Button = () => {
  const {colors} = useTheme<Theme>();
  return (
    <TouchableOpacity style={{backgroundColor: colors.carrotSecondary}}>
      <Text>Entrar</Text>
    </TouchableOpacity>
  );
};
