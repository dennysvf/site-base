'use client';

import React from 'react';
import { Box, Card, Typography, useTheme } from '@mui/material';
import {
  TrendingUp,
  TrendingDown,
  AttachMoney,
  People,
  ShoppingCart,
  ShowChart,
} from '@mui/icons-material';

interface StatisticsWidgetProps {
  title: string;
  stats: string;
  trend: string;
  trendLabel: string;
  icon: 'revenue' | 'users' | 'orders' | 'growth';
  trendDown?: boolean;
}

const iconMap = {
  revenue: AttachMoney,
  users: People,
  orders: ShoppingCart,
  growth: ShowChart,
};

export function StatisticsWidget({ 
  title, 
  stats, 
  trend, 
  trendLabel, 
  icon,
  trendDown = false 
}: StatisticsWidgetProps) {
  const theme = useTheme();
  const Icon = iconMap[icon];

  return (
    <Card sx={{ p: 3, height: '100%' }}>
      <Box display="flex" alignItems="flex-start" justifyContent="space-between">
        <Box 
          sx={{ 
            p: 1.5, 
            borderRadius: 2, 
            bgcolor: theme.palette.primary.light,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon sx={{ color: theme.palette.primary.main }} />
        </Box>

        <Box textAlign="right">
          <Typography variant="h4" sx={{ mb: 0.5 }}>
            {stats}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </Box>
      </Box>

      <Box display="flex" alignItems="center" mt={3}>
        <Box 
          sx={{ 
            display: 'flex',
            alignItems: 'center',
            color: trendDown ? theme.palette.error.main : theme.palette.success.main,
            mr: 1,
          }}
        >
          {trendDown ? <TrendingDown /> : <TrendingUp />}
          <Typography 
            variant="body2" 
            sx={{ 
              ml: 0.5,
              color: 'inherit',
              fontWeight: 'medium',
            }}
          >
            {trend}
          </Typography>
        </Box>

        <Typography variant="body2" color="text.secondary">
          {trendLabel}
        </Typography>
      </Box>
    </Card>
  );
}
