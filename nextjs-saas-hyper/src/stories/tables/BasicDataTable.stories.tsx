import type { Meta, StoryObj } from '@storybook/react';
import { BasicDataTable } from '@/components/ui/tables/datatable/BasicDataTable';

const meta = {
  title: 'Tables/DataTables/BasicDataTable',
  component: BasicDataTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BasicDataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
  {
    id: 1,
    name: 'Tiger Nixon',
    position: 'System Architect',
    office: 'Edinburgh',
    age: 61,
    startDate: '2011/04/25',
    salary: '$320,800',
  },
  {
    id: 2,
    name: 'Garrett Winters',
    position: 'Accountant',
    office: 'Tokyo',
    age: 63,
    startDate: '2011/07/25',
    salary: '$170,750',
  },
  {
    id: 3,
    name: 'Ashton Cox',
    position: 'Junior Technical Author',
    office: 'San Francisco',
    age: 66,
    startDate: '2009/01/12',
    salary: '$86,000',
  },
];

export const Default: Story = {
  args: {
    title: 'Basic Data Table',
    description: 'A basic data table with sorting and pagination',
    data: sampleData,
  },
};

export const Empty: Story = {
  args: {
    title: 'Empty Table',
    description: 'A table with no data',
    data: [],
  },
};

export const LongList: Story = {
  args: {
    title: 'Long List',
    description: 'A table with many rows',
    data: Array.from({ length: 20 }, (_, index) => ({
      id: index + 1,
      name: `Employee ${index + 1}`,
      position: 'Developer',
      office: 'Remote',
      age: 25 + index,
      startDate: '2023/01/01',
      salary: '$100,000',
    })),
  },
};
