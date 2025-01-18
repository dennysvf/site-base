'use client';

import { Avatar as MuiAvatar, styled } from '@mui/material';
import { Person as PersonIcon } from '@mui/icons-material';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const sizes = {
  xs: 24,  // Extra small
  sm: 32,  // Small
  md: 48,  // Medium
  lg: 64,  // Large
  xl: 96,  // Extra large
};

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: AvatarSize;
  variant?: 'circular' | 'rounded' | 'square';
  color?: string;
  bgColor?: string;
  children?: React.ReactNode;
}

const StyledAvatar = styled(MuiAvatar, {
  shouldForwardProp: (prop) => prop !== 'size' && prop !== 'bgColor',
})<{ size?: AvatarSize; bgColor?: string }>(({ theme, size = 'md', bgColor }) => ({
  width: sizes[size],
  height: sizes[size],
  fontSize: size === 'xs' ? 14 : size === 'sm' ? 16 : size === 'md' ? 20 : size === 'lg' ? 24 : 32,
  backgroundColor: bgColor || theme.palette.primary.main,
}));

export function Avatar({
  src,
  alt,
  size = 'md',
  variant = 'circular',
  color,
  bgColor,
  children,
  ...props
}: AvatarProps) {
  return (
    <StyledAvatar
      src={src}
      alt={alt || 'avatar'}
      variant={variant}
      size={size}
      bgColor={bgColor}
      sx={{ color }}
      {...props}
    >
      {!src && !children && <PersonIcon />}
      {children}
    </StyledAvatar>
  );
}
