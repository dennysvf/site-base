'use client';

import { useState, useEffect, useCallback } from 'react';
import { styled } from '@mui/material/styles';
import {
  Tabs as MuiTabs,
  Tab as MuiTab,
  Box,
  useTheme,
  alpha,
} from '@mui/material';

export interface TabItem {
  key: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  value?: string;
  onChange?: (value: string) => void;
  variant?: 'standard' | 'scrollable' | 'fullWidth';
  orientation?: 'horizontal' | 'vertical';
  centered?: boolean;
  style?: 'default' | 'pills' | 'enclosed' | 'underline';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  size?: 'small' | 'medium' | 'large';
  showContent?: boolean;
  className?: string;
  tabClassName?: string;
  contentClassName?: string;
}

const TabsRoot = styled('div')<{ orientation?: 'horizontal' | 'vertical' }>(
  ({ orientation }) => ({
    display: 'flex',
    flexDirection: orientation === 'vertical' ? 'row' : 'column',
    width: '100%',
  })
);

const StyledTabs = styled(MuiTabs, {
  shouldForwardProp: (prop) => 
    prop !== 'tabStyle' && prop !== 'customColor' && prop !== 'customSize',
})<{
  tabStyle?: string;
  customColor?: string;
  customSize?: 'small' | 'medium' | 'large';
}>(({ theme, tabStyle, customColor, customSize }) => ({
  ...(tabStyle === 'pills' && {
    '& .MuiTab-root': {
      borderRadius: theme.shape.borderRadius,
      margin: theme.spacing(0, 0.5),
      minHeight: customSize === 'small' ? 32 : customSize === 'large' ? 48 : 40,
      '&.Mui-selected': {
        color: theme.palette[customColor || 'primary'].contrastText,
        backgroundColor: theme.palette[customColor || 'primary'].main,
      },
    },
    '& .MuiTabs-indicator': {
      display: 'none',
    },
  }),
  ...(tabStyle === 'enclosed' && {
    '& .MuiTab-root': {
      border: `1px solid ${theme.palette.divider}`,
      borderBottom: 'none',
      borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`,
      margin: theme.spacing(0, 0.5),
      '&.Mui-selected': {
        backgroundColor: theme.palette.background.paper,
        borderColor: theme.palette.divider,
      },
    },
    '& .MuiTabs-indicator': {
      height: 1,
      backgroundColor: theme.palette.divider,
    },
  }),
  ...(tabStyle === 'underline' && {
    '& .MuiTab-root': {
      '&.Mui-selected': {
        color: theme.palette[customColor || 'primary'].main,
      },
    },
    '& .MuiTabs-indicator': {
      height: 2,
      backgroundColor: theme.palette[customColor || 'primary'].main,
    },
  }),
  ...(customSize === 'small' && {
    minHeight: 32,
    '& .MuiTab-root': {
      minHeight: 32,
      padding: theme.spacing(0, 1),
      fontSize: theme.typography.pxToRem(13),
    },
  }),
  ...(customSize === 'large' && {
    minHeight: 48,
    '& .MuiTab-root': {
      minHeight: 48,
      padding: theme.spacing(0, 2),
      fontSize: theme.typography.pxToRem(16),
    },
  }),
}));

const TabPanel = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  width: '100%',
}));

export function Tabs({
  items,
  value: controlledValue,
  onChange,
  variant = 'standard',
  orientation = 'horizontal',
  centered = false,
  style = 'default',
  color = 'primary',
  size = 'medium',
  showContent = true,
  className,
  tabClassName,
  contentClassName,
}: TabsProps) {
  const [value, setValue] = useState(controlledValue || items[0]?.key || '');
  const theme = useTheme();

  useEffect(() => {
    if (controlledValue !== undefined) {
      setValue(controlledValue);
    }
  }, [controlledValue]);

  const handleChange = useCallback(
    (_: React.SyntheticEvent, newValue: string) => {
      if (!controlledValue) {
        setValue(newValue);
      }
      onChange?.(newValue);
    },
    [controlledValue, onChange]
  );

  const activeContent = items.find((item) => item.key === value)?.content;

  return (
    <TabsRoot orientation={orientation} className={className}>
      <StyledTabs
        value={value}
        onChange={handleChange}
        variant={variant}
        orientation={orientation}
        centered={centered}
        tabStyle={style}
        customColor={color}
        customSize={size}
        className={tabClassName}
        {...(variant === 'scrollable' && {
          scrollButtons: true,
          allowScrollButtonsMobile: true,
        })}
      >
        {items.map((item) => (
          <MuiTab
            key={item.key}
            value={item.key}
            label={item.label}
            icon={item.icon}
            disabled={item.disabled}
            {...(item.icon && { iconPosition: 'start' })}
          />
        ))}
      </StyledTabs>

      {showContent && (
        <TabPanel className={contentClassName} role="tabpanel">
          {activeContent}
        </TabPanel>
      )}
    </TabsRoot>
  );
}
