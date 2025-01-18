'use client';

import { Grid } from '@mui/material';
import { PageContainer } from '@/components/ui/PageContainer/PageContainer';
import { StatisticsWidget } from '@/components/ui/StatisticsWidget/StatisticsWidget';
import { AreaChart } from '@/components/charts/AreaChart';
import { BarChart } from '@/components/charts/BarChart';

const revenueData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  data: [44, 55, 41, 67, 22, 43],
};

const orderData = {
  labels: ['Electronics', 'Fashion', 'Food', 'Books', 'Others'],
  data: [65, 59, 80, 81, 56],
};

export default function DashboardPage() {
  return (
    <PageContainer
      title="Dashboard"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Dashboard' }
      ]}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatisticsWidget
            title="Total Revenue"
            stats="$58,947"
            trend="+5.27%"
            trendLabel="Since last month"
            icon="revenue"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatisticsWidget
            title="Active Users"
            stats="2,345"
            trend="+3.12%"
            trendLabel="Since last week"
            icon="users"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatisticsWidget
            title="Orders"
            stats="1,247"
            trend="-2.18%"
            trendLabel="Since yesterday"
            icon="orders"
            trendDown
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatisticsWidget
            title="Growth"
            stats="+ 30.56%"
            trend="+4.87%"
            trendLabel="Since last month"
            icon="growth"
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <AreaChart
            title="Revenue"
            subtitle="Revenue trends over time"
            height={380}
            data={revenueData.data}
            labels={revenueData.labels}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <BarChart
            title="Orders"
            subtitle="Latest orders by category"
            height={380}
            data={orderData.data}
            labels={orderData.labels}
          />
        </Grid>
      </Grid>
    </PageContainer>
  );
}