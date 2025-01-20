'use client';

import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Collapse,
  Chip,
  Paper,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
} from '@mui/icons-material';

export interface TimelineItem {
  id: string | number;
  title: string;
  description?: string;
  content?: React.ReactNode;
  date: string | Date;
  icon?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | string;
  avatar?: string;
  tags?: string[];
  expandable?: boolean;
}

export interface TimelineProps {
  items: TimelineItem[];
  className?: string;
  align?: 'left' | 'right' | 'alternate';
  dense?: boolean;
  showConnector?: boolean;
  maxHeight?: number | string;
  itemGap?: number;
  onItemClick?: (item: TimelineItem) => void;
}

const TimelineContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'maxHeight',
})<{ maxHeight?: number | string }>(({ theme, maxHeight }) => ({
  position: 'relative',
  padding: theme.spacing(2),
  ...(maxHeight && {
    maxHeight,
    overflowY: 'auto',
  }),
}));

const TimelineLine = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  width: 2,
  height: '100%',
  backgroundColor: theme.palette.divider,
  top: 0,
}));

const TimelineItemContainer = styled(Box, {
  shouldForwardProp: (prop) => !['align', 'dense', 'itemGap'].includes(prop as string),
})<{ align: 'left' | 'right' | 'alternate'; dense: boolean; itemGap: number }>(
  ({ theme, align, dense, itemGap }) => ({
    position: 'relative',
    display: 'flex',
    marginBottom: theme.spacing(itemGap),
    width: '100%',
    '&:last-child': {
      marginBottom: 0,
    },
    ...(align === 'alternate' && {
      '&:nth-of-type(even)': {
        flexDirection: 'row-reverse',
        '.MuiTimelineItem-content': {
          alignItems: 'flex-end',
          textAlign: 'right',
        },
      },
    }),
    ...(align === 'right' && {
      flexDirection: 'row-reverse',
      '.MuiTimelineItem-content': {
        alignItems: 'flex-end',
        textAlign: 'right',
      },
    }),
    ...(dense && {
      marginBottom: theme.spacing(itemGap / 2),
    }),
  })
);

const TimelineDot = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.contrastText,
  flexShrink: 0,
  margin: `0 ${theme.spacing(2)}`,
  zIndex: 1,
}));

const TimelineContent = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  flex: 1,
  maxWidth: 'calc(50% - 40px)',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    boxShadow: theme.shadows[4],
  },
}));

const TimelineTags = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(0.5),
  marginTop: theme.spacing(1),
}));

export function Timeline({
  items,
  className,
  align = 'alternate',
  dense = false,
  showConnector = true,
  maxHeight,
  itemGap = 3,
  onItemClick,
}: TimelineProps) {
  const [expandedItems, setExpandedItems] = React.useState<Set<string | number>>(new Set());

  const handleExpand = (itemId: string | number) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(itemId)) {
        next.delete(itemId);
      } else {
        next.add(itemId);
      }
      return next;
    });
  };

  const formatDate = (date: string | Date) => {
    if (typeof date === 'string') {
      return date;
    }
    return new Intl.DateTimeFormat('pt-BR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <TimelineContainer className={className} maxHeight={maxHeight}>
      {showConnector && <TimelineLine />}
      {items.map((item) => {
        const isExpanded = expandedItems.has(item.id);

        return (
          <TimelineItemContainer
            key={item.id}
            align={align}
            dense={dense}
            itemGap={itemGap}
            onClick={() => onItemClick?.(item)}
            sx={{ cursor: onItemClick ? 'pointer' : 'default' }}
          >
            <TimelineDot
              sx={{
                ...(item.color && {
                  bgcolor: item.color,
                }),
              }}
            >
              {item.avatar ? (
                <Avatar src={item.avatar} alt={item.title} />
              ) : (
                item.icon
              )}
            </TimelineDot>
            <TimelineContent elevation={1}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}
              >
                <Typography variant="subtitle1" fontWeight="medium">
                  {item.title}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ whiteSpace: 'nowrap', ml: 2 }}
                >
                  {formatDate(item.date)}
                </Typography>
              </Box>
              
              {item.description && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  {item.description}
                </Typography>
              )}

              {item.expandable && item.content && (
                <>
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleExpand(item.id);
                    }}
                    sx={{ mt: 1 }}
                  >
                    {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </IconButton>
                  <Collapse in={isExpanded}>
                    <Box sx={{ mt: 1 }}>{item.content}</Box>
                  </Collapse>
                </>
              )}

              {item.tags && (
                <TimelineTags>
                  {item.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      variant="outlined"
                    />
                  ))}
                </TimelineTags>
              )}
            </TimelineContent>
          </TimelineItemContainer>
        );
      })}
    </TimelineContainer>
  );
}
