import { createTheme, ThemeOptions } from '@mui/material/styles';
import { lightPalette, darkPalette } from './palette';
import { typography } from './typography';
import { components } from './components';

const baseTheme: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  direction: 'ltr',
  shape: {
    borderRadius: 8,
  },
  typography,
  shadows: [
    'none',
    '0px 2px 4px rgba(31, 41, 55, 0.06)',
    '0px 4px 6px rgba(31, 41, 55, 0.1)',
    '0px 5px 15px rgba(31, 41, 55, 0.15)',
    '0px 10px 24px rgba(31, 41, 55, 0.25)',
    '0px 15px 35px rgba(31, 41, 55, 0.35)',
    ...Array(19).fill('none'), // Fill remaining shadows with 'none'
  ],
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
};

export const lightTheme = createTheme({
  ...baseTheme,
  palette: lightPalette,
});

export const darkTheme = createTheme({
  ...baseTheme,
  palette: darkPalette,
});

// Adiciona os componentes personalizados aos temas
lightTheme.components = components(lightTheme);
darkTheme.components = components(darkTheme);

export type AppTheme = Theme;
