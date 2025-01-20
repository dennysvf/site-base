import type { Meta, StoryObj } from '@storybook/react';
import { StripedTable } from '@/components/ui/tables/StripedTable';

const meta = {
  title: 'Tables/StripedTable',
  component: StripedTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StripedTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Striped Table',
    description: 'Use zebra-striping to any table row within the table body',
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
  },
};
