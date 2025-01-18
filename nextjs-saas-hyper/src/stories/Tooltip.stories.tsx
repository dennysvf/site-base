import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/Button';
import { Tooltip } from '@/components/ui/Tooltip';
import { Box } from '@mui/material';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  args: {
    title: 'Tooltip content',
    children: <Button>Hover me</Button>,
  },
};

export const Variants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Tooltip title="Dark tooltip" variant="dark">
        <Button>Dark</Button>
      </Tooltip>
      <Tooltip title="Light tooltip" variant="light">
        <Button>Light</Button>
      </Tooltip>
      <Tooltip title="Brand tooltip" variant="brand">
        <Button>Brand</Button>
      </Tooltip>
    </Box>
  ),
};

export const Placement: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <Tooltip title="Top tooltip" placement="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip title="Right tooltip" placement="right">
        <Button>Right</Button>
      </Tooltip>
      <Tooltip title="Bottom tooltip" placement="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip title="Left tooltip" placement="left">
        <Button>Left</Button>
      </Tooltip>
    </Box>
  ),
};

export const WithArrow: Story = {
  args: {
    title: 'Tooltip with arrow',
    children: <Button>Hover me</Button>,
    arrow: true,
  },
};

export const Controlled: Story = {
  args: {
    title: 'Controlled tooltip',
    children: <Button>Click me</Button>,
    open: true,
  },
};
