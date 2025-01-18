'use client';

import React, { useState } from 'react';
import { 
  Card, 
  CardHeader, 
  CardContent, 
  IconButton, 
  Menu, 
  MenuItem,
  Collapse,
  CircularProgress,
  Box
} from '@mui/material';
import { 
  MoreVert as MoreVertIcon,
  Refresh as RefreshIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon
} from '@mui/icons-material';

interface PortletCardProps {
  title: string;
  children: React.ReactNode;
  onRefresh?: () => Promise<void>;
  menu?: {
    label: string;
    onClick: () => void;
  }[];
}

export function PortletCard({ title, children, onRefresh, menu }: PortletCardProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [expanded, setExpanded] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleRefresh = async () => {
    if (onRefresh) {
      setLoading(true);
      try {
        await onRefresh();
      } finally {
        setLoading(false);
      }
    }
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardHeader
        action={
          <Box sx={{ display: 'flex', gap: 1 }}>
            {onRefresh && (
              <IconButton 
                onClick={handleRefresh}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : <RefreshIcon />}
              </IconButton>
            )}
            <IconButton onClick={handleExpandClick}>
              {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            {menu && (
              <>
                <IconButton onClick={handleMenuClick}>
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  {menu.map((item, index) => (
                    <MenuItem
                      key={index}
                      onClick={() => {
                        item.onClick();
                        handleMenuClose();
                      }}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            )}
          </Box>
        }
        title={title}
      />
      <Collapse in={expanded}>
        <CardContent>
          {children}
        </CardContent>
      </Collapse>
    </Card>
  );
}
