import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '../components/ui/Footer/Footer';
import { Box } from '@mui/material';
import { Providers } from '@/lib/Providers';

const meta = {
  title: 'Components/Footer',
  component: Footer,
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
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: () => (
    <Box sx={{ height: '100vh', position: 'relative' }}>
      <Box sx={{ p: 3 }}>
        <h1>Page Content</h1>
        <p>Scroll down to see the footer</p>
        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        ))}
      </Box>
      <Footer />
    </Box>
  ),
};

export const WithContent: Story = {
  render: () => (
    <Box 
      sx={{ 
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box 
        sx={{ 
          flexGrow: 1,
          p: 3,
          overflow: 'auto',
        }}
      >
        <h1>Main Content</h1>
        <p>The footer will stay at the bottom</p>
        {Array.from({ length: 5 }).map((_, i) => (
          <p key={i}>
            Content paragraph {i + 1}
          </p>
        ))}
      </Box>
      <Footer />
    </Box>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <Box 
      sx={{ 
        height: '100vh',
        bgcolor: 'background.default',
        position: 'relative',
      }}
    >
      <Box sx={{ p: 3 }}>
        <h1>Dark Mode Content</h1>
        <p>Footer in dark mode</p>
      </Box>
      <Footer />
    </Box>
  ),
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};

export const Mobile: Story = {
  render: () => (
    <Box sx={{ height: '100vh', position: 'relative' }}>
      <Box sx={{ p: 2 }}>
        <h1>Mobile View</h1>
        <p>Footer adapts to mobile screens</p>
      </Box>
      <Footer />
    </Box>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
