import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from '@/components/ui/Sidebar/Sidebar';
import { Box, useTheme, useMediaQuery } from '@mui/material';

const meta = {
  title: 'UI/Navigation/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'responsive',
    },
    chromatic: {
      viewports: [320, 768, 1200],
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const theme = useTheme();
      const isMobile = useMediaQuery(theme.breakpoints.down('md'));
      
      return (
        <Box 
          sx={{ 
            height: '100vh',
            display: 'flex',
            bgcolor: theme.palette.background.default
          }}
        >
          <Story />
          <Box 
            sx={{ 
              flex: 1,
              p: 3,
              bgcolor: theme.palette.background.paper,
              borderRadius: isMobile ? 0 : 1,
              m: isMobile ? 0 : 2,
              boxShadow: isMobile ? 0 : 1,
            }}
          >
            <h1>Main Content</h1>
            <p>This is a sample content area to demonstrate the sidebar layout.</p>
          </Box>
        </Box>
      );
    },
  ],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Função auxiliar para controlar o estado do drawer
const SidebarWithState = ({ initialOpen = false, ...props }) => {
  const [open, setOpen] = React.useState(initialOpen);
  return (
    <Sidebar
      open={open}
      toggleDrawer={() => setOpen(!open)}
      {...props}
    />
  );
};

export const Default: Story = {
  render: () => <SidebarWithState initialOpen={true} />,
};

export const Collapsed: Story = {
  render: () => <SidebarWithState initialOpen={false} />,
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
    chromatic: {
      viewports: [320],
    },
  },
  render: () => <SidebarWithState initialOpen={false} />,
};

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
    chromatic: {
      viewports: [768],
    },
  },
  render: () => <SidebarWithState initialOpen={true} />,
};

// Story para demonstrar o comportamento do drawer em diferentes breakpoints
export const ResponsiveBreakpoints: Story = {
  parameters: {
    viewport: {
      viewports: {
        xs: {
          name: 'Extra small',
          styles: {
            width: '320px',
            height: '100%',
          },
        },
        sm: {
          name: 'Small',
          styles: {
            width: '600px',
            height: '100%',
          },
        },
        md: {
          name: 'Medium',
          styles: {
            width: '960px',
            height: '100%',
          },
        },
        lg: {
          name: 'Large',
          styles: {
            width: '1280px',
            height: '100%',
          },
        },
      },
      defaultViewport: 'md',
    },
  },
  render: () => <SidebarWithState initialOpen={true} />,
};

// Story para demonstrar interações com o drawer
export const Interactive: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Esta story demonstra as interações com o Sidebar. Você pode abrir/fechar o drawer e interagir com os menus.',
      },
    },
  },
  render: () => {
    const [isOpen, setIsOpen] = React.useState(true);
    
    return (
      <>
        <Sidebar
          open={isOpen}
          toggleDrawer={() => setIsOpen(!isOpen)}
        />
        <Box
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            zIndex: 1300,
          }}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#1976d2',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
          </button>
        </Box>
      </>
    );
  },
};

// Story para demonstrar o tema escuro
export const DarkMode: Story = {
  parameters: {
    themes: {
      default: 'dark',
    },
  },
  render: () => <SidebarWithState initialOpen={true} />,
};

// Story para demonstrar diferentes estados de navegação
export const WithActiveItems: Story = {
  render: () => {
    const [activeItem, setActiveItem] = React.useState('dashboard');
    
    return (
      <SidebarWithState
        initialOpen={true}
        activeItem={activeItem}
        onItemClick={(item) => setActiveItem(item)}
      />
    );
  },
};
