'use client';

import { styled, useTheme as useMuiTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  MenuItem,
  Menu,
  Tooltip,
  Avatar,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
} from '@mui/icons-material';
import { useState } from 'react';
import { useTheme } from '@/lib/Providers';
import { AppBarProps } from './types';

const AppBarStyled = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.divider}`,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: 240,
    width: `calc(100% - ${240}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export function AppBar({ 
  open, 
  toggleDrawer, 
  onCustomizeClick,
  ...props 
}: AppBarProps) {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  // Remover o hook useNotification e usar um valor estático
  const notificationCount = 5; // Para demonstração
  const { toggleTheme, isDarkMode } = useTheme();
  const theme = useMuiTheme();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBarStyled position="fixed" open={open} {...props}>
      <Toolbar sx={{ minHeight: '64px !important', px: { sm: 5 } }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          edge="start"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Tooltip title="Customize Theme">
            <IconButton color="inherit" size="small" onClick={onCustomizeClick}>
              <SettingsIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title={isDarkMode ? 'Light Mode' : 'Dark Mode'}>
            <IconButton color="inherit" size="small" onClick={toggleTheme}>
              {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Tooltip>

          <Tooltip title="Notifications">
            <IconButton color="inherit" size="small">
              <Badge badgeContent={notificationCount} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>

          <Box 
            sx={{ 
              ml: 2,
              display: 'flex',
              alignItems: 'center',
              borderLeft: `1px solid ${theme.palette.divider}`,
              pl: 2
            }}
          >
            <Tooltip title="Account">
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                size="small"
                sx={{ p: 0 }}
              >
                <Avatar
                  src="/images/users/avatar-1.jpg"
                  alt="User"
                  sx={{ 
                    width: 32, 
                    height: 32,
                    cursor: 'pointer',
                    '&:hover': {
                      boxShadow: `0 0 0 2px ${theme.palette.primary.main}`
                    }
                  }}
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        <Menu
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBarStyled>
  );
}