'use client';

import { styled } from '@mui/material/styles';
import {
  List,
  ListItem as MuiListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Typography,
  useTheme,
} from '@mui/material';
import { alpha } from '@mui/material/styles';

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

export interface ListGroupItem {
  id: string | number;
  primary: React.ReactNode;
  secondary?: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  selected?: boolean;
  onClick?: () => void;
}

export interface ListGroupProps {
  items: ListGroupItem[];
  variant?: 'default' | 'flush' | 'custom';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  className?: string;
  bordered?: boolean;
  hover?: boolean;
  compact?: boolean;
}

const StyledList = styled(List, {
  shouldForwardProp: (prop) => 
    prop !== 'variant' && prop !== 'color' && prop !== 'bordered' && prop !== 'hover' && prop !== 'compact',
})<{
  variant?: string;
  color?: string;
  bordered?: boolean;
  hover?: boolean;
  compact?: boolean;
}>(({ theme, variant, color, bordered, hover, compact }) => ({
  padding: 0,
  ...(bordered && {
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
  }),
  ...(variant === 'flush' && {
    borderRadius: 0,
    '& .MuiListItem-root': {
      borderRadius: 0,
      '&:not(:last-child)': {
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
    },
  }),
  ...(variant === 'custom' && color && {
    '& .MuiListItemButton-root': {
      '&.Mui-selected': {
        backgroundColor: alpha(getColorMain(theme, color), 0.1),
        color: getColorMain(theme, color),
        '&:hover': {
          backgroundColor: alpha(getColorMain(theme, color), 0.15),
        },
      },
      '&:hover': {
        backgroundColor: alpha(getColorMain(theme, color), 0.05),
      },
    },
  }),
  ...(compact && {
    '& .MuiListItemButton-root': {
      paddingTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(0.5),
    },
  }),
}));

export const ListGroup = ({
  items,
  variant = 'default',
  color = 'primary',
  className,
  bordered = false,
  hover = false,
  compact = false,
}: ListGroupProps) => {
  const theme = useTheme();

  return (
    <StyledList
      variant={variant}
      color={color}
      bordered={bordered}
      hover={hover}
      compact={compact}
      className={className}
    >
      {items.map((item) => (
        <MuiListItem
          key={item.id}
          disablePadding
          onClick={item.onClick}
        >
          <ListItemButton
            disabled={item.disabled}
            selected={item.selected}
          >
            {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
            <ListItemText
              primary={item.primary}
              secondary={item.secondary}
              primaryTypographyProps={{
                color: item.selected ? getColorMain(theme, color) : 'textPrimary',
              }}
            />
          </ListItemButton>
        </MuiListItem>
      ))}
    </StyledList>
  );
};
