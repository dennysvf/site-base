'use client';

import { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import {
  Slider as MuiSlider,
  SliderProps as MuiSliderProps,
  Typography,
  Box,
  useTheme,
} from '@mui/material';

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

export interface SliderProps extends Omit<MuiSliderProps, 'color'> {
  /**
   * The label to display above the slider
   */
  label?: string;
  /**
   * Custom format for the value label
   */
  valueFormat?: (value: number) => string;
  /**
   * Whether to show the current value
   */
  showValue?: boolean;
  /**
   * The color of the slider
   */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  /**
   * Whether to show marks for specific values
   */
  showMarks?: boolean;
  /**
   * Custom marks configuration
   */
  customMarks?: { value: number; label: string }[];
  /**
   * Whether to show input field
   */
  showInput?: boolean;
  /**
   * Whether to use a gradient track
   */
  gradient?: boolean;
}

const StyledSlider = styled(MuiSlider, {
  shouldForwardProp: (prop) => prop !== 'gradient',
})<{ gradient?: boolean }>(({ theme, gradient, color }) => ({
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
    ...(gradient && {
      backgroundImage: `linear-gradient(to right, ${theme.palette.primary.light}, ${getColorMain(
        theme,
        color
      )})`,
    }),
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: `2px solid ${getColorMain(theme, color)}`,
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: getColorMain(theme, color),
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
  '& .MuiSlider-mark': {
    backgroundColor: theme.palette.background.paper,
    height: 8,
    width: 1,
    '&.MuiSlider-markActive': {
      opacity: 1,
      backgroundColor: 'currentColor',
    },
  },
}));

export const Slider = forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      label,
      valueFormat = (value) => `${value}`,
      showValue = false,
      color = 'primary',
      showMarks = false,
      customMarks,
      showInput = false,
      gradient = false,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();

    const marks = customMarks || (showMarks ? true : false);

    return (
      <Box ref={ref} sx={{ width: '100%' }}>
        {(label || showValue) && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: 1,
            }}
          >
            {label && (
              <Typography variant="body2" color="text.secondary">
                {label}
              </Typography>
            )}
            {showValue && !showInput && (
              <Typography variant="body2" color="text.primary">
                {valueFormat(
                  Array.isArray(props.value)
                    ? props.value[props.value.length - 1]
                    : (props.value as number) || 0
                )}
              </Typography>
            )}
          </Box>
        )}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <StyledSlider
            color={color}
            marks={marks}
            gradient={gradient}
            valueLabelDisplay={props.valueLabelDisplay || 'auto'}
            {...props}
          />
          {showInput && (
            <Box
              component="input"
              type="number"
              value={
                Array.isArray(props.value)
                  ? props.value[props.value.length - 1]
                  : props.value
              }
              onChange={(e) => {
                const value = Number(e.target.value);
                if (props.onChange) {
                  props.onChange(e as any, value);
                }
              }}
              sx={{
                width: 60,
                padding: '4px 8px',
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 1,
                '&:focus': {
                  outline: 'none',
                  borderColor: getColorMain(theme, color),
                },
              }}
            />
          )}
        </Box>
      </Box>
    );
  }
);

Slider.displayName = 'Slider';
