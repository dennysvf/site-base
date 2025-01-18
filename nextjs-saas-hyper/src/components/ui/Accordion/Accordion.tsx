'use client';

import { useState } from 'react';
import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  styled,
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  defaultExpanded?: string;
  allowMultiple?: boolean;
  variant?: 'default' | 'flush' | 'custom';
}

const StyledAccordion = styled(MuiAccordion, {
  shouldForwardProp: (prop) => prop !== 'variant',
})<{ variant?: 'default' | 'flush' | 'custom' }>(({ theme, variant }) => ({
  boxShadow: 'none',
  '&:before': {
    display: 'none',
  },
  ...(variant === 'flush' && {
    border: 'none',
    borderRadius: 0,
    '& .MuiAccordionSummary-root': {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  }),
  ...(variant === 'custom' && {
    backgroundColor: 'transparent',
    '& .MuiAccordionSummary-root': {
      padding: theme.spacing(2),
      '& .MuiAccordionSummary-content': {
        margin: 0,
      },
      '& .MuiTypography-root': {
        color: theme.palette.text.primary,
        fontWeight: 500,
      },
      '& .MuiSvgIcon-root': {
        color: theme.palette.text.secondary,
      },
    },
    '& .MuiAccordionDetails-root': {
      padding: theme.spacing(2),
      borderTop: `1px solid ${theme.palette.divider}`,
    },
  }),
}));

export function Accordion({ items, defaultExpanded, allowMultiple = false, variant = 'default' }: AccordionProps) {
  const [expanded, setExpanded] = useState<string | string[]>(defaultExpanded ? [defaultExpanded] : []);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    if (allowMultiple) {
      setExpanded((prev) => {
        const prevExpanded = Array.isArray(prev) ? prev : [prev];
        return isExpanded
          ? [...prevExpanded, panel]
          : prevExpanded.filter((item) => item !== panel);
      });
    } else {
      setExpanded(isExpanded ? panel : '');
    }
  };

  const isExpanded = (panel: string) => {
    if (Array.isArray(expanded)) {
      return expanded.includes(panel);
    }
    return expanded === panel;
  };

  return (
    <Box>
      {items.map((item) => (
        <StyledAccordion
          key={item.id}
          expanded={isExpanded(item.id)}
          onChange={handleChange(item.id)}
          variant={variant}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${item.id}-content`}
            id={`${item.id}-header`}
          >
            <Typography>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {typeof item.content === 'string' ? (
              <Typography>{item.content}</Typography>
            ) : (
              item.content
            )}
          </AccordionDetails>
        </StyledAccordion>
      ))}
    </Box>
  );
}
