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
  Collapse,
  useMediaQuery,
  IconButton,
  SwipeableDrawer
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  Home as HomeIcon,
  CopyAll as PagesIcon,
  Public as GlobeIcon,
  Window as LayoutsIcon,
  CreateNewFolder as MultiLevelIcon,
  Close as CloseIcon,
  Menu as MenuIcon
} from '@mui/icons-material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

export interface SidebarProps {
  open: boolean;
  toggleDrawer: () => void;
}

export function Sidebar({ open, toggleDrawer }: SidebarProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [openPages, setOpenPages] = React.useState(false);
  const [openAuth, setOpenAuth] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const [openLayouts, setOpenLayouts] = React.useState(false);
  const [openMultiLevel, setOpenMultiLevel] = React.useState(false);

  const handleClick = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter(prev => !prev);
  };

  const drawerContent = (
    <>
      {/* Logo Section */}
      <Box 
        sx={{ 
          p: 2, 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <img 
          src={theme.palette.mode === 'dark' ? '/images/logo-dark.png' : '/images/logo.png'}
          alt="Logo" 
          style={{ 
            width: open ? '80%' : '40px',
            maxWidth: '200px',
            height: 'auto'
          }}
        />
        {isMobile && (
          <IconButton onClick={toggleDrawer} sx={{ ml: 1 }}>
            <CloseIcon />
          </IconButton>
        )}
      </Box>

      {/* User Section */}
      <Box 
        sx={{ 
          p: 2, 
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Avatar 
          alt="User" 
          src="/images/users/avatar-1.jpg"
          sx={{ 
            width: { xs: 48, sm: 56 }, 
            height: { xs: 48, sm: 56 }, 
            margin: 'auto' 
          }}
        />
        {open && (
          <Typography 
            variant="subtitle1" 
            sx={{ 
              mt: 1,
              fontSize: { xs: '0.9rem', sm: '1rem' }
            }}
          >
            Dominic Keller
          </Typography>
        )}
      </Box>

      {/* Navigation */}
      <List 
        sx={{
          overflowY: 'auto',
          maxHeight: {
            xs: 'calc(100vh - 300px)',
            sm: 'calc(100vh - 350px)'
          }
        }}
      >
        {/* Dashboard */}
        <ListItemButton
          sx={{
            minHeight: 48,
            px: 2.5,
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            }
          }}
        >
          <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto' }}>
            <HomeIcon />
          </ListItemIcon>
          {open && <ListItemText 
            primary="Dashboard" 
            primaryTypographyProps={{
              fontSize: { xs: '0.9rem', sm: '1rem' }
            }}
          />}
        </ListItemButton>

        {/* Pages Section */}
        <ListItemButton 
          onClick={() => handleClick(setOpenPages)}
          sx={{
            minHeight: 48,
            px: 2.5,
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            }
          }}
        >
          <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto' }}>
            <PagesIcon />
          </ListItemIcon>
          {open && (
            <>
              <ListItemText 
                primary="Pages" 
                primaryTypographyProps={{
                  fontSize: { xs: '0.9rem', sm: '1rem' }
                }}
              />
              {openPages ? <ExpandLess /> : <ExpandMore />}
            </>
          )}
        </ListItemButton>
        <Collapse in={open && openPages} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* Authentication Submenu */}
            <ListItemButton 
              onClick={() => handleClick(setOpenAuth)} 
              sx={{ 
                pl: 4,
                minHeight: 40
              }}
            >
              <ListItemText 
                primary="Authentication" 
                primaryTypographyProps={{
                  fontSize: { xs: '0.85rem', sm: '0.9rem' }
                }}
              />
              {openAuth ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openAuth} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 6, minHeight: 36 }}>
                  <ListItemText 
                    primary="Login" 
                    primaryTypographyProps={{
                      fontSize: { xs: '0.8rem', sm: '0.85rem' }
                    }}
                  />
                </ListItemButton>
                <ListItemButton sx={{ pl: 6, minHeight: 36 }}>
                  <ListItemText 
                    primary="Register" 
                    primaryTypographyProps={{
                      fontSize: { xs: '0.8rem', sm: '0.85rem' }
                    }}
                  />
                </ListItemButton>
              </List>
            </Collapse>

            {/* Error Submenu */}
            <ListItemButton 
              onClick={() => handleClick(setOpenError)} 
              sx={{ 
                pl: 4,
                minHeight: 40
              }}
            >
              <ListItemText 
                primary="Error" 
                primaryTypographyProps={{
                  fontSize: { xs: '0.85rem', sm: '0.9rem' }
                }}
              />
              {openError ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openError} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 6, minHeight: 36 }}>
                  <ListItemText 
                    primary="404 Page" 
                    primaryTypographyProps={{
                      fontSize: { xs: '0.8rem', sm: '0.85rem' }
                    }}
                  />
                </ListItemButton>
                <ListItemButton sx={{ pl: 6, minHeight: 36 }}>
                  <ListItemText 
                    primary="500 Page" 
                    primaryTypographyProps={{
                      fontSize: { xs: '0.8rem', sm: '0.85rem' }
                    }}
                  />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Collapse>

        {/* Layouts Section */}
        <ListItemButton 
          onClick={() => handleClick(setOpenLayouts)}
          sx={{
            minHeight: 48,
            px: 2.5,
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            }
          }}
        >
          <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto' }}>
            <LayoutsIcon />
          </ListItemIcon>
          {open && (
            <>
              <ListItemText 
                primary="Layouts" 
                primaryTypographyProps={{
                  fontSize: { xs: '0.9rem', sm: '1rem' }
                }}
              />
              {openLayouts ? <ExpandLess /> : <ExpandMore />}
            </>
          )}
        </ListItemButton>
        <Collapse in={open && openLayouts} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4, minHeight: 40 }}>
              <ListItemText 
                primary="Horizontal" 
                primaryTypographyProps={{
                  fontSize: { xs: '0.85rem', sm: '0.9rem' }
                }}
              />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4, minHeight: 40 }}>
              <ListItemText 
                primary="Detached" 
                primaryTypographyProps={{
                  fontSize: { xs: '0.85rem', sm: '0.9rem' }
                }}
              />
            </ListItemButton>
          </List>
        </Collapse>

        {/* Multi Level Section */}
        <ListItemButton 
          onClick={() => handleClick(setOpenMultiLevel)}
          sx={{
            minHeight: 48,
            px: 2.5,
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            }
          }}
        >
          <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto' }}>
            <MultiLevelIcon />
          </ListItemIcon>
          {open && (
            <>
              <ListItemText 
                primary="Multi Level" 
                primaryTypographyProps={{
                  fontSize: { xs: '0.9rem', sm: '1rem' }
                }}
              />
              {openMultiLevel ? <ExpandLess /> : <ExpandMore />}
            </>
          )}
        </ListItemButton>
        <Collapse in={open && openMultiLevel} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4, minHeight: 40 }}>
              <ListItemText 
                primary="Second Level" 
                primaryTypographyProps={{
                  fontSize: { xs: '0.85rem', sm: '0.9rem' }
                }}
              />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4, minHeight: 40 }}>
              <ListItemText 
                primary="Third Level" 
                primaryTypographyProps={{
                  fontSize: { xs: '0.85rem', sm: '0.9rem' }
                }}
              />
            </ListItemButton>
          </List>
        </Collapse>
      </List>

      {/* Help Section */}
      <Box 
        sx={{ 
          p: 2, 
          textAlign: 'center', 
          mt: 'auto',
          borderTop: `1px solid ${theme.palette.divider}`
        }}
      >
        <img 
          src="/images/svg/help-icon.svg"
          alt="Help" 
          style={{ 
            width: open ? '80px' : '40px', 
            margin: 'auto',
            maxWidth: '100%',
            height: 'auto'
          }}
        />
        {open && (
          <>
            <Typography 
              variant="h6" 
              sx={{ 
                mt: 1,
                fontSize: { xs: '1rem', sm: '1.25rem' }
              }}
            >
              Unlimited Access
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                mb: 2,
                fontSize: { xs: '0.8rem', sm: '0.875rem' }
              }}
            >
              Upgrade to plan to get access to unlimited reports
            </Typography>
            <Button 
              variant="contained" 
              size="small"
              sx={{
                width: { xs: '100%', sm: 'auto' }
              }}
            >
              Upgrade
            </Button>
          </>
        )}
      </Box>
    </>
  );

  return isMobile ? (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
      sx={{
        '& .MuiDrawer-paper': {
          width: '280px',
          boxSizing: 'border-box',
        },
      }}
    >
      {drawerContent}
    </SwipeableDrawer>
  ) : (
    <Drawer
      variant="permanent"
      open={open}
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
          overflowX: 'hidden',
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
}