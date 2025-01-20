'use client';

import React from 'react';
import { styled } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { ptBR } from 'date-fns/locale';
import {
  TextField,
  Paper,
  Popper,
  PopperProps,
  IconButton,
} from '@mui/material';
import { CalendarMonth as CalendarIcon } from '@mui/icons-material';

export interface DatePickerProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
  label?: string;
  placeholder?: string;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  helperText?: string;
  format?: string;
  views?: Array<'year' | 'month' | 'day'>;
  disableFuture?: boolean;
  disablePast?: boolean;
  className?: string;
  fullWidth?: boolean;
  size?: 'small' | 'medium';
  variant?: 'outlined' | 'filled' | 'standard';
  inputVariant?: 'outlined' | 'filled' | 'standard';
}

const StyledPopper = styled(Popper)(({ theme }) => ({
  zIndex: theme.zIndex.modal,
  '& .MuiPaper-root': {
    marginTop: theme.spacing(1),
  },
  '& .MuiCalendarPicker-root': {
    width: 320,
    maxWidth: '100%',
  },
}));

const StyledPickersDay = styled(PickersDay)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  '&.Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  '&.Mui-disabled': {
    color: theme.palette.text.disabled,
  },
}));

const CustomPopper = function (props: PopperProps) {
  return <StyledPopper {...props} placement="bottom-start" />;
};

export function DatePicker({
  value,
  onChange,
  label,
  placeholder,
  minDate,
  maxDate,
  disabled = false,
  readOnly = false,
  error = false,
  helperText,
  format = 'dd/MM/yyyy',
  views = ['year', 'month', 'day'],
  disableFuture = false,
  disablePast = false,
  className,
  fullWidth = false,
  size = 'medium',
  variant = 'outlined',
  inputVariant = 'outlined',
}: DatePickerProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
      <MuiDatePicker
        value={value}
        onChange={onChange}
        label={label}
        minDate={minDate}
        maxDate={maxDate}
        disabled={disabled}
        readOnly={readOnly}
        format={format}
        views={views}
        disableFuture={disableFuture}
        disablePast={disablePast}
        className={className}
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
                    <CalendarIcon />
                  </IconButton>
                ),
              }}
            />
          ),
          day: StyledPickersDay,
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
        }}
      />
    </LocalizationProvider>
  );
}
