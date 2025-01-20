'use client';

import { BaseCardProps } from '../Base';
import { ReactNode } from 'react';

export type NumberFormat = Intl.NumberFormatOptions;

export interface TrendData {
  value: number;
  direction: 'up' | 'down';
  label?: string;
}

export interface ChartData {
  data: number[];
  labels?: string[];
  type?: 'area' | 'line' | 'bar';
  color?: string;
  height?: number;
}

export interface DataCardProps extends Omit<BaseCardProps, 'children'> {
  title: string;
  value: string | number;
  previousValue?: string | number;
  icon?: ReactNode;
  iconColor?: string;
  trend?: TrendData;
  chart?: ChartData;
  loading?: boolean;
  numberFormat?: NumberFormat;
  colorValueWithTrend?: boolean;
}
