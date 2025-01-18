'use client';

import { useState } from 'react';
import { Button, Grid, Stack, Typography } from '@mui/material';
import { Card, CardContent, CardActions, CardMedia } from '@/components/ui/Card';
import { PageContainer } from '@/components/ui/PageContainer';

export default function CardsPage() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const handleExpand = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <PageContainer title="Cards" subtitle="Demonstração dos diferentes tipos de Cards">
      <Grid container spacing={3}>
        {/* Simple Cards */}
        <Grid item xs={12} sm={6} lg={3}>
          <Card
            title="Card title"
            showControls
            onRefresh={() => console.log('refresh')}
            onClose={() => console.log('close')}
          >
            <CardMedia
              component="img"
              height="194"
              image="/images/small/small-1.jpg"
              alt="Card image"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
                Some quick example text to build on the card title and make up.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained">Button</Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Card with List */}
        <Grid item xs={12} sm={6} lg={3}>
          <Card title="Card with List">
            <CardMedia
              component="img"
              height="194"
              image="/images/small/small-2.jpg"
              alt="Card image"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Some quick example text to build on the card...
              </Typography>
              <Stack spacing={1} sx={{ mt: 2 }}>
                <Typography variant="body2">• First list item</Typography>
                <Typography variant="body2">• Second list item</Typography>
                <Typography variant="body2">• Third list item</Typography>
              </Stack>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">Card link</Button>
              <Button size="small" color="primary">Another link</Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Colored Card */}
        <Grid item xs={12} sm={6} lg={3}>
          <Card
            variant="colored"
            color="primary"
            title="Colored Card"
            subtitle="With subtitle"
            showControls
            onExpand={() => handleExpand('colored')}
          >
            <CardContent>
              <Typography variant="body2" sx={{ color: 'inherit' }}>
                Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" color="secondary">
                Button
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Bordered Card */}
        <Grid item xs={12} sm={6} lg={3}>
          <Card
            variant="bordered"
            title="Bordered Card"
            subtitle="With footer"
            footer={
              <Typography variant="caption" color="text.secondary">
                Last updated 3 mins ago
              </Typography>
            }
          >
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card with Header and Footer */}
        <Grid item xs={12} sm={6}>
          <Card
            variant="bordered"
            title="Featured"
            headerAction={
              <Button size="small" color="primary">
                Action
              </Button>
            }
          >
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Special title treatment
              </Typography>
              <Typography variant="body2" color="text.secondary">
                With supporting text below as a natural lead-in to additional content.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained">
                Go somewhere
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Quote Card */}
        <Grid item xs={12} sm={6}>
          <Card variant="bordered" title="Quote">
            <CardContent>
              <blockquote className="blockquote mb-0">
                <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                </Typography>
                <footer className="blockquote-footer" style={{ marginTop: '1rem' }}>
                  <Typography variant="body2" color="text.secondary">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                  </Typography>
                </footer>
              </blockquote>
            </CardContent>
          </Card>
        </Grid>

        {/* Card Group */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Card Group
          </Typography>
          <Grid container spacing={0}>
            {[1, 2, 3].map((index) => (
              <Grid item xs={12} md={4} key={index} sx={{ '&:not(:last-child)': { borderRight: 1, borderColor: 'divider' } }}>
                <Card>
                  <CardMedia
                    component="img"
                    height="194"
                    image={`/images/small/small-${index}.jpg`}
                    alt={`Card image ${index}`}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      Card title {index}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      This is a wider card with supporting text below as a natural lead-in to additional content.
                      This content is a little bit longer.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
