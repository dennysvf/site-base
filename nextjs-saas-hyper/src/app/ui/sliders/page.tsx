'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
} from '@mui/material';
import { Slider } from '@/components/ui/Slider';
import { PageContainer } from '@/components/ui/PageContainer';

export default function SlidersPage() {
  const [rangeValue, setRangeValue] = useState<number[]>([20, 80]);
  const [volumeValue, setVolumeValue] = useState<number>(30);
  const [temperatureValue, setTemperatureValue] = useState<number>(24);

  return (
    <PageContainer title="Sliders" subtitle="Demonstração dos diferentes tipos de Sliders">
      <Grid container spacing={3}>
        {/* Basic Sliders */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Basic Sliders
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Simple slider with different configurations.
              </Typography>

              <Box sx={{ '& > *': { mb: 4 } }}>
                <Slider defaultValue={30} />
                
                <Slider
                  label="With Label"
                  defaultValue={40}
                  showValue
                />

                <Slider
                  label="With Input"
                  defaultValue={50}
                  showValue
                  showInput
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Range Slider */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Range Slider
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Slider with range selection.
              </Typography>

              <Box sx={{ '& > *': { mb: 4 } }}>
                <Slider
                  label="Price Range"
                  value={rangeValue}
                  onChange={(_, newValue) => setRangeValue(newValue as number[])}
                  valueLabelDisplay="auto"
                  showValue
                  valueFormat={(value) => `$${value}`}
                />

                <Slider
                  label="Range with Marks"
                  defaultValue={[10, 90]}
                  showMarks
                  step={10}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Colors */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Slider Colors
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Sliders with different colors.
              </Typography>

              <Box sx={{ '& > *': { mb: 2 } }}>
                {['primary', 'secondary', 'success', 'error', 'warning', 'info'].map(
                  (color) => (
                    <Slider
                      key={color}
                      defaultValue={50}
                      color={color as any}
                      label={`${color.charAt(0).toUpperCase()}${color.slice(1)}`}
                    />
                  )
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Custom Marks */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Custom Marks
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Slider with custom marks and labels.
              </Typography>

              <Slider
                defaultValue={50}
                customMarks={[
                  { value: 0, label: 'Low' },
                  { value: 50, label: 'Medium' },
                  { value: 100, label: 'High' },
                ]}
                min={0}
                max={100}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Interactive Examples */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Interactive Examples
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Interactive sliders with real-time value updates.
              </Typography>

              <Box sx={{ '& > *': { mb: 4 } }}>
                <Slider
                  label="Volume"
                  value={volumeValue}
                  onChange={(_, newValue) => setVolumeValue(newValue as number)}
                  showValue
                  showInput
                  valueFormat={(value) => `${value}%`}
                />

                <Slider
                  label="Temperature"
                  value={temperatureValue}
                  onChange={(_, newValue) => setTemperatureValue(newValue as number)}
                  min={15}
                  max={30}
                  step={0.5}
                  showValue
                  showInput
                  valueFormat={(value) => `${value}°C`}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Styled Sliders */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Styled Sliders
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Sliders with custom styles and effects.
              </Typography>

              <Box sx={{ '& > *': { mb: 4 } }}>
                <Slider
                  label="Gradient Track"
                  defaultValue={50}
                  gradient
                  showValue
                />

                <Slider
                  label="With Marks"
                  defaultValue={60}
                  showMarks
                  step={20}
                  showValue
                />

                <Slider
                  label="Disabled"
                  defaultValue={30}
                  disabled
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
