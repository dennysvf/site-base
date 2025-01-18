'use client';

import React from 'react';
import { Box, Container, styled } from '@mui/material';
import { PageTitle } from '../PageTitle/PageTitle';

interface PageContainerProps {
  title?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  children: React.ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
}

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  minHeight: `calc(100vh - ${theme.spacing(8)} - 64px)`, // 64px é a altura do AppBar
}));

export function PageContainer({ 
  title, 
  breadcrumbs, 
  children,
  maxWidth = 'lg'
}: PageContainerProps) {
  return (
    <Box>
      {title && (
        <PageTitle 
          title={title} 
          breadcrumbs={breadcrumbs} 
        />
      )}
      <StyledContainer maxWidth={maxWidth}>
        {children}
      </StyledContainer>
    </Box>
  );
}
