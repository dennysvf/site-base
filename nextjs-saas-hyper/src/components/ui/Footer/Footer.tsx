'use client';

import React from 'react';
import { Box, Container, Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterRoot = styled('footer')(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  width: '100%',
  padding: theme.spacing(2, 0),
  backgroundColor: theme.palette.background.paper,
  borderTop: `1px solid ${theme.palette.divider}`,
  zIndex: theme.zIndex.appBar - 1,
}));

const FooterContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
}));

const FooterLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
}));

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterRoot>
      <FooterContainer maxWidth="lg">
        <Typography variant="body2" color="text.secondary">
          © {currentYear} Hyper - Coderthemes.com
        </Typography>
        
        <FooterLinks>
          <Link
            href="#"
            variant="body2"
            color="text.secondary"
            underline="hover"
          >
            About
          </Link>
          <Link
            href="#"
            variant="body2"
            color="text.secondary"
            underline="hover"
          >
            Support
          </Link>
          <Link
            href="#"
            variant="body2"
            color="text.secondary"
            underline="hover"
          >
            Contact Us
          </Link>
        </FooterLinks>
      </FooterContainer>
    </FooterRoot>
  );
}
