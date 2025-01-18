import type { Meta, StoryObj } from '@storybook/react';
import { ListGroup } from '@/components/ui/ListGroup';
import { Box } from '@mui/material';
import {
  Inbox as InboxIcon,
  Drafts as DraftsIcon,
  Send as SendIcon,
} from '@mui/icons-material';

const meta = {
  title: 'Components/ListGroup',
  component: ListGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ListGroup>;

export default meta;
type Story = StoryObj<typeof ListGroup>;

const items = [
  {
    id: 1,
    primary: 'Inbox',
    secondary: 'You have 3 new messages',
    icon: <InboxIcon />,
  },
  {
    id: 2,
    primary: 'Drafts',
    secondary: '2 drafts saved',
    icon: <DraftsIcon />,
  },
  {
    id: 3,
    primary: 'Sent',
    secondary: 'Last sent 2 hours ago',
    icon: <SendIcon />,
  },
];

export const Basic: Story = {
  args: {
    items,
  },
};

export const Variants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 300 }}>
      <ListGroup items={items} variant="default" />
      <ListGroup items={items} variant="flush" />
      <ListGroup items={items} variant="custom" />
    </Box>
  ),
};

export const Colors: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 300 }}>
      <ListGroup items={items} color="primary" />
      <ListGroup items={items} color="secondary" />
      <ListGroup items={items} color="success" />
      <ListGroup items={items} color="error" />
      <ListGroup items={items} color="warning" />
      <ListGroup items={items} color="info" />
    </Box>
  ),
};

export const Bordered: Story = {
  args: {
    items,
    bordered: true,
  },
};

export const WithHover: Story = {
  args: {
    items,
    hover: true,
  },
};

export const Compact: Story = {
  args: {
    items,
    compact: true,
  },
};

export const WithSelection: Story = {
  args: {
    items: [
      { ...items[0], selected: true },
      items[1],
      { ...items[2], disabled: true },
    ],
  },
};
