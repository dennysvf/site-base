import type { Meta, StoryObj } from '@storybook/react';
import { ChartCard } from '@/components/ui/Card/Data/ChartCard';
import { Box } from '@mui/material';

const meta = {
  title: 'UI/Data Display/ChartCard',
  component: ChartCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box sx={{ width: '600px' }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof ChartCard>;

export default meta;
type Story = StoryObj<typeof ChartCard>;

const sampleData = [
  { name: 'Jan', value: 25 },
  { name: 'Fev', value: 66 },
  { name: 'Mar', value: 41 },
  { name: 'Abr', value: 89 },
  { name: 'Mai', value: 63 },
  { name: 'Jun', value: 25 },
  { name: 'Jul', value: 44 },
  { name: 'Ago', value: 12 },
  { name: 'Set', value: 36 },
  { name: 'Out', value: 9 },
  { name: 'Nov', value: 54 },
  { name: 'Dez', value: 47 },
];

export const AreaChart = {
  args: {
    title: 'Vendas Mensais',
    subtitle: 'Análise de vendas do ano corrente',
    data: sampleData,
    type: 'area',
    color: 'primary',
    height: 300,
    valuePrefix: 'R$ ',
    valueSuffix: 'k',
  },
} satisfies Story;

export const LineChart = {
  args: {
    title: 'Lucro Mensal',
    subtitle: 'Análise de lucro do ano corrente',
    data: sampleData,
    type: 'line',
    color: 'success',
    height: 300,
    valuePrefix: 'R$ ',
    valueSuffix: 'k',
    showGrid: false,
  },
} satisfies Story;

export const BarChart = {
  args: {
    title: 'Vendas por Categoria',
    subtitle: 'Top 10 categorias',
    data: sampleData.slice(0, 10),
    type: 'bar',
    color: 'info',
    height: 300,
    valuePrefix: '',
    valueSuffix: ' un',
  },
} satisfies Story;

export const CustomGradient = {
  args: {
    title: 'Vendas com Gradiente',
    subtitle: 'Gradiente personalizado',
    data: sampleData,
    type: 'area',
    color: 'secondary',
    height: 300,
    gradientFrom: '#9c27b0',
    gradientTo: '#e1bee7',
    valuePrefix: 'R$ ',
    valueSuffix: 'k',
  },
} satisfies Story;

export const Minimal = {
  args: {
    title: 'Vendas Simplificadas',
    data: sampleData,
    type: 'line',
    color: 'warning',
    height: 200,
    showGrid: false,
    showAxis: false,
    showTooltip: false,
  },
} satisfies Story;

export const Grid = {
  render: () => (
    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
      <ChartCard
        title="Vendas"
        data={sampleData}
        type="area"
        color="primary"
        height={200}
        valuePrefix="R$ "
        valueSuffix="k"
      />
      <ChartCard
        title="Lucro"
        data={sampleData}
        type="line"
        color="success"
        height={200}
        valuePrefix="R$ "
        valueSuffix="k"
      />
      <ChartCard
        title="Categorias"
        data={sampleData.slice(0, 6)}
        type="bar"
        color="info"
        height={200}
        valueSuffix=" un"
      />
      <ChartCard
        title="Performance"
        data={sampleData}
        type="area"
        color="warning"
        height={200}
        valueSuffix="%"
        showGrid={false}
      />
    </Box>
  ),
} satisfies Story;
