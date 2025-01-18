import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PageContainer } from '../components/ui/PageContainer/PageContainer';
import { Box, Card, CardContent, Typography, Grid, Button } from '@mui/material';
import { Providers } from '@/lib/Providers';

const meta = {
  title: 'Components/PageContainer',
  component: PageContainer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Providers>
        <Story />
      </Providers>
    ),
  ],
} satisfies Meta<typeof PageContainer>;

export default meta;
type Story = StoryObj<typeof PageContainer>;

export const Basic: Story = {
  args: {
    title: 'Dashboard',
    description: 'Welcome to your dashboard',
    children: (
      <Typography>
        This is a basic page container with just some text content.
      </Typography>
    ),
  },
};

export const WithCards: Story = {
  render: () => (
    <PageContainer
      title="Analytics Dashboard"
      description="Overview of your application analytics"
    >
      <Grid container spacing={3}>
        {['Users', 'Revenue', 'Orders', 'Conversion'].map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item}</Typography>
                <Typography variant="h4" sx={{ mt: 2 }}>
                  {Math.floor(Math.random() * 1000)}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  +{Math.floor(Math.random() * 100)}% from last month
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </PageContainer>
  ),
};

export const WithActions: Story = {
  render: () => (
    <PageContainer
      title="Project Settings"
      description="Manage your project settings and configuration"
    >
      <Box sx={{ mb: 3 }}>
        <Button variant="contained" color="primary" sx={{ mr: 2 }}>
          Save Changes
        </Button>
        <Button variant="outlined" color="secondary">
          Cancel
        </Button>
      </Box>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            General Settings
          </Typography>
          <Typography paragraph>
            Configure your project's general settings here. These settings affect
            how your project behaves and appears to users.
          </Typography>
        </CardContent>
      </Card>
    </PageContainer>
  ),
};

export const ComplexLayout: Story = {
  render: () => (
    <PageContainer
      title="User Management"
      description="Manage users, roles, and permissions"
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                User List
              </Typography>
              {/* Simulated user list */}
              {Array.from({ length: 5 }).map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    p: 2,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    '&:last-child': { borderBottom: 'none' },
                  }}
                >
                  <Typography variant="subtitle1">
                    User {index + 1}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    user{index + 1}@example.com
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Quick Actions
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mb: 2 }}
              >
                Add New User
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                fullWidth
                sx={{ mb: 2 }}
              >
                Export Users
              </Button>
              <Button
                variant="outlined"
                color="info"
                fullWidth
              >
                Generate Report
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageContainer>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <PageContainer
      title="Dark Mode Example"
      description="This page container adapts to dark mode"
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Dark Mode Content
              </Typography>
              <Typography paragraph>
                The page container and its content automatically adapt to dark mode
                when enabled. This includes proper contrast and color adjustments.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageContainer>
  ),
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};
