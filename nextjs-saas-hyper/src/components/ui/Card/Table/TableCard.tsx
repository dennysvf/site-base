'use client';

import React from 'react';
import {
  Box,
  TextField,
  Button,
  IconButton,
  Tooltip,
  Typography,
  Menu,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Chip,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import {
  Search as SearchIcon,
  FilterList as FilterIcon,
  ViewColumn as ColumnIcon,
  FileDownload as ExportIcon,
  DensityLarge as DensityIcon,
  MoreVert as MoreIcon,
} from '@mui/icons-material';
import { Card } from '../Base';
import { TableCardProps, TableAction } from './types';
import { TableWrapper, Toolbar, FilterSection, ActionSection } from './styles';

export function TableCard({
  columns,
  rows,
  variant = 'default',
  toolbar,
  pagination = { enabled: true },
  selection,
  sorting = { enabled: true },
  loading,
  error,
  emptyMessage = 'No data available',
  autoHeight,
  minHeight = 400,
  maxHeight,
  onRowClick,
  onSelectionChange,
  onFilterChange,
  onSortChange,
  getRowClassName,
  ...props
}: TableCardProps) {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedRows, setSelectedRows] = React.useState<any[]>([]);
  const [filters, setFilters] = React.useState<any>({});
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [densityFactor, setDensityFactor] = React.useState<'compact' | 'standard' | 'comfortable'>('standard');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (field: string, value: any) => {
    const newFilters = { ...filters, [field]: value };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleExport = (format: 'csv' | 'excel' | 'pdf') => {
    // Implement export logic
    console.log(`Exporting as ${format}`);
    setAnchorEl(null);
  };

  const handleDensityChange = (density: typeof densityFactor) => {
    setDensityFactor(density);
    setAnchorEl(null);
  };

  const renderToolbar = () => {
    if (!toolbar) return null;

    const {
      enableSearch,
      searchPlaceholder,
      enableFilters,
      filters: filterOptions,
      enableDensity,
      enableColumns,
      enableExport,
      exportFormats,
      customActions,
    } = toolbar;

    return (
      <Toolbar>
        {enableSearch && (
          <TextField
            size="small"
            placeholder={searchPlaceholder || 'Search...'}
            value={searchTerm}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: <SearchIcon fontSize="small" />,
            }}
          />
        )}

        {enableFilters && filterOptions && (
          <FilterSection>
            <IconButton size="small">
              <FilterIcon />
            </IconButton>
            {filterOptions.map((filter) => (
              <FormControl key={filter.field} size="small" sx={{ minWidth: 120 }}>
                <InputLabel>{filter.label}</InputLabel>
                <Select
                  value={filters[filter.field] || ''}
                  onChange={(e) => handleFilterChange(filter.field, e.target.value)}
                  label={filter.label}
                >
                  <MenuItem value="">All</MenuItem>
                  {filter.options?.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ))}
          </FilterSection>
        )}

        <ActionSection>
          {customActions?.map((action, index) => {
            const showAction = action.show === 'always' ||
              (action.show === 'selected' && selectedRows.length > 0) ||
              (action.show === 'single-selected' && selectedRows.length === 1);

            if (!showAction) return null;

            return (
              <Tooltip key={index} title={action.tooltip || action.label}>
                <span>
                  <Button
                    size="small"
                    variant={action.variant || 'contained'}
                    color={action.color || 'primary'}
                    onClick={() => action.onClick(selectedRows)}
                    disabled={action.disabled}
                    startIcon={action.icon}
                  >
                    {action.label}
                  </Button>
                </span>
              </Tooltip>
            );
          })}

          {(enableDensity || enableColumns || enableExport) && (
            <>
              <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                <MoreIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
              >
                {enableDensity && [
                  <MenuItem key="compact" onClick={() => handleDensityChange('compact')}>
                    Compact
                  </MenuItem>,
                  <MenuItem key="standard" onClick={() => handleDensityChange('standard')}>
                    Standard
                  </MenuItem>,
                  <MenuItem key="comfortable" onClick={() => handleDensityChange('comfortable')}>
                    Comfortable
                  </MenuItem>,
                ]}
                {enableExport && exportFormats?.map((format) => (
                  <MenuItem key={format} onClick={() => handleExport(format)}>
                    Export as {format.toUpperCase()}
                  </MenuItem>
                ))}
              </Menu>
            </>
          )}
        </ActionSection>
      </Toolbar>
    );
  };

  return (
    <Card variant="outlined" {...props}>
      {renderToolbar()}
      
      <TableWrapper variant={variant}>
        <DataGrid
          rows={rows}
          columns={columns}
          loading={loading}
          autoHeight={autoHeight}
          density={densityFactor}
          sx={{
            minHeight,
            maxHeight,
          }}
          pageSizeOptions={pagination.pageSizeOptions || [10, 25, 50, 100]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: pagination.defaultPageSize || 25,
              },
            },
            sorting: {
              sortModel: sorting.defaultSort ? [sorting.defaultSort] : [],
            },
          }}
          paginationMode="server"
          sortingMode="server"
          filterMode="server"
          checkboxSelection={selection?.enabled}
          disableRowSelectionOnClick
          onRowClick={onRowClick}
          onRowSelectionModelChange={(newSelection) => {
            const selectedRows = rows.filter((row) => newSelection.includes(row.id));
            setSelectedRows(selectedRows);
            onSelectionChange?.(selectedRows);
          }}
          onSortModelChange={onSortChange}
          getRowClassName={getRowClassName}
          slots={{
            noRowsOverlay: () => (
              <Box sx={{ p: 2, textAlign: 'center' }}>
                <Typography color="text.secondary">
                  {emptyMessage}
                </Typography>
              </Box>
            ),
            errorOverlay: () => (
              <Box sx={{ p: 2, textAlign: 'center' }}>
                <Typography color="error">
                  {error || 'An error occurred while loading data'}
                </Typography>
              </Box>
            ),
          }}
        />
      </TableWrapper>
    </Card>
  );
}
