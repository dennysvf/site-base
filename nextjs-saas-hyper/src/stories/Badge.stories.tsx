import type { Meta, StoryObj } from '@storybook/react';
import { Badge, BadgePosition } from '@/components/ui/Badge';
import { Box, IconButton, Avatar } from '@mui/material';
import {
  Mail as MailIcon,
  Notifications as NotificationsIcon,
  ShoppingCart as CartIcon,
  Message as MessageIcon,
} from '@mui/icons-material';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Basic: Story = {
  args: {
    children: 'New',
  },
};

export const Variants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Badge variant="filled">Filled</Badge>
      <Badge variant="outlined">Outlined</Badge>
      <Badge variant="light">Light</Badge>
    </Box>
  ),
};

export const Colors: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {['filled', 'outlined', 'light'].map((variant) => (
        <Box key={variant} sx={{ display: 'flex', gap: 2 }}>
          <Badge variant={variant as any} color="primary">Primary</Badge>
          <Badge variant={variant as any} color="secondary">Secondary</Badge>
          <Badge variant={variant as any} color="success">Success</Badge>
          <Badge variant={variant as any} color="error">Error</Badge>
          <Badge variant={variant as any} color="warning">Warning</Badge>
          <Badge variant={variant as any} color="info">Info</Badge>
          <Badge variant={variant as any} color="dark">Dark</Badge>
        </Box>
      ))}
    </Box>
  ),
};

export const Pill: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Badge pill>Default</Badge>
      <Badge pill variant="outlined" color="success">Success</Badge>
      <Badge pill variant="light" color="error">Error</Badge>
    </Box>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 3 }}>
      <BadgePosition
        badgeContent={<Badge pill>4</Badge>}
        position="top-right"
      >
        <IconButton>
          <MailIcon />
        </IconButton>
      </BadgePosition>

      <BadgePosition
        badgeContent={<Badge pill color="error">12</Badge>}
        position="top-right"
      >
        <IconButton>
          <NotificationsIcon />
        </IconButton>
      </BadgePosition>

      <BadgePosition
        badgeContent={<Badge pill variant="light" color="success">3</Badge>}
        position="top-right"
      >
        <IconButton>
          <CartIcon />
        </IconButton>
      </BadgePosition>
    </Box>
  ),
};

export const Positions: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <BadgePosition
        badgeContent={<Badge pill>1</Badge>}
        position="top-right"
      >
        <Avatar>TR</Avatar>
      </BadgePosition>

      <BadgePosition
        badgeContent={<Badge pill>2</Badge>}
        position="top-left"
      >
        <Avatar>TL</Avatar>
      </BadgePosition>

      <BadgePosition
        badgeContent={<Badge pill>3</Badge>}
        position="bottom-right"
      >
        <Avatar>BR</Avatar>
      </BadgePosition>

      <BadgePosition
        badgeContent={<Badge pill>4</Badge>}
        position="bottom-left"
      >
        <Avatar>BL</Avatar>
      </BadgePosition>
    </Box>
  ),
};

export const Indicators: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 3 }}>
      <BadgePosition
        badgeContent={<Box sx={{ width: 8, height: 8, bgcolor: 'success.main', borderRadius: '50%' }} />}
        position="bottom-right"
      >
        <Avatar>ON</Avatar>
      </BadgePosition>

      <BadgePosition
        badgeContent={<Box sx={{ width: 8, height: 8, bgcolor: 'error.main', borderRadius: '50%' }} />}
        position="bottom-right"
      >
        <Avatar>OFF</Avatar>
      </BadgePosition>

      <BadgePosition
        badgeContent={<Box sx={{ width: 8, height: 8, bgcolor: 'warning.main', borderRadius: '50%' }} />}
        position="bottom-right"
      >
        <Avatar>AFK</Avatar>
      </BadgePosition>
    </Box>
  ),
};
