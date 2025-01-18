'use client';

import { useEffect, useState } from 'react';
import { TransitionGroup } from 'react-transition-group';
import { styled } from '@mui/material/styles';
import { Notification } from './Notification';
import { useNotification } from './NotificationContext';
import { NotificationPosition } from './types';

const Container = styled('div')({
  position: 'fixed',
  zIndex: 1500,
  pointerEvents: 'none',
  '& > *': {
    pointerEvents: 'auto',
  },
});

const positionStyles: Record<NotificationPosition, React.CSSProperties> = {
  'top-right': { top: 24, right: 24 },
  'top-left': { top: 24, left: 24 },
  'bottom-right': { bottom: 24, right: 24 },
  'bottom-left': { bottom: 24, left: 24 },
  'top-center': { top: 24, left: '50%', transform: 'translateX(-50%)' },
  'bottom-center': { bottom: 24, left: '50%', transform: 'translateX(-50%)' },
};

export function NotificationContainer() {
  const { notifications, closeNotification } = useNotification();
  const [positions] = useState<Record<NotificationPosition, any[]>>({
    'top-right': [],
    'top-left': [],
    'bottom-right': [],
    'bottom-left': [],
    'top-center': [],
    'bottom-center': [],
  });

  useEffect(() => {
    // Agrupar notificações por posição
    Object.keys(positions).forEach((pos) => {
      positions[pos as NotificationPosition] = notifications.filter(
        (notification) => notification.position === pos
      );
    });
  }, [notifications, positions]);

  return (
    <>
      {Object.entries(positions).map(([position, items]) => (
        <Container
          key={position}
          style={positionStyles[position as NotificationPosition]}
        >
          <TransitionGroup>
            {items.map((notification) => (
              <Notification
                key={notification.id}
                {...notification}
                onClose={() => closeNotification(notification.id!)}
              />
            ))}
          </TransitionGroup>
        </Container>
      ))}
    </>
  );
}
