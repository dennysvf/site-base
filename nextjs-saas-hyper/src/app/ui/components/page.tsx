import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { Button } from '@/components/ui/Button/Button';
import { Badge } from '@/components/ui/Badge/Badge';
import { Avatar } from '@/components/ui/Avatar/Avatar';
import MailIcon from '@mui/icons-material/Mail';
import SendIcon from '@mui/icons-material/Send';
import PageContainer from '@/components/container/PageContainer';

export default function ComponentsPage() {
  return (
    <PageContainer title="UI Components" description="Examples of our UI components">
      <Grid container spacing={3}>
        {/* Buttons Section */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Buttons
              </Typography>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                <Button color="primary" variant="contained">Primary</Button>
                <Button color="secondary" variant="contained">Secondary</Button>
                <Button color="success" variant="contained">Success</Button>
                <Button color="error" variant="contained">Danger</Button>
                <Button color="warning" variant="contained">Warning</Button>
                <Button color="info" variant="contained">Info</Button>
              </div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                <Button color="primary" variant="outlined">Primary</Button>
                <Button color="secondary" variant="outlined">Secondary</Button>
                <Button color="success" variant="outlined">Success</Button>
                <Button color="error" variant="outlined">Danger</Button>
                <Button color="warning" variant="outlined">Warning</Button>
                <Button color="info" variant="outlined">Info</Button>
              </div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                <Button color="primary" variant="contained" startIcon={<SendIcon />}>With Icon</Button>
                <Button color="primary" variant="contained" disabled>Disabled</Button>
                <Button color="primary" variant="text">Text</Button>
              </div>
            </CardContent>
          </Card>
        </Grid>

        {/* Badges Section */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Badges
              </Typography>
              <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                <Badge badgeContent={4} color="primary">
                  <MailIcon />
                </Badge>
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
                <Badge badgeContent={4} color="success">
                  <MailIcon />
                </Badge>
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Badge variant="dot" color="primary">
                  <MailIcon />
                </Badge>
                <Badge badgeContent={4} color="primary" max={99}>
                  <MailIcon />
                </Badge>
                <Badge badgeContent={0} color="primary" showZero>
                  <MailIcon />
                </Badge>
              </div>
            </CardContent>
          </Card>
        </Grid>

        {/* Avatars Section */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Avatars
              </Typography>
              <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', alignItems: 'center' }}>
                <Avatar sx={{ width: 24, height: 24 }}>S</Avatar>
                <Avatar>M</Avatar>
                <Avatar sx={{ width: 56, height: 56 }}>L</Avatar>
                <Avatar sx={{ width: 72, height: 72 }}>72</Avatar>
              </div>
              <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                <Avatar src="https://i.pravatar.cc/300?img=1" />
                <Avatar src="https://i.pravatar.cc/300?img=2" />
                <Avatar src="https://i.pravatar.cc/300?img=3" />
                <Avatar src="https://i.pravatar.cc/300?img=4" />
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
