import React, {useState} from 'react';
import {TextInput, TextInputProps} from '../TextInput/TextInput';
import {Icon} from '../Icon/Icon';

type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

export const PasswordInput = (passwordInputProps: PasswordInputProps) => {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  const toogleSecureTextEntry = () => {
    setIsSecureTextEntry(prev => !prev);
  };
  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      {...passwordInputProps}
      RightComponent={
        <Icon
          name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'}
          color="gray2"
          onPress={toogleSecureTextEntry}
        />
      }
    />
  );
};
