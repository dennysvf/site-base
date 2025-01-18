'use client';

import React from 'react';
import {
  Box,
  Button,
  Drawer,
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Close as CloseIcon } from '@mui/icons-material';
import { useLayoutConfig } from '@/hooks/useLayoutConfig';

interface ThemeCustomizerProps {
  open: boolean;
  onClose: () => void;
}

const CustomizerRoot = styled(Box)(({ theme }) => ({
  width: 300,
  padding: theme.spacing(3),
}));

const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 600,
  marginBottom: theme.spacing(2),
}));

const ColorBox = styled(Box)<{ color: string }>(({ theme, color }) => ({
  width: 40,
  height: 40,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: color,
  cursor: 'pointer',
  border: `2px solid ${theme.palette.divider}`,
  '&:hover': {
    opacity: 0.8,
  },
}));

export function ThemeCustomizer({ open, onClose }: ThemeCustomizerProps) {
  const theme = useTheme();
  const {
    layout,
    topbar,
    menu,
    sidenav,
    setLayoutMode,
    setLayoutPosition,
    setTopbarColor,
    setMenuColor,
    setSidenavSize,
    resetConfig,
  } = useLayoutConfig();

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { width: 300 },
      }}
    >
      <CustomizerRoot>
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
          <Typography variant="h6">Theme Customizer</Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        <Section>
          <SectionTitle>Layout Mode</SectionTitle>
          <RadioGroup
            value={layout.mode}
            onChange={(e) => setLayoutMode(e.target.value as any)}
          >
            <FormControlLabel value="fluid" control={<Radio />} label="Fluid" />
            <FormControlLabel value="boxed" control={<Radio />} label="Boxed" />
            <FormControlLabel value="detached" control={<Radio />} label="Detached" />
          </RadioGroup>
        </Section>

        <Section>
          <SectionTitle>Layout Position</SectionTitle>
          <RadioGroup
            value={layout.position}
            onChange={(e) => setLayoutPosition(e.target.value as any)}
          >
            <FormControlLabel value="fixed" control={<Radio />} label="Fixed" />
            <FormControlLabel value="scrollable" control={<Radio />} label="Scrollable" />
          </RadioGroup>
        </Section>

        <Section>
          <SectionTitle>Topbar Color</SectionTitle>
          <Box display="flex" gap={1}>
            <ColorBox
              color={theme.palette.background.paper}
              onClick={() => setTopbarColor('light')}
              sx={{
                border: topbar.color === 'light' ? `2px solid ${theme.palette.primary.main}` : undefined,
              }}
            />
            <ColorBox
              color={theme.palette.grey[900]}
              onClick={() => setTopbarColor('dark')}
              sx={{
                border: topbar.color === 'dark' ? `2px solid ${theme.palette.primary.main}` : undefined,
              }}
            />
            <ColorBox
              color={theme.palette.primary.main}
              onClick={() => setTopbarColor('brand')}
              sx={{
                border: topbar.color === 'brand' ? `2px solid ${theme.palette.primary.main}` : undefined,
              }}
            />
          </Box>
        </Section>

        <Section>
          <SectionTitle>Menu Color</SectionTitle>
          <Box display="flex" gap={1}>
            <ColorBox
              color={theme.palette.background.paper}
              onClick={() => setMenuColor('light')}
              sx={{
                border: menu.color === 'light' ? `2px solid ${theme.palette.primary.main}` : undefined,
              }}
            />
            <ColorBox
              color={theme.palette.grey[900]}
              onClick={() => setMenuColor('dark')}
              sx={{
                border: menu.color === 'dark' ? `2px solid ${theme.palette.primary.main}` : undefined,
              }}
            />
            <ColorBox
              color={theme.palette.primary.main}
              onClick={() => setMenuColor('brand')}
              sx={{
                border: menu.color === 'brand' ? `2px solid ${theme.palette.primary.main}` : undefined,
              }}
            />
          </Box>
        </Section>

        <Section>
          <SectionTitle>Sidenav Size</SectionTitle>
          <RadioGroup
            value={sidenav.size}
            onChange={(e) => setSidenavSize(e.target.value as any)}
          >
            <FormControlLabel value="default" control={<Radio />} label="Default" />
            <FormControlLabel value="condensed" control={<Radio />} label="Condensed" />
            <FormControlLabel value="full" control={<Radio />} label="Full" />
          </RadioGroup>
        </Section>

        <Box display="flex" gap={2}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={onClose}
          >
            Apply
          </Button>
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            onClick={() => {
              resetConfig();
              onClose();
            }}
          >
            Reset
          </Button>
        </Box>
      </CustomizerRoot>
    </Drawer>
  );
}
