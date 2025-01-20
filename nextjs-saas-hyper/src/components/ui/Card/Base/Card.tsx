'use client';

import React, { useState } from 'react';
import {
  CardContent as MuiCardContent,
  CardActions as MuiCardActions,
  CardMedia as MuiCardMedia,
  IconButton,
  Typography,
  Skeleton,
  Badge,
  Collapse,
  Menu,
  MenuItem,
  Box,
} from '@mui/material';
import {
  Close as CloseIcon,
  Refresh as RefreshIcon,
  ExpandMore as ExpandMoreIcon,
  MoreVert as MoreVertIcon,
} from '@mui/icons-material';
import { BaseCardProps } from './types';
import { StyledCard, ExpandButton, CardHeader, CardFooter } from './styles';

export function Card({
  variant = 'default',
  color,
  size = 'medium',
  title,
  subtitle,
  headerAction,
  footer,
  controls,
  loading = false,
  badge,
  backgroundImage,
  expanded: controlledExpanded,
  onExpand,
  onRefresh,
  onClose,
  elevation = 1,
  hoverElevation = 4,
  children,
  'aria-label': ariaLabel,
  ...props
}: BaseCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const isExpanded = controlledExpanded !== undefined ? controlledExpanded : expanded;

  const handleExpandClick = () => {
    if (onExpand) {
      onExpand();
    } else {
      setExpanded(!expanded);
    }
  };

  const handleRefresh = async () => {
    if (onRefresh) {
      setIsLoading(true);
      try {
        await onRefresh();
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderControls = () => {
    if (!controls) return null;

    return (
      <Box sx={{ display: 'flex', gap: 1 }}>
        {controls.refreshable && (
          <IconButton
            onClick={handleRefresh}
            disabled={isLoading}
            size="small"
            aria-label="refresh"
          >
            <RefreshIcon />
          </IconButton>
        )}
        {controls.expandable && (
          <ExpandButton
            expanded={isExpanded}
            onClick={handleExpandClick}
            size="small"
            aria-expanded={isExpanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandButton>
        )}
        {controls.menu && controls.menu.length > 0 && (
          <>
            <IconButton
              onClick={handleMenuClick}
              size="small"
              aria-label="more options"
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {controls.menu.map((item, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    item.onClick();
                    handleMenuClose();
                  }}
                  disabled={item.disabled}
                >
                  {item.icon && (
                    <Box component="span" sx={{ mr: 1 }}>
                      {item.icon}
                    </Box>
                  )}
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </>
        )}
        {controls.closeable && (
          <IconButton
            onClick={onClose}
            size="small"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        )}
      </Box>
    );
  };

  const cardContent = (
    <>
      {(title || subtitle || headerAction || controls) && (
        <CardHeader>
          <Box>
            {loading ? (
              <>
                <Skeleton variant="text" width={200} />
                {subtitle && <Skeleton variant="text" width={150} />}
              </>
            ) : (
              <>
                {title && (
                  <Typography variant="h6" component="h2">
                    {title}
                  </Typography>
                )}
                {subtitle && (
                  <Typography variant="body2" color="text.secondary">
                    {subtitle}
                  </Typography>
                )}
              </>
            )}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {headerAction}
            {renderControls()}
          </Box>
        </CardHeader>
      )}

      <MuiCardContent>
        {loading ? (
          <Box sx={{ pt: 0.5 }}>
            <Skeleton variant="rectangular" width="100%" height={118} />
            <Skeleton variant="text" />
            <Skeleton variant="text" width="80%" />
          </Box>
        ) : (
          children
        )}
      </MuiCardContent>

      {footer && <CardFooter>{footer}</CardFooter>}
    </>
  );

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
      {cardContent}
    </StyledCard>
  );

  if (badge) {
    return (
      <Badge
        badgeContent={badge.content}
        color={badge.color || 'primary'}
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
