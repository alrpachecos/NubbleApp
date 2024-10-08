import { ThemeColors } from '../../theme/theme';
import { TouchableOpacityBoxProps } from '../Box/Box';
import { ButtonPreset } from './Button';

interface ButtonUIProps {
    container: TouchableOpacityBoxProps;
    content: ThemeColors;
  }

export const buttonPresets: Record<ButtonPreset, {
    default: ButtonUIProps,
    disabled: ButtonUIProps,
}> = {
    primary: {
        default: {
            container: {
                backgroundColor: 'primary',
            },
            content: 'primaryContrast',
        },
        disabled: {
            container: {
                backgroundColor: 'gray4',
            },
            content: 'gray2',
        },
    },
    outline: {
        default: {
            container: {
                borderWidth: 1,
                borderColor: 'primary',
            },
            content: 'primary',
        },
        disabled: {
            container: {
                borderWidth: 1,
                borderColor: 'gray4',
            },
            content: 'gray2',
        },
    },
  };
