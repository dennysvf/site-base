import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FormWizard } from '@/components/ui/FormWizard/FormWizard';
import {
  Box,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  Avatar,
  Button,
} from '@mui/material';
import {
  Person as PersonIcon,
  Business as BusinessIcon,
  Settings as SettingsIcon,
  CheckCircle as CheckCircleIcon,
  AccountCircle as AccountCircleIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Home as HomeIcon,
} from '@mui/icons-material';

const meta = {
  title: 'UI/Forms/FormWizard',
  component: FormWizard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box sx={{ width: 800 }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof FormWizard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Example form components with improved styling and validation
const PersonalInfo = ({ formData, updateFormData }: any) => (
  <Box>
    <Box 
      display="flex" 
      gap={2} 
      mb={2}
      flexDirection={{ xs: 'column', sm: 'row' }}
    >
      <TextField
        fullWidth
        label="First Name"
        value={formData.firstName || ''}
        onChange={(e) => updateFormData({ firstName: e.target.value })}
        required
      />
      <TextField
        fullWidth
        label="Last Name"
        value={formData.lastName || ''}
        onChange={(e) => updateFormData({ lastName: e.target.value })}
        required
      />
    </Box>
    <Box 
      display="flex" 
      gap={2}
      flexDirection={{ xs: 'column', sm: 'row' }}
    >
      <TextField
        fullWidth
        label="Email"
        type="email"
        value={formData.email || ''}
        onChange={(e) => updateFormData({ email: e.target.value })}
        required
        helperText="We'll never share your email"
      />
      <TextField
        fullWidth
        label="Phone"
        type="tel"
        value={formData.phone || ''}
        onChange={(e) => updateFormData({ phone: e.target.value })}
      />
    </Box>
  </Box>
);

const AccountType = ({ formData, updateFormData }: any) => (
  <Box>
    <FormControl component="fieldset" fullWidth>
      <FormLabel component="legend">Select Account Type</FormLabel>
      <RadioGroup
        value={formData.accountType || 'personal'}
        onChange={(e) => updateFormData({ accountType: e.target.value })}
      >
        <Box 
          display="flex" 
          gap={2} 
          mt={2}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Paper
            elevation={formData.accountType === 'personal' ? 3 : 1}
            sx={{
              p: 2,
              flex: 1,
              cursor: 'pointer',
              border: (theme) =>
                formData.accountType === 'personal'
                  ? `2px solid ${theme.palette.primary.main}`
                  : '2px solid transparent',
            }}
            onClick={() => updateFormData({ accountType: 'personal' })}
          >
            <FormControlLabel
              value="personal"
              control={<Radio />}
              label={
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Personal Account
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Perfect for individual use
                  </Typography>
                </Box>
              }
            />
          </Paper>
          <Paper
            elevation={formData.accountType === 'business' ? 3 : 1}
            sx={{
              p: 2,
              flex: 1,
              cursor: 'pointer',
              border: (theme) =>
                formData.accountType === 'business'
                  ? `2px solid ${theme.palette.primary.main}`
                  : '2px solid transparent',
            }}
            onClick={() => updateFormData({ accountType: 'business' })}
          >
            <FormControlLabel
              value="business"
              control={<Radio />}
              label={
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Business Account
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    For teams and organizations
                  </Typography>
                </Box>
              }
            />
          </Paper>
        </Box>
      </RadioGroup>
    </FormControl>

    {formData.accountType === 'business' && (
      <Box mt={3}>
        <TextField
          fullWidth
          label="Company Name"
          value={formData.companyName || ''}
          onChange={(e) => updateFormData({ companyName: e.target.value })}
          required
        />
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel>Company Size</InputLabel>
          <Select
            value={formData.companySize || ''}
            onChange={(e) => updateFormData({ companySize: e.target.value })}
            label="Company Size"
          >
            <MenuItem value="1-10">1-10 employees</MenuItem>
            <MenuItem value="11-50">11-50 employees</MenuItem>
            <MenuItem value="51-200">51-200 employees</MenuItem>
            <MenuItem value="201+">201+ employees</MenuItem>
          </Select>
        </FormControl>
      </Box>
    )}
  </Box>
);

const Preferences = ({ formData, updateFormData }: any) => (
  <Box>
    <Typography variant="subtitle1" gutterBottom>
      Communication Preferences
    </Typography>
    <FormControl component="fieldset" fullWidth>
      <Box display="flex" flexDirection="column" gap={1}>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.emailUpdates || false}
              onChange={(e) =>
                updateFormData({ emailUpdates: e.target.checked })
              }
            />
          }
          label={
            <Box>
              <Typography variant="body1">Email Updates</Typography>
              <Typography variant="body2" color="textSecondary">
                Receive product updates and news
              </Typography>
            </Box>
          }
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.marketing || false}
              onChange={(e) =>
                updateFormData({ marketing: e.target.checked })
              }
            />
          }
          label={
            <Box>
              <Typography variant="body1">Marketing Communications</Typography>
              <Typography variant="body2" color="textSecondary">
                Receive offers and promotions
              </Typography>
            </Box>
          }
        />
      </Box>
    </FormControl>

    <Typography variant="subtitle1" gutterBottom sx={{ mt: 3 }}>
      Display Settings
    </Typography>
    <FormControl component="fieldset" fullWidth>
      <Box display="flex" flexDirection="column" gap={1}>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.darkMode || false}
              onChange={(e) =>
                updateFormData({ darkMode: e.target.checked })
              }
            />
          }
          label="Enable Dark Mode"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.notifications || false}
              onChange={(e) =>
                updateFormData({ notifications: e.target.checked })
              }
            />
          }
          label="Enable Desktop Notifications"
        />
      </Box>
    </FormControl>
  </Box>
);

const Review = ({ formData }: any) => (
  <Box>
    <Box 
      display="flex" 
      alignItems="center" 
      mb={3}
      flexDirection={{ xs: 'column', sm: 'row' }}
      textAlign={{ xs: 'center', sm: 'left' }}
      gap={2}
    >
      <Avatar
        sx={{
          width: { xs: 80, sm: 64 },
          height: { xs: 80, sm: 64 },
          bgcolor: 'primary.main',
        }}
      >
        {formData.firstName?.[0]}
        {formData.lastName?.[0]}
      </Avatar>
      <Box>
        <Typography variant="h6">
          {formData.firstName} {formData.lastName}
        </Typography>
        <Typography color="textSecondary">
          {formData.accountType === 'business'
            ? `${formData.companyName} · ${formData.companySize} employees`
            : 'Personal Account'}
        </Typography>
      </Box>
    </Box>

    <Box 
      display="grid" 
      gap={3}
      gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr' }}
    >
      <Paper sx={{ p: 2 }}>
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          Contact Information
        </Typography>
        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <EmailIcon color="action" fontSize="small" />
          <Typography>{formData.email}</Typography>
        </Box>
        {formData.phone && (
          <Box display="flex" alignItems="center" gap={1}>
            <PhoneIcon color="action" fontSize="small" />
            <Typography>{formData.phone}</Typography>
          </Box>
        )}
      </Paper>

      <Paper sx={{ p: 2 }}>
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          Preferences
        </Typography>
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography variant="body2">
            • Email Updates: {formData.emailUpdates ? 'Yes' : 'No'}
          </Typography>
          <Typography variant="body2">
            • Marketing: {formData.marketing ? 'Yes' : 'No'}
          </Typography>
          <Typography variant="body2">
            • Dark Mode: {formData.darkMode ? 'Enabled' : 'Disabled'}
          </Typography>
          <Typography variant="body2">
            • Notifications: {formData.notifications ? 'Enabled' : 'Disabled'}
          </Typography>
        </Box>
      </Paper>
    </Box>
  </Box>
);

// Validation functions
const validatePersonalInfo = async (data: any) => {
  const errors: string[] = [];
  
  if (!data.firstName?.trim()) errors.push('First name is required');
  if (!data.lastName?.trim()) errors.push('Last name is required');
  if (!data.email?.trim()) errors.push('Email is required');
  if (data.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
    errors.push('Invalid email address');
  }
  
  if (errors.length > 0) {
    throw new Error(errors.join(', '));
  }
  
  return true;
};

const validateBusinessAccount = async (data: any) => {
  if (data.accountType === 'business') {
    if (!data.companyName?.trim()) throw new Error('Company name is required for business accounts');
    if (!data.companySize) throw new Error('Please select company size');
  }
  return true;
};

// Steps configuration with icons and summaries
const wizardSteps = [
  {
    label: 'Personal Info',
    description: 'Your basic information',
    component: <PersonalInfo />,
    validation: validatePersonalInfo,
    icon: <PersonIcon />,
    summary: (data: any) => (
      <Typography variant="body2">
        {data.firstName} {data.lastName}
        <br />
        {data.email}
      </Typography>
    ),
  },
  {
    label: 'Account Type',
    description: 'Select account type',
    component: <AccountType />,
    validation: validateBusinessAccount,
    icon: <BusinessIcon />,
    summary: (data: any) => (
      <Typography variant="body2">
        {data.accountType === 'business'
          ? `Business - ${data.companyName}`
          : 'Personal Account'}
      </Typography>
    ),
  },
  {
    label: 'Preferences',
    description: 'Set your preferences',
    component: <Preferences />,
    optional: true,
    icon: <SettingsIcon />,
    summary: (data: any) => (
      <Typography variant="body2">
        {[
          data.emailUpdates && 'Email Updates',
          data.marketing && 'Marketing',
          data.darkMode && 'Dark Mode',
        ]
          .filter(Boolean)
          .join(', ')}
      </Typography>
    ),
  },
  {
    label: 'Review',
    description: 'Review your information',
    component: <Review />,
    icon: <CheckCircleIcon />,
  },
];

export const Basic: Story = {
  args: {
    steps: wizardSteps,
    onComplete: (data) => console.log('Form completed:', data),
    showStepDescription: true,
  },
};

export const Vertical: Story = {
  args: {
    steps: wizardSteps,
    onComplete: (data) => console.log('Form completed:', data),
    orientation: 'vertical',
    showStepDescription: true,
  },
};

export const WithSummary: Story = {
  args: {
    steps: wizardSteps,
    onComplete: (data) => console.log('Form completed:', data),
    showSummary: true,
    summaryPosition: 'right',
  },
};

export const Loading: Story = {
  args: {
    steps: wizardSteps,
    onComplete: (data) => console.log('Form completed:', data),
    loading: true,
  },
};

export const WithError: Story = {
  args: {
    steps: wizardSteps,
    onComplete: (data) => console.log('Form completed:', data),
    error: 'Something went wrong. Please try again.',
  },
};

export const WithSuccess: Story = {
  args: {
    steps: wizardSteps,
    onComplete: (data) => console.log('Form completed:', data),
    success: 'Your changes have been saved successfully!',
  },
};

export const AutoValidate: Story = {
  args: {
    steps: wizardSteps,
    onComplete: (data) => console.log('Form completed:', data),
    autoValidate: true,
  },
};

export const AllowSkipOptional: Story = {
  args: {
    steps: wizardSteps,
    onComplete: (data) => console.log('Form completed:', data),
    allowSkipOptional: true,
  },
};

export const Outlined: Story = {
  args: {
    steps: wizardSteps,
    onComplete: (data) => console.log('Form completed:', data),
    theme: 'outlined',
  },
};

export const Compact: Story = {
  args: {
    steps: wizardSteps,
    onComplete: (data) => console.log('Form completed:', data),
    theme: 'compact',
  },
};
