import type { Meta, StoryObj } from '@storybook/react';
import { BasicTable } from '@/components/ui/tables/BasicTable';

const meta = {
  title: 'Tables/BasicTable',
  component: BasicTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BasicTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Basic Table',
    description: 'For basic styling—light padding and only horizontal dividers',
    columns: ['Name', 'Phone Number', 'Date of Birth', 'Active?'],
    rows: [
      ['Risa D. Pearson', '336-508-2157', 'July 24, 1950', true],
      ['Ann C. Thompson', '646-473-2057', 'January 25, 1959', true],
      ['Paul J. Friend', '281-308-0793', 'September 1, 1939', false],
      ['Linda G. Smith', '606-253-1207', 'May 3, 1962', false],
    ],
  },
};
