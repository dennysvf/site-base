'use client';

import { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import { Alert, AlertTitle, Collapse, IconButton } from '@mui/material';
import {
  CheckCircleOutline as SuccessIcon,
  ErrorOutline as ErrorIcon,
  InfoOutlined as InfoIcon,
  WarningAmberOutlined as WarningIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { NotificationProps, NotificationPosition } from './types';

const NotificationContainer = styled('div')<{ position: NotificationPosition }>(
  ({ theme, position }) => ({
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    padding: theme.spacing(2),
    zIndex: theme.zIndex.snackbar,
    maxWidth: '100%',
    width: 'auto',
    ...(position.includes('top') && { top: 0 }),
    ...(position.includes('bottom') && { bottom: 0 }),
    ...(position.includes('left') && { left: 0 }),
    ...(position.includes('right') && { right: 0 }),
    ...(position.includes('center') && {
      left: '50%',
      transform: 'translateX(-50%)',
    }),
  })
);

const StyledAlert = styled(Alert)(({ theme }) => ({
  minWidth: 288,
  maxWidth: 400,
  boxShadow: theme.shadows[3],
  '.MuiAlert-icon': {
    fontSize: 24,
  },
  '.MuiAlert-message': {
    width: '100%',
  },
  '.MuiAlert-action': {
    paddingTop: 0,
    alignItems: 'flex-start',
    marginRight: -8,
  },
}));

const variantIcon = {
  success: SuccessIcon,
  error: ErrorIcon,
  warning: WarningIcon,
  info: InfoIcon,
};

export const Notification = forwardRef<HTMLDivElement, NotificationProps>(
  (
    {
      id,
      title,
      message,
      variant = 'info',
      position = 'top-right',
      showIcon = true,
      action,
      onClose,
      ...other
    },
    ref
  ) => {
    const Icon = variantIcon[variant];

    return (
      <NotificationContainer ref={ref} position={position}>
        <Collapse in>
          <StyledAlert
            variant="filled"
            severity={variant}
            icon={showIcon ? <Icon /> : null}
            action={
              <>
                {action}
                {onClose && (
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={onClose}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                )}
              </>
            }
            {...other}
          >
            {title && <AlertTitle>{title}</AlertTitle>}
            {message}
          </StyledAlert>
        </Collapse>
      </NotificationContainer>
    );
  }
);

Notification.displayName = 'Notification';
