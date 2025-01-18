'use client';

import { Card, CardContent, Grid, Typography, Box } from '@mui/material';
import {
  Home as HomeIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  Mail as MailIcon,
  Favorite as FavoriteIcon,
  Star as StarIcon,
} from '@mui/icons-material';
import { Tabs } from '@/components/ui/Tabs';
import { PageContainer } from '@/components/ui/PageContainer';

export default function TabsPage() {
  const baseItems = [
    {
      key: 'home',
      label: 'Home',
      icon: <HomeIcon />,
      content: (
        <Box p={2}>
          <Typography variant="h6">Home Content</Typography>
          <Typography>
            This is the content for the Home tab. You can put anything here.
          </Typography>
        </Box>
      ),
    },
    {
      key: 'profile',
      label: 'Profile',
      icon: <PersonIcon />,
      content: (
        <Box p={2}>
          <Typography variant="h6">Profile Content</Typography>
          <Typography>
            This is the content for the Profile tab. You can put anything here.
          </Typography>
        </Box>
      ),
    },
    {
      key: 'messages',
      label: 'Messages',
      icon: <MailIcon />,
      content: (
        <Box p={2}>
          <Typography variant="h6">Messages Content</Typography>
          <Typography>
            This is the content for the Messages tab. You can put anything here.
          </Typography>
        </Box>
      ),
    },
  ];

  const manyItems = [
    ...baseItems,
    {
      key: 'settings',
      label: 'Settings',
      icon: <SettingsIcon />,
      content: <Typography>Settings Content</Typography>,
    },
    {
      key: 'favorites',
      label: 'Favorites',
      icon: <FavoriteIcon />,
      content: <Typography>Favorites Content</Typography>,
    },
    {
      key: 'starred',
      label: 'Starred',
      icon: <StarIcon />,
      content: <Typography>Starred Content</Typography>,
    },
  ];

  return (
    <PageContainer title="Tabs" subtitle="Demonstração dos diferentes tipos de Tabs">
      <Grid container spacing={3}>
        {/* Default Tabs */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Default Tabs
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Basic tabs with icons and content.
              </Typography>

              <Tabs items={baseItems} />
            </CardContent>
          </Card>
        </Grid>

        {/* Pills Style */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Pills Style
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Tabs with pill style and different colors.
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Tabs items={baseItems} style="pills" color="primary" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Tabs items={baseItems} style="pills" color="success" />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Enclosed Style */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Enclosed Style
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Tabs with enclosed style and borders.
              </Typography>

              <Tabs items={baseItems} style="enclosed" />
            </CardContent>
          </Card>
        </Grid>

        {/* Vertical Tabs */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Vertical Tabs
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Tabs arranged vertically.
              </Typography>

              <Tabs items={baseItems} orientation="vertical" />
            </CardContent>
          </Card>
        </Grid>

        {/* Scrollable Tabs */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Scrollable Tabs
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Scrollable tabs for many items.
              </Typography>

              <Tabs items={manyItems} variant="scrollable" />
            </CardContent>
          </Card>
        </Grid>

        {/* Different Sizes */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Different Sizes
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Tabs with small, medium, and large sizes.
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Tabs items={baseItems} size="small" />
                </Grid>
                <Grid item xs={12}>
                  <Tabs items={baseItems} size="medium" />
                </Grid>
                <Grid item xs={12}>
                  <Tabs items={baseItems} size="large" />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Centered Tabs */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Centered Tabs
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Tabs centered in the container.
              </Typography>

              <Tabs items={baseItems} centered />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
