import { PaletteOptions } from '@mui/material';

// Cores do template Hyper
const colors = {
  white: '#fff',
  black: '#000',
  gray: {
    100: '#f6f7fb',
    200: '#eef2f7',
    300: '#dee2e6',
    400: '#ced4da',
    500: '#a1a9b1',
    600: '#8a969c',
    700: '#6c757d',
    800: '#343a40',
    900: '#313a46',
  },
  primary: {
    lighter: '#727cf51a',
    light: '#727cf533',
    main: '#727cf5',
    dark: '#505ec1',
    darker: '#2b3595',
  },
  secondary: {
    lighter: '#6c757d1a',
    light: '#6c757d33',
    main: '#6c757d',
    dark: '#555b61',
    darker: '#343a40',
  },
  info: {
    lighter: '#39afd11a',
    light: '#39afd133',
    main: '#39afd1',
    dark: '#2b8aa7',
    darker: '#1c5c70',
  },
  success: {
    lighter: '#0acf971a',
    light: '#0acf9733',
    main: '#0acf97',
    dark: '#08a578',
    darker: '#056d4f',
  },
  warning: {
    lighter: '#ffc35a1a',
    light: '#ffc35a33',
    main: '#ffc35a',
    dark: '#cc9c48',
    darker: '#8c6a31',
  },
  error: {
    lighter: '#fa5c7c1a',
    light: '#fa5c7c33',
    main: '#fa5c7c',
    dark: '#c84a63',
    darker: '#8c3344',
  },
};

export const lightPalette: PaletteOptions = {
  mode: 'light',
  common: {
    black: colors.black,
    white: colors.white,
  },
  primary: colors.primary,
  secondary: colors.secondary,
  info: colors.info,
  success: colors.success,
  warning: colors.warning,
  error: colors.error,
  grey: colors.gray,
  text: {
    primary: colors.gray[900],
    secondary: colors.gray[700],
    disabled: colors.gray[500],
  },
  background: {
    paper: colors.white,
    default: colors.gray[100],
  },
  divider: colors.gray[200],
  action: {
    active: colors.gray[600],
    hover: colors.gray[100],
    selected: colors.gray[200],
    disabled: colors.gray[300],
    disabledBackground: colors.gray[200],
    focus: colors.gray[200],
  },
};

export const darkPalette: PaletteOptions = {
  mode: 'dark',
  common: {
    black: colors.black,
    white: colors.white,
  },
  primary: colors.primary,
  secondary: colors.secondary,
  info: colors.info,
  success: colors.success,
  warning: colors.warning,
  error: colors.error,
  grey: colors.gray,
  text: {
    primary: colors.gray[100],
    secondary: colors.gray[400],
    disabled: colors.gray[600],
  },
  background: {
    paper: colors.gray[900],
    default: '#1a1f24',
  },
  divider: colors.gray[800],
  action: {
    active: colors.gray[400],
    hover: colors.gray[800],
    selected: colors.gray[700],
    disabled: colors.gray[600],
    disabledBackground: colors.gray[700],
    focus: colors.gray[700],
  },
};
