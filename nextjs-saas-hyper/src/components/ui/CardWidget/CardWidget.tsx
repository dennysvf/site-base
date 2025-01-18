import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

const StyledCard = styled(Box)`
  background: ${({ theme }) => theme.palette.background.paper};
  border-radius: 8px;
  padding: 24px;
  box-shadow: ${({ theme }) => theme.shadows[2]};
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows[6]};
  }
`;

export interface CardWidgetProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  onClick?: () => void;
}

export function CardWidget({ title, value, icon, trend, color = 'primary', onClick }: CardWidgetProps) {
  return (
    <StyledCard onClick={onClick}>
      <Box display="flex" alignItems="center" gap={1}>
        {icon && <Box>{icon}</Box>}
        <Typography variant="h6" color="textSecondary">
          {title}
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="h4">
          {value}
        </Typography>
        {trend && <Box mt={1}>{trend}</Box>}
      </Box>
    </StyledCard>
  );
}