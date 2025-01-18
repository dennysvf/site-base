import type { Meta, StoryObj } from '@storybook/react';
import { StatisticsWidget } from '../components/ui/StatisticsWidget/StatisticsWidget';
import { Box, Grid } from '@mui/material';
import { Providers } from '@/lib/Providers';

const meta = {
  title: 'Components/StatisticsWidget',
  component: StatisticsWidget,
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
} satisfies Meta<typeof StatisticsWidget>;

export default meta;
type Story = StoryObj<typeof StatisticsWidget>;

export const Revenue: Story = {
  args: {
    title: 'Total Revenue',
    stats: '$24,500',
    trend: '+10.23%',
    trendLabel: 'Since last month',
    icon: 'revenue',
  },
};

export const Users: Story = {
  args: {
    title: 'Active Users',
    stats: '5,243',
    trend: '+21.05%',
    trendLabel: 'Since last week',
    icon: 'users',
  },
};

export const Orders: Story = {
  args: {
    title: 'Orders',
    stats: '1,753',
    trend: '-5.75%',
    trendLabel: 'Since yesterday',
    icon: 'orders',
    trendDown: true,
  },
};

export const Growth: Story = {
  args: {
    title: 'Growth Rate',
    stats: '42.3%',
    trend: '+8.12%',
    trendLabel: 'Since last quarter',
    icon: 'growth',
  },
};

export const Dashboard: Story = {
  render: () => (
    <Box sx={{ p: 3, width: '100%', maxWidth: 1200 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatisticsWidget
            title="Total Revenue"
            stats="$86,254"
            trend="+20.1%"
            trendLabel="Since last month"
            icon="revenue"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatisticsWidget
            title="Active Users"
            stats="8,547"
            trend="+15.7%"
            trendLabel="Since last week"
            icon="users"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatisticsWidget
            title="Orders"
            stats="2,356"
            trend="-3.2%"
            trendLabel="Since yesterday"
            icon="orders"
            trendDown={true}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatisticsWidget
            title="Growth Rate"
            stats="67.8%"
            trend="+12.3%"
            trendLabel="Since last quarter"
            icon="growth"
          />
        </Grid>
      </Grid>
    </Box>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <Box sx={{ p: 3, width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}>
      <StatisticsWidget
        title="Total Revenue"
        stats="$94,357"
        trend="+18.2%"
        trendLabel="Since last month"
        icon="revenue"
      />
    </Box>
  ),
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};

export const Mobile: Story = {
  render: () => (
    <Box sx={{ width: '100%', maxWidth: 400 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <StatisticsWidget
            title="Total Revenue"
            stats="$45,231"
            trend="+14.5%"
            trendLabel="Since last month"
            icon="revenue"
          />
        </Grid>
        <Grid item xs={12}>
          <StatisticsWidget
            title="Active Users"
            stats="3,842"
            trend="+9.3%"
            trendLabel="Since last week"
            icon="users"
          />
        </Grid>
      </Grid>
    </Box>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
