import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from '@/components/ui/Rating/Rating';
import { Box } from '@mui/material';

const meta = {
  title: 'UI/Data Display/Rating',
  component: Rating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box sx={{ m: 2 }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    value: 3.5,
    onChange: (value) => console.log('Rating changed:', value),
  },
};

export const WithPrecision: Story = {
  args: {
    value: 3.5,
    precision: 0.5,
    onChange: (value) => console.log('Rating changed:', value),
    showValue: true,
  },
};

export const ReadOnly: Story = {
  args: {
    value: 4,
    readOnly: true,
    showValue: true,
    showLabel: true,
  },
};

export const WithLabel: Story = {
  args: {
    value: 4,
    showLabel: true,
    label: 'Satisfaction',
    showValue: true,
  },
};

export const CustomColor: Story = {
  args: {
    value: 4,
    color: '#ff4081',
    showValue: true,
  },
};

export const HeartIcon: Story = {
  args: {
    value: 3,
    iconType: 'heart',
    max: 5,
    showValue: true,
    color: '#f44336',
  },
};

export const ThumbIcon: Story = {
  args: {
    value: 1,
    iconType: 'thumb',
    max: 1,
    showValue: true,
    showLabel: true,
    label: 'Helpful',
  },
};

export const Large: Story = {
  args: {
    value: 4,
    size: 'large',
    showValue: true,
  },
};

export const Small: Story = {
  args: {
    value: 4,
    size: 'small',
    showValue: true,
  },
};

export const Disabled: Story = {
  args: {
    value: 3,
    disabled: true,
    showValue: true,
  },
};

export const WithTooltips: Story = {
  args: {
    value: 3,
    tooltips: ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'],
    showValue: true,
  },
};

export const HighlightSelected: Story = {
  args: {
    value: 3,
    highlightSelectedOnly: true,
    showValue: true,
  },
};

export const CustomMax: Story = {
  args: {
    value: 7,
    max: 10,
    showValue: true,
    showLabel: true,
    label: 'Score',
  },
};
