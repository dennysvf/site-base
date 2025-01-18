import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '@/components/ui/Accordion';
import { Box, Typography } from '@mui/material';
import {
  Settings as SettingsIcon,
  Person as PersonIcon,
  Security as SecurityIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof Accordion>;

const basicItems = [
  {
    id: '1',
    title: 'What is Lorem Ipsum?',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: '2',
    title: 'Why do we use it?',
    content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    id: '3',
    title: 'Where does it come from?',
    content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.',
  },
];

export const Basic: Story = {
  args: {
    items: basicItems,
  },
};

export const DefaultExpanded: Story = {
  args: {
    items: basicItems,
    defaultExpanded: '1',
  },
};

export const AllowMultiple: Story = {
  args: {
    items: basicItems,
    allowMultiple: true,
  },
};

const variantItems = [
  {
    id: '1',
    title: 'Default Variant',
    content: 'This is the default variant with borders and shadow.',
  },
  {
    id: '2',
    title: 'Flush Variant',
    content: 'This variant has no borders or shadow, just dividers between items.',
  },
  {
    id: '3',
    title: 'Custom Variant',
    content: 'This variant has custom styling with transparent background.',
  },
];

export const Variants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Accordion items={variantItems} variant="default" />
      <Accordion items={variantItems} variant="flush" />
      <Accordion items={variantItems} variant="custom" />
    </Box>
  ),
};

const richContentItems = [
  {
    id: 'profile',
    title: 'Profile Settings',
    content: (
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <PersonIcon sx={{ mr: 1 }} />
          <Typography variant="subtitle1">Personal Information</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Update your photo and personal details here.
        </Typography>
      </Box>
    ),
  },
  {
    id: 'security',
    title: 'Security Settings',
    content: (
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <SecurityIcon sx={{ mr: 1 }} />
          <Typography variant="subtitle1">Password & Security</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Manage your password and 2FA settings.
        </Typography>
      </Box>
    ),
  },
  {
    id: 'notifications',
    title: 'Notification Preferences',
    content: (
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <NotificationsIcon sx={{ mr: 1 }} />
          <Typography variant="subtitle1">Email & Push Notifications</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Choose what notifications you want to receive.
        </Typography>
      </Box>
    ),
  },
];

export const RichContent: Story = {
  args: {
    items: richContentItems,
    variant: 'custom',
  },
};

const nestedItems = [
  {
    id: '1',
    title: 'Parent Accordion 1',
    content: (
      <Box>
        <Typography paragraph>Main content for parent 1</Typography>
        <Accordion
          items={[
            {
              id: '1-1',
              title: 'Child Accordion 1',
              content: 'Content for child accordion 1',
            },
            {
              id: '1-2',
              title: 'Child Accordion 2',
              content: 'Content for child accordion 2',
            },
          ]}
          variant="flush"
        />
      </Box>
    ),
  },
  {
    id: '2',
    title: 'Parent Accordion 2',
    content: (
      <Box>
        <Typography paragraph>Main content for parent 2</Typography>
        <Accordion
          items={[
            {
              id: '2-1',
              title: 'Child Accordion 1',
              content: 'Content for child accordion 1',
            },
            {
              id: '2-2',
              title: 'Child Accordion 2',
              content: 'Content for child accordion 2',
            },
          ]}
          variant="flush"
        />
      </Box>
    ),
  },
];
