'use client';

import { forwardRef } from 'react';
import { styled, Theme } from '@mui/material/styles';
import {
  Chip as MuiChip,
  ChipProps as MuiChipProps,
  Avatar,
  useTheme,
} from '@mui/material';

type Color = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';

export interface ChipProps extends Omit<MuiChipProps, 'color' | 'variant'> {
  /**
   * The color of the chip
   */
  color?: Color;
  /**
   * The variant of the chip
   */
  variant?: 'filled' | 'outlined' | 'soft';
  /**
   * The size of the chip
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Whether to show a shadow effect
   */
  elevated?: boolean;
  /**
   * Whether to show a gradient effect
   */
  gradient?: boolean;
  /**
   * Custom avatar image source
   */
  avatarSrc?: string;
  /**
   * Custom avatar alt text
   */
  avatarAlt?: string;
  /**
   * Whether the chip is rounded
   */
  rounded?: boolean;
}

const StyledChip = styled(MuiChip, {
  shouldForwardProp: (prop) =>
    !['elevated', 'gradient', 'rounded', 'customColor', 'customVariant'].includes(prop as string),
})<{
  elevated?: boolean;
  gradient?: boolean;
  rounded?: boolean;
  customColor?: Color;
  customVariant?: string;
}>(({ theme, elevated, gradient, rounded, customColor = 'primary', customVariant }) => ({
  ...(elevated && {
    boxShadow: theme.shadows[2],
  }),
  ...(rounded && {
    borderRadius: '50px',
  }),
  ...(gradient && {
    background: `linear-gradient(45deg, ${theme.palette[customColor].main} 30%, ${
      theme.palette[customColor].light
    } 90%)`,
    border: 0,
  }),
  ...(customVariant === 'soft' && {
    backgroundColor: theme.palette.mode === 'light'
      ? theme.palette[customColor].light
      : theme.palette[customColor].dark,
    color: theme.palette[customColor].main,
    border: 'none',
    '&:hover': {
      backgroundColor: theme.palette[customColor].main,
      color: theme.palette[customColor].contrastText,
    },
  }),
  ...(customVariant === 'outlined' && {
    borderColor: theme.palette[customColor].main,
    color: theme.palette[customColor].main,
    '&:hover': {
      backgroundColor: theme.palette[customColor].main,
      color: theme.palette[customColor].contrastText,
    },
  }),
  ...(customVariant === 'filled' && {
    backgroundColor: theme.palette[customColor].main,
    color: theme.palette[customColor].contrastText,
    '&:hover': {
      backgroundColor: theme.palette[customColor].dark,
    },
  }),
}));

export const Chip = forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      color = 'primary',
      variant = 'filled',
      size = 'medium',
      elevated = false,
      gradient = false,
      avatarSrc,
      avatarAlt,
      rounded = false,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();

    const chipSize = {
      small: {
        height: 24,
        fontSize: '0.75rem',
      },
      medium: {
        height: 32,
        fontSize: '0.875rem',
      },
      large: {
        height: 40,
        fontSize: '1rem',
      },
    }[size];

    return (
      <StyledChip
        ref={ref}
        customColor={color}
        customVariant={variant}
        elevated={elevated}
        gradient={gradient}
        rounded={rounded}
        {...(avatarSrc && {
          avatar: (
            <Avatar
              alt={avatarAlt || 'avatar'}
              src={avatarSrc}
              sx={{ width: chipSize.height - 8, height: chipSize.height - 8 }}
            />
          ),
        })}
        sx={{
          ...chipSize,
          '& .MuiChip-label': {
            fontSize: chipSize.fontSize,
          },
          '& .MuiChip-deleteIcon': {
            fontSize: `calc(${chipSize.fontSize} * 1.25)`,
          },
          '& .MuiChip-icon': {
            fontSize: `calc(${chipSize.fontSize} * 1.25)`,
          },
        }}
        {...props}
      />
    );
  }
);

Chip.displayName = 'Chip';
