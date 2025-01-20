import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DataCard } from '@/components/ui/Card/Data';
import { Box, Grid } from '@mui/material';
import {
  AttachMoney as MoneyIcon,
  People as PeopleIcon,
  ShoppingCart as CartIcon,
  TrendingUp as TrendingUpIcon,
} from '@mui/icons-material';

const meta = {
  title: 'UI/Data Display/DataCard',
  component: DataCard,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box sx={{ p: 3 }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof DataCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  decorators: [
    (Story) => (
      <Box sx={{ width: 300 }}>
        <Story />
      </Box>
    ),
  ],
  args: {
    title: 'Customers',
    value: 36254,
    trend: {
      value: 5.27,
      direction: 'up'
    },
    icon: <PeopleIcon />,
    iconColor: '#3B82F6', // Azul
  },
};

export const WithColoredValue: Story = {
  args: {
    title: 'Orders',
    value: 5543,
    trend: {
      value: 1.08,
      direction: 'down'
    },
    icon: <CartIcon />,
    iconColor: '#F59E0B', // Laranja
    colorValueWithTrend: true,
  },
};

export const WithCurrency: Story = {
  args: {
    title: 'Revenue',
    value: 6254,
    numberFormat: {
      style: 'currency',
      currency: 'USD'
    },
    trend: {
      value: 7.00,
      direction: 'down'
    },
    icon: <MoneyIcon />,
    iconColor: '#10B981', // Verde
    colorValueWithTrend: true,
  },
};

export const WithPercentage: Story = {
  args: {
    title: 'Growth',
    value: 30.56,
    numberFormat: {
      style: 'percent',
      minimumFractionDigits: 2,
    },
    trend: {
      value: 4.87,
      direction: 'up'
    },
    icon: <TrendingUpIcon />,
    iconColor: '#6366F1', // Índigo
    colorValueWithTrend: true,
  },
};

export const Dashboard: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: "Dashboard Example",
    value: 0,
  },
  render: function DashboardStory() {
    return (
      <Box sx={{ p: 4, bgcolor: '#f4f5f7' }}>
        <Grid container spacing={4} maxWidth="xl" mx="auto">
          <Grid item xs={12} sm={6} md={3}>
            <DataCard
              title="Customers"
              value={36254}
              trend={{
                value: 5.27,
                direction: 'up'
              }}
              icon={<PeopleIcon />}
              iconColor="#3B82F6"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <DataCard
              title="Orders"
              value={5543}
              trend={{
                value: 1.08,
                direction: 'down'
              }}
              icon={<CartIcon />}
              iconColor="#F59E0B"
              colorValueWithTrend
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <DataCard
              title="Revenue"
              value={6254}
              numberFormat={{
                style: 'currency',
                currency: 'USD'
              }}
              trend={{
                value: 7.00,
                direction: 'down'
              }}
              icon={<MoneyIcon />}
              iconColor="#10B981"
              colorValueWithTrend
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <DataCard
              title="Growth"
              value={3056}
              numberFormat={{
                style: 'percent',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                minimumIntegerDigits: 1,
              }}
              trend={{
                value: 4.87,
                direction: 'up'
              }}
              icon={<TrendingUpIcon />}
              iconColor="#6366F1"
              colorValueWithTrend
            />
          </Grid>
        </Grid>
      </Box>
    );
  }
};
