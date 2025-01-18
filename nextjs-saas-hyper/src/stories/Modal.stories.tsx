import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
  args: {
    open: true,
    title: 'Basic Modal',
    children: (
      <Typography>
        This is a basic modal with a title and content.
      </Typography>
    ),
    actions: (
      <Button onClick={() => console.log('Close clicked')}>
        Close
      </Button>
    ),
  },
};

export const WithActions: Story = {
  args: {
    open: true,
    title: 'Confirm Action',
    children: (
      <Typography>
        Are you sure you want to delete this item?
      </Typography>
    ),
    actions: (
      <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
        <Button variant="outlined" onClick={() => console.log('Cancel clicked')}>
          Cancel
        </Button>
        <Button variant="contained" color="error" onClick={() => console.log('Delete clicked')}>
          Delete
        </Button>
      </Box>
    ),
  },
};

export const Sizes: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [size, setSize] = useState<'xs' | 'sm' | 'md' | 'lg' | 'xl'>('md');

    return (
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button onClick={() => { setSize('sm'); setOpen(true); }}>Small</Button>
        <Button onClick={() => { setSize('md'); setOpen(true); }}>Medium</Button>
        <Button onClick={() => { setSize('lg'); setOpen(true); }}>Large</Button>

        <Modal
          open={open}
          onClose={() => setOpen(false)}
          maxWidth={size}
          title={`${size.toUpperCase()} Modal`}
        >
          <Typography>
            This is a {size} modal. The content area will adjust based on the maxWidth prop.
          </Typography>
        </Modal>
      </Box>
    );
  },
};

export const Transitions: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [transition, setTransition] = useState<'fade' | 'slide' | 'grow'>('fade');

    return (
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button onClick={() => { setTransition('fade'); setOpen(true); }}>Fade</Button>
        <Button onClick={() => { setTransition('slide'); setOpen(true); }}>Slide</Button>
        <Button onClick={() => { setTransition('grow'); setOpen(true); }}>Grow</Button>

        <Modal
          open={open}
          onClose={() => setOpen(false)}
          transition={transition}
          title={`${transition} Transition`}
        >
          <Typography>
            This modal uses the {transition} transition effect.
          </Typography>
        </Modal>
      </Box>
    );
  },
};
