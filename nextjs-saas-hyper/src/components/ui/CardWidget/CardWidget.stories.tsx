import type { Meta, StoryObj } from '@storybook/react';
import { CardWidget } from './CardWidget';
import { TrendingUp } from '@mui/icons-material';

const meta: Meta<typeof CardWidget> = {
  title: 'Components/CardWidget',
  component: CardWidget,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CardWidget>;

export const Primary: Story = {
  args: {
    title: 'Total de Vendas',
    value: 'R$ 12.345,67',
    icon: <TrendingUp color="primary" />,
  },
};

export const WithTrend: Story = {
  args: {
    title: 'Novos Usuários',
    value: '1.234',
    icon: <TrendingUp color="success" />,
    trend: <span style={{ color: '#4caf50' }}>+12%</span>,
  },
};