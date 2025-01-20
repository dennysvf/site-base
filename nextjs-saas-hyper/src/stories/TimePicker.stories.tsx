import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TimePicker } from '@/components/ui/TimePicker/TimePicker';
import { Box } from '@mui/material';
import { setHours, setMinutes } from 'date-fns';

const meta = {
  title: 'UI/Forms/TimePicker',
  component: TimePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box sx={{ width: 300, m: 2 }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof TimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

const now = new Date();

export const Basic: Story = {
  args: {
    label: 'Select Time',
    value: now,
    onChange: (time) => console.log('Selected time:', time),
  },
};

export const WithAMPM: Story = {
  args: {
    label: 'Select Time',
    value: now,
    ampm: true,
    format: 'hh:mm a',
    onChange: (time) => console.log('Selected time:', time),
  },
};

export const WithMinutesStep: Story = {
  args: {
    label: 'Select Time',
    value: now,
    minutesStep: 15,
    onChange: (time) => console.log('Selected time:', time),
    helperText: '15 minutes intervals',
  },
};

export const WithTimeRange: Story = {
  args: {
    label: 'Business Hours',
    value: setHours(now, 9),
    minTime: setHours(now, 9),
    maxTime: setHours(now, 17),
    onChange: (time) => console.log('Selected time:', time),
    helperText: 'Select time between 9 AM and 5 PM',
  },
};

export const WithError: Story = {
  args: {
    label: 'Required Time',
    value: null,
    error: true,
    helperText: 'Please select a time',
    onChange: (time) => console.log('Selected time:', time),
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Read Only Time',
    value: now,
    readOnly: true,
    onChange: (time) => console.log('Selected time:', time),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Time',
    value: now,
    disabled: true,
    onChange: (time) => console.log('Selected time:', time),
  },
};

export const HoursOnly: Story = {
  args: {
    label: 'Select Hour',
    value: now,
    views: ['hours'],
    format: 'HH:00',
    onChange: (time) => console.log('Selected time:', time),
  },
};

export const Clearable: Story = {
  args: {
    label: 'Clearable Time',
    value: now,
    clearable: true,
    onChange: (time) => console.log('Selected time:', time),
  },
};

export const WithoutToolbar: Story = {
  args: {
    label: 'Select Time',
    value: now,
    showToolbar: false,
    onChange: (time) => console.log('Selected time:', time),
  },
};
