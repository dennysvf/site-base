import type { Meta, StoryObj } from '@storybook/react';
import { Notification } from '@/components/ui/Notification';
import { Button } from '@/components/ui/Button';
import { Box } from '@mui/material';

const meta = {
  title: 'Components/Notification',
  component: Notification,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof Notification>;

export const Basic: Story = {
  args: {
    message: 'This is a basic notification',
  },
};

export const WithTitle: Story = {
  args: {
    title: 'Notification Title',
    message: 'This is a notification with a title',
    variant: 'info',
  },
};

export const WithAction: Story = {
  args: {
    message: 'This is a notification with action',
    action: <Button size="small">Undo</Button>,
    variant: 'warning',
  },
};

export const Variants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Notification
        variant="success"
        message="Success notification"
        showIcon
      />
      <Notification
        variant="error"
        message="Error notification"
        showIcon
      />
      <Notification
        variant="warning"
        message="Warning notification"
        showIcon
      />
      <Notification
        variant="info"
        message="Info notification"
        showIcon
      />
    </Box>
  ),
};

export const Positions: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Notification
        message="Top right notification"
        position="top-right"
      />
      <Notification
        message="Bottom right notification"
        position="bottom-right"
      />
      <Notification
        message="Top center notification"
        position="top-center"
      />
    </Box>
  ),
};

export const AutoHide: Story = {
  args: {
    message: 'This notification will auto hide after 3 seconds',
    autoHideDuration: 3000,
    variant: 'success',
    showIcon: true,
  },
};
