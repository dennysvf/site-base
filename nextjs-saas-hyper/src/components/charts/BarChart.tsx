'use client';

import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useTheme } from '@/lib/Providers';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export interface BarChartProps {
  data: number[];
  labels: string[];
  title?: string;
  subtitle?: string;
  height?: number;
}

export function BarChart({ data, labels, title = '', subtitle, height = 300 }: BarChartProps) {
  const { isDarkMode } = useTheme();

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Orders',
        data,
        backgroundColor: isDarkMode 
          ? 'rgba(99, 102, 241, 0.8)'
          : 'rgba(99, 102, 241, 0.5)',
        borderColor: isDarkMode 
          ? 'rgba(99, 102, 241, 1)'
          : 'rgba(99, 102, 241, 0.8)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: isDarkMode ? '#fff' : '#000',
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: isDarkMode ? '#fff' : '#000',
        },
      },
      x: {
        grid: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: isDarkMode ? '#fff' : '#000',
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
          <Bar options={options} data={chartData} />
        </Box>
      </CardContent>
    </Card>
  );
}
