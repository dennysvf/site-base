'use client';

import React from 'react';
import { Box, Breadcrumbs, Typography, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageTitleProps {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
}

const PageTitleWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  background: theme.palette.background.paper,
  marginBottom: theme.spacing(3),
}));

const Title = styled(Typography)<{ $hasBreadcrumbs?: boolean }>(({ theme, $hasBreadcrumbs }) => ({
  fontSize: '1.5rem',
  fontWeight: 600,
  color: theme.palette.text.primary,
  marginBottom: $hasBreadcrumbs ? theme.spacing(1) : 0,
}));

export function PageTitle({ title, breadcrumbs }: PageTitleProps) {
  return (
    <PageTitleWrapper>
      <Title variant="h4" $hasBreadcrumbs={Boolean(breadcrumbs)}>
        {title}
      </Title>
      
      {breadcrumbs && (
        <Breadcrumbs aria-label="breadcrumb">
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;
            
            if (isLast) {
              return (
                <Typography key={item.label} color="text.primary">
                  {item.label}
                </Typography>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href || '#'}
                color="inherit"
                underline="hover"
              >
                {item.label}
              </Link>
            );
          })}
        </Breadcrumbs>
      )}
    </PageTitleWrapper>
  );
}
