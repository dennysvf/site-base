import { Components, Theme } from '@mui/material';

export const components = (theme: Theme): Components => ({
  MuiCssBaseline: {
    styleOverrides: {
      '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
      },
      html: {
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        width: '100%',
      },
      body: {
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        minHeight: '100%',
        width: '100%',
      },
      '#__next': {
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        boxShadow: theme.shadows[2],
        backgroundImage: 'none',
      },
    },
  },
  MuiCardHeader: {
    defaultProps: {
      titleTypographyProps: {
        variant: 'h6',
      },
    },
    styleOverrides: {
      root: {
        padding: '24px 24px 0',
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: 24,
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 5,
        textTransform: 'none',
        fontWeight: 500,
      },
      sizeSmall: {
        padding: '6px 16px',
      },
      sizeMedium: {
        padding: '8px 20px',
      },
      sizeLarge: {
        padding: '11px 24px',
      },
      textSizeSmall: {
        padding: '7px 12px',
      },
      textSizeMedium: {
        padding: '9px 16px',
      },
      textSizeLarge: {
        padding: '12px 16px',
      },
    },
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: false,
    },
  },
  MuiCheckbox: {
    defaultProps: {
      size: 'small',
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        fontWeight: 500,
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        padding: 8,
      },
      sizeSmall: {
        padding: 4,
      },
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: {
        borderRadius: 3,
        overflow: 'hidden',
      },
    },
  },
  MuiLink: {
    defaultProps: {
      underline: 'hover',
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: 'none',
      },
    },
  },
  MuiPopover: {
    defaultProps: {
      elevation: 16,
    },
  },
  MuiRadio: {
    defaultProps: {
      size: 'small',
    },
  },
  MuiSwitch: {
    styleOverrides: {
      root: {
        padding: 7,
        '& .MuiSwitch-track': {
          borderRadius: 11,
        },
        '& .MuiSwitch-thumb': {
          boxShadow: 'none',
          width: 18,
          height: 18,
          margin: 1,
        },
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: 'none',
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        padding: '16px',
      },
    },
  },
  MuiTableHead: {
    styleOverrides: {
      root: {
        backgroundColor: theme.palette.background.default,
        '.MuiTableCell-root': {
          color: theme.palette.text.secondary,
          fontSize: '12px',
          fontWeight: 600,
          lineHeight: 1,
          letterSpacing: 0.5,
          textTransform: 'uppercase',
        },
        '.MuiTableCell-paddingCheckbox': {
          paddingTop: 4,
          paddingBottom: 4,
        },
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      size: 'small',
    },
  },
});
