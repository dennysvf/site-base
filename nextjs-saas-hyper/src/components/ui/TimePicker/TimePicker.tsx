'use client';

import React from 'react';
import { styled } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TimePicker as MuiTimePicker } from '@mui/x-date-pickers/TimePicker';
import { TimeView } from '@mui/x-date-pickers';
import { ptBR } from 'date-fns/locale';
import {
  TextField,
  Paper,
  Popper,
  PopperProps,
  IconButton,
} from '@mui/material';
import { AccessTime as ClockIcon } from '@mui/icons-material';

export interface TimePickerProps {
  value: Date | null;
  onChange: (time: Date | null) => void;
  label?: string;
  placeholder?: string;
  minTime?: Date;
  maxTime?: Date;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  helperText?: string;
  format?: string;
  ampm?: boolean;
  views?: TimeView[];
  minutesStep?: number;
  className?: string;
  fullWidth?: boolean;
  size?: 'small' | 'medium';
  variant?: 'outlined' | 'filled' | 'standard';
  inputVariant?: 'outlined' | 'filled' | 'standard';
  clearable?: boolean;
  showToolbar?: boolean;
}

const StyledPopper = styled(Popper)(({ theme }) => ({
  zIndex: theme.zIndex.modal,
  '& .MuiPaper-root': {
    marginTop: theme.spacing(1),
  },
  '& .MuiPickersLayout-root': {
    minWidth: 300,
    maxWidth: '100%',
  },
}));

const CustomPopper = function (props: PopperProps) {
  return <StyledPopper {...props} placement="bottom-start" />;
};

export function TimePicker({
  value,
  onChange,
  label,
  placeholder,
  minTime,
  maxTime,
  disabled = false,
  readOnly = false,
  error = false,
  helperText,
  format = 'HH:mm',
  ampm = false,
  views = ['hours', 'minutes'],
  minutesStep = 1,
  className,
  fullWidth = false,
  size = 'medium',
  variant = 'outlined',
  inputVariant = 'outlined',
  clearable = false,
  showToolbar = true,
}: TimePickerProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
      <MuiTimePicker
        value={value}
        onChange={onChange}
        label={label}
        minTime={minTime}
        maxTime={maxTime}
        disabled={disabled}
        readOnly={readOnly}
        ampm={ampm}
        format={format}
        views={views}
        minutesStep={minutesStep}
        className={className}
        clearable={clearable}
        sx={{
          width: fullWidth ? '100%' : 'auto',
        }}
        slots={{
          textField: (params) => (
            <TextField
              {...params}
              fullWidth={fullWidth}
              size={size}
              variant={inputVariant as any}
              placeholder={placeholder}
              error={error}
              helperText={helperText}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <IconButton
                    edge="end"
                    disabled={disabled || readOnly}
                    onClick={() => params.inputRef?.current?.focus()}
                  >
                    <ClockIcon />
                  </IconButton>
                ),
              }}
            />
          ),
          popper: CustomPopper,
        }}
        slotProps={{
          popper: {
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, 8],
                },
              },
            ],
          },
          desktopPaper: {
            elevation: 8,
            sx: {
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider',
            },
          },
          toolbar: {
            hidden: !showToolbar,
          },
        }}
      />
    </LocalizationProvider>
  );
}
