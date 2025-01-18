'use client';

import { styled } from '@mui/material/styles';
import {
  Card as MuiCard,
  CardProps as MuiCardProps,
  CardHeader as MuiCardHeader,
  CardContent as MuiCardContent,
  CardActions as MuiCardActions,
  CardMedia as MuiCardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import {
  Close as CloseIcon,
  Refresh as RefreshIcon,
  ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material';

export interface CardProps extends MuiCardProps {
  variant?: 'default' | 'bordered' | 'colored';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  onRefresh?: () => void;
  onClose?: () => void;
  onExpand?: () => void;
  title?: string;
  subtitle?: string;
  headerAction?: React.ReactNode;
  footer?: React.ReactNode;
  showControls?: boolean;
}

const StyledCard = styled(MuiCard, {
  shouldForwardProp: (prop) => prop !== 'variant' && prop !== 'color',
})<{ variant?: string; color?: string }>(({ theme, variant, color }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  ...(variant === 'bordered' && {
    border: `1px solid ${theme.palette.divider}`,
    '& .MuiCardHeader-root': {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    '& .MuiCardActions-root': {
      borderTop: `1px solid ${theme.palette.divider}`,
    },
  }),
  ...(variant === 'colored' && color && {
    backgroundColor: theme.palette[color].main,
    color: theme.palette[color].contrastText,
    '& .MuiCardHeader-root': {
      color: theme.palette[color].contrastText,
    },
    '& .MuiCardHeader-subheader': {
      color: alpha(theme.palette[color].contrastText, 0.7),
    },
    '& .MuiIconButton-root': {
      color: theme.palette[color].contrastText,
    },
  }),
}));

const CardControls = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
}));

export function Card({
  variant = 'default',
  color,
  onRefresh,
  onClose,
  onExpand,
  title,
  subtitle,
  headerAction,
  footer,
  showControls,
  children,
  ...props
}: CardProps) {
  const renderHeader = () => {
    if (!title && !subtitle && !headerAction && !showControls) return null;

    return (
      <MuiCardHeader
        title={title}
        subheader={subtitle}
        action={
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {headerAction}
            {showControls && (
              <CardControls>
                {onRefresh && (
                  <IconButton size="small" onClick={onRefresh}>
                    <RefreshIcon />
                  </IconButton>
                )}
                {onExpand && (
                  <IconButton size="small" onClick={onExpand}>
                    <ExpandMoreIcon />
                  </IconButton>
                )}
                {onClose && (
                  <IconButton size="small" onClick={onClose}>
                    <CloseIcon />
                  </IconButton>
                )}
              </CardControls>
            )}
          </div>
        }
      />
    );
  };

  return (
    <StyledCard variant={variant} color={color} {...props}>
      {renderHeader()}
      {children}
      {footer && <MuiCardActions>{footer}</MuiCardActions>}
    </StyledCard>
  );
}

// Re-export Material-UI card subcomponents
export const CardContent = MuiCardContent;
export const CardActions = MuiCardActions;
export const CardMedia = MuiCardMedia;
