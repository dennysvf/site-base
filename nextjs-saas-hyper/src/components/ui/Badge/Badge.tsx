'use client';

import { styled } from '@mui/material/styles';
import { Badge as MuiBadge } from '@mui/material';
import { alpha } from '@mui/material/styles';

export type BadgeVariant = 'filled' | 'outlined' | 'light';
export type BadgeColor = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | 'dark';

export interface BadgeProps {
  variant?: BadgeVariant;
  color?: BadgeColor;
  pill?: boolean;
  children: React.ReactNode;
  className?: string;
}

const StyledBadge = styled(MuiBadge, {
  shouldForwardProp: (prop) => prop !== 'pill' && prop !== 'variant',
})<{ pill?: boolean; variant?: BadgeVariant }>(({ theme, pill, variant, color = 'primary' }) => {
  const getBackgroundColor = () => {
    if (variant === 'light') {
      return alpha(theme.palette[color].main, 0.1);
    }
    if (variant === 'outlined') {
      return 'transparent';
    }
    return theme.palette[color].main;
  };

  const getTextColor = () => {
    if (variant === 'light' || variant === 'outlined') {
      return theme.palette[color].main;
    }
    return theme.palette[color].contrastText;
  };

  const getBorderColor = () => {
    if (variant === 'outlined') {
      return theme.palette[color].main;
    }
    return 'transparent';
  };

  return {
    '& .MuiBadge-badge': {
      backgroundColor: getBackgroundColor(),
      color: getTextColor(),
      border: `1px solid ${getBorderColor()}`,
      borderRadius: pill ? '50px' : '4px',
      padding: '0 8px',
      minWidth: '20px',
      height: '20px',
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: '18px',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      verticalAlign: 'baseline',
      ...(pill && {
        paddingLeft: '8px',
        paddingRight: '8px',
      }),
    },
  };
});

export function Badge({
  variant = 'filled',
  color = 'primary',
  pill = false,
  children,
  className,
  ...props
}: BadgeProps) {
  return (
    <StyledBadge
      badgeContent={children}
      color={color}
      variant={variant}
      pill={pill}
      className={className}
      {...props}
    />
  );
}

// Componente para posicionar o badge em um elemento
export interface BadgePositionProps {
  children: React.ReactNode;
  badgeContent: React.ReactNode;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  color?: BadgeColor;
  variant?: BadgeVariant;
  pill?: boolean;
}

const StyledPositionedBadge = styled(MuiBadge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    position: 'absolute',
    transform: 'scale(1) translate(50%, -50%)',
    transformOrigin: '100% 0%',
  },
}));

export function BadgePosition({
  children,
  badgeContent,
  position = 'top-right',
  color = 'primary',
  variant = 'filled',
  pill = false,
  ...props
}: BadgePositionProps) {
  const getAnchorOrigin = () => {
    switch (position) {
      case 'top-left':
        return { vertical: 'top', horizontal: 'left' };
      case 'bottom-right':
        return { vertical: 'bottom', horizontal: 'right' };
      case 'bottom-left':
        return { vertical: 'bottom', horizontal: 'left' };
      default:
        return { vertical: 'top', horizontal: 'right' };
    }
  };

  return (
    <StyledPositionedBadge
      badgeContent={
        <Badge color={color} variant={variant} pill={pill}>
          {badgeContent}
        </Badge>
      }
      anchorOrigin={getAnchorOrigin()}
      {...props}
    >
      {children}
    </StyledPositionedBadge>
  );
}
