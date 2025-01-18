import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '@/components/ui/Progress';
import { Box } from '@mui/material';

const meta = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof Progress>;

export const Linear: Story = {
  args: {
    value: 75,
    showValue: true,
  },
};

export const LinearIndeterminate: Story = {
  args: {
    variant: 'indeterminate',
  },
};

export const Circular: Story = {
  args: {
    type: 'circular',
    value: 75,
    showValue: true,
  },
};

export const CircularIndeterminate: Story = {
  args: {
    type: 'circular',
    variant: 'indeterminate',
  },
};

export const Colors: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Progress value={75} color="primary" showValue />
      <Progress value={75} color="secondary" showValue />
      <Progress value={75} color="success" showValue />
      <Progress value={75} color="warning" showValue />
      <Progress value={75} color="error" showValue />
      <Progress value={75} color="info" showValue />
    </Box>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Progress type="circular" value={75} size={24} />
      <Progress type="circular" value={75} size={40} />
      <Progress type="circular" value={75} size={56} />
    </Box>
  ),
};

export const Thickness: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Progress type="circular" value={75} thickness={2} />
      <Progress type="circular" value={75} thickness={3.6} />
      <Progress type="circular" value={75} thickness={5} />
    </Box>
  ),
};
