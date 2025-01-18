'use client';

import { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import {
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps,
  FormControlLabel,
  Typography,
  Box,
  useTheme
} from '@mui/material';
import { Theme } from '@mui/material/styles';
import type { SwitchPropsSizeOverrides } from '@mui/material/Switch/Switch';

const getColorMain = (theme: any, color?: string) => {
  if (!color) return theme.palette.primary.main;
  
  switch (color) {
    case 'primary':
      return theme.palette.primary.main;
    case 'secondary':
      return theme.palette.secondary.main;
    case 'success':
      return theme.palette.success.main;
    case 'error':
      return theme.palette.error.main;
    case 'warning':
      return theme.palette.warning.main;
    case 'info':
      return theme.palette.info.main;
    default:
      return theme.palette.primary.main;
  }
};

export interface SwitchProps extends Omit<MuiSwitchProps, 'color' | 'ref'> {
  /**
   * The label to display next to the switch
   */
  label?: string;
  /**
   * The color of the switch
   */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  /**
   * The size of the switch
   */
  size?: 'small' | 'medium';
  /**
   * The variant of the switch
   */
  variant?: 'default' | 'slim' | 'ios' | 'android';
  /**
   * Whether to show icons in the switch
   */
  icons?: boolean;
  /**
   * Custom icons for checked and unchecked states
   */
  customIcons?: {
    checked?: React.ReactNode;
    unchecked?: React.ReactNode;
  };
  /**
   * Label placement
   */
  labelPlacement?: 'start' | 'end' | 'top' | 'bottom';
  /**
   * Description text below the label
   */
  description?: string;
}

const BaseSwitch = styled(MuiSwitch, {
  shouldForwardProp: (prop) =>
    !['variant', 'customSize'].includes(prop as string),
})<{
  variant?: string;
  customSize?: string;
}>(({ theme, variant, customSize }) => ({
  padding: variant === 'slim' ? 8 : 12,
  width: customSize === 'large' ? 68 : customSize === 'small' ? 44 : 58,
  height: customSize === 'large' ? 38 : customSize === 'small' ? 24 : 32,
  '& .MuiSwitch-switchBase': {
    padding: variant === 'slim' ? 4 : 8,
    '&.Mui-checked': {
      transform: `translateX(${
        customSize === 'large' ? 30 : customSize === 'small' ? 20 : 26
      }px)`,
    },
  },
  '& .MuiSwitch-thumb': {
    width: customSize === 'large' ? 22 : customSize === 'small' ? 12 : 16,
    height: customSize === 'large' ? 22 : customSize === 'small' ? 12 : 16,
  },
  '& .MuiSwitch-track': {
    borderRadius: 20,
  },
}));

const IOSSwitch = styled(MuiSwitch)(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const AndroidSwitch = styled(MuiSwitch)(({ theme }) => ({
  padding: 8,
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,
    },
    '&:before': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    '&:after': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2,
  },
}));

export const Switch = forwardRef<HTMLDivElement, SwitchProps>(
  (
    {
      label,
      color = 'primary',
      size = 'medium',
      variant = 'default',
      icons = false,
      customIcons,
      labelPlacement = 'end',
      description,
      ...props
    },
    ref
  ) => {
    let SwitchComponent;
    switch (variant) {
      case 'ios':
        SwitchComponent = IOSSwitch;
        break;
      case 'android':
        SwitchComponent = AndroidSwitch;
        break;
      default:
        SwitchComponent = BaseSwitch;
    }

    const theme = useTheme<Theme>();
    const switchElement = (
      <SwitchComponent
        variant={variant}
        customSize={size}
        {...props}
        sx={{
          '& .MuiSwitch-switchBase.Mui-checked': {
            color: getColorMain(theme, color),
            '& + .MuiSwitch-track': {
              backgroundColor: getColorMain(theme, color),
            },
          },
        }}
      />
    );

    if (!label && !description) {
      return <Box ref={ref}>{switchElement}</Box>;
    }

    return (
      <Box ref={ref}>
        <FormControlLabel
          control={switchElement}
          label={
            <Box>
              {label && (
                <Typography variant="body2" component="span">
                  {label}
                </Typography>
              )}
              {description && (
                <Typography
                  variant="caption"
                  component="p"
                  color="text.secondary"
                  sx={{ mt: 0.5 }}
                >
                  {description}
                </Typography>
              )}
            </Box>
          }
          labelPlacement={labelPlacement}
        />
      </Box>
    );
  }
);

Switch.displayName = 'Switch';
