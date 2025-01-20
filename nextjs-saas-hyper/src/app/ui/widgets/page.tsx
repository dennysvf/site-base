'use client';

import { Grid, Box } from '@mui/material';
import { 
  AttachMoney as MoneyIcon,
  People as PeopleIcon,
  ShoppingCart as CartIcon,
  ShowChart as ChartIcon,
} from '@mui/icons-material';
import { DataCard } from '@/components/ui/Card/Data';

const sampleChartData = [
  { name: 'Jan', value: 25 },
  { name: 'Fev', value: 66 },
  { name: 'Mar', value: 41 },
  { name: 'Abr', value: 89 },
  { name: 'Mai', value: 63 },
  { name: 'Jun', value: 25 },
  { name: 'Jul', value: 44 },
];

export default function WidgetsPage() {
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={3}>
          <DataCard
            title="Total Revenue"
            value={45890}
            icon={<MoneyIcon />}
            numberFormat={{ style: 'currency', currency: 'BRL' }}
            trend={{ value: 12.5, label: 'vs last month', direction: 'up' }}
            color="primary"
            variant="statistics"
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <DataCard
            title="Active Users"
            value={1234}
            icon={<PeopleIcon />}
            trend={{ value: -5.2, label: 'vs last week', direction: 'down' }}
            color="info"
            variant="statistics"
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <DataCard
            title="Orders"
            value={89}
            icon={<CartIcon />}
            trend={{ value: 2.1, label: 'vs yesterday', direction: 'up' }}
            chartData={sampleChartData}
            chartType="area"
            color="success"
            variant="statistics"
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <DataCard
            title="Growth"
            value={67.5}
            icon={<ChartIcon />}
            numberFormat={{ style: 'percent', minimumFractionDigits: 1 }}
            trend={{ value: 8.4, label: 'vs target', direction: 'up' }}
            color="warning"
            variant="statistics"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
