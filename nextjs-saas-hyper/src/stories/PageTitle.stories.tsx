import type { Meta, StoryObj } from '@storybook/react';
import { PageTitle } from '../components/ui/PageTitle/PageTitle';
import { Box } from '@mui/material';
import { Providers } from '@/lib/Providers';

const meta = {
  title: 'Components/PageTitle',
  component: PageTitle,
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
} satisfies Meta<typeof PageTitle>;

export default meta;
type Story = StoryObj<typeof PageTitle>;

export const Basic: Story = {
  args: {
    title: 'Dashboard',
  },
};

export const WithBreadcrumbs: Story = {
  args: {
    title: 'User Profile',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Users', href: '/users' },
      { label: 'Profile' },
    ],
  },
};

export const LongBreadcrumbs: Story = {
  args: {
    title: 'Edit Document',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Documents', href: '/documents' },
      { label: 'Project Files', href: '/documents/projects' },
      { label: 'Technical Specs', href: '/documents/projects/tech' },
      { label: 'Edit Document' },
    ],
  },
};

export const WithCustomStyling: Story = {
  render: () => (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <PageTitle
        title="Analytics Dashboard"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Analytics', href: '/analytics' },
          { label: 'Dashboard' },
        ]}
      />
      <Box sx={{ p: 3 }}>
        {/* Page content would go here */}
        Content area
      </Box>
    </Box>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <PageTitle
        title="Settings"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Account', href: '/account' },
          { label: 'Settings' },
        ]}
      />
    </Box>
  ),
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};

export const LongTitle: Story = {
  args: {
    title: 'Comprehensive System Configuration and Advanced Settings Management Dashboard',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'System', href: '/system' },
      { label: 'Configuration' },
    ],
  },
};

export const SingleBreadcrumb: Story = {
  args: {
    title: 'Welcome',
    breadcrumbs: [
      { label: 'Home' },
    ],
  },
};
