import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '@/components/ui/Tabs';
import { Box, Typography } from '@mui/material';
import {
  Home as HomeIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

const tabItems = [
  {
    key: 'home',
    label: 'Home',
    content: <Typography>Home content</Typography>,
  },
  {
    key: 'profile',
    label: 'Profile',
    content: <Typography>Profile content</Typography>,
  },
  {
    key: 'settings',
    label: 'Settings',
    content: <Typography>Settings content</Typography>,
  },
];

const tabItemsWithIcons = [
  {
    key: 'home',
    label: 'Home',
    icon: <HomeIcon />,
    content: <Typography>Home content</Typography>,
  },
  {
    key: 'profile',
    label: 'Profile',
    icon: <PersonIcon />,
    content: <Typography>Profile content</Typography>,
  },
  {
    key: 'settings',
    label: 'Settings',
    icon: <SettingsIcon />,
    content: <Typography>Settings content</Typography>,
  },
];

export const Basic: Story = {
  args: {
    items: tabItems,
  },
};

export const WithIcons: Story = {
  args: {
    items: tabItemsWithIcons,
  },
};

export const Styles: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 400 }}>
      <Tabs items={tabItems} style="default" />
      <Tabs items={tabItems} style="pills" />
      <Tabs items={tabItems} style="enclosed" />
      <Tabs items={tabItems} style="underline" />
    </Box>
  ),
};

export const Colors: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 400 }}>
      <Tabs items={tabItems} color="primary" />
      <Tabs items={tabItems} color="secondary" />
      <Tabs items={tabItems} color="success" />
      <Tabs items={tabItems} color="error" />
      <Tabs items={tabItems} color="warning" />
      <Tabs items={tabItems} color="info" />
    </Box>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 400 }}>
      <Tabs items={tabItems} size="small" />
      <Tabs items={tabItems} size="medium" />
      <Tabs items={tabItems} size="large" />
    </Box>
  ),
};

export const Vertical: Story = {
  args: {
    items: tabItems,
    orientation: 'vertical',
  },
};

export const Disabled: Story = {
  args: {
    items: [
      ...tabItems.slice(0, 2),
      { ...tabItems[2], disabled: true },
    ],
  },
};
