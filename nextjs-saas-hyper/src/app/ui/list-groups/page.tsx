'use client';

import { Card, CardContent, Grid, Typography } from '@mui/material';
import {
  Home as HomeIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  Mail as MailIcon,
  Star as StarIcon,
  Favorite as FavoriteIcon,
} from '@mui/icons-material';
import { ListGroup } from '@/components/ui/ListGroup';
import { PageContainer } from '@/components/ui/PageContainer';

export default function ListGroupsPage() {
  const basicItems = [
    { id: 1, primary: 'Home' },
    { id: 2, primary: 'Profile' },
    { id: 3, primary: 'Messages' },
    { id: 4, primary: 'Settings' },
  ];

  const withIconsItems = [
    { id: 1, primary: 'Home', icon: <HomeIcon /> },
    { id: 2, primary: 'Profile', icon: <PersonIcon /> },
    { id: 3, primary: 'Messages', icon: <MailIcon /> },
    { id: 4, primary: 'Settings', icon: <SettingsIcon /> },
  ];

  const withSecondaryItems = [
    { id: 1, primary: 'Inbox', secondary: 'New messages', icon: <MailIcon /> },
    { id: 2, primary: 'Starred', secondary: '4 items', icon: <StarIcon /> },
    { id: 3, primary: 'Favorites', secondary: '12 items', icon: <FavoriteIcon /> },
  ];

  const customColoredItems = [
    { id: 1, primary: 'Success Item', selected: true },
    { id: 2, primary: 'Normal Item' },
    { id: 3, primary: 'Disabled Item', disabled: true },
  ];

  return (
    <PageContainer title="List Groups" subtitle="Demonstração dos diferentes tipos de List Groups">
      <Grid container spacing={3}>
        {/* Basic List Group */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Basic List Group
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Basic list group with text only.
              </Typography>

              <ListGroup items={basicItems} />
            </CardContent>
          </Card>
        </Grid>

        {/* List Group with Icons */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                With Icons
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                List group with icons and text.
              </Typography>

              <ListGroup items={withIconsItems} />
            </CardContent>
          </Card>
        </Grid>

        {/* List Group with Secondary Text */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                With Secondary Text
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                List group with primary and secondary text.
              </Typography>

              <ListGroup items={withSecondaryItems} />
            </CardContent>
          </Card>
        </Grid>

        {/* Custom Colored List Group */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Custom Colored
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                List group with custom color and selected state.
              </Typography>

              <ListGroup
                items={customColoredItems}
                variant="custom"
                color="success"
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Flush List Group */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Flush Style
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                List group without outer borders.
              </Typography>

              <ListGroup
                items={withIconsItems}
                variant="flush"
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Compact List Group */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Compact Style
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                List group with reduced padding.
              </Typography>

              <ListGroup
                items={withIconsItems}
                compact
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
