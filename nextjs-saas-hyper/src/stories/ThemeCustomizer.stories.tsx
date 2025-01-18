import type { Meta, StoryObj } from '@storybook/react';
import { ThemeCustomizer } from '../components/ui/ThemeCustomizer/ThemeCustomizer';
import { Box, Button } from '@mui/material';
import { Providers } from '@/lib/Providers';
import { useState } from 'react';

const meta = {
  title: 'Components/ThemeCustomizer',
  component: ThemeCustomizer,
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
} satisfies Meta<typeof ThemeCustomizer>;

export default meta;
type Story = StoryObj<typeof ThemeCustomizer>;

const CustomizerWrapper = ({ initialOpen = false }) => {
  const [open, setOpen] = useState(initialOpen);
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        p: 3,
        bgcolor: 'background.default',
      }}
    >
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        sx={{ alignSelf: 'flex-end' }}
      >
        Open Customizer
      </Button>
      <Box sx={{ mt: 3 }}>
        <h1>Main Content</h1>
        <p>Click the button above to open the theme customizer.</p>
      </Box>
      <ThemeCustomizer open={open} onClose={() => setOpen(false)} />
    </Box>
  );
};

export const Default: Story = {
  render: () => <CustomizerWrapper />,
};

export const InitiallyOpen: Story = {
  render: () => <CustomizerWrapper initialOpen={true} />,
};

export const WithContent: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: 'background.default',
          p: 3,
        }}
      >
        <Button
          variant="contained"
          onClick={() => setOpen(true)}
          sx={{ mb: 3 }}
        >
          Customize Theme
        </Button>
        <Box sx={{ display: 'grid', gap: 3 }}>
          <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 1 }}>
            <h2>Card Title</h2>
            <p>This content will update as you customize the theme.</p>
          </Box>
          <Box sx={{ p: 3, bgcolor: 'primary.main', color: 'primary.contrastText', borderRadius: 1 }}>
            <h2>Primary Color</h2>
            <p>This box uses the primary color.</p>
          </Box>
          <Box sx={{ p: 3, bgcolor: 'secondary.main', color: 'secondary.contrastText', borderRadius: 1 }}>
            <h2>Secondary Color</h2>
            <p>This box uses the secondary color.</p>
          </Box>
        </Box>
        <ThemeCustomizer open={open} onClose={() => setOpen(false)} />
      </Box>
    );
  },
};

export const DarkMode: Story = {
  render: () => <CustomizerWrapper />,
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};

export const Mobile: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: 'background.default',
          p: 2,
        }}
      >
        <Button
          variant="contained"
          onClick={() => setOpen(true)}
          fullWidth
          sx={{ mb: 2 }}
        >
          Customize Theme
        </Button>
        <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
          <h3>Mobile View</h3>
          <p>The customizer adapts to smaller screens.</p>
        </Box>
        <ThemeCustomizer open={open} onClose={() => setOpen(false)} />
      </Box>
    );
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const WithLongContent: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: 'background.default',
          p: 3,
        }}
      >
        <Button
          variant="contained"
          onClick={() => setOpen(true)}
          sx={{ mb: 3 }}
        >
          Open Customizer
        </Button>
        <Box sx={{ display: 'grid', gap: 3 }}>
          {Array.from({ length: 10 }).map((_, index) => (
            <Box
              key={index}
              sx={{
                p: 3,
                bgcolor: 'background.paper',
                borderRadius: 1,
              }}
            >
              <h3>Section {index + 1}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Box>
          ))}
        </Box>
        <ThemeCustomizer open={open} onClose={() => setOpen(false)} />
      </Box>
    );
  },
};
