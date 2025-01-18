'use client';

import { Card, CardContent, Grid, Typography } from '@mui/material';
import { Carousel } from '@/components/ui/Carousel';
import { PageContainer } from '@/components/ui/PageContainer';

// Exemplo de slides
const slides = [
  <div key="1" style={{ height: 300, background: '#2196f3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Typography variant="h3" color="white">First slide</Typography>
  </div>,
  <div key="2" style={{ height: 300, background: '#4caf50', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Typography variant="h3" color="white">Second slide</Typography>
  </div>,
  <div key="3" style={{ height: 300, background: '#f44336', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Typography variant="h3" color="white">Third slide</Typography>
  </div>,
];

// Exemplo de slides com imagens
const imageSlides = [
  <img key="1" src="/images/small/small-1.jpg" alt="Slide 1" style={{ width: '100%', height: 300, objectFit: 'cover' }} />,
  <img key="2" src="/images/small/small-2.jpg" alt="Slide 2" style={{ width: '100%', height: 300, objectFit: 'cover' }} />,
  <img key="3" src="/images/small/small-3.jpg" alt="Slide 3" style={{ width: '100%', height: 300, objectFit: 'cover' }} />,
];

export default function CarouselPage() {
  return (
    <PageContainer title="Carousel" subtitle="Demonstração dos diferentes tipos de Carousels">
      <Grid container spacing={3}>
        {/* Basic Carousel */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Basic Carousel
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                A simple carousel with slides and indicators.
              </Typography>

              <Carousel items={slides} />
            </CardContent>
          </Card>
        </Grid>

        {/* Image Carousel */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Image Carousel
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                A carousel with images and navigation arrows.
              </Typography>

              <Carousel items={imageSlides} showArrows showIndicators />
            </CardContent>
          </Card>
        </Grid>

        {/* Auto-playing Carousel */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Auto-playing Carousel
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                A carousel that automatically transitions slides. Hover to pause.
              </Typography>

              <Carousel
                items={slides}
                autoPlay
                interval={3000}
                showArrows
                showIndicators
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
