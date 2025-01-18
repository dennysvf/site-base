'use client';

import React, { createContext, useContext, useCallback, useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import {
  Snackbar,
  Alert as MuiAlert,
  AlertTitle,
  IconButton,
  Typography,
  Box,
  Stack,
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  Info as InfoIcon,
  Error as ErrorIcon,
  Close as CloseIcon,
} from '@mui/icons-material';

export type NotificationVariant = 'success' | 'error' | 'warning' | 'info';

export interface NotificationOptions {
  /**
   * The title of the notification
   */
  title?: string;
  /**
   * The message to display
   */
  message: string;
  /**
   * The variant of the notification
   */
  variant?: NotificationVariant;
  /**
   * Whether to show the icon
   */
  showIcon?: boolean;
  /**
   * The duration in milliseconds to show the notification
   */
  duration?: number;
  /**
   * The position of the notification
   */
  position?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
  /**
   * Custom action component
   */
  action?: React.ReactNode;
  /**
   * Whether to show close button
   */
  showCloseButton?: boolean;
  /**
   * Whether to show progress bar
   */
  showProgress?: boolean;
}

interface NotificationContextType {
  notify: (options: NotificationOptions) => void;
  closeNotification: (key?: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

const StyledAlert = styled(MuiAlert)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1, 2),
  '& .MuiAlert-icon': {
    fontSize: 28,
  },
  '& .MuiAlert-message': {
    padding: theme.spacing(1, 0),
  },
  '& .MuiAlert-action': {
    padding: theme.spacing(0, 1),
  },
}));

const ProgressBar = styled('div')<{ $duration: number; $variant: NotificationVariant }>(
  ({ theme, $duration, $variant }) => ({
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 2,
    backgroundColor: theme.palette[$variant].light,
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette[$variant].main,
      animation: `progress ${$duration}ms linear`,
    },
    '@keyframes progress': {
      '0%': {
        width: '100%',
      },
      '100%': {
        width: '0%',
      },
    },
  })
);

const icons: Record<NotificationVariant, React.ReactElement> = {
  success: <CheckCircleIcon />,
  warning: <WarningIcon />,
  error: <ErrorIcon />,
  info: <InfoIcon />,
};

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Array<NotificationOptions & { key: string }>>([]);

  const notify = useCallback((options: NotificationOptions) => {
    const key = new Date().getTime().toString();
    setNotifications((prev) => [...prev, { ...options, key }]);
  }, []);

  const closeNotification = useCallback((key?: string) => {
    setNotifications((prev) =>
      key ? prev.filter((notification) => notification.key !== key) : []
    );
  }, []);

  const value = {
    notify,
    closeNotification,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
      {notifications.map(({ key, ...notification }) => (
        <Notification key={key} {...notification} onClose={() => closeNotification(key)} />
      ))}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};

interface NotificationProps extends NotificationOptions {
  onClose: () => void;
}

export const Notification: React.FC<NotificationProps> = ({
  title,
  message,
  variant = 'info',
  showIcon = true,
  duration = 5000,
  position = { vertical: 'top', horizontal: 'right' },
  action,
  showCloseButton = true,
  showProgress = true,
  onClose,
}) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (duration !== Infinity) {
      const timer = setTimeout(() => {
        setOpen(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    onClose();
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={handleClose}
      anchorOrigin={position}
      sx={{ maxWidth: 400 }}
    >
      <StyledAlert
        variant="filled"
        severity={variant}
        icon={showIcon ? icons[variant] : false}
        action={
          <Stack direction="row" spacing={1} alignItems="center">
            {action}
            {showCloseButton && (
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            )}
          </Stack>
        }
      >
        <Box>
          {title && <AlertTitle>{title}</AlertTitle>}
          <Typography variant="body2">{message}</Typography>
        </Box>
        {showProgress && duration !== Infinity && (
          <ProgressBar $duration={duration} $variant={variant} />
        )}
      </StyledAlert>
    </Snackbar>
  );
};