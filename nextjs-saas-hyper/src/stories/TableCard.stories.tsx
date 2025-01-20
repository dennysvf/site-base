import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TableCard } from '@/components/ui/Card/Table';
import { Box } from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Download as DownloadIcon,
  Add as AddIcon,
} from '@mui/icons-material';

const meta = {
  title: 'UI/Data Display/TableCard',
  component: TableCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box sx={{ width: 800 }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof TableCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'email', headerName: 'Email', flex: 1 },
  { field: 'role', headerName: 'Role', width: 130 },
  { field: 'status', headerName: 'Status', width: 130 },
];

const rows = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Inactive' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor', status: 'Active' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'Active' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Editor', status: 'Inactive' },
];

export const Basic = {
  args: {
    title: 'Users',
    subtitle: 'Manage system users',
    columns,
    rows,
  },
} satisfies Story;

export const WithToolbar = {
  args: {
    title: 'Users',
    subtitle: 'Manage system users',
    columns,
    rows,
    toolbar: {
      enableSearch: true,
      searchPlaceholder: 'Search users...',
      enableFilters: true,
      filters: [
        {
          field: 'role',
          label: 'Role',
          type: 'select',
          options: [
            { label: 'Admin', value: 'Admin' },
            { label: 'Editor', value: 'Editor' },
            { label: 'User', value: 'User' },
          ],
        },
        {
          field: 'status',
          label: 'Status',
          type: 'select',
          options: [
            { label: 'Active', value: 'Active' },
            { label: 'Inactive', value: 'Inactive' },
          ],
        },
      ],
      enableDensity: true,
      enableColumns: true,
      enableExport: true,
      exportFormats: ['csv', 'excel', 'pdf'],
    },
  },
} satisfies Story;

export const WithActions = {
  args: {
    title: 'Users',
    subtitle: 'Manage system users',
    columns,
    rows,
    toolbar: {
      enableSearch: true,
      customActions: [
        {
          label: 'Add User',
          icon: <AddIcon />,
          onClick: () => alert('Add user clicked'),
          show: 'always',
          color: 'primary',
        },
        {
          label: 'Edit',
          icon: <EditIcon />,
          onClick: (selected) => alert(`Edit clicked for ${selected.length} items`),
          show: 'single-selected',
          color: 'info',
          variant: 'outlined',
        },
        {
          label: 'Delete',
          icon: <DeleteIcon />,
          onClick: (selected) => alert(`Delete clicked for ${selected.length} items`),
          show: 'selected',
          color: 'error',
          variant: 'outlined',
        },
        {
          label: 'Download',
          icon: <DownloadIcon />,
          onClick: () => alert('Download clicked'),
          show: 'always',
          variant: 'text',
        },
      ],
    },
    selection: {
      enabled: true,
      type: 'multiple',
    },
  },
} satisfies Story;

export const Striped = {
  args: {
    title: 'Users',
    subtitle: 'Manage system users',
    columns,
    rows,
    variant: 'striped',
    toolbar: {
      enableSearch: true,
    },
  },
} satisfies Story;

export const Bordered = {
  args: {
    title: 'Users',
    subtitle: 'Manage system users',
    columns,
    rows,
    variant: 'bordered',
    toolbar: {
      enableSearch: true,
    },
  },
} satisfies Story;

export const Loading = {
  args: {
    title: 'Users',
    subtitle: 'Manage system users',
    columns,
    rows: [],
    loading: true,
    toolbar: {
      enableSearch: true,
    },
  },
} satisfies Story;

export const Error = {
  args: {
    title: 'Users',
    subtitle: 'Manage system users',
    columns,
    rows: [],
    error: 'Failed to load users. Please try again later.',
    toolbar: {
      enableSearch: true,
    },
  },
} satisfies Story;

export const Empty = {
  args: {
    title: 'Users',
    subtitle: 'Manage system users',
    columns,
    rows: [],
    emptyMessage: 'No users found',
    toolbar: {
      enableSearch: true,
    },
  },
} satisfies Story;
