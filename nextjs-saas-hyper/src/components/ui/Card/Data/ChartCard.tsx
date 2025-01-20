'use client';

import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Card } from '../Base';
import type { BaseCardProps } from '../Base';

export interface ChartCardProps extends Omit<BaseCardProps, 'children'> {
  data: Array<{ name: string; value: number }>;
  type?: 'area' | 'line' | 'bar';
  chartColor?: string;
  height?: number;
  showGrid?: boolean;
  showAxis?: boolean;
  showTooltip?: boolean;
  valuePrefix?: string;
  valueSuffix?: string;
  customTooltip?: React.ComponentType<any>;
  xAxisDataKey?: string;
  yAxisDataKey?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

const CustomTooltip = ({ active, payload, prefix = '', suffix = '' }: any) => {
  if (active && payload && payload.length) {
    return (
      <Box
        sx={{
          bgcolor: 'background.paper',
          p: 1.5,
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 1,
          boxShadow: 1,
        }}
      >
        <Typography variant="body2">
          {payload[0].payload.name}
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 1 }}>
          {prefix}{payload[0].value}{suffix}
        </Typography>
      </Box>
    );
  }
  return null;
};

export function ChartCard({
  data,
  type = 'area',
  chartColor,
  height = 300,
  showGrid = true,
  showAxis = true,
  showTooltip = true,
  valuePrefix = '',
  valueSuffix = '',
  customTooltip,
  xAxisDataKey = 'name',
  yAxisDataKey = 'value',
  gradientFrom,
  gradientTo,
  color = 'primary',
  ...props
}: ChartCardProps) {
  const theme = useTheme();
  const defaultColor = theme.palette[color].main;
  const chartId = React.useId();

  const renderChart = () => {
    const commonProps = {
      data,
      margin: { top: 10, right: 10, left: showAxis ? 20 : -10, bottom: showAxis ? 20 : -10 },
    };

    const gradientId = `gradient-${chartId}`;
    const chartColor = defaultColor;

    switch (type) {
      case 'area':
        return (
          <AreaChart {...commonProps}>
            {showGrid && <CartesianGrid strokeDasharray="3 3" />}
            {showAxis && <XAxis dataKey={xAxisDataKey} />}
            {showAxis && <YAxis dataKey={yAxisDataKey} />}
            {showTooltip && (
              <Tooltip content={customTooltip || <CustomTooltip prefix={valuePrefix} suffix={valueSuffix} />} />
            )}
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={gradientFrom || chartColor} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={gradientTo || chartColor} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey={yAxisDataKey}
              stroke={chartColor}
              fillOpacity={1}
              fill={`url(#${gradientId})`}
            />
          </AreaChart>
        );

      case 'line':
        return (
          <LineChart {...commonProps}>
            {showGrid && <CartesianGrid strokeDasharray="3 3" />}
            {showAxis && <XAxis dataKey={xAxisDataKey} />}
            {showAxis && <YAxis dataKey={yAxisDataKey} />}
            {showTooltip && (
              <Tooltip content={customTooltip || <CustomTooltip prefix={valuePrefix} suffix={valueSuffix} />} />
            )}
            <Line
              type="monotone"
              dataKey={yAxisDataKey}
              stroke={chartColor}
              dot={{ fill: chartColor }}
              activeDot={{ r: 6, fill: chartColor }}
            />
          </LineChart>
        );

      case 'bar':
        return (
          <BarChart {...commonProps}>
            {showGrid && <CartesianGrid strokeDasharray="3 3" />}
            {showAxis && <XAxis dataKey={xAxisDataKey} />}
            {showAxis && <YAxis dataKey={yAxisDataKey} />}
            {showTooltip && (
              <Tooltip content={customTooltip || <CustomTooltip prefix={valuePrefix} suffix={valueSuffix} />} />
            )}
            <Bar
              dataKey={yAxisDataKey}
              fill={chartColor}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        );

      default:
        return null;
    }
  };

  return (
    <Card
      variant="bordered"
      color={color}
      {...props}
    >
      <Box sx={{ width: '100%', height }}>
        <ResponsiveContainer>
          {renderChart()}
        </ResponsiveContainer>
      </Box>
    </Card>
  );
}
