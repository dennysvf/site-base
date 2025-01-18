import type { Meta, StoryObj } from '@storybook/react';
import { AppBar } from '@/components/ui/AppBar';
import { Box, Typography } from '@mui/material';
import { Providers } from '@/lib/Providers';

const meta = {
  title: 'Components/AppBar',
  component: AppBar,
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
} satisfies Meta<typeof AppBar>;

export default meta;
type Story = StoryObj<typeof AppBar>;

export const Default: Story = {
  args: {
    open: false,
    toggleDrawer: () => console.log('Toggle drawer'),
    onCustomizeClick: () => console.log('Customize clicked'),
  },
};

export const WithDrawerOpen: Story = {
  args: {
    open: true,
    toggleDrawer: () => console.log('Toggle drawer'),
    onCustomizeClick: () => console.log('Customize clicked'),
  },
};

export const WithContent: Story = {
  render: () => (
    <Box sx={{ height: '100vh', bgcolor: 'background.default' }}>
      <AppBar
        open={false}
        toggleDrawer={() => console.log('Toggle drawer')}
        onCustomizeClick={() => console.log('Customize clicked')}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Box>
    </Box>
  ),
};

export const WithDrawerOpenAndContent: Story = {
  render: () => (
    <Box sx={{ height: '100vh', bgcolor: 'background.default' }}>
      <AppBar
        open={true}
        toggleDrawer={() => console.log('Toggle drawer')}
        onCustomizeClick={() => console.log('Customize clicked')}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          ml: 30, // Compensate for drawer width
        }}
      >
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Box>
    </Box>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <Box sx={{ height: '100vh', bgcolor: 'background.default' }}>
      <AppBar
        open={false}
        toggleDrawer={() => console.log('Toggle drawer')}
        onCustomizeClick={() => console.log('Customize clicked')}
      />
    </Box>
  ),
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};

export const Mobile: Story = {
  args: {
    open: false,
    toggleDrawer: () => console.log('Toggle drawer'),
    onCustomizeClick: () => console.log('Customize clicked'),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
