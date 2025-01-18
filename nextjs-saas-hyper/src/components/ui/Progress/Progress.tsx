'use client';

import { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import {
  LinearProgress,
  CircularProgress,
  Box,
  Typography,
  useTheme,
  alpha,
  Palette,
  LinearProgressProps,
  CircularProgressProps,
} from '@mui/material';

interface CustomPalette extends Palette {
  [key: string]: any;
}

export interface ProgressProps extends Omit<LinearProgressProps | CircularProgressProps, 'ref'> {
  /**
   * The value of the progress indicator (0-100)
   */
  value?: number;
  /**
   * The variant of the progress indicator
   */
  variant?: 'determinate' | 'indeterminate';
  /**
   * The type of progress indicator
   */
  type?: 'linear' | 'circular';
  /**
   * The color of the progress indicator
   */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  /**
   * The size of the progress indicator (only for circular)
   */
  size?: number | string;
  /**
   * The thickness of the progress indicator (only for circular)
   */
  thickness?: number;
  /**
   * Whether to show the value label
   */
  showValue?: boolean;
  /**
   * Custom label format function
   */
  labelFormat?: (value: number) => string;
  /**
   * Whether to animate the progress
   */
  animated?: boolean;
  /**
   * Whether to show a gradient effect
   */
  gradient?: boolean;
  /**
   * Whether to show a striped effect
   */
  striped?: boolean;
  /**
   * Custom class name
   */
  className?: string;
}

const StyledLinearProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => 
    !['gradient', 'striped', 'animated'].includes(prop as string),
})<{
  gradient?: boolean;
  striped?: boolean;
  animated?: boolean;
}>(({ theme, gradient, striped, animated }) => ({
  height: 8,
  borderRadius: 4,
  '& .MuiLinearProgress-bar': {
    borderRadius: 4,
    ...(gradient && {
      background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${
        theme.palette.primary.light
      } 90%)`,
    }),
    ...(striped && {
      backgroundImage: `linear-gradient(45deg, 
        rgba(255, 255, 255, 0.15) 25%, 
        transparent 25%, 
        transparent 50%, 
        rgba(255, 255, 255, 0.15) 50%, 
        rgba(255, 255, 255, 0.15) 75%, 
        transparent 75%, 
        transparent)`,
      backgroundSize: '40px 40px',
    }),
    ...(animated && striped && {
      animation: 'progress-bar-stripes 1s linear infinite',
    }),
  },
  '@keyframes progress-bar-stripes': {
    '0%': {
      backgroundPosition: '40px 0',
    },
    '100%': {
      backgroundPosition: '0 0',
    },
  },
}));

const ProgressWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
}));

const CircularProgressLabel = styled(Box)(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
}));

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      value = 0,
      variant = 'determinate',
      type = 'linear',
      color = 'primary',
      size = 40,
      thickness = 3.6,
      showValue = false,
      labelFormat = (value) => `${Math.round(value)}%`,
      animated = false,
      gradient = false,
      striped = false,
      className,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();

    if (type === 'circular') {
      return (
        <ProgressWrapper ref={ref} className={className}>
          <CircularProgress
            variant={variant}
            value={value}
            color={color}
            size={size}
            thickness={thickness}
            {...props}
          />
          {showValue && variant === 'determinate' && (
            <CircularProgressLabel>
              <Typography
                variant="caption"
                component="div"
                color="text.secondary"
              >
                {labelFormat(value)}
              </Typography>
            </CircularProgressLabel>
          )}
        </ProgressWrapper>
      );
    }

    return (
      <ProgressWrapper ref={ref} className={className}>
        <Box sx={{ width: '100%', mr: showValue ? 1 : 0 }}>
          <StyledLinearProgress
            variant={variant}
            value={value}
            color={color}
            gradient={gradient}
            striped={striped}
            animated={animated}
            {...props}
          />
        </Box>
        {showValue && variant === 'determinate' && (
          <Box minWidth={35}>
            <Typography variant="body2" color="text.secondary">
              {labelFormat(value)}
            </Typography>
          </Box>
        )}
      </ProgressWrapper>
    );
  }
);

Progress.displayName = 'Progress';
