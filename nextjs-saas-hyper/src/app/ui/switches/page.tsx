'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
} from '@mui/material';
import {
  LightMode as LightIcon,
  DarkMode as DarkIcon,
  Wifi as WifiIcon,
  WifiOff as WifiOffIcon,
  Notifications as NotificationsIcon,
  NotificationsOff as NotificationsOffIcon,
  Bluetooth as BluetoothIcon,
  BluetoothDisabled as BluetoothDisabledIcon,
} from '@mui/icons-material';
import { Switch } from '@/components/ui/Switch';
import { PageContainer } from '@/components/ui/PageContainer';

export default function SwitchesPage() {
  const [themeMode, setThemeMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [wifi, setWifi] = useState(true);
  const [bluetooth, setBluetooth] = useState(false);

  return (
    <PageContainer title="Switches" subtitle="Demonstração dos diferentes tipos de Switches">
      <Grid container spacing={3}>
        {/* Basic Switches */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Basic Switches
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Simple switches with different configurations.
              </Typography>

              <Box sx={{ '& > *': { mb: 2 } }}>
                <Switch defaultChecked />
                
                <Switch label="With Label" defaultChecked />
                
                <Switch
                  label="With Description"
                  description="This is a helpful description"
                  defaultChecked
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Switch Sizes */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Switch Sizes
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Switches in different sizes.
              </Typography>

              <Box sx={{ '& > *': { mb: 2 } }}>
                <Switch size="small" label="Small" />
                <Switch size="medium" label="Medium" />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Switch Colors */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Switch Colors
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Switches with different colors.
              </Typography>

              <Box sx={{ '& > *': { mb: 2 } }}>
                {['primary', 'secondary', 'success', 'error', 'warning', 'info'].map(
                  (color) => (
                    <Switch
                      key={color}
                      color={color as any}
                      label={`${color.charAt(0).toUpperCase()}${color.slice(1)}`}
                      defaultChecked
                    />
                  )
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Switch Variants */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Switch Variants
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Different switch styles and variants.
              </Typography>

              <Box sx={{ '& > *': { mb: 2 } }}>
                <Switch variant="default" label="Default Style" defaultChecked />
                <Switch variant="slim" label="Slim Style" defaultChecked />
                <Switch variant="ios" label="iOS Style" defaultChecked />
                <Switch variant="android" label="Android Style" defaultChecked />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Label Placements */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Label Placements
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Switches with different label placements.
              </Typography>

              <Box sx={{ '& > *': { mb: 2 } }}>
                <Switch label="Start" labelPlacement="start" defaultChecked />
                <Switch label="End" labelPlacement="end" defaultChecked />
                <Switch label="Top" labelPlacement="top" defaultChecked />
                <Switch label="Bottom" labelPlacement="bottom" defaultChecked />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Interactive Switches */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Interactive Switches
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Interactive switches with icons and state.
              </Typography>

              <Box sx={{ '& > *': { mb: 2 } }}>
                <Switch
                  label="Theme Mode"
                  checked={themeMode}
                  onChange={(e) => setThemeMode(e.target.checked)}
                  customIcons={{
                    checked: <LightIcon fontSize="small" />,
                    unchecked: <DarkIcon fontSize="small" />,
                  }}
                />

                <Switch
                  label="Notifications"
                  checked={notifications}
                  onChange={(e) => setNotifications(e.target.checked)}
                  customIcons={{
                    checked: <NotificationsIcon fontSize="small" />,
                    unchecked: <NotificationsOffIcon fontSize="small" />,
                  }}
                />

                <Switch
                  label="WiFi"
                  checked={wifi}
                  onChange={(e) => setWifi(e.target.checked)}
                  customIcons={{
                    checked: <WifiIcon fontSize="small" />,
                    unchecked: <WifiOffIcon fontSize="small" />,
                  }}
                />

                <Switch
                  label="Bluetooth"
                  checked={bluetooth}
                  onChange={(e) => setBluetooth(e.target.checked)}
                  customIcons={{
                    checked: <BluetoothIcon fontSize="small" />,
                    unchecked: <BluetoothDisabledIcon fontSize="small" />,
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Disabled State */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Disabled State
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Switches in disabled state.
              </Typography>

              <Box sx={{ '& > *': { mb: 2 } }}>
                <Switch
                  label="Disabled Off"
                  disabled
                />
                <Switch
                  label="Disabled On"
                  disabled
                  defaultChecked
                />
                <Switch
                  label="Disabled with Description"
                  description="This switch is disabled"
                  disabled
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
