'use client';

import { useState } from 'react';
import { Box, styled } from '@mui/material';
import { Providers } from '@/lib/Providers';
import { GlobalStyles } from '@/styles/GlobalStyles';
import { GlobalStylesRTL } from '@/styles/GlobalStylesRTL';
import ClientStyleRegistry from '@/lib/ClientStyleRegistry';
import { AppBar } from '@/components/ui/AppBar/AppBar';
import { Sidebar } from '@/components/ui/Sidebar/Sidebar';
import { Footer } from '@/components/ui/Footer/Footer';
import { ThemeCustomizer } from '@/components/ui/ThemeCustomizer/ThemeCustomizer';
import { useTheme } from '@/lib/Providers';
import { useLayoutConfig } from '@/hooks/useLayoutConfig';

const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'position',
})<{
  open?: boolean;
  position?: 'fixed' | 'scrollable';
}>(({ theme, open, position }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: open ? 240 : 73,
  width: `calc(100% - ${open ? 240 : 73}px)`,
  height: position === 'fixed' ? '100vh' : 'auto',
  overflowY: position === 'fixed' ? 'auto' : 'visible',
  paddingBottom: theme.spacing(8), // Espaço para o footer
}));

const LayoutWrapper = styled(Box)<{ mode?: 'fluid' | 'boxed' | 'detached' }>(({ theme, mode }) => ({
  display: 'flex',
  minHeight: '100vh',
  maxWidth: mode === 'boxed' ? '1440px' : '100%',
  margin: mode === 'boxed' ? '0 auto' : 0,
  position: 'relative',
  ...(mode === 'detached' && {
    padding: theme.spacing(2),
    background: theme.palette.background.default,
  }),
}));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [customizeOpen, setCustomizeOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { layout } = useLayoutConfig();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const toggleCustomizer = () => {
    setCustomizeOpen(!customizeOpen);
  };

  return (
    <html lang="en">
      <body>
        <Providers>
          <ClientStyleRegistry>
            {process.env.NEXT_PUBLIC_RTL === 'true' ? (
              <GlobalStylesRTL />
            ) : (
              <GlobalStyles />
            )}
            <LayoutWrapper mode={layout.mode}>
              <AppBar 
                open={open} 
                toggleDrawer={toggleDrawer}
                toggleTheme={toggleTheme}
                isDarkMode={isDarkMode}
                onCustomizeClick={toggleCustomizer}
              />
              <Sidebar open={open} toggleDrawer={toggleDrawer} />
              <Main open={open} position={layout.position}>
                {children}
              </Main>
              <Footer />
              <ThemeCustomizer 
                open={customizeOpen} 
                onClose={() => setCustomizeOpen(false)} 
              />
            </LayoutWrapper>
          </ClientStyleRegistry>
        </Providers>
      </body>
    </html>
  );
}
