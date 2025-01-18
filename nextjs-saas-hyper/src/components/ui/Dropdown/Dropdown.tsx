'use client';

import { useState, useCallback } from 'react';
import { styled } from '@mui/material/styles';
import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  IconButton,
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

export interface DropdownItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  divider?: boolean;
  disabled?: boolean;
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}

export interface DropdownProps {
  items: DropdownItem[];
  trigger?: React.ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
  className?: string;
  placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
  header?: string;
  fullWidth?: boolean;
}

const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: theme.shape.borderRadius,
    marginTop: theme.spacing(1),
    minWidth: 180,
    boxShadow: theme.shadows[3],
  },
}));

const DropdownHeader = styled('div')(({ theme }) => ({
  padding: theme.spacing(1, 2),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  '&.Mui-disabled': {
    opacity: 0.6,
  },
}));

export function Dropdown({
  items,
  trigger,
  variant = 'outlined',
  color = 'primary',
  size = 'medium',
  icon,
  className,
  placement = 'bottom-start',
  header,
  fullWidth,
}: DropdownProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleItemClick = useCallback((item: DropdownItem) => {
    if (item.onClick) {
      item.onClick();
    }
    handleClose();
  }, [handleClose]);

  const defaultTrigger = (
    <Button
      variant={variant}
      color={color}
      size={size}
      onClick={handleClick}
      endIcon={icon || <ExpandMoreIcon />}
      fullWidth={fullWidth}
      className={className}
    >
      {trigger || 'Dropdown'}
    </Button>
  );

  const iconTrigger = trigger && (
    <IconButton
      color={color}
      size={size}
      onClick={handleClick}
      className={className}
    >
      {trigger}
    </IconButton>
  );

  return (
    <>
      {trigger ? iconTrigger : defaultTrigger}
      <StyledMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        anchorOrigin={{
          vertical: placement.startsWith('bottom') ? 'bottom' : 'top',
          horizontal: placement.endsWith('start') ? 'left' : 'right',
        }}
        transformOrigin={{
          vertical: placement.startsWith('bottom') ? 'top' : 'bottom',
          horizontal: placement.endsWith('start') ? 'left' : 'right',
        }}
      >
        {header && (
          <DropdownHeader>
            <Typography variant="subtitle2" color="text.secondary">
              {header}
            </Typography>
          </DropdownHeader>
        )}
        {items.map((item, index) => (
          <div key={item.key || index}>
            {item.divider && <Divider />}
            <StyledMenuItem
              onClick={() => handleItemClick(item)}
              disabled={item.disabled}
            >
              {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
              <ListItemText>
                <Typography
                  color={item.color || 'inherit'}
                  variant="body2"
                >
                  {item.label}
                </Typography>
              </ListItemText>
            </StyledMenuItem>
          </div>
        ))}
      </StyledMenu>
    </>
  );
}
