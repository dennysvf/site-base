'use client';

import { Box, Button, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import { Badge, BadgePosition } from '@/components/ui/Badge';
import { PageContainer } from '@/components/ui/PageContainer';
import { NotificationsNone as NotificationsIcon } from '@mui/icons-material';

const colors = ['primary', 'secondary', 'success', 'error', 'warning', 'info', 'dark'] as const;

export default function BadgesPage() {
  return (
    <PageContainer title="Badges" subtitle="Demonstração dos diferentes tipos de Badges">
      <Grid container spacing={3}>
        {/* Default Badges */}
        <Grid item xs={12} lg={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Default Badges
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                A simple labeling component. Badges scale to match the size of the immediate parent element.
              </Typography>

              <Stack spacing={3}>
                <Typography variant="h1">
                  h1. Heading <Badge color="secondary">New</Badge>
                </Typography>
                <Typography variant="h2">
                  h2. Heading <Badge variant="light" color="success">New</Badge>
                </Typography>
                <Typography variant="h3">
                  h3. Heading <Badge color="primary">New</Badge>
                </Typography>
                <Typography variant="h4">
                  h4. Heading <Badge variant="light" color="info">Info</Badge>
                </Typography>
                <Typography variant="h5">
                  h5. Heading <Badge variant="outlined" color="warning">New</Badge>
                </Typography>
                <Typography variant="h6">
                  h6. Heading <Badge color="error">New</Badge>
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Pill Badges */}
        <Grid item xs={12} lg={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Pill Badges
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Use the pill prop to make badges more rounded.
              </Typography>

              <Box sx={{ '& > *': { m: 0.5 } }}>
                {/* Default Pills */}
                <Stack spacing={2}>
                  <Box>
                    <Typography variant="subtitle2" gutterBottom>
                      Filled Pills
                    </Typography>
                    {colors.map((color) => (
                      <Badge key={color} color={color} pill>
                        {color}
                      </Badge>
                    ))}
                  </Box>

                  <Box>
                    <Typography variant="subtitle2" gutterBottom>
                      Light Pills
                    </Typography>
                    {colors.map((color) => (
                      <Badge key={color} color={color} variant="light" pill>
                        {color}
                      </Badge>
                    ))}
                  </Box>

                  <Box>
                    <Typography variant="subtitle2" gutterBottom>
                      Outlined Pills
                    </Typography>
                    {colors.map((color) => (
                      <Badge key={color} color={color} variant="outlined" pill>
                        {color}
                      </Badge>
                    ))}
                  </Box>
                </Stack>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Badge Positions */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Badge Positions
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Use BadgePosition component to position badges in different corners.
              </Typography>

              <Stack direction="row" spacing={4}>
                <BadgePosition badgeContent="4" position="top-right">
                  <Button variant="contained">
                    Notifications
                  </Button>
                </BadgePosition>

                <BadgePosition
                  badgeContent="new"
                  position="top-left"
                  color="success"
                  variant="light"
                  pill
                >
                  <Button variant="contained">
                    Messages
                  </Button>
                </BadgePosition>

                <BadgePosition
                  badgeContent={<NotificationsIcon />}
                  position="bottom-right"
                  color="warning"
                >
                  <Button variant="contained">
                    Updates
                  </Button>
                </BadgePosition>

                <BadgePosition
                  badgeContent="99+"
                  position="bottom-left"
                  color="error"
                  variant="light"
                  pill
                >
                  <Button variant="contained">
                    Comments
                  </Button>
                </BadgePosition>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
