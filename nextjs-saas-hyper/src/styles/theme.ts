import { createTheme } from '@mui/material/styles';

// Cores comuns entre os temas
const commonColors = {
  success: {
    light: '#10b981',
    main: '#0acf97',
    dark: '#059669',
  },
  error: {
    light: '#fb7185',
    main: '#fa5c7c',
    dark: '#e11d48',
  },
  warning: {
    light: '#fcd34d',
    main: '#ffbc00',
    dark: '#f59e0b',
  },
  info: {
    light: '#93c5fd',
    main: '#3b82f6',
    dark: '#2563eb',
  }
};

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#727cf5',
      main: '#556ee6',
      dark: '#4458b8',
      contrastText: '#fff',
    },
    secondary: {
      light: '#86909c',
      main: '#6c757d',
      dark: '#495057',
      contrastText: '#fff',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
    text: {
      primary: '#495057',
      secondary: '#6c757d',
    },
    ...commonColors,
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#6c757d',
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#8087f8',
      main: '#727cf5',
      dark: '#5b64c4',
      contrastText: '#fff',
    },
    secondary: {
      light: '#9ba2ab',
      main: '#6c757d',
      dark: '#495057',
      contrastText: '#fff',
    },
    background: {
      default: '#222736',
      paper: '#2a3042',
    },
    text: {
      primary: '#e9ecef',
      secondary: '#adb5bd',
    },
    ...commonColors,
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#2a3042',
          color: '#e9ecef',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#2a3042',
          color: '#e9ecef',
        },
      },
    },
  },
});

export { lightTheme, darkTheme };