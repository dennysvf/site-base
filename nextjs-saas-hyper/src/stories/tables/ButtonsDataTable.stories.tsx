import type { Meta, StoryObj } from '@storybook/react';
import { ButtonsDataTable } from '@/components/ui/tables/datatable/ButtonsDataTable';

const meta = {
  title: 'Tables/DataTables/ButtonsDataTable',
  component: ButtonsDataTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonsDataTable>;

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
  {
    id: 4,
    name: 'Cedric Kelly',
    position: 'Senior Javascript Developer',
    office: 'Edinburgh',
    age: 22,
    startDate: '2012/03/29',
    salary: '$433,060',
  },
];

export const Default: Story = {
  args: {
    title: 'Buttons Data Table',
    description: 'A data table with export buttons and toolbar',
    data: sampleData,
  },
};

export const WithManyRecords: Story = {
  args: {
    title: 'Large Dataset',
    description: 'A table with many records to demonstrate export functionality',
    data: Array.from({ length: 50 }, (_, index) => ({
      id: index + 1,
      name: `Employee ${index + 1}`,
      position: index % 2 === 0 ? 'Developer' : 'Designer',
      office: index % 3 === 0 ? 'New York' : index % 3 === 1 ? 'London' : 'Tokyo',
      age: 25 + (index % 20),
      startDate: '2023/01/01',
      salary: `$${80000 + (index * 1000)}`,
    })),
  },
};
