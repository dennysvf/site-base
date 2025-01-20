import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Timeline } from '@/components/ui/Timeline/Timeline';
import {
  Work as WorkIcon,
  School as SchoolIcon,
  Star as StarIcon,
  Event as EventIcon,
  LocationOn as LocationIcon,
} from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

const meta = {
  title: 'UI/Data Display/Timeline',
  component: Timeline,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box sx={{ width: 800, m: 2 }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

const timelineItems = [
  {
    id: 1,
    title: 'Software Engineer',
    description: 'Joined as Senior Software Engineer',
    date: '2025-01-15',
    icon: <WorkIcon />,
    color: 'primary.main',
    tags: ['React', 'TypeScript', 'Node.js'],
  },
  {
    id: 2,
    title: 'Master\'s Degree',
    description: 'Completed Master\'s in Computer Science',
    date: '2024-12-01',
    icon: <SchoolIcon />,
    color: 'secondary.main',
    tags: ['Education', 'Computer Science'],
  },
  {
    id: 3,
    title: 'Project Launch',
    description: 'Successfully launched the new platform',
    date: '2024-10-15',
    icon: <StarIcon />,
    color: 'success.main',
    tags: ['Project', 'Launch'],
    expandable: true,
    content: (
      <Box sx={{ p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
        <Typography variant="body2">
          Detailed project metrics:
          <ul>
            <li>1000+ active users</li>
            <li>95% satisfaction rate</li>
            <li>50% reduction in load time</li>
          </ul>
        </Typography>
      </Box>
    ),
  },
];

const longTimelineItems = [
  ...timelineItems,
  {
    id: 4,
    title: 'Conference Speaker',
    description: 'Presented at React Conference',
    date: '2024-09-01',
    icon: <EventIcon />,
    color: 'warning.main',
    tags: ['Speaking', 'React'],
  },
  {
    id: 5,
    title: 'Office Relocation',
    description: 'Moved to new headquarters',
    date: '2024-08-15',
    icon: <LocationIcon />,
    color: 'info.main',
    tags: ['Office', 'Relocation'],
  },
];

export const Basic: Story = {
  args: {
    items: timelineItems,
  },
};

export const Dense: Story = {
  args: {
    items: timelineItems,
    dense: true,
    itemGap: 2,
  },
};

export const LeftAligned: Story = {
  args: {
    items: timelineItems,
    align: 'left',
  },
};

export const RightAligned: Story = {
  args: {
    items: timelineItems,
    align: 'right',
  },
};

export const WithoutConnector: Story = {
  args: {
    items: timelineItems,
    showConnector: false,
  },
};

export const WithMaxHeight: Story = {
  args: {
    items: longTimelineItems,
    maxHeight: 400,
  },
};

export const WithAvatars: Story = {
  args: {
    items: timelineItems.map(item => ({
      ...item,
      avatar: `https://i.pravatar.cc/40?u=${item.id}`,
    })),
  },
};

export const Clickable: Story = {
  args: {
    items: timelineItems,
    onItemClick: (item) => alert(`Clicked: ${item.title}`),
  },
};
