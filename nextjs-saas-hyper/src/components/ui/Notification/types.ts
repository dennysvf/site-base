export type NotificationVariant = 'success' | 'error' | 'warning' | 'info';
export type NotificationPosition =
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left'
  | 'top-center'
  | 'bottom-center';

export interface NotificationProps {
  id?: string;
  title?: string;
  message: string;
  variant?: NotificationVariant;
  position?: NotificationPosition;
  autoHideDuration?: number;
  showIcon?: boolean;
  action?: React.ReactNode;
  onClose?: () => void;
}

export interface NotificationContextValue {
  notifications: NotificationProps[];
  showNotification: (notification: NotificationProps) => void;
  closeNotification: (id: string) => void;
  clearNotifications: () => void;
}
