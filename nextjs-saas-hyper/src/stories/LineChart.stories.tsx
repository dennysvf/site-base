import type { Meta, StoryObj } from '@storybook/react';
import { LineChart } from '../components/ui/LineChart';
import { Box } from '@mui/material';
import { Providers } from '@/lib/Providers';

const meta = {
  title: 'Components/LineChart',
  component: LineChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Providers>
        <Story />
      </Providers>
    ),
  ],
} satisfies Meta<typeof LineChart>;

export default meta;
type Story = StoryObj<typeof LineChart>;

export const Basic: Story = {
  args: {
    title: 'Monthly Sales',
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales 2024',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  },
};

export const MultipleDatasets: Story = {
  args: {
    title: 'Sales Comparison',
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: '2024',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: '2023',
        data: [28, 48, 40, 19, 86, 27],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  },
};

export const WithCustomContainer: Story = {
  render: () => (
    <Box sx={{ width: 600, height: 400, p: 2, bgcolor: 'background.paper' }}>
      <LineChart
        title="Revenue Growth"
        labels={['Q1', 'Q2', 'Q3', 'Q4']}
        datasets={[
          {
            label: 'Revenue',
            data: [1200, 1900, 3000, 5000],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ]}
      />
    </Box>
  ),
};

export const YearlyComparison: Story = {
  render: () => (
    <Box sx={{ width: 800, height: 400, p: 2, bgcolor: 'background.paper' }}>
      <LineChart
        title="Yearly Performance"
        labels={[
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ]}
        datasets={[
          {
            label: '2024',
            data: [65, 59, 80, 81, 56, 55, 72, 68, 85, 90, 92, 95],
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
          },
          {
            label: '2023',
            data: [28, 48, 40, 19, 86, 27, 45, 55, 65, 70, 75, 80],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: '2022',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 59, 62, 67, 71],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ]}
      />
    </Box>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <Box sx={{ width: 600, height: 400, p: 2, bgcolor: 'background.paper' }}>
      <LineChart
        title="Monthly Active Users"
        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        datasets={[
          {
            label: 'Users',
            data: [1500, 2500, 3500, 4800, 6000, 7500],
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
          },
        ]}
      />
    </Box>
  ),
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};
