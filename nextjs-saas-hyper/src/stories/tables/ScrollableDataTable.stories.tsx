import type { Meta, StoryObj } from '@storybook/react';
import { ScrollableDataTable } from '@/components/ui/tables/datatable/ScrollableDataTable';

const meta = {
  title: 'Tables/DataTables/ScrollableDataTable',
  component: ScrollableDataTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollableDataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

const generateSampleData = (count: number) => 
  Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: `Employee ${index + 1}`,
    position: index % 4 === 0 ? 'Developer' : 
             index % 4 === 1 ? 'Designer' : 
             index % 4 === 2 ? 'Manager' : 'Analyst',
    office: index % 3 === 0 ? 'New York' : 
           index % 3 === 1 ? 'London' : 'Tokyo',
    age: 25 + (index % 20),
    startDate: '2023/01/01',
    salary: `$${80000 + (index * 1000)}`,
  }));

export const Default: Story = {
  args: {
    title: 'Scrollable Data Table',
    description: 'A data table with vertical scrolling',
    data: generateSampleData(10),
  },
};

export const ManyRows: Story = {
  args: {
    title: 'Many Rows',
    description: 'A table with many rows to demonstrate scrolling',
    data: generateSampleData(100),
  },
};

export const CompactRows: Story = {
  args: {
    title: 'Compact View',
    description: 'A table with compact row density',
    data: generateSampleData(50),
  },
};
