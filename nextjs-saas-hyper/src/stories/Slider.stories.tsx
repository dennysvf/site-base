import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '@/components/ui/Slider';
import { Box } from '@mui/material';

const meta = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof Slider>;

export const Basic: Story = {
  args: {
    defaultValue: 50,
    label: 'Basic Slider',
  },
};

export const WithValueLabel: Story = {
  args: {
    defaultValue: 50,
    label: 'Slider with Value',
    showValue: true,
    valueFormat: (value) => `${value}%`,
  },
};

export const Range: Story = {
  args: {
    defaultValue: [20, 80],
    label: 'Range Slider',
    showValue: true,
  },
};

export const Colors: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 300 }}>
      <Slider label="Primary" defaultValue={50} color="primary" showValue />
      <Slider label="Secondary" defaultValue={50} color="secondary" showValue />
      <Slider label="Success" defaultValue={50} color="success" showValue />
      <Slider label="Error" defaultValue={50} color="error" showValue />
      <Slider label="Warning" defaultValue={50} color="warning" showValue />
      <Slider label="Info" defaultValue={50} color="info" showValue />
    </Box>
  ),
};

export const Disabled: Story = {
  args: {
    defaultValue: 50,
    label: 'Disabled Slider',
    disabled: true,
    showValue: true,
  },
};

export const CustomMarks: Story = {
  args: {
    defaultValue: 50,
    label: 'Slider with Marks',
    step: 20,
    marks: [
      { value: 0, label: '0%' },
      { value: 20, label: '20%' },
      { value: 40, label: '40%' },
      { value: 60, label: '60%' },
      { value: 80, label: '80%' },
      { value: 100, label: '100%' },
    ],
    showValue: true,
  },
};

export const Gradient: Story = {
  args: {
    defaultValue: 50,
    label: 'Gradient Slider',
    gradient: true,
    showValue: true,
  },
};
