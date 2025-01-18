import React from 'react';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Box,
  Typography,
  Button,
  Divider,
  Collapse
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  Home as HomeIcon,
  CopyAll as PagesIcon,
  Public as GlobeIcon,
  Window as LayoutsIcon,
  CreateNewFolder as MultiLevelIcon,
  Close as CloseIcon
} from '@mui/icons-material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

export interface SidebarProps {
  open: boolean;
  toggleDrawer: () => void;
}

export function Sidebar({ open, toggleDrawer }: SidebarProps) {
  const theme = useTheme();
  const [openPages, setOpenPages] = React.useState(false);
  const [openAuth, setOpenAuth] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const [openLayouts, setOpenLayouts] = React.useState(false);
  const [openMultiLevel, setOpenMultiLevel] = React.useState(false);

  const handleClick = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter(prev => !prev);
  };

  return (
    <Drawer
      variant="permanent"
      open={open}
      onClose={toggleDrawer}
      sx={{
        width: open ? 280 : 60,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? 280 : 60,
          boxSizing: 'border-box',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
      }}
    >
      {/* Logo Section */}
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
        <img 
          src={theme.palette.mode === 'dark' ? '/images/logo-dark.png' : '/images/logo.png'}
          alt="Logo" 
          style={{ width: open ? '80%' : '40px' }}
        />
      </Box>

      {/* User Section */}
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Avatar 
          alt="User" 
          src="/images/users/avatar-1.jpg"
          sx={{ width: 56, height: 56, margin: 'auto' }}
        />
        {open && (
          <Typography variant="subtitle1" sx={{ mt: 1 }}>
            Dominic Keller
          </Typography>
        )}
      </Box>

      {/* Navigation */}
      <List>
        {/* Dashboard */}
        <ListItemButton>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          {open && <ListItemText primary="Dashboard" />}
        </ListItemButton>

        {/* Pages Section */}
        <ListItemButton onClick={() => handleClick(setOpenPages)}>
          <ListItemIcon>
            <PagesIcon />
          </ListItemIcon>
          {open && (
            <>
              <ListItemText primary="Pages" />
              {openPages ? <ExpandLess /> : <ExpandMore />}
            </>
          )}
        </ListItemButton>
        <Collapse in={openPages} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* Authentication Submenu */}
            <ListItemButton onClick={() => handleClick(setOpenAuth)} sx={{ pl: 4 }}>
              <ListItemText primary="Authentication" />
              {openAuth ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openAuth} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 6 }}>
                  <ListItemText primary="Login" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 6 }}>
                  <ListItemText primary="Register" />
                </ListItemButton>
              </List>
            </Collapse>

            {/* Error Submenu */}
            <ListItemButton onClick={() => handleClick(setOpenError)} sx={{ pl: 4 }}>
              <ListItemText primary="Error" />
              {openError ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openError} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 6 }}>
                  <ListItemText primary="404 Page" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 6 }}>
                  <ListItemText primary="500 Page" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Collapse>

        {/* Layouts Section */}
        <ListItemButton onClick={() => handleClick(setOpenLayouts)}>
          <ListItemIcon>
            <LayoutsIcon />
          </ListItemIcon>
          {open && (
            <>
              <ListItemText primary="Layouts" />
              {openLayouts ? <ExpandLess /> : <ExpandMore />}
            </>
          )}
        </ListItemButton>
        <Collapse in={openLayouts} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Horizontal" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Detached" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* Multi Level Section */}
        <ListItemButton onClick={() => handleClick(setOpenMultiLevel)}>
          <ListItemIcon>
            <MultiLevelIcon />
          </ListItemIcon>
          {open && (
            <>
              <ListItemText primary="Multi Level" />
              {openMultiLevel ? <ExpandLess /> : <ExpandMore />}
            </>
          )}
        </ListItemButton>
        <Collapse in={openMultiLevel} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Second Level" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Third Level" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>

      {/* Help Section */}
      <Box sx={{ p: 2, textAlign: 'center', mt: 'auto' }}>
        <img 
          src="/images/svg/help-icon.svg"
          alt="Help" 
          style={{ width: open ? '80px' : '40px', margin: 'auto' }}
        />
        {open && (
          <>
            <Typography variant="h6" sx={{ mt: 1 }}>
              Unlimited Access
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Upgrade to plan to get access to unlimited reports
            </Typography>
            <Button variant="contained" size="small">
              Upgrade
            </Button>
          </>
        )}
      </Box>
    </Drawer>
  );
}