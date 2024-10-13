import React from 'react';
import {
  ActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';
import {ThemeColors} from '../../theme/theme';
import {useAppTheme} from '../../hooks/useAppTheme';
interface IProps extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}

export const ActivityIndicator = ({color}: IProps) => {
  const {colors} = useAppTheme();
  return <RNActivityIndicator color={colors[color]} />;
};
