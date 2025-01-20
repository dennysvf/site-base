import type { Meta, StoryObj } from '@storybook/react';
import { FixedColumnsTable } from '@/components/ui/tables/datatable/FixedColumnsTable';

const meta = {
  title: 'Tables/DataTables/FixedColumnsTable',
  component: FixedColumnsTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FixedColumnsTable>;

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
  {
    id: 5,
    name: 'Airi Satou',
    position: 'Accountant',
    office: 'Tokyo',
    age: 33,
    startDate: '2008/11/28',
    salary: '$162,700',
  },
];

export const Default: Story = {
  args: {
    title: 'Fixed Columns Table',
    description: 'A data table with fixed left and right columns',
    data: sampleData,
  },
};

export const WithManyColumns: Story = {
  args: {
    title: 'Many Columns',
    description: 'Table with many columns to demonstrate horizontal scrolling with fixed columns',
    data: sampleData.map(item => ({
      ...item,
      extraCol1: 'Extra 1',
      extraCol2: 'Extra 2',
      extraCol3: 'Extra 3',
      extraCol4: 'Extra 4',
    })),
  },
};
