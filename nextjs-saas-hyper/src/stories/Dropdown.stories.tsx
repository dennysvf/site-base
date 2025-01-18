import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '@/components/ui/Dropdown';
import { Button } from '@/components/ui/Button';
import { Settings, KeyboardArrowDown } from '@mui/icons-material';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof Dropdown>;

const menuItems = [
  { key: '1', label: 'Option 1' },
  { key: '2', label: 'Option 2' },
  { key: '3', label: 'Option 3' },
];

export const Basic: Story = {
  args: {
    items: menuItems,
    trigger: <Button>Click me</Button>,
  },
};

export const WithIcon: Story = {
  args: {
    items: menuItems,
    trigger: (
      <Button>
        Settings
        <Settings sx={{ ml: 1 }} />
      </Button>
    ),
  },
};

export const Placement: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Dropdown
        items={menuItems}
        trigger={<Button>Bottom Start</Button>}
        placement="bottom-start"
      />
      <Dropdown
        items={menuItems}
        trigger={<Button>Bottom End</Button>}
        placement="bottom-end"
      />
    </div>
  ),
};

export const CustomTrigger: Story = {
  args: {
    items: menuItems,
    trigger: (
      <Button endIcon={<KeyboardArrowDown />}>
        Custom Trigger
      </Button>
    ),
  },
};
