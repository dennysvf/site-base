import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from '@/components/ui/Card/Profile';
import { Box } from '@mui/material';
import {
  Code as CodeIcon,
  Star as StarIcon,
  People as PeopleIcon,
  Edit as EditIcon,
  Message as MessageIcon,
  Add as AddIcon,
} from '@mui/icons-material';

const meta = {
  title: 'UI/Data Display/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box sx={{ width: 400 }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic = {
  args: {
    name: 'Sarah Johnson',
    role: 'Senior Developer',
    avatar: 'https://i.pravatar.cc/300',
    verified: true,
  },
} satisfies Story;

export const WithStats = {
  args: {
    name: 'Michael Chen',
    role: 'Full Stack Developer',
    avatar: 'https://i.pravatar.cc/300?img=11',
    location: 'San Francisco, CA',
    bio: 'Passionate about building great software and sharing knowledge with the community.',
    verified: true,
    stats: [
      { label: 'Projects', value: '156', icon: <CodeIcon />, color: 'primary' },
      { label: 'Following', value: '1.2k', icon: <PeopleIcon />, color: 'info' },
      { label: 'Stars', value: '4.8k', icon: <StarIcon />, color: 'warning' },
    ],
  },
} satisfies Story;

export const WithActions = {
  args: {
    name: 'Emily Davis',
    role: 'UX Designer',
    avatar: 'https://i.pravatar.cc/300?img=5',
    verified: true,
    location: 'London, UK',
    actions: [
      { label: 'Edit Profile', icon: <EditIcon />, onClick: () => alert('Edit clicked'), color: 'primary' },
      { label: 'Message', icon: <MessageIcon />, onClick: () => alert('Message clicked'), variant: 'outlined' },
      { label: 'Follow', icon: <AddIcon />, onClick: () => alert('Follow clicked'), color: 'secondary' },
    ],
  },
} satisfies Story;

export const WithSocialLinks = {
  args: {
    name: 'Alex Turner',
    role: 'Tech Lead',
    avatar: 'https://i.pravatar.cc/300?img=8',
    verified: true,
    socialLinks: [
      { platform: 'github', url: 'https://github.com' },
      { platform: 'twitter', url: 'https://twitter.com' },
      { platform: 'linkedin', url: 'https://linkedin.com' },
      { platform: 'website', url: 'https://example.com' },
    ],
  },
} satisfies Story;

export const WithCoverImage = {
  args: {
    name: 'David Wilson',
    role: 'Product Manager',
    avatar: 'https://i.pravatar.cc/300?img=3',
    coverImage: 'https://source.unsplash.com/random/800x200?technology',
    verified: true,
    badges: [
      { label: 'Pro', color: 'primary' },
      { label: 'Mentor', color: 'success' },
    ],
    status: 'online',
  },
} satisfies Story;

export const Complete = {
  args: {
    name: 'Isabella Martinez',
    role: 'Senior Software Engineer',
    avatar: 'https://i.pravatar.cc/300?img=9',
    coverImage: 'https://source.unsplash.com/random/800x200?coding',
    verified: true,
    location: 'New York, NY',
    bio: 'Building the future of web development. Open source enthusiast and community leader.',
    status: 'online',
    badges: [
      { label: 'MVP', color: 'primary' },
      { label: 'Speaker', color: 'info' },
      { label: 'Author', color: 'success' },
    ],
    stats: [
      { label: 'Projects', value: '234', icon: <CodeIcon />, color: 'primary' },
      { label: 'Following', value: '15k', icon: <PeopleIcon />, color: 'info' },
      { label: 'Stars', value: '8.9k', icon: <StarIcon />, color: 'warning' },
    ],
    actions: [
      { label: 'Edit', icon: <EditIcon />, onClick: () => alert('Edit clicked'), color: 'primary' },
      { label: 'Message', icon: <MessageIcon />, onClick: () => alert('Message clicked'), variant: 'outlined' },
    ],
    socialLinks: [
      { platform: 'github', url: 'https://github.com' },
      { platform: 'twitter', url: 'https://twitter.com' },
      { platform: 'linkedin', url: 'https://linkedin.com' },
      { platform: 'website', url: 'https://example.com' },
    ],
  },
} satisfies Story;
