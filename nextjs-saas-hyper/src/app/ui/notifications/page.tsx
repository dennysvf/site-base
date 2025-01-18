'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from '@mui/material';
import { useNotification } from '@/components/ui/Notification';
import { PageContainer } from '@/components/ui/PageContainer';
import type { NotificationVariant, NotificationPosition } from '@/components/ui/Notification';

export default function NotificationsPage() {
  const { showNotification } = useNotification();
  const [message, setMessage] = useState('This is a notification message');
  const [variant, setVariant] = useState<NotificationVariant>('info');
  const [position, setPosition] = useState<NotificationPosition>('top-right');
  const [duration, setDuration] = useState(5000);

  const handleShowNotification = () => {
    showNotification({
      title: `${variant.charAt(0).toUpperCase() + variant.slice(1)} Notification`,
      message,
      variant,
      position,
      autoHideDuration: duration,
    });
  };

  const showDefaultNotifications = () => {
    ['success', 'error', 'warning', 'info'].forEach((variant, index) => {
      setTimeout(() => {
        showNotification({
          title: `${variant.charAt(0).toUpperCase() + variant.slice(1)} Message`,
          message: `This is a ${variant} notification message`,
          variant: variant as NotificationVariant,
          position: 'top-right',
          autoHideDuration: 5000,
        });
      }, index * 1000);
    });
  };

  return (
    <PageContainer title="Notifications" subtitle="Demonstração dos diferentes tipos de notificações">
      <Grid container spacing={3}>
        {/* Default Notifications */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Default Notifications
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Click the button below to see all notification variants.
              </Typography>

              <Button variant="contained" onClick={showDefaultNotifications}>
                Show All Notifications
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Custom Notification */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Custom Notification
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Customize the notification settings below.
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    type="number"
                    label="Duration (ms)"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel>Variant</InputLabel>
                    <Select
                      value={variant}
                      label="Variant"
                      onChange={(e) => setVariant(e.target.value as NotificationVariant)}
                    >
                      <MenuItem value="success">Success</MenuItem>
                      <MenuItem value="error">Error</MenuItem>
                      <MenuItem value="warning">Warning</MenuItem>
                      <MenuItem value="info">Info</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel>Position</InputLabel>
                    <Select
                      value={position}
                      label="Position"
                      onChange={(e) => setPosition(e.target.value as NotificationPosition)}
                    >
                      <MenuItem value="top-right">Top Right</MenuItem>
                      <MenuItem value="top-left">Top Left</MenuItem>
                      <MenuItem value="bottom-right">Bottom Right</MenuItem>
                      <MenuItem value="bottom-left">Bottom Left</MenuItem>
                      <MenuItem value="top-center">Top Center</MenuItem>
                      <MenuItem value="bottom-center">Bottom Center</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Box display="flex" justifyContent="flex-end">
                    <Button variant="contained" onClick={handleShowNotification}>
                      Show Notification
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Positions Demo */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Position Demo
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Click the buttons to show notifications in different positions.
              </Typography>

              <Grid container spacing={2}>
                {[
                  'top-left',
                  'top-center',
                  'top-right',
                  'bottom-left',
                  'bottom-center',
                  'bottom-right',
                ].map((pos) => (
                  <Grid item key={pos}>
                    <Button
                      variant="outlined"
                      onClick={() =>
                        showNotification({
                          message: `Notification in ${pos}`,
                          position: pos as NotificationPosition,
                          variant: 'info',
                        })
                      }
                    >
                      {pos}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
