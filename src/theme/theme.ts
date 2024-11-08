import {createTheme} from '@shopify/restyle';

export const palette = {
  greenPrimary: '#074C4E',
  greenPrimaryLight: '#EAF6F6',
  carrotSecondary: '#F86F2D',
  carrotSecondaryLight: '#FAE6DD',
  greenSuccess: '#4ABC86',
  greenSuccessLight: '#D8FFEC',
  redError: '#EA3838',
  redErrorLight: '#FBECEC',

  grayBlack: '#000000',
  gray1: '#636363',
  gray2: '#8E8E8E',
  gray3: '#B3B3B3',
  gray4: '#E1E1E1',
  gray5: '#F5F5F5',
  grayWhite: '#FFFFFF',
};

export const theme = createTheme({
  colors: {
    ...palette,
    primary: palette.greenPrimary,
    primaryContrast: palette.grayWhite,

    buttonPrimary: palette.greenPrimary,

    background: palette.grayWhite,
    backgroundContrast: palette.grayBlack,

    error: palette.redError,
    errorLight: palette.redErrorLight,

    success: palette.greenSuccess,
    successLight: palette.greenSuccessLight,
  },
  spacing: {
    spacing4: 4,
    spacing8: 8,
    spacing10: 10,
    spacing12: 12,
    spacing14: 14,
    spacing16: 16,
    spacing20: 20,
    spacing24: 24,
    spacing32: 32,
    spacing40: 40,
    spacing48: 48,
    spacing56: 56,
  },
  borderRadii: {
    borderRadius8: 8,
    borderRadius12: 12,
    borderRadius16: 16,
  },
  textVariants: {
    defaults: {},
  },
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
