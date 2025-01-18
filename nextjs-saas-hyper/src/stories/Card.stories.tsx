import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent, CardActions, CardMedia } from '@/components/ui/Card';
import { Box, Button, Typography, IconButton, Avatar } from '@mui/material';
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  MoreVert as MoreVertIcon,
  Comment as CommentIcon,
} from '@mui/icons-material';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  args: {
    children: (
      <CardContent>
        <Typography variant="body1">
          This is a basic card with simple content.
        </Typography>
      </CardContent>
    ),
  },
};

export const WithTitleAndSubtitle: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'Card Subtitle',
    children: (
      <CardContent>
        <Typography variant="body1">
          This card has a title and subtitle in the header.
        </Typography>
      </CardContent>
    ),
  },
};

export const Variants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Card title="Default Card" variant="default" style={{ width: 300 }}>
        <CardContent>
          <Typography>Default variant card content</Typography>
        </CardContent>
      </Card>

      <Card title="Bordered Card" variant="bordered" style={{ width: 300 }}>
        <CardContent>
          <Typography>Bordered variant card content</Typography>
        </CardContent>
      </Card>

      <Card title="Colored Card" variant="colored" color="primary" style={{ width: 300 }}>
        <CardContent>
          <Typography>Colored variant card content</Typography>
        </CardContent>
      </Card>
    </Box>
  ),
};

export const Colors: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
      {['primary', 'secondary', 'success', 'error', 'warning', 'info'].map((color) => (
        <Card
          key={color}
          title={`${color.charAt(0).toUpperCase() + color.slice(1)} Card`}
          variant="colored"
          color={color as any}
          style={{ width: 300 }}
        >
          <CardContent>
            <Typography>
              This is a {color} colored card example
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  ),
};

export const WithControls: Story = {
  args: {
    title: 'Card with Controls',
    showControls: true,
    onRefresh: () => console.log('Refresh clicked'),
    onClose: () => console.log('Close clicked'),
    onExpand: () => console.log('Expand clicked'),
    children: (
      <CardContent>
        <Typography>
          This card has control buttons in the header.
        </Typography>
      </CardContent>
    ),
  },
};

export const WithMedia: Story = {
  render: () => (
    <Card style={{ width: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image="https://source.unsplash.com/random/345x194?nature"
        alt="Nature"
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Nature Scene
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A beautiful landscape captured in nature, showing the amazing diversity of our planet.
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  ),
};

export const SocialCard: Story = {
  render: () => (
    <Card style={{ width: 345 }}>
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
        <Avatar src="https://i.pravatar.cc/40" />
        <Box sx={{ ml: 2 }}>
          <Typography variant="subtitle1">John Doe</Typography>
          <Typography variant="body2" color="text.secondary">
            2 hours ago
          </Typography>
        </Box>
        <IconButton sx={{ ml: 'auto' }}>
          <MoreVertIcon />
        </IconButton>
      </Box>
      <CardMedia
        component="img"
        height="194"
        image="https://source.unsplash.com/random/345x194?city"
        alt="Post"
      />
      <CardContent>
        <Typography variant="body1">
          Just visited this amazing place! The architecture is breathtaking. #citylife #travel
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like">
          <FavoriteIcon />
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          1.2k
        </Typography>
        <IconButton aria-label="comment" sx={{ ml: 2 }}>
          <CommentIcon />
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          84
        </Typography>
        <IconButton aria-label="share" sx={{ ml: 'auto' }}>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card
      title="Card with Footer"
      footer={
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
          <Button variant="outlined">Cancel</Button>
          <Button variant="contained">Save</Button>
        </Box>
      }
      style={{ width: 400 }}
    >
      <CardContent>
        <Typography>
          This card has a custom footer with action buttons.
        </Typography>
      </CardContent>
    </Card>
  ),
};
