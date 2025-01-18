'use client';

import React from 'react';
import { Box, Paper, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

interface StatisticsWidgetProps {
  title: string;
  stats: string | number;
  trend?: {
    value: number;
    label: string;
  };
  icon?: React.ReactNode;
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

export function StatisticsWidget({ title, stats, trend, icon }: StatisticsWidgetProps) {
  const theme = useTheme();
  
  return (
    <StyledPaper>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <Box>
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" gutterBottom>
          {stats}
        </Typography>
        {trend && (
          <Typography 
            variant="body2" 
            color={trend.value >= 0 ? 'success.main' : 'error.main'}
            sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
          >
            {trend.value >= 0 ? '+' : ''}{trend.value}% {trend.label}
          </Typography>
        )}
      </Box>
    </StyledPaper>
  );
}
