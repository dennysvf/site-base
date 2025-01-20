'use client';

import { BaseCardProps } from '../Base';
import { GridColDef, GridRowsProp } from '@mui/x-data-grid';

export type TableVariant = 'default' | 'striped' | 'bordered' | 'borderless';

export interface TableAction {
  label: string;
  icon?: React.ReactNode;
  onClick: (selectedRows: any[]) => void;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  variant?: 'text' | 'outlined' | 'contained';
  disabled?: boolean;
  tooltip?: string;
  show?: 'always' | 'selected' | 'single-selected';
}

export interface TableFilter {
  field: string;
  label: string;
  type: 'text' | 'select' | 'date' | 'number' | 'boolean';
  options?: Array<{ label: string; value: any }>;
}

export interface TableToolbar {
  enableSearch?: boolean;
  searchPlaceholder?: string;
  enableFilters?: boolean;
  filters?: TableFilter[];
  enableDensity?: boolean;
  enableColumns?: boolean;
  enableExport?: boolean;
  exportFormats?: Array<'csv' | 'excel' | 'pdf'>;
  customActions?: TableAction[];
}

export interface TablePagination {
  enabled?: boolean;
  defaultPageSize?: number;
  pageSizeOptions?: number[];
  position?: 'top' | 'bottom' | 'both';
}

export interface TableSelection {
  enabled?: boolean;
  type?: 'single' | 'multiple';
  actions?: TableAction[];
}

export interface TableSorting {
  enabled?: boolean;
  defaultSort?: { field: string; sort: 'asc' | 'desc' };
  multiSort?: boolean;
}

export interface TableCardProps extends Omit<BaseCardProps, 'children'> {
  columns: GridColDef[];
  rows: GridRowsProp;
  variant?: TableVariant;
  toolbar?: TableToolbar;
  pagination?: TablePagination;
  selection?: TableSelection;
  sorting?: TableSorting;
  loading?: boolean;
  error?: string;
  emptyMessage?: string;
  autoHeight?: boolean;
  minHeight?: number;
  maxHeight?: number;
  onRowClick?: (params: any) => void;
  onSelectionChange?: (selectedRows: any[]) => void;
  onFilterChange?: (filters: any) => void;
  onSortChange?: (sort: any) => void;
  getRowClassName?: (params: any) => string;
}
