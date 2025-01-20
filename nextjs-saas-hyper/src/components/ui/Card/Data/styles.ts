'use client';

import { styled, alpha } from '@mui/material/styles';
import { Box } from '@mui/material';

interface IconWrapperProps {
  iconColor?: string;
}

export const IconWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'iconColor',
})<IconWrapperProps>(({ theme, iconColor }) => {
  const color = iconColor || theme.palette.success.main;
  
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: '50%',
    backgroundColor: alpha(color, 0.1),
    color: alpha(color, 0.7),
    marginLeft: 'auto',
  };
});

export const HeaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(2),
}));

export const ValueWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
}));

export const TrendWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  fontSize: '0.875rem',

  '& svg': {
    fontSize: '1rem',
  },
}));

export const TrendLabel = styled(Box)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.75rem',
  marginLeft: theme.spacing(0.5),
}));

type ChartPosition = 'background' | 'bottom';

interface ChartWrapperProps {
  chartPosition: ChartPosition;
}

export const ChartWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'chartPosition',
})<ChartWrapperProps>(({ theme, chartPosition }) => ({
  ...(chartPosition === 'background' && {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60%',
    opacity: 0.1,
    pointerEvents: 'none',
  }),

  ...(chartPosition === 'bottom' && {
    position: 'relative',
    marginTop: theme.spacing(2),
    height: 60,
  }),
}));
