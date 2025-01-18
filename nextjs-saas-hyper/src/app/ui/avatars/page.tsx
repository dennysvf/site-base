'use client';

import { Box, Card, CardContent, Grid, Typography, Stack } from '@mui/material';
import { Avatar } from '@/components/ui/Avatar';
import { PageContainer } from '@/components/ui/PageContainer';

const avatarSizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
const avatarVariants = ['circular', 'rounded', 'square'] as const;

export default function AvatarsPage() {
  return (
    <PageContainer title="Avatars" subtitle="Demonstração dos diferentes tipos de Avatars">
      <Grid container spacing={3}>
        {/* Sizing - Images */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Sizing - Images
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Create and group avatars of different sizes and shapes with the size prop.
              </Typography>

              <Stack direction="row" spacing={3} alignItems="end">
                {avatarSizes.map((size) => (
                  <Box key={size} sx={{ textAlign: 'center' }}>
                    <Avatar
                      size={size}
                      src="/images/users/avatar-1.jpg"
                      alt={`Avatar ${size}`}
                    />
                    <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                      .avatar-{size}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Variants */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Avatar Variants
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Different variants of avatars: circular, rounded, and square.
              </Typography>

              <Stack direction="row" spacing={3} alignItems="center">
                {avatarVariants.map((variant) => (
                  <Box key={variant} sx={{ textAlign: 'center' }}>
                    <Avatar
                      variant={variant}
                      src="/images/users/avatar-2.jpg"
                      alt={`Avatar ${variant}`}
                      size="lg"
                    />
                    <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                      {variant}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Background Colors */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Background Colors
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Avatars with different background colors.
              </Typography>

              <Stack direction="row" spacing={3} alignItems="center">
                <Avatar size="md" bgColor="#3b82f6">
                  MS
                </Avatar>
                <Avatar size="md" bgColor="#10b981">
                  ST
                </Avatar>
                <Avatar size="md" bgColor="#f59e0b">
                  GP
                </Avatar>
                <Avatar size="md" bgColor="#ef4444">
                  WH
                </Avatar>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* With Icons */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                With Icons
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Avatars with icons and different sizes.
              </Typography>

              <Stack direction="row" spacing={3} alignItems="end">
                {avatarSizes.map((size) => (
                  <Box key={size} sx={{ textAlign: 'center' }}>
                    <Avatar
                      size={size}
                      bgColor="#6366f1"
                    />
                    <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                      .avatar-{size}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Image Shapes */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Image Shapes
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Avatars with different shapes and styles.
              </Typography>

              <Stack direction="row" spacing={4} alignItems="start">
                <Box>
                  <Avatar
                    size="xl"
                    variant="rounded"
                    src="/images/users/avatar-3.jpg"
                    alt="Rounded"
                  />
                  <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                    Rounded
                  </Typography>
                </Box>

                <Box>
                  <Avatar
                    size="xl"
                    variant="square"
                    src="/images/users/avatar-4.jpg"
                    alt="Square"
                  />
                  <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                    Square
                  </Typography>
                </Box>

                <Box>
                  <Avatar
                    size="xl"
                    variant="circular"
                    src="/images/users/avatar-5.jpg"
                    alt="Circular"
                  />
                  <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                    Circular
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
