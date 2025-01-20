'use client';

import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  TextField,
  Popper,
  Paper,
  ClickAwayListener,
  IconButton,
  InputAdornment,
  Tooltip,
} from '@mui/material';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import { TinyColor } from '@ctrl/tinycolor';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import CheckIcon from '@mui/icons-material/Check';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  helperText?: string;
  className?: string;
  fullWidth?: boolean;
  size?: 'small' | 'medium';
  variant?: 'outlined' | 'filled' | 'standard';
  defaultColors?: string[];
  showCopyButton?: boolean;
}

const ColorPreview = styled(Box)(({ theme }) => ({
  width: 36,
  height: 24,
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  cursor: 'pointer',
}));

const StyledPopper = styled(Popper)(({ theme }) => ({
  zIndex: theme.zIndex.modal,
  '& .react-colorful': {
    width: '100%',
  },
  '& .react-colorful__saturation': {
    borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`,
  },
  '& .react-colorful__hue': {
    borderRadius: `0 0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px`,
  },
  '& .react-colorful__saturation-pointer': {
    border: '2px solid #fff',
  },
  '& .react-colorful__hue-pointer': {
    border: '2px solid #fff',
  },
}));

const ColorGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gap: theme.spacing(0.5),
  padding: theme.spacing(1),
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const ColorSwatch = styled(Box)(({ theme }) => ({
  width: '100%',
  paddingBottom: '100%',
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  cursor: 'pointer',
  position: 'relative',
  '&:hover': {
    opacity: 0.8,
  },
  '& .MuiSvgIcon-root': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    fontSize: '0.875rem',
  },
}));

const defaultPalette = [
  '#f44336', '#e91e63', '#9c27b0', '#673ab7',
  '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4',
  '#009688', '#4caf50', '#8bc34a', '#cddc39',
  '#ffeb3b', '#ffc107', '#ff9800', '#ff5722',
  '#795548', '#607d8b', '#ffffff', '#000000',
];

export function ColorPicker({
  value,
  onChange,
  label,
  placeholder = '#000000',
  disabled = false,
  readOnly = false,
  error = false,
  helperText,
  className,
  fullWidth = false,
  size = 'medium',
  variant = 'outlined',
  defaultColors = defaultPalette,
  showCopyButton = true,
}: ColorPickerProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [copied, setCopied] = React.useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!disabled && !readOnly) {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleColorChange = (color: string) => {
    onChange(color.toUpperCase());
  };

  const handleSwatchClick = (color: string) => {
    handleColorChange(color);
    handleClose();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const color = new TinyColor(value);
  const isValidColor = color.isValid;
  const textColor = color.isDark() ? '#fff' : '#000';

  return (
    <>
      <TextField
        label={label}
        value={value}
        onChange={(e) => handleColorChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        error={error || !isValidColor}
        helperText={helperText || (!isValidColor && 'Invalid color')}
        className={className}
        fullWidth={fullWidth}
        size={size}
        variant={variant}
        InputProps={{
          readOnly,
          startAdornment: (
            <InputAdornment position="start">
              <ColorPreview
                sx={{ bgcolor: isValidColor ? value : '#fff' }}
                onClick={handleClick}
              />
            </InputAdornment>
          ),
          endAdornment: showCopyButton && (
            <InputAdornment position="end">
              <Tooltip title={copied ? 'Copied!' : 'Copy color'}>
                <IconButton
                  onClick={handleCopy}
                  disabled={!isValidColor || disabled}
                  size="small"
                >
                  <ContentCopyIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </InputAdornment>
          ),
        }}
      />
      <StyledPopper
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        placement="bottom-start"
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, 8],
            },
          },
        ]}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <Paper
            elevation={8}
            sx={{
              width: 240,
              borderRadius: 1,
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Box p={2}>
              <HexColorPicker color={value} onChange={handleColorChange} />
              <Box mt={2}>
                <HexColorInput
                  color={value}
                  onChange={handleColorChange}
                  prefixed
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '14px',
                  }}
                />
              </Box>
            </Box>
            <ColorGrid>
              {defaultColors.map((defaultColor) => (
                <ColorSwatch
                  key={defaultColor}
                  sx={{ bgcolor: defaultColor }}
                  onClick={() => handleSwatchClick(defaultColor)}
                >
                  {value.toLowerCase() === defaultColor.toLowerCase() && (
                    <CheckIcon style={{ color: textColor }} />
                  )}
                </ColorSwatch>
              ))}
            </ColorGrid>
          </Paper>
        </ClickAwayListener>
      </StyledPopper>
    </>
  );
}
