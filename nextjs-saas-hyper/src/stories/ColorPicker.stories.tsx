import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ColorPicker } from '@/components/ui/ColorPicker/ColorPicker';
import { Box } from '@mui/material';

const meta = {
  title: 'UI/Forms/ColorPicker',
  component: ColorPicker,
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
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Select Color',
    value: '#1976d2',
    onChange: (color) => console.log('Selected color:', color),
  },
};

export const WithCustomPalette: Story = {
  args: {
    label: 'Brand Colors',
    value: '#ff4081',
    onChange: (color) => console.log('Selected color:', color),
    defaultColors: [
      '#ff4081', '#7c4dff', '#64ffda', '#ffd740',
      '#ff6e40', '#69f0ae', '#40c4ff', '#ea80fc',
    ],
  },
};

export const WithError: Story = {
  args: {
    label: 'Invalid Color',
    value: 'invalid',
    onChange: (color) => console.log('Selected color:', color),
    error: true,
    helperText: 'Please select a valid color',
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Read Only Color',
    value: '#4caf50',
    onChange: (color) => console.log('Selected color:', color),
    readOnly: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Color',
    value: '#f44336',
    onChange: (color) => console.log('Selected color:', color),
    disabled: true,
  },
};

export const WithoutCopyButton: Story = {
  args: {
    label: 'Select Color',
    value: '#2196f3',
    onChange: (color) => console.log('Selected color:', color),
    showCopyButton: false,
  },
};

export const Small: Story = {
  args: {
    label: 'Small Color Picker',
    value: '#9c27b0',
    onChange: (color) => console.log('Selected color:', color),
    size: 'small',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Color Picker',
    value: '#ff9800',
    onChange: (color) => console.log('Selected color:', color),
    fullWidth: true,
  },
};
