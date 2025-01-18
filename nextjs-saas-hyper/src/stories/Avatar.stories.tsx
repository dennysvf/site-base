import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '@/components/ui/Avatar';
import { Box } from '@mui/material';
import {
  Person as PersonIcon,
  Folder as FolderIcon,
  Star as StarIcon,
} from '@mui/icons-material';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Basic: Story = {
  args: {
    children: 'JD',
  },
};

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/300',
    alt: 'User Avatar',
  },
};

export const Sizes: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <Avatar size="xs">XS</Avatar>
      <Avatar size="sm">SM</Avatar>
      <Avatar size="md">MD</Avatar>
      <Avatar size="lg">LG</Avatar>
      <Avatar size="xl">XL</Avatar>
    </Box>
  ),
};

export const Variants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Avatar variant="circular">C</Avatar>
      <Avatar variant="rounded">R</Avatar>
      <Avatar variant="square">S</Avatar>
    </Box>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Avatar>
        <PersonIcon />
      </Avatar>
      <Avatar>
        <FolderIcon />
      </Avatar>
      <Avatar>
        <StarIcon />
      </Avatar>
    </Box>
  ),
};

export const Colors: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Avatar bgColor="#1976d2">P</Avatar>
      <Avatar bgColor="#9c27b0">S</Avatar>
      <Avatar bgColor="#2e7d32">S</Avatar>
      <Avatar bgColor="#d32f2f">E</Avatar>
      <Avatar bgColor="#ed6c02">W</Avatar>
      <Avatar bgColor="#0288d1">I</Avatar>
    </Box>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      {/* This will show the children since the src is invalid */}
      <Avatar src="/invalid-image.jpg">JD</Avatar>
      {/* This will show the PersonIcon since there's no src or children */}
      <Avatar />
      {/* This will show the first letter of the alt text */}
      <Avatar alt="John Doe" />
    </Box>
  ),
};

export const Group: Story = {
  render: () => (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ position: 'relative', marginLeft: -1 }}>
        <Avatar src="https://i.pravatar.cc/300?img=1" />
      </Box>
      <Box sx={{ position: 'relative', marginLeft: -1 }}>
        <Avatar src="https://i.pravatar.cc/300?img=2" />
      </Box>
      <Box sx={{ position: 'relative', marginLeft: -1 }}>
        <Avatar src="https://i.pravatar.cc/300?img=3" />
      </Box>
      <Box sx={{ position: 'relative', marginLeft: -1 }}>
        <Avatar>+3</Avatar>
      </Box>
    </Box>
  ),
};
