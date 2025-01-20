'use client';

import React from 'react';
import {
  Breadcrumbs as MuiBreadcrumbs,
  Link as MuiLink,
  Typography,
  styled,
} from '@mui/material';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

export interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  separator?: React.ReactNode;
  maxItems?: number;
  className?: string;
  showHome?: boolean;
}

const StyledBreadcrumbs = styled(MuiBreadcrumbs)(({ theme }) => ({
  '& .MuiBreadcrumbs-separator': {
    margin: theme.spacing(0, 1),
  },
  '& .MuiBreadcrumbs-li': {
    display: 'flex',
    alignItems: 'center',
  },
  '& .MuiLink-root': {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.secondary,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
    '& .MuiSvgIcon-root': {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
    },
  },
  '& .MuiTypography-root': {
    display: 'flex',
    alignItems: 'center',
    '& .MuiSvgIcon-root': {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
    },
  },
}));

export function Breadcrumb({
  items = [],
  separator = <NavigateNextIcon fontSize="small" />,
  maxItems = 8,
  className,
  showHome = true,
}: BreadcrumbProps) {
  const pathname = usePathname();

  // Se não houver items definidos, gera automaticamente a partir do pathname
  const breadcrumbItems = items.length > 0 
    ? items 
    : pathname
        .split('/')
        .filter(Boolean)
        .map((segment, index, array) => ({
          label: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
          href: '/' + array.slice(0, index + 1).join('/'),
        }));

  // Adiciona o item Home no início se showHome for true
  const finalItems = showHome
    ? [{ label: 'Home', href: '/', icon: <HomeIcon /> }, ...breadcrumbItems]
    : breadcrumbItems;

  return (
    <StyledBreadcrumbs
      separator={separator}
      maxItems={maxItems}
      className={className}
      aria-label="breadcrumb"
    >
      {finalItems.map((item, index) => {
        const isLast = index === finalItems.length - 1;

        if (isLast) {
          return (
            <Typography
              key={item.label}
              color="text.primary"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              {item.icon}
              {item.label}
            </Typography>
          );
        }

        return (
          <Link
            key={item.label}
            href={item.href || '#'}
            passHref
            legacyBehavior
          >
            <MuiLink
              color="inherit"
              sx={{
                display: 'flex',
                alignItems: 'center',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              {item.icon}
              {item.label}
            </MuiLink>
          </Link>
        );
      })}
    </StyledBreadcrumbs>
  );
}
