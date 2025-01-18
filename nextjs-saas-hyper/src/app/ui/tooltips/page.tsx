'use client';

import {
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  IconButton,
  Box,
} from '@mui/material';
import {
  Help as HelpIcon,
  Info as InfoIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
} from '@mui/icons-material';
import { Tooltip } from '@/components/ui/Tooltip';
import { PageContainer } from '@/components/ui/PageContainer';

export default function TooltipsPage() {
  return (
    <PageContainer title="Tooltips" subtitle="Demonstração dos diferentes tipos de Tooltips">
      <Grid container spacing={3}>
        {/* Basic Tooltips */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Basic Tooltips
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Basic tooltips with different triggers.
              </Typography>

              <Box display="flex" gap={2}>
                <Tooltip content="Basic tooltip">
                  <Button variant="contained">Hover me</Button>
                </Tooltip>

                <Tooltip content="Icon tooltip">
                  <IconButton>
                    <HelpIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip content="Text tooltip">
                  <Typography
                    component="span"
                    sx={{ textDecoration: 'underline', cursor: 'help' }}
                  >
                    Hover this text
                  </Typography>
                </Tooltip>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Tooltip Variants */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Tooltip Variants
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Different tooltip styles and variants.
              </Typography>

              <Box display="flex" gap={2}>
                <Tooltip content="Dark variant" variant="dark">
                  <Button variant="contained">Dark</Button>
                </Tooltip>

                <Tooltip content="Light variant" variant="light">
                  <Button variant="contained">Light</Button>
                </Tooltip>

                <Tooltip content="Brand variant" variant="brand">
                  <Button variant="contained">Brand</Button>
                </Tooltip>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Tooltip Placements */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Tooltip Placements
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Tooltips with different placement options.
              </Typography>

              <Box display="grid" gridTemplateColumns="repeat(4, auto)" gap={2} justifyContent="center">
                {['top', 'right', 'bottom', 'left'].map((placement) => (
                  <Tooltip
                    key={placement}
                    content={`${placement} placement`}
                    placement={placement as any}
                    arrow
                  >
                    <Button variant="outlined">{placement}</Button>
                  </Tooltip>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Rich Content */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Rich Content
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Tooltips with rich HTML content.
              </Typography>

              <Box display="flex" gap={2}>
                <Tooltip
                  content={
                    <Box>
                      <Typography variant="subtitle2" color="inherit">
                        Information
                      </Typography>
                      <Typography variant="body2" color="inherit">
                        This is a tooltip with multiple lines of text and custom styling.
                      </Typography>
                    </Box>
                  }
                  arrow
                >
                  <IconButton color="info">
                    <InfoIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip
                  content={
                    <Box>
                      <Typography variant="subtitle2" color="inherit">
                        Warning
                      </Typography>
                      <Typography variant="body2" color="inherit">
                        Please be careful with this action.
                      </Typography>
                    </Box>
                  }
                  arrow
                >
                  <IconButton color="warning">
                    <WarningIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip
                  content={
                    <Box>
                      <Typography variant="subtitle2" color="inherit">
                        Error
                      </Typography>
                      <Typography variant="body2" color="inherit">
                        This action cannot be undone.
                      </Typography>
                    </Box>
                  }
                  arrow
                >
                  <IconButton color="error">
                    <ErrorIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Interactive Tooltips */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Interactive Tooltips
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Tooltips that can be interacted with.
              </Typography>

              <Tooltip
                content={
                  <Box>
                    <Typography variant="subtitle2" color="inherit" gutterBottom>
                      Interactive Tooltip
                    </Typography>
                    <Button
                      size="small"
                      variant="contained"
                      color="inherit"
                      onClick={() => alert('Button clicked!')}
                    >
                      Click me
                    </Button>
                  </Box>
                }
                interactive
                arrow
              >
                <Button variant="contained">Interactive Tooltip</Button>
              </Tooltip>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
