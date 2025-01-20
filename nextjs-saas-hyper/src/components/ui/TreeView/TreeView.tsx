'use client';

import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Typography,
  IconButton,
  Collapse,
  Checkbox,
  Tooltip,
  CircularProgress,
} from '@mui/material';
import {
  ChevronRight as ChevronRightIcon,
  ExpandMore as ExpandMoreIcon,
  Folder as FolderIcon,
  FolderOpen as FolderOpenIcon,
  InsertDriveFile as FileIcon,
} from '@mui/icons-material';

export interface TreeNode {
  id: string | number;
  label: string;
  icon?: React.ReactNode;
  children?: TreeNode[];
  data?: any;
  isLoading?: boolean;
  disabled?: boolean;
  selected?: boolean;
}

export interface TreeViewProps {
  nodes: TreeNode[];
  className?: string;
  defaultExpanded?: string[];
  defaultSelected?: string[];
  multiSelect?: boolean;
  showCheckbox?: boolean;
  showIcon?: boolean;
  dense?: boolean;
  maxHeight?: number | string;
  onNodeSelect?: (nodeIds: string[]) => void;
  onNodeToggle?: (nodeId: string, expanded: boolean) => void;
  loadChildren?: (nodeId: string) => Promise<TreeNode[]>;
}

const TreeContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'maxHeight',
})<{ maxHeight?: number | string }>(({ theme, maxHeight }) => ({
  padding: theme.spacing(1),
  ...(maxHeight && {
    maxHeight,
    overflowY: 'auto',
  }),
}));

const TreeItem = styled(Box, {
  shouldForwardProp: (prop) => !['level', 'dense'].includes(prop as string),
})<{ level: number; dense: boolean }>(({ theme, level, dense }) => ({
  padding: theme.spacing(dense ? 0.5 : 1, 1),
  paddingLeft: theme.spacing(level * 2 + 2),
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '&.selected': {
    backgroundColor: theme.palette.action.selected,
  },
  '&.disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
}));

const IconContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginRight: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

export function TreeView({
  nodes,
  className,
  defaultExpanded = [],
  defaultSelected = [],
  multiSelect = false,
  showCheckbox = false,
  showIcon = true,
  dense = false,
  maxHeight,
  onNodeSelect,
  onNodeToggle,
  loadChildren,
}: TreeViewProps) {
  const [expanded, setExpanded] = React.useState<Set<string>>(new Set(defaultExpanded));
  const [selected, setSelected] = React.useState<Set<string>>(new Set(defaultSelected));
  const [loading, setLoading] = React.useState<Set<string>>(new Set());
  const [dynamicNodes, setDynamicNodes] = React.useState<Map<string, TreeNode[]>>(new Map());

  const handleToggle = async (nodeId: string, hasChildren: boolean) => {
    const newExpanded = new Set(expanded);
    const isExpanding = !newExpanded.has(nodeId);

    if (isExpanding) {
      newExpanded.add(nodeId);
      if (loadChildren && hasChildren && !dynamicNodes.has(nodeId)) {
        setLoading(prev => new Set(prev).add(nodeId));
        try {
          const children = await loadChildren(nodeId);
          setDynamicNodes(prev => new Map(prev).set(nodeId, children));
        } finally {
          setLoading(prev => {
            const next = new Set(prev);
            next.delete(nodeId);
            return next;
          });
        }
      }
    } else {
      newExpanded.delete(nodeId);
    }

    setExpanded(newExpanded);
    onNodeToggle?.(nodeId, isExpanding);
  };

  const handleSelect = (nodeId: string, isDisabled: boolean) => {
    if (isDisabled) return;

    const newSelected = new Set(selected);
    if (multiSelect) {
      if (newSelected.has(nodeId)) {
        newSelected.delete(nodeId);
      } else {
        newSelected.add(nodeId);
      }
    } else {
      if (newSelected.has(nodeId)) {
        newSelected.clear();
      } else {
        newSelected.clear();
        newSelected.add(nodeId);
      }
    }

    setSelected(newSelected);
    onNodeSelect?.(Array.from(newSelected));
  };

  const renderTreeItems = (items: TreeNode[], level: number = 0) => {
    return items.map((node) => {
      const nodeId = String(node.id);
      const isExpanded = expanded.has(nodeId);
      const isSelected = selected.has(nodeId);
      const isLoading = loading.has(nodeId);
      const hasChildren = Boolean(node.children?.length || loadChildren);
      const children = dynamicNodes.get(nodeId) || node.children;

      return (
        <React.Fragment key={nodeId}>
          <TreeItem
            level={level}
            dense={dense}
            className={`${isSelected ? 'selected' : ''} ${node.disabled ? 'disabled' : ''}`}
            onClick={() => handleSelect(nodeId, Boolean(node.disabled))}
          >
            {hasChildren && (
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  handleToggle(nodeId, hasChildren);
                }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <CircularProgress size={18} />
                ) : isExpanded ? (
                  <ExpandMoreIcon fontSize="small" />
                ) : (
                  <ChevronRightIcon fontSize="small" />
                )}
              </IconButton>
            )}
            {!hasChildren && <Box sx={{ width: 28 }} />}

            {showCheckbox && (
              <Checkbox
                checked={isSelected}
                disabled={node.disabled}
                onClick={(e) => e.stopPropagation()}
                onChange={() => handleSelect(nodeId, Boolean(node.disabled))}
                size={dense ? 'small' : 'medium'}
              />
            )}

            {showIcon && (
              <IconContainer>
                {node.icon || (hasChildren ? (
                  isExpanded ? <FolderOpenIcon /> : <FolderIcon />
                ) : (
                  <FileIcon />
                ))}
              </IconContainer>
            )}

            <Tooltip title={node.label}>
              <Typography
                variant={dense ? 'body2' : 'body1'}
                noWrap
                sx={{
                  flexGrow: 1,
                  ...(node.disabled && {
                    color: 'text.disabled',
                  }),
                }}
              >
                {node.label}
              </Typography>
            </Tooltip>
          </TreeItem>

          {hasChildren && (
            <Collapse in={isExpanded}>
              {children && renderTreeItems(children, level + 1)}
            </Collapse>
          )}
        </React.Fragment>
      );
    });
  };

  return (
    <TreeContainer className={className} maxHeight={maxHeight}>
      {renderTreeItems(nodes)}
    </TreeContainer>
  );
}
