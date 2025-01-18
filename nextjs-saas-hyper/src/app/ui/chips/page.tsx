'use client';

import {
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  Stack,
} from '@mui/material';
import {
  Face as FaceIcon,
  Done as DoneIcon,
  Cancel as CancelIcon,
  Favorite as FavoriteIcon,
  Star as StarIcon,
  LocalOffer as TagIcon,
  Label as LabelIcon,
  Check as CheckIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { Chip } from '@/components/ui/Chip';
import { PageContainer } from '@/components/ui/PageContainer';

export default function ChipsPage() {
  const handleClick = () => {
    console.info('Chip clicked');
  };

  const handleDelete = () => {
    console.info('Chip deleted');
  };

  return (
    <PageContainer title="Chips" subtitle="Demonstração dos diferentes tipos de Chips">
      <Grid container spacing={3}>
        {/* Basic Chips */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Basic Chips
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Basic chip variations with different styles.
              </Typography>

              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip label="Basic" />
                <Chip label="Clickable" onClick={handleClick} />
                <Chip label="Deletable" onDelete={handleDelete} />
                <Chip
                  label="Clickable Deletable"
                  onClick={handleClick}
                  onDelete={handleDelete}
                />
                <Chip label="With Icon" icon={<FaceIcon />} />
                <Chip
                  label="With Avatar"
                  avatarSrc="https://i.pravatar.cc/300"
                  avatarAlt="User Avatar"
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Chip Variants */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Chip Variants
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Different chip variants and styles.
              </Typography>

              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip label="Filled" variant="filled" />
                <Chip label="Outlined" variant="outlined" />
                <Chip label="Soft" variant="soft" />
                <Chip label="Elevated" elevated />
                <Chip label="Gradient" gradient />
                <Chip label="Rounded" rounded />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Chip Colors */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Chip Colors
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Chips in different colors and variants.
              </Typography>

              <Box sx={{ '& > *': { mb: 2 } }}>
                {['filled', 'outlined', 'soft'].map((variant) => (
                  <Stack
                    key={variant}
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    useFlexGap
                    sx={{ mb: 2 }}
                  >
                    {['primary', 'secondary', 'success', 'error', 'warning', 'info'].map(
                      (color) => (
                        <Chip
                          key={color}
                          label={`${color} ${variant}`}
                          color={color as any}
                          variant={variant as any}
                        />
                      )
                    )}
                  </Stack>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Chip Sizes */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Chip Sizes
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Chips in different sizes.
              </Typography>

              <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap>
                <Chip label="Small" size="small" />
                <Chip label="Medium" size="medium" />
                <Chip label="Large" size="large" />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Status Chips */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Status Chips
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Chips for displaying status and tags.
              </Typography>

              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip
                  icon={<CheckIcon />}
                  label="Active"
                  color="success"
                  variant="soft"
                />
                <Chip
                  icon={<CloseIcon />}
                  label="Inactive"
                  color="error"
                  variant="soft"
                />
                <Chip
                  icon={<StarIcon />}
                  label="Featured"
                  color="warning"
                  variant="soft"
                />
                <Chip
                  icon={<FavoriteIcon />}
                  label="Popular"
                  color="primary"
                  variant="soft"
                />
                <Chip
                  icon={<TagIcon />}
                  label="New"
                  color="info"
                  variant="soft"
                />
                <Chip
                  icon={<LabelIcon />}
                  label="Sale"
                  color="secondary"
                  variant="soft"
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Interactive Chips */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Interactive Chips
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Chips with click and delete actions.
              </Typography>

              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip
                  label="Click me"
                  onClick={() => alert('Clicked!')}
                  color="primary"
                />
                <Chip
                  label="Delete me"
                  onDelete={() => alert('Deleted!')}
                  color="secondary"
                />
                <Chip
                  label="Custom Delete"
                  onDelete={() => alert('Deleted!')}
                  deleteIcon={<CancelIcon />}
                  color="error"
                />
                <Chip
                  label="With Both"
                  onClick={() => alert('Clicked!')}
                  onDelete={() => alert('Deleted!')}
                  color="success"
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Custom Styled Chips */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Custom Styled Chips
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Chips with custom styles and effects.
              </Typography>

              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip
                  label="Gradient Primary"
                  gradient
                  color="primary"
                />
                <Chip
                  label="Gradient Success"
                  gradient
                  color="success"
                />
                <Chip
                  label="Elevated"
                  elevated
                  color="secondary"
                />
                <Chip
                  label="Rounded"
                  rounded
                  color="info"
                />
                <Chip
                  label="All Effects"
                  gradient
                  elevated
                  rounded
                  color="warning"
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
