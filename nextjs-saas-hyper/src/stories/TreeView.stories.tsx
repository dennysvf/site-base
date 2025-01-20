import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TreeView } from '@/components/ui/TreeView/TreeView';
import { Box } from '@mui/material';
import {
  Code as CodeIcon,
  Image as ImageIcon,
  Description as DocIcon,
  Home as HomeIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';

const meta = {
  title: 'UI/Data Display/TreeView',
  component: TreeView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box sx={{ width: 300, m: 2 }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof TreeView>;

export default meta;
type Story = StoryObj<typeof meta>;

const fileSystemNodes = [
  {
    id: '1',
    label: 'Project Root',
    icon: <HomeIcon />,
    children: [
      {
        id: '2',
        label: 'src',
        children: [
          {
            id: '3',
            label: 'components',
            children: [
              {
                id: '4',
                label: 'Button.tsx',
                icon: <CodeIcon />,
              },
              {
                id: '5',
                label: 'Card.tsx',
                icon: <CodeIcon />,
              },
            ],
          },
          {
            id: '6',
            label: 'assets',
            children: [
              {
                id: '7',
                label: 'logo.png',
                icon: <ImageIcon />,
              },
              {
                id: '8',
                label: 'background.jpg',
                icon: <ImageIcon />,
              },
            ],
          },
        ],
      },
      {
        id: '9',
        label: 'docs',
        children: [
          {
            id: '10',
            label: 'readme.md',
            icon: <DocIcon />,
          },
          {
            id: '11',
            label: 'config.md',
            icon: <DocIcon />,
          },
        ],
      },
      {
        id: '12',
        label: 'settings',
        icon: <SettingsIcon />,
        disabled: true,
      },
    ],
  },
];

export const Basic: Story = {
  args: {
    nodes: fileSystemNodes,
  },
};

export const WithCheckboxes: Story = {
  args: {
    nodes: fileSystemNodes,
    showCheckbox: true,
    multiSelect: true,
  },
};

export const Dense: Story = {
  args: {
    nodes: fileSystemNodes,
    dense: true,
  },
};

export const WithoutIcons: Story = {
  args: {
    nodes: fileSystemNodes,
    showIcon: false,
  },
};

export const PreSelected: Story = {
  args: {
    nodes: fileSystemNodes,
    defaultSelected: ['4', '7'],
    multiSelect: true,
  },
};

export const PreExpanded: Story = {
  args: {
    nodes: fileSystemNodes,
    defaultExpanded: ['1', '2', '3'],
  },
};

export const WithMaxHeight: Story = {
  args: {
    nodes: fileSystemNodes,
    maxHeight: 300,
    defaultExpanded: ['1', '2'],
  },
};

// Example of async loading
const asyncNodes = [
  {
    id: 'root',
    label: 'Root',
    children: [], // Will be loaded dynamically
  },
];

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const loadChildren = async (nodeId: string) => {
  await delay(1000); // Simulate API call
  return [
    {
      id: `${nodeId}-1`,
      label: `Child 1 of ${nodeId}`,
      children: [], // Can be loaded further
    },
    {
      id: `${nodeId}-2`,
      label: `Child 2 of ${nodeId}`,
      children: [], // Can be loaded further
    },
  ];
};

export const AsyncLoading: Story = {
  args: {
    nodes: asyncNodes,
    loadChildren,
  },
};
