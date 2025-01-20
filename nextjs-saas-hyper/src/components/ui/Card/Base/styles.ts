'use client';

import { styled, alpha } from '@mui/material/styles';
import { Card as MuiCard, IconButton } from '@mui/material';
import { CardVariant, CardColor } from './types';

export const StyledCard = styled(MuiCard, {
  shouldForwardProp: (prop) =>
    !['variant', 'color', 'backgroundImage', 'hoverElevation'].includes(String(prop)),
})<{
  variant?: CardVariant;
  color?: CardColor;
  backgroundImage?: string;
  hoverElevation?: number;
}>(({ theme, variant, color, backgroundImage, hoverElevation }) => ({
  position: 'relative',
  transition: theme.transitions.create(['box-shadow', 'transform'], {
    duration: theme.transitions.duration.standard,
  }),
  
  ...(variant === 'bordered' && {
    border: `1px solid ${theme.palette.divider}`,
  }),

  ...(variant === 'colored' && color && {
    backgroundColor: alpha(theme.palette[color].main, 0.1),
    color: theme.palette[color].main,
  }),

  ...(variant === 'gradient' && color && {
    background: `linear-gradient(45deg, ${theme.palette[color].main} 30%, ${theme.palette[color].light} 90%)`,
    color: theme.palette[color].contrastText,
  }),

  ...(backgroundImage && {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }),

  '&:hover': {
    ...(hoverElevation && {
      boxShadow: theme.shadows[hoverElevation],
    }),
  },

  '@media (max-width: 600px)': {
    borderRadius: variant === 'default' ? 0 : undefined,
  },
}));

export const ExpandButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'expanded',
})<{ expanded?: boolean }>(({ expanded }) => ({
  transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
  transition: 'transform 0.3s',
}));

export const CardHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const CardFooter = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
}));
