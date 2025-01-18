'use client';

import { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import {
  Tooltip as MuiTooltip,
  TooltipProps as MuiTooltipProps,
  Zoom,
  Fade,
  tooltipClasses,
} from '@mui/material';

export interface TooltipProps extends Omit<MuiTooltipProps, 'ref' | 'children'> {
  /**
   * The content of the tooltip.
   */
  title: React.ReactNode;
  /**
   * The content to be wrapped by the tooltip.
   */
  children: React.ReactElement;
  variant?: 'light' | 'dark' | 'brand';
  animation?: 'fade' | 'zoom';
  maxWidth?: number | string;
  className?: string;
}

const StyledTooltip = styled(({ className, ...props }: MuiTooltipProps) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))(({ theme, className }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    fontSize: theme.typography.pxToRem(12),
    padding: theme.spacing(1, 1.5),
    borderRadius: theme.shape.borderRadius,
    maxWidth: 300,
    ...(className?.includes('light') && {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.text.primary,
      boxShadow: theme.shadows[2],
      border: `1px solid ${theme.palette.grey[200]}`,
    }),
    ...(className?.includes('brand') && {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    }),
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.grey[800],
    ...(className?.includes('light') && {
      color: theme.palette.common.white,
      '&::before': {
        border: `1px solid ${theme.palette.grey[200]}`,
        backgroundColor: theme.palette.common.white,
      },
    }),
    ...(className?.includes('brand') && {
      color: theme.palette.primary.main,
    }),
  },
}));

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      title,
      variant = 'dark',
      animation = 'zoom',
      maxWidth,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const TransitionComponent = animation === 'fade' ? Fade : Zoom;

    return (
      <StyledTooltip
        ref={ref}
        title={title}
        className={`${variant} ${className || ''}`}
        TransitionComponent={TransitionComponent}
        {...(maxWidth && {
          sx: {
            [`& .${tooltipClasses.tooltip}`]: {
              maxWidth: maxWidth,
            },
          },
        })}
        {...props}
      >
        {children}
      </StyledTooltip>
    );
  }
);

Tooltip.displayName = 'Tooltip';
