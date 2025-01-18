import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from '../components/ui/Sidebar/Sidebar';
import { Box, Typography } from '@mui/material';
import { Providers } from '@/lib/Providers';
import { useState } from 'react';

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Providers>
        <Story />
      </Providers>
    ),
  ],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof Sidebar>;

const SidebarWrapper = ({ initialOpen = true }) => {
  const [open, setOpen] = useState(initialOpen);
  return (
    <Box sx={{ height: '100vh', display: 'flex' }}>
      <Sidebar open={open} toggleDrawer={() => setOpen(!open)} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          bgcolor: 'background.default',
          marginLeft: open ? '280px' : '60px',
          transition: 'margin 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Main Content
        </Typography>
        <Typography paragraph>
          This is the main content area. It adjusts based on the sidebar state.
        </Typography>
      </Box>
    </Box>
  );
};

export const Expanded: Story = {
  render: () => <SidebarWrapper initialOpen={true} />,
};

export const Collapsed: Story = {
  render: () => <SidebarWrapper initialOpen={false} />,
};

export const DarkMode: Story = {
  render: () => <SidebarWrapper initialOpen={true} />,
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};

export const WithActiveItems: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <Box sx={{ height: '100vh', display: 'flex' }}>
        <Sidebar
          open={open}
          toggleDrawer={() => setOpen(!open)}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            bgcolor: 'background.default',
            marginLeft: open ? '280px' : '60px',
            transition: 'margin 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
          }}
        >
          <Typography variant="h4" gutterBottom>
            Active Items Demo
          </Typography>
          <Typography paragraph>
            The sidebar shows the default navigation structure.
          </Typography>
        </Box>
      </Box>
    );
  },
};

export const Mobile: Story = {
  render: () => (
    <Box sx={{ height: '100vh' }}>
      <SidebarWrapper initialOpen={false} />
    </Box>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const WithLongContent: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <Box sx={{ height: '100vh', display: 'flex' }}>
        <Sidebar open={open} toggleDrawer={() => setOpen(!open)} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            bgcolor: 'background.default',
            marginLeft: open ? '280px' : '60px',
            transition: 'margin 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
          }}
        >
          <Typography variant="h4" gutterBottom>
            Scrollable Content
          </Typography>
          {Array.from({ length: 20 }).map((_, index) => (
            <Typography key={index} paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </Typography>
          ))}
        </Box>
      </Box>
    );
  },
};
