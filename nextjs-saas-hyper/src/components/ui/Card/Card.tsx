'use client';

import { styled, alpha } from '@mui/material/styles';
import {
  Card as MuiCard,
  CardProps as MuiCardProps,
  CardHeader as MuiCardHeader,
  CardContent as MuiCardContent,
  CardActions as MuiCardActions,
  CardMedia as MuiCardMedia,
  IconButton,
  Typography,
  Skeleton,
  Badge,
  Collapse,
  Fade,
} from '@mui/material';
import {
  Close as CloseIcon,
  Refresh as RefreshIcon,
  ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material';

export interface CardProps extends MuiCardProps {
  variant?: 'default' | 'bordered' | 'colored' | 'gradient';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  onRefresh?: () => void;
  onClose?: () => void;
  onExpand?: () => void;
  title?: string;
  subtitle?: string;
  headerAction?: React.ReactNode;
  footer?: React.ReactNode;
  showControls?: boolean;
  loading?: boolean;
  badge?: {
    content: React.ReactNode;
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
    variant?: 'standard' | 'dot';
    overlap?: 'rectangular' | 'circular';
    anchorOrigin?: {
      vertical: 'top' | 'bottom';
      horizontal: 'left' | 'right';
    };
  };
  backgroundImage?: string;
  expanded?: boolean;
  elevation?: number;
  hoverElevation?: number;
  'aria-label'?: string;
}

const StyledCard = styled(MuiCard, {
  shouldForwardProp: (prop) => !['variant', 'color', 'backgroundImage', 'hoverElevation'].includes(prop as string),
})<{
  variant?: string;
  color?: string;
  backgroundImage?: string;
  hoverElevation?: number;
}>(({ theme, variant, color, backgroundImage, hoverElevation }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: theme.transitions.create(['box-shadow', 'transform', 'background-color'], {
    duration: theme.transitions.duration.standard,
  }),
  position: 'relative',
  overflow: 'hidden',

  '&:hover': {
    ...(hoverElevation && {
      boxShadow: theme.shadows[hoverElevation],
      transform: 'translateY(-4px)',
    }),
  },

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

  ...(variant === 'gradient' && color && {
    background: `linear-gradient(45deg, ${theme.palette[color].dark} 0%, ${theme.palette[color].main} 100%)`,
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

  ...(backgroundImage && {
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.15,
    },
  }),
}));

const CardControls = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
}));

const ExpandMoreButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'expanded',
})<{ expanded?: boolean }>(({ expanded }) => ({
  transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
  transition: 'transform 0.3s',
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
  loading = false,
  badge,
  backgroundImage,
  expanded,
  elevation = 1,
  hoverElevation = 4,
  children,
  'aria-label': ariaLabel,
  ...props
}: CardProps) {
  const renderHeader = () => {
    if (!title && !subtitle && !headerAction && !showControls) return null;

    if (loading) {
      return (
        <MuiCardHeader
          title={<Skeleton variant="text" width="60%" />}
          subheader={subtitle && <Skeleton variant="text" width="40%" />}
          action={
            showControls && (
              <CardControls>
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} variant="circular" width={32} height={32} />
                ))}
              </CardControls>
            )
          }
        />
      );
    }

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
                  <IconButton
                    size="small"
                    onClick={onRefresh}
                    aria-label="Refresh"
                  >
                    <RefreshIcon />
                  </IconButton>
                )}
                {onExpand && (
                  <ExpandMoreButton
                    size="small"
                    onClick={onExpand}
                    expanded={expanded}
                    aria-label={expanded ? 'Collapse' : 'Expand'}
                  >
                    <ExpandMoreIcon />
                  </ExpandMoreButton>
                )}
                {onClose && (
                  <IconButton
                    size="small"
                    onClick={onClose}
                    aria-label="Close"
                  >
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

  const card = (
    <StyledCard
      variant={variant}
      color={color}
      backgroundImage={backgroundImage}
      elevation={elevation}
      hoverElevation={hoverElevation}
      aria-label={ariaLabel}
      {...props}
    >
      {renderHeader()}
      <Fade in={!loading}>
        <div>
          {children}
        </div>
      </Fade>
      {loading && (
        <MuiCardContent>
          <Skeleton variant="rectangular" height={100} />
        </MuiCardContent>
      )}
      {footer && (
        <Fade in={!loading}>
          <MuiCardActions>{footer}</MuiCardActions>
        </Fade>
      )}
    </StyledCard>
  );

  if (badge) {
    return (
      <Badge
        badgeContent={badge.content}
        color={badge.color}
        variant={badge.variant}
        overlap={badge.overlap}
        anchorOrigin={badge.anchorOrigin}
      >
        {card}
      </Badge>
    );
  }

  return card;
}

// Re-export Material-UI card subcomponents
export const CardContent = MuiCardContent;
export const CardActions = MuiCardActions;
export const CardMedia = MuiCardMedia;
