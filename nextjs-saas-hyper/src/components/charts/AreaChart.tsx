'use client';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useTheme } from '@/lib/Providers';
import { Card, CardContent, Typography, Box } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

interface AreaChartProps {
  data: number[];
  labels: string[];
  title?: string;
  subtitle?: string;
  fill?: boolean;
  height?: number;
}

export function AreaChart({ data, labels, title = '', subtitle, fill = true, height = 300 }: AreaChartProps) {
  const { isDarkMode } = useTheme();
  
  const chartData = {
    labels,
    datasets: [
      {
        fill,
        label: title,
        data: data,
        borderColor: '#556ee6',
        backgroundColor: 'rgba(85, 110, 230, 0.3)',
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: Boolean(title),
        labels: {
          color: isDarkMode ? '#e9ecef' : '#495057',
        },
      },
      title: {
        display: Boolean(title),
        text: title,
        color: isDarkMode ? '#e9ecef' : '#495057',
      },
    },
    scales: {
      y: {
        grid: {
          color: isDarkMode ? 'rgba(233, 236, 239, 0.1)' : 'rgba(73, 80, 87, 0.1)',
        },
        ticks: {
          color: isDarkMode ? '#e9ecef' : '#495057',
        },
      },
      x: {
        grid: {
          color: isDarkMode ? 'rgba(233, 236, 239, 0.1)' : 'rgba(73, 80, 87, 0.1)',
        },
        ticks: {
          color: isDarkMode ? '#e9ecef' : '#495057',
        },
      },
    },
  };

  return (
    <Card>
      <CardContent>
        <Box mb={3}>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body2" color="text.secondary">
              {subtitle}
            </Typography>
          )}
        </Box>
        <Box height={height}>
          <Line options={options} data={chartData} />
        </Box>
      </CardContent>
    </Card>
  );
}
