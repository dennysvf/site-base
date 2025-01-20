'use client';

import { CardProps as MuiCardProps } from '@mui/material';

export type CardVariant = 'default' | 'bordered' | 'colored' | 'gradient';
export type CardColor = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
export type CardSize = 'small' | 'medium' | 'large';

export interface MenuItem {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface CardControls {
  refreshable?: boolean;
  expandable?: boolean;
  closeable?: boolean;
  menu?: MenuItem[];
}

export interface BaseCardProps extends Omit<MuiCardProps, 'variant'> {
  variant?: CardVariant;
  color?: CardColor;
  size?: CardSize;
  title?: string;
  subtitle?: string;
  headerAction?: React.ReactNode;
  footer?: React.ReactNode;
  loading?: boolean;
  controls?: CardControls;
  badge?: {
    content: React.ReactNode;
    color?: CardColor;
    variant?: 'standard' | 'dot';
    overlap?: 'rectangular' | 'circular';
    anchorOrigin?: {
      vertical: 'top' | 'bottom';
      horizontal: 'left' | 'right';
    };
  };
  backgroundImage?: string;
  expanded?: boolean;
  onExpand?: () => void;
  onRefresh?: () => void;
  onClose?: () => void;
  elevation?: number;
  hoverElevation?: number;
  'aria-label'?: string;
}
