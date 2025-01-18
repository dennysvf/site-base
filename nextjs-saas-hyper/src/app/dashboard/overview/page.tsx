'use client';

import { Box, Grid, Typography } from '@mui/material';
import { CardWidget } from '../../../components/ui/CardWidget';
import { LineChart } from '../../../components/ui/LineChart';

export default function OverviewPage() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Visão Geral
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <CardWidget
            title="Total de Usuários"
            value="1,234"
            icon="people"
            color="primary"
          />
        </Grid>
        
        <Grid item xs={12} md={6} lg={3}>
          <CardWidget
            title="Receita Mensal"
            value="R$ 56,789"
            icon="attach_money"
            color="success"
          />
        </Grid>
        
        <Grid item xs={12} md={6} lg={3}>
          <CardWidget
            title="Novos Pedidos"
            value="56"
            icon="shopping_cart"
            color="warning"
          />
        </Grid>
        
        <Grid item xs={12} md={6} lg={3}>
          <CardWidget
            title="Tickets Abertos"
            value="12"
            icon="support"
            color="error"
          />
        </Grid>
        
        <Grid item xs={12}>
          <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Desempenho Mensal
            </Typography>
            <LineChart
              title="Crescimento de Usuários"
              labels={['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul']}
              datasets={[
                {
                  label: 'Usuários',
                  data: [65, 59, 80, 81, 56, 55, 40],
                  borderColor: '#727cf5',
                  backgroundColor: 'rgba(114, 124, 245, 0.2)',
                },
              ]}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}