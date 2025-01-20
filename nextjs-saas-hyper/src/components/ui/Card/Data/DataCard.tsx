'use client';

import React, { useMemo } from 'react';
import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  TrendingFlat as TrendingFlatIcon,
} from '@mui/icons-material';
import { Area, AreaChart, ResponsiveContainer, Line, LineChart, Bar, BarChart } from 'recharts';
import { DataCardProps, NumberFormat } from './types';
import { IconWrapper, ValueWrapper, TrendWrapper, ChartWrapper, HeaderWrapper, TrendLabel } from './styles';

const formatNumber = (value: string | number, options?: NumberFormat) => {
  if (typeof value === 'string') return value;

  try {
    return new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 2,
      ...options,
    }).format(value);
  } catch (error) {
    console.error('Error formatting number:', error);
    return value.toString();
  }
};

const getTrendIcon = (direction?: 'up' | 'down' | 'neutral') => {
  switch (direction) {
    case 'up':
      return <TrendingUpIcon />;
    case 'down':
      return <TrendingDownIcon />;
    default:
      return <TrendingFlatIcon />;
  }
};

const renderChart = (chartData: DataCardProps['chart'], position: 'background' | 'bottom') => {
  if (!chartData) return null;

  const { data, type = 'area', color, height = 60 } = chartData;
  const chartHeight = position === 'background' ? '100%' : height;

  const commonProps = {
    data: data.map((value, index) => ({ value, name: chartData.labels?.[index] || '' })),
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  };

  return (
    <ChartWrapper chartPosition={position}>
      <ResponsiveContainer width="100%" height={chartHeight}>
        {type === 'area' ? (
          <AreaChart {...commonProps}>
            <Area
              type="monotone"
              dataKey="value"
              stroke={color}
              fill={color}
              fillOpacity={0.2}
            />
          </AreaChart>
        ) : type === 'line' ? (
          <LineChart {...commonProps}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={color}
              dot={false}
            />
          </LineChart>
        ) : (
          <BarChart {...commonProps}>
            <Bar
              dataKey="value"
              fill={color}
            />
          </BarChart>
        )}
      </ResponsiveContainer>
    </ChartWrapper>
  );
};

export const DataCard = ({
  title,
  value,
  previousValue,
  icon,
  iconColor,
  trend,
  chart,
  loading = false,
  numberFormat,
  colorValueWithTrend,
}: DataCardProps) => {
  const theme = useTheme();
  const formattedValue = useMemo(() => {
    if (loading) return '---';
    return formatNumber(value, numberFormat);
  }, [value, numberFormat, loading]);

  const formattedPreviousValue = useMemo(() => {
    if (!previousValue) return null;
    return formatNumber(previousValue, numberFormat);
  }, [previousValue, numberFormat]);

  const valueColor = useMemo(() => {
    if (!colorValueWithTrend || !trend) return undefined;
    return trend.direction === 'up' ? 'success.main' : 'error.main';
  }, [colorValueWithTrend, trend]);

  return (
    <Card>
      <CardContent>
        <HeaderWrapper>
          <Typography variant="subtitle2" color="text.secondary">
            {title}
          </Typography>
          {icon && <IconWrapper iconColor={iconColor}>{icon}</IconWrapper>}
        </HeaderWrapper>

        <Box sx={{ mt: 2 }}>
          <Typography
            variant="h3"
            color={valueColor || 'text.primary'}
            sx={{
              opacity: loading ? 0.5 : 1,
              transition: (theme) =>
                theme.transitions.create('opacity', {
                  duration: theme.transitions.duration.shorter,
                }),
            }}
          >
            {formattedValue}
          </Typography>

          {trend && (
            <Box sx={{ mt: 1, display: 'flex', alignItems: 'center' }}>
              <TrendWrapper sx={{ color: trend.direction === 'up' ? 'success.main' : 'error.main' }}>
                {getTrendIcon(trend.direction)}
                <Typography component="span">
                  {trend.value}%
                </Typography>
              </TrendWrapper>
              <TrendLabel>
                Since last month
              </TrendLabel>
            </Box>
          )}

          {formattedPreviousValue && (
            <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
              Previous: {formattedPreviousValue}
            </Typography>
          )}
        </Box>

        {chart?.data && renderChart(chart, 'background')}
      </CardContent>
    </Card>
  );
};
