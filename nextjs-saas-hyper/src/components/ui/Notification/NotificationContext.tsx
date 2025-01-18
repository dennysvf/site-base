'use client';

import { createContext, useContext, useCallback, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { NotificationProps, NotificationContextValue } from './types';

type NotificationAction =
  | { type: 'ADD_NOTIFICATION'; payload: NotificationProps }
  | { type: 'REMOVE_NOTIFICATION'; payload: string }
  | { type: 'CLEAR_NOTIFICATIONS' };

function notificationReducer(state: NotificationProps[], action: NotificationAction): NotificationProps[] {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return [...state, { ...action.payload, id: action.payload.id || uuidv4() }];
    case 'REMOVE_NOTIFICATION':
      return state.filter((notification) => notification.id !== action.payload);
    case 'CLEAR_NOTIFICATIONS':
      return [];
    default:
      return state;
  }
}

const NotificationContext = createContext<NotificationContextValue | null>(null);

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notifications, dispatch] = useReducer(notificationReducer, []);

  const showNotification = useCallback((notification: NotificationProps) => {
    const id = notification.id || uuidv4();
    dispatch({ type: 'ADD_NOTIFICATION', payload: { ...notification, id } });

    if (notification.autoHideDuration !== 0) {
      setTimeout(() => {
        dispatch({ type: 'REMOVE_NOTIFICATION', payload: id });
      }, notification.autoHideDuration || 5000);
    }
  }, []);

  const closeNotification = useCallback((id: string) => {
    dispatch({ type: 'REMOVE_NOTIFICATION', payload: id });
  }, []);

  const clearNotifications = useCallback(() => {
    dispatch({ type: 'CLEAR_NOTIFICATIONS' });
  }, []);

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        showNotification,
        closeNotification,
        clearNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
}
