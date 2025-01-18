import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '@/components/ui/Chip';
import { Box } from '@mui/material';
import { Face as FaceIcon } from '@mui/icons-material';

const meta = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof Chip>;

export const Basic: Story = {
  args: {
    label: 'Basic Chip',
  },
};

export const Variants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <Chip label="Filled" variant="filled" />
      <Chip label="Outlined" variant="outlined" />
      <Chip label="Soft" variant="soft" />
    </Box>
  ),
};

export const Colors: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <Chip label="Primary" color="primary" />
      <Chip label="Secondary" color="secondary" />
      <Chip label="Success" color="success" />
      <Chip label="Error" color="error" />
      <Chip label="Warning" color="warning" />
      <Chip label="Info" color="info" />
    </Box>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <Chip label="Small" size="small" />
      <Chip label="Medium" size="medium" />
      <Chip label="Large" size="large" />
    </Box>
  ),
};

export const WithIcon: Story = {
  args: {
    label: 'With Icon',
    icon: <FaceIcon />,
  },
};

export const WithAvatar: Story = {
  args: {
    label: 'With Avatar',
    avatarSrc: 'https://i.pravatar.cc/300',
    avatarAlt: 'User Avatar',
  },
};

export const Deletable: Story = {
  args: {
    label: 'Deletable Chip',
    onDelete: () => console.log('Deleted'),
  },
};

export const Elevated: Story = {
  args: {
    label: 'Elevated Chip',
    elevated: true,
  },
};

export const Gradient: Story = {
  args: {
    label: 'Gradient Chip',
    gradient: true,
    color: 'primary',
  },
};

export const Rounded: Story = {
  args: {
    label: 'Rounded Chip',
    rounded: true,
  },
};
