import type { Meta, StoryObj } from '@storybook/react';
import { BorderedTable } from '@/components/ui/tables/BorderedTable';

const meta = {
  title: 'Tables/BorderedTable',
  component: BorderedTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BorderedTable>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  columns: ['User', 'Account No.', 'Balance', 'Action'],
  rows: [
    {
      user: { name: 'Risa D. Pearson', avatar: '/assets/images/users/avatar-2.jpg' },
      accountNo: '#AC336 508',
      balance: '$21,356',
      action: 'View',
    },
    {
      user: { name: 'Margaret D. Evans', avatar: '/assets/images/users/avatar-3.jpg' },
      accountNo: '#AC336 756',
      balance: '$24,568',
      action: 'View',
    },
    {
      user: { name: 'Bryan J. Luellen', avatar: '/assets/images/users/avatar-4.jpg' },
      accountNo: '#AC336 098',
      balance: '$30,065',
      action: 'View',
    },
  ],
};

export const Primary: Story = {
  args: {
    title: 'Primary Bordered Table',
    description: 'Add borders on all sides of the table and cells with primary color',
    variant: 'primary',
    ...defaultArgs,
  },
};

export const Success: Story = {
  args: {
    title: 'Success Bordered Table',
    description: 'Add borders on all sides of the table and cells with success color',
    variant: 'success',
    ...defaultArgs,
  },
};
