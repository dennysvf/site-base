'use client';

import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  Button,
} from '@mui/material';
import { Progress } from '@/components/ui/Progress';
import { PageContainer } from '@/components/ui/PageContainer';

export default function ProgressPage() {
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });

      setBuffer((oldBuffer) => {
        if (oldBuffer === 100) {
          return 10;
        }
        const diff = Math.random() * 10;
        return Math.min(oldBuffer + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <PageContainer title="Progress" subtitle="Demonstração dos diferentes tipos de Progress">
      <Grid container spacing={3}>
        {/* Linear Progress */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Linear Progress
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Different variants of linear progress.
              </Typography>

              <Box sx={{ '& > *': { mb: 2 } }}>
                <Progress variant="determinate" value={25} />
                <Progress variant="indeterminate" />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Circular Progress */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Circular Progress
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Different sizes and variants of circular progress.
              </Typography>

              <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                <Progress type="circular" value={75} showValue />
                <Progress type="circular" variant="indeterminate" />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Progress Colors */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Progress Colors
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Progress indicators with different colors.
              </Typography>

              <Box sx={{ '& > *': { mb: 2 } }}>
                {['primary', 'secondary', 'success', 'error', 'warning', 'info'].map(
                  (color) => (
                    <Progress
                      key={color}
                      value={75}
                      color={color as any}
                      showValue
                    />
                  )
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Custom Styles */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Custom Styles
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Progress with gradient, striped, and animated effects.
              </Typography>

              <Box sx={{ '& > *': { mb: 2 } }}>
                <Progress value={75} gradient showValue />
                <Progress value={75} striped showValue />
                <Progress value={75} striped animated showValue />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Custom Labels */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Custom Labels
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Progress with custom label formats.
              </Typography>

              <Box sx={{ '& > *': { mb: 2 } }}>
                <Progress
                  value={75}
                  showValue
                  labelFormat={(value) => `${value.toFixed(1)}MB/s`}
                />
                <Progress
                  value={75}
                  showValue
                  labelFormat={(value) => `${value}/100 Complete`}
                />
                <Progress
                  type="circular"
                  size={56}
                  value={75}
                  showValue
                  labelFormat={(value) => `${value}°C`}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Interactive Demo */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Interactive Demo
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Progress with dynamic values.
              </Typography>

              <Box sx={{ width: '100%', '& > *': { mb: 2 } }}>
                <Progress value={progress} showValue />
                <Progress
                  type="circular"
                  size={56}
                  value={progress}
                  showValue
                />
                <Box sx={{ mt: 2 }}>
                  <Button
                    variant="contained"
                    onClick={() => setProgress(0)}
                    sx={{ mr: 1 }}
                  >
                    Reset
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => setProgress(100)}
                  >
                    Complete
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
