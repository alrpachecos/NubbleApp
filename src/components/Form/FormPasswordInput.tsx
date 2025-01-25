import React from 'react';
import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';
import {
  PasswordInput,
  PasswordInputProps,
} from '../PasswordInput/PasswordInput';

export function FormPasswordInput<FormPasswordType extends FieldValues>({
  control,
  name,
  rules,
  ...passwordInputProps
}: PasswordInputProps & UseControllerProps<FormPasswordType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field, fieldState}) => (
        <PasswordInput
          value={field.value}
          onChangeText={field.onChange}
          errorMessage={fieldState.error?.message}
          {...passwordInputProps}
        />
      )}
    />
  );
}
