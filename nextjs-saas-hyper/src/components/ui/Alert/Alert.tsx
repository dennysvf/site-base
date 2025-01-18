'use client';

import { ReactNode } from 'react';
import { Alert as MuiAlert, AlertTitle, IconButton, styled, AlertColor } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

export interface AlertProps {
  /**
   * The title of the alert
   */
  title?: string;
  /**
   * The content of the alert
   */
  children: ReactNode;
  /**
   * The severity of the alert
   */
  severity?: AlertColor;
  /**
   * If true, the alert will be dismissible
   */
  onClose?: () => void;
  /**
   * Custom icon to display
   */
  icon?: ReactNode;
  /**
   * Additional action to display
   */
  action?: ReactNode;
  /**
   * Custom class name
   */
  className?: string;
}

const StyledAlert = styled(MuiAlert)(({ theme }) => ({
  '& .MuiAlert-message': {
    width: '100%',
  },
}));

export const Alert = ({
  title,
  children,
  severity = 'info',
  onClose,
  icon,
  action,
  className,
  ...props
}: AlertProps) => {
  return (
    <StyledAlert
      severity={severity}
      icon={icon}
      action={
        action || (onClose && (
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={onClose}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        ))
      }
      className={className}
      {...props}
    >
      {title && <AlertTitle>{title}</AlertTitle>}
      {children}
    </StyledAlert>
  );
};

type AlertLinkProps = {
  href: string;
  children: ReactNode;
};

export const AlertLink = ({ href, children }: AlertLinkProps) => {
  return (
    <a href={href} className="alert-link">
      {children}
    </a>
  );
};

type AlertHeadingProps = {
  children: ReactNode;
};

export const AlertHeading = ({ children }: AlertHeadingProps) => {
  return <h4 className="alert-heading">{children}</h4>;
};

type AlertIconProps = {
  icon: ReactNode;
  className?: string;
};

export const AlertIcon = ({ icon, className = '' }: AlertIconProps) => {
  return <span className={`me-2 ${className}`}>{icon}</span>;
};