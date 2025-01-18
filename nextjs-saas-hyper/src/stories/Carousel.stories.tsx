import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from '@/components/ui/Carousel';
import { Box, Card, CardContent, Typography } from '@mui/material';

const meta = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof Carousel>;

const items = [
  <Card key="1" sx={{ height: 200, mx: 1 }}>
    <CardContent>
      <Typography variant="h5">Slide 1</Typography>
      <Typography>This is the first slide content.</Typography>
    </CardContent>
  </Card>,
  <Card key="2" sx={{ height: 200, mx: 1 }}>
    <CardContent>
      <Typography variant="h5">Slide 2</Typography>
      <Typography>This is the second slide content.</Typography>
    </CardContent>
  </Card>,
  <Card key="3" sx={{ height: 200, mx: 1 }}>
    <CardContent>
      <Typography variant="h5">Slide 3</Typography>
      <Typography>This is the third slide content.</Typography>
    </CardContent>
  </Card>,
];

export const Basic: Story = {
  args: {
    items,
  },
};

export const WithoutAutoPlay: Story = {
  args: {
    items,
    autoPlay: false,
  },
};

export const CustomInterval: Story = {
  args: {
    items,
    interval: 2000,
  },
};

export const WithoutArrows: Story = {
  args: {
    items,
    showArrows: false,
  },
};

export const WithoutIndicators: Story = {
  args: {
    items,
    showIndicators: false,
  },
};

export const FullFeatured: Story = {
  render: () => (
    <Box sx={{ maxWidth: 600, mx: 'auto' }}>
      <Carousel
        items={items}
        autoPlay
        interval={3000}
        showArrows
        showIndicators
      />
    </Box>
  ),
};
