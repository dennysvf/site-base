import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@/components/ui/Switch';
import { Box } from '@mui/material';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const Basic: Story = {
  args: {
    label: 'Basic Switch',
  },
};

export const Sizes: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Switch size="small" label="Small" />
      <Switch size="medium" label="Medium" />
    </Box>
  ),
};

export const Colors: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Switch color="primary" label="Primary" />
      <Switch color="secondary" label="Secondary" />
      <Switch color="success" label="Success" />
      <Switch color="warning" label="Warning" />
      <Switch color="error" label="Error" />
      <Switch color="info" label="Info" />
    </Box>
  ),
};

export const Controlled: Story = {
  args: {
    label: 'Controlled Switch',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Switch',
    disabled: true,
  },
};
