import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonGroup } from '@/components/ui/Button';
import { Box } from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Save as SaveIcon,
  Send as SendIcon,
} from '@mui/icons-material';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    children: 'Button',
  },
};

export const Variants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button variant="text">Text</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="soft">Soft</Button>
    </Box>
  ),
};

export const Colors: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {['text', 'outlined', 'contained', 'soft'].map((variant) => (
        <Box key={variant} sx={{ display: 'flex', gap: 2 }}>
          <Button variant={variant as any} color="primary">Primary</Button>
          <Button variant={variant as any} color="secondary">Secondary</Button>
          <Button variant={variant as any} color="success">Success</Button>
          <Button variant={variant as any} color="error">Error</Button>
          <Button variant={variant as any} color="warning">Warning</Button>
          <Button variant={variant as any} color="info">Info</Button>
        </Box>
      ))}
    </Box>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </Box>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button startIcon={<AddIcon />}>Add Item</Button>
      <Button endIcon={<SendIcon />}>Send Message</Button>
      <Button icon={<EditIcon />} iconOnly aria-label="Edit" />
    </Box>
  ),
};

export const Loading: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button loading>Loading</Button>
      <Button loading loadingText="Saving..." startIcon={<SaveIcon />}>
        Save
      </Button>
      <Button loading loadingPosition="start" loadingText="Deleting...">
        Delete
      </Button>
    </Box>
  ),
};

export const Rounded: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button rounded>Rounded Button</Button>
      <Button rounded variant="outlined">
        Rounded Outlined
      </Button>
      <Button rounded variant="contained">
        Rounded Contained
      </Button>
    </Box>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button disabled>Disabled</Button>
      <Button disabled variant="outlined">
        Disabled Outlined
      </Button>
      <Button disabled variant="contained">
        Disabled Contained
      </Button>
    </Box>
  ),
};

export const ButtonGroups: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <ButtonGroup>
        <Button>Left</Button>
        <Button>Center</Button>
        <Button>Right</Button>
      </ButtonGroup>

      <ButtonGroup variant="contained" color="primary">
        <Button startIcon={<SaveIcon />}>Save</Button>
        <Button startIcon={<EditIcon />}>Edit</Button>
        <Button startIcon={<DeleteIcon />}>Delete</Button>
      </ButtonGroup>

      <ButtonGroup variant="outlined" color="secondary" size="small">
        <Button>Small</Button>
        <Button>Group</Button>
        <Button>Buttons</Button>
      </ButtonGroup>
    </Box>
  ),
};
