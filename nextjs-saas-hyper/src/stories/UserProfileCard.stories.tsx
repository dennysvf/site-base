import type { Meta, StoryObj } from '@storybook/react';
import { UserProfileCard } from '@/components/ui/UserProfileCard';
import { Providers } from '@/lib/Providers';

const meta = {
  title: 'Components/UserProfileCard',
  component: UserProfileCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Providers>
        <div style={{ width: '600px' }}>
          <Story />
        </div>
      </Providers>
    ),
  ],
} satisfies Meta<typeof UserProfileCard>;

export default meta;
type Story = StoryObj<typeof UserProfileCard>;

export const Default: Story = {
  args: {
    avatar: '/assets/images/users/avatar-2.jpg',
    name: 'Michael Franklin',
    role: 'Authorised Brand Seller',
    stats: [
      { label: 'Total Revenue', value: '$ 25,184' },
      { label: 'Number of Orders', value: '5482' },
    ],
  },
};

export const WithMoreStats: Story = {
  args: {
    avatar: '/assets/images/users/avatar-2.jpg',
    name: 'Sarah Johnson',
    role: 'Senior Developer',
    stats: [
      { label: 'Projects', value: '156' },
      { label: 'Commits', value: '2.1k' },
      { label: 'Team Size', value: '12' },
    ],
  },
};

export const NoStats: Story = {
  args: {
    avatar: '/assets/images/users/avatar-2.jpg',
    name: 'John Doe',
    role: 'Product Manager',
    stats: [],
  },
};
