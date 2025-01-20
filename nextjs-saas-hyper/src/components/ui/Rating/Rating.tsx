'use client';

import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Typography,
  IconButton,
  Tooltip,
  Stack,
  useTheme,
} from '@mui/material';
import {
  Star as StarIcon,
  StarBorder as StarBorderIcon,
  StarHalf as StarHalfIcon,
  Favorite as HeartIcon,
  FavoriteBorder as HeartBorderIcon,
  ThumbUp as ThumbUpIcon,
  ThumbUpOffAlt as ThumbUpOffIcon,
} from '@mui/icons-material';

export type RatingIconType = 'star' | 'heart' | 'thumb';

export interface RatingProps {
  value: number;
  onChange?: (value: number) => void;
  max?: number;
  precision?: 0.5 | 1;
  size?: 'small' | 'medium' | 'large';
  readOnly?: boolean;
  disabled?: boolean;
  showValue?: boolean;
  showLabel?: boolean;
  label?: string;
  className?: string;
  color?: string;
  iconType?: RatingIconType;
  highlightSelectedOnly?: boolean;
  tooltips?: string[];
}

const RatingContainer = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const IconContainer = styled(Box)<{ size: string }>(({ theme, size }) => ({
  display: 'inline-flex',
  position: 'relative',
  cursor: 'pointer',
  padding: theme.spacing(0.5),
  ...(size === 'small' && {
    '& .MuiSvgIcon-root': { fontSize: 20 },
  }),
  ...(size === 'large' && {
    '& .MuiSvgIcon-root': { fontSize: 32 },
  }),
}));

const getIcons = (type: RatingIconType) => {
  switch (type) {
    case 'star':
      return {
        full: StarIcon,
        half: StarHalfIcon,
        empty: StarBorderIcon,
      };
    case 'heart':
      return {
        full: HeartIcon,
        half: HeartIcon, // Using full heart for half state
        empty: HeartBorderIcon,
      };
    case 'thumb':
      return {
        full: ThumbUpIcon,
        half: ThumbUpIcon, // Using full thumb for half state
        empty: ThumbUpOffIcon,
      };
    default:
      return {
        full: StarIcon,
        half: StarHalfIcon,
        empty: StarBorderIcon,
      };
  }
};

export function Rating({
  value,
  onChange,
  max = 5,
  precision = 1,
  size = 'medium',
  readOnly = false,
  disabled = false,
  showValue = false,
  showLabel = false,
  label = 'Rating',
  className,
  color,
  iconType = 'star',
  highlightSelectedOnly = false,
  tooltips = [],
}: RatingProps) {
  const theme = useTheme();
  const [hoverValue, setHoverValue] = React.useState<number | null>(null);
  const [isHovering, setIsHovering] = React.useState(false);

  const icons = getIcons(iconType);
  const iconColor = color || theme.palette.primary.main;
  const displayValue = hoverValue ?? value;

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (readOnly || disabled) return;

    const { left, width } = event.currentTarget.getBoundingClientRect();
    const percent = (event.clientX - left) / width;

    if (precision === 0.5) {
      setHoverValue(percent <= 0.5 ? index + 0.5 : index + 1);
    } else {
      setHoverValue(index + 1);
    }
  };

  const handleMouseLeave = () => {
    setHoverValue(null);
    setIsHovering(false);
  };

  const handleClick = (newValue: number) => {
    if (!readOnly && !disabled && onChange) {
      onChange(newValue);
    }
  };

  const renderIcon = (index: number) => {
    const IconComponent = (() => {
      if (highlightSelectedOnly) {
        return index < Math.floor(displayValue) ? icons.full : icons.empty;
      }

      if (index < Math.floor(displayValue)) {
        return icons.full;
      }
      if (index === Math.floor(displayValue) && displayValue % 1 !== 0) {
        return icons.half;
      }
      return icons.empty;
    })();

    const tooltip = tooltips[index] || `${index + 1} ${label}`;

    return (
      <Tooltip key={index} title={tooltip}>
        <IconContainer
          size={size}
          onMouseMove={(e) => handleMouseMove(e, index)}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index + 1)}
          sx={{
            opacity: disabled ? 0.5 : 1,
            cursor: readOnly || disabled ? 'default' : 'pointer',
          }}
        >
          <IconComponent
            sx={{
              color: IconComponent === icons.empty ? 'action.disabled' : iconColor,
              transition: 'color 0.2s',
            }}
          />
        </IconContainer>
      </Tooltip>
    );
  };

  return (
    <RatingContainer className={className}>
      <Stack direction="row" spacing={1} alignItems="center">
        {showLabel && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ minWidth: 64 }}
          >
            {label}
          </Typography>
        )}
        <Box>
          {Array.from({ length: max }, (_, index) => renderIcon(index))}
        </Box>
        {showValue && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              minWidth: 36,
              textAlign: 'right',
              transition: 'opacity 0.2s',
              opacity: isHovering ? 1 : 0.7,
            }}
          >
            {displayValue.toFixed(precision === 0.5 ? 1 : 0)}
          </Typography>
        )}
      </Stack>
    </RatingContainer>
  );
}
