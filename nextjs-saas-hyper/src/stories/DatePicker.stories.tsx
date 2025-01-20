import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '@/components/ui/DatePicker/DatePicker';
import { Box } from '@mui/material';
import { addDays, subDays } from 'date-fns';

const meta = {
  title: 'UI/Forms/DatePicker',
  component: DatePicker,
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
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Select Date',
    value: new Date(),
    onChange: (date) => console.log('Selected date:', date),
  },
};

export const WithPlaceholder: Story = {
  args: {
    label: 'Birth Date',
    placeholder: 'DD/MM/YYYY',
    value: null,
    onChange: (date) => console.log('Selected date:', date),
  },
};

export const WithDateRange: Story = {
  args: {
    label: 'Select Date',
    value: new Date(),
    minDate: subDays(new Date(), 5),
    maxDate: addDays(new Date(), 5),
    onChange: (date) => console.log('Selected date:', date),
    helperText: 'Select a date within 5 days range',
  },
};

export const DisableFuture: Story = {
  args: {
    label: 'Past Date Only',
    value: new Date(),
    disableFuture: true,
    onChange: (date) => console.log('Selected date:', date),
  },
};

export const DisablePast: Story = {
  args: {
    label: 'Future Date Only',
    value: new Date(),
    disablePast: true,
    onChange: (date) => console.log('Selected date:', date),
  },
};

export const WithError: Story = {
  args: {
    label: 'Required Date',
    value: null,
    error: true,
    helperText: 'Please select a date',
    onChange: (date) => console.log('Selected date:', date),
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Read Only Date',
    value: new Date(),
    readOnly: true,
    onChange: (date) => console.log('Selected date:', date),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Date',
    value: new Date(),
    disabled: true,
    onChange: (date) => console.log('Selected date:', date),
  },
};

export const YearMonthPicker: Story = {
  args: {
    label: 'Select Year/Month',
    value: new Date(),
    views: ['year', 'month'],
    format: 'MM/yyyy',
    onChange: (date) => console.log('Selected date:', date),
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Date',
    value: new Date(),
    fullWidth: true,
    onChange: (date) => console.log('Selected date:', date),
  },
};
