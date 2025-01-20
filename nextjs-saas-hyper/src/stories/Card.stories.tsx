import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent } from '@/components/ui/Card/Card';
import { Box, Button, Typography } from '@mui/material';
import { 
  ShoppingCart as ShoppingCartIcon,
  Notifications as NotificationsIcon,
  Mail as MailIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';

const meta = {
  title: 'UI/Data Display/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box sx={{ width: 400 }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const ExampleContent = () => (
  <CardContent>
    <Typography variant="body1" paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Typography>
    <Button variant="contained" color="primary">
      Ação Principal
    </Button>
  </CardContent>
);

export const Basic: Story = {
  args: {
    title: 'Card Básico',
    subtitle: 'Subtítulo do card',
    children: <ExampleContent />,
  },
};

export const WithControls: Story = {
  args: {
    title: 'Card com Controles',
    subtitle: 'Com botões de ação',
    showControls: true,
    onRefresh: () => console.log('Refresh clicked'),
    onExpand: () => console.log('Expand clicked'),
    onClose: () => console.log('Close clicked'),
    children: <ExampleContent />,
  },
};

export const Bordered: Story = {
  args: {
    variant: 'bordered',
    title: 'Card com Borda',
    subtitle: 'Estilo bordered',
    children: <ExampleContent />,
  },
};

export const Colored: Story = {
  args: {
    variant: 'colored',
    color: 'primary',
    title: 'Card Colorido',
    subtitle: 'Com cor de fundo',
    children: <ExampleContent />,
  },
};

export const Gradient: Story = {
  args: {
    variant: 'gradient',
    color: 'primary',
    title: 'Card Gradiente',
    subtitle: 'Com fundo em degradê',
    children: <ExampleContent />,
  },
};

export const WithBackground: Story = {
  args: {
    title: 'Card com Imagem',
    subtitle: 'Com imagem de fundo',
    backgroundImage: 'https://source.unsplash.com/random/800x600',
    children: <ExampleContent />,
  },
};

export const WithBadge: Story = {
  args: {
    title: 'Card com Badge',
    subtitle: 'Com notificação',
    badge: {
      content: '4',
      color: 'error',
      variant: 'standard',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
    },
    children: <ExampleContent />,
  },
};

export const Loading: Story = {
  args: {
    title: 'Card Carregando',
    subtitle: 'Estado de loading',
    loading: true,
    children: <ExampleContent />,
  },
};

export const Elevated: Story = {
  args: {
    title: 'Card Elevado',
    subtitle: 'Com elevação e hover',
    elevation: 4,
    hoverElevation: 8,
    children: <ExampleContent />,
  },
};

export const WithHeaderAction: Story = {
  args: {
    title: 'Card com Ação',
    subtitle: 'Com botão no cabeçalho',
    headerAction: (
      <Button size="small" variant="contained" color="primary">
        Ação
      </Button>
    ),
    children: <ExampleContent />,
  },
};

export const WithFooter: Story = {
  args: {
    title: 'Card com Rodapé',
    subtitle: 'Com ações no rodapé',
    footer: (
      <>
        <Button size="small">Cancelar</Button>
        <Button size="small" variant="contained" color="primary">
          Salvar
        </Button>
      </>
    ),
    children: <ExampleContent />,
  },
};
