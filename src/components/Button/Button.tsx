import React from 'react';
import {Text} from '../Text/Text';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {buttonPresets} from './ButtonPresets';
import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';

export type ButtonPreset = 'primary' | 'outline';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
}

export const Button = ({
  title,
  loading,
  disabled,
  preset = 'primary',
  ...touchableOpacityBoxProps
}: ButtonProps) => {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];
  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      paddingHorizontal="spacing20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="borderRadius16"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading && <ActivityIndicator color={buttonPreset.content} />}
      {!loading && <Text color={buttonPreset.content}>{title}</Text>}
    </TouchableOpacityBox>
  );
};
