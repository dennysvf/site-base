'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStylesRTL = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    direction: rtl;
  }

  a {
    color: ${({ theme }) => theme.palette.primary.main};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }

  /* RTL specific styles */
  [dir="rtl"] {
    .MuiTypography-root {
      text-align: right;
    }
    
    .MuiButton-root {
      margin-left: 0;
      margin-right: 8px;
    }
    
    .MuiFormControlLabel-root {
      margin-right: 0;
      margin-left: 16px;
    }
  }
`;