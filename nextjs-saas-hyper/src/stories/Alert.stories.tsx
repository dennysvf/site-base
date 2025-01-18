import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '@/components/ui/Alert';
import { Box, Button } from '@mui/material';
import {
  Info as InfoIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
  CheckCircle as SuccessIcon,
} from '@mui/icons-material';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof Alert>;

export const Basic: Story = {
  args: {
    children: 'This is a basic alert message.',
  },
};

export const WithTitle: Story = {
  args: {
    title: 'Alert Title',
    children: 'This is an alert with a title.',
  },
};

export const Severities: Story = {
  render: () => (
    <React.Fragment>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Alert severity="success">
          This is a success alert message.
        </Alert>
        <Alert severity="info">
          This is an info alert message.
        </Alert>
        <Alert severity="warning">
          This is a warning alert message.
        </Alert>
        <Alert severity="error">
          This is an error alert message.
        </Alert>
      </Box>
    </React.Fragment>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <React.Fragment>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Alert icon={<SuccessIcon />} severity="success">
          Custom success icon
        </Alert>
        <Alert icon={<InfoIcon />} severity="info">
          Custom info icon
        </Alert>
        <Alert icon={<WarningIcon />} severity="warning">
          Custom warning icon
        </Alert>
        <Alert icon={<ErrorIcon />} severity="error">
          Custom error icon
        </Alert>
      </Box>
    </React.Fragment>
  ),
};

export const WithActions: Story = {
  render: () => (
    <React.Fragment>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Alert
          severity="info"
          action={
            <Button color="inherit" size="small">
              UNDO
            </Button>
          }
        >
          Alert with action button
        </Alert>
        
        <Alert
          severity="warning"
          onClose={() => console.log('Alert closed')}
        >
          Dismissible alert
        </Alert>

        <Alert
          severity="success"
          action={
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button color="inherit" size="small">
                CANCEL
              </Button>
              <Button color="inherit" size="small" variant="outlined">
                OK
              </Button>
            </Box>
          }
        >
          Alert with multiple actions
        </Alert>
      </Box>
    </React.Fragment>
  ),
};

export const RichContent: Story = {
  render: () => (
    <React.Fragment>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Alert
          severity="info"
          title="Update Available"
        >
          <Box sx={{ mt: 1 }}>
            A new version (2.0.0) is available. Please review the changes:
            <ul>
              <li>Improved performance</li>
              <li>New features added</li>
              <li>Bug fixes</li>
            </ul>
          </Box>
        </Alert>

        <Alert
          severity="warning"
          title="Browser Support"
        >
          <Box sx={{ mt: 1 }}>
            Your browser version is not fully supported. We recommend using:
            <ul>
              <li>Chrome (latest version)</li>
              <li>Firefox (latest version)</li>
              <li>Safari (latest version)</li>
            </ul>
          </Box>
        </Alert>
      </Box>
    </React.Fragment>
  ),
};
