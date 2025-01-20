'use client';

import { styled } from '@mui/material/styles';
import { Box, Toolbar as MuiToolbar } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { TableVariant } from './types';

export const TableWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'variant',
})<{ variant?: TableVariant }>(({ theme, variant }) => ({
  width: '100%',
  height: '100%',
  overflow: 'hidden',

  '& .MuiDataGrid-root': {
    border: 'none',
    backgroundColor: theme.palette.background.paper,
  },

  '& .MuiDataGrid-cell': {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },

  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: theme.palette.mode === 'light' 
      ? theme.palette.grey[50] 
      : theme.palette.grey[900],
    borderBottom: `2px solid ${theme.palette.divider}`,
  },

  ...(variant === 'striped' && {
    '& .MuiDataGrid-row:nth-of-type(odd)': {
      backgroundColor: theme.palette.mode === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    },
  }),

  ...(variant === 'bordered' && {
    '& .MuiDataGrid-cell': {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
    '& .MuiDataGrid-columnHeader': {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  }),

  ...(variant === 'borderless' && {
    '& .MuiDataGrid-cell': {
      borderBottom: 'none',
    },
    '& .MuiDataGrid-columnHeaders': {
      borderBottom: 'none',
    },
  }),

  // Hover effect
  '& .MuiDataGrid-row:hover': {
    backgroundColor: theme.palette.action.hover,
  },

  // Selected row
  '& .MuiDataGrid-row.Mui-selected': {
    backgroundColor: theme.palette.action.selected,
    '&:hover': {
      backgroundColor: theme.palette.action.selected,
    },
  },

  // Loading overlay
  '& .MuiDataGrid-loadingOverlay': {
    backgroundColor: theme.palette.background.paper,
  },

  // Error overlay
  '& .MuiDataGrid-errorOverlay': {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.error.main,
  },

  // Empty message
  '& .MuiDataGrid-noRowsLabel': {
    color: theme.palette.text.secondary,
  },
}));

export const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  gap: theme.spacing(1),
  borderBottom: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(2),
}));

export const FilterSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  flexWrap: 'wrap',
  alignItems: 'center',
}));

export const ActionSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  marginLeft: 'auto',
}));
