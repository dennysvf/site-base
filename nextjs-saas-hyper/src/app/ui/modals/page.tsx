'use client';

import { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
} from '@mui/material';
import { Modal } from '@/components/ui/Modal';
import { PageContainer } from '@/components/ui/PageContainer';

export default function ModalsPage() {
  const [basicModal, setBasicModal] = useState(false);
  const [scrollModal, setScrollModal] = useState(false);
  const [sizeModal, setSizeModal] = useState<string | null>(null);
  const [formModal, setFormModal] = useState(false);
  const [fullScreenModal, setFullScreenModal] = useState(false);
  const [centerModal, setCenterModal] = useState(false);

  // Gerar conteúdo longo para exemplo de scroll
  const longContent = Array(20)
    .fill(0)
    .map((_, i) => (
      <Typography key={i} paragraph>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent
        commodo cursus magna, vel scelerisque nisl consectetur et.
      </Typography>
    ));

  return (
    <PageContainer title="Modals" subtitle="Demonstração dos diferentes tipos de Modals">
      <Grid container spacing={3}>
        {/* Basic Modal */}
        <Grid item xs={12} lg={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Basic Modal
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Basic modal with title and actions.
              </Typography>

              <Button variant="contained" onClick={() => setBasicModal(true)}>
                Launch Basic Modal
              </Button>

              <Modal
                open={basicModal}
                onClose={() => setBasicModal(false)}
                title="Basic Modal"
                actions={
                  <>
                    <Button onClick={() => setBasicModal(false)}>Cancel</Button>
                    <Button variant="contained" onClick={() => setBasicModal(false)}>
                      Save changes
                    </Button>
                  </>
                }
              >
                <Typography>
                  Modal body text goes here. Showing a basic modal with title and action buttons.
                </Typography>
              </Modal>
            </CardContent>
          </Card>
        </Grid>

        {/* Scrolling Modal */}
        <Grid item xs={12} lg={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Scrolling Modal
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Modal with scrollable content.
              </Typography>

              <Button variant="contained" onClick={() => setScrollModal(true)}>
                Launch Scroll Modal
              </Button>

              <Modal
                open={scrollModal}
                onClose={() => setScrollModal(false)}
                title="Scrolling Modal"
                actions={
                  <Button variant="contained" onClick={() => setScrollModal(false)}>
                    Close
                  </Button>
                }
                scroll="paper"
              >
                {longContent}
              </Modal>
            </CardContent>
          </Card>
        </Grid>

        {/* Different Sizes */}
        <Grid item xs={12} lg={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Different Sizes
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Modals with different maximum widths.
              </Typography>

              <Box sx={{ '& > :not(:last-child)': { mr: 1 } }}>
                <Button variant="contained" onClick={() => setSizeModal('xs')}>
                  Extra Small
                </Button>
                <Button variant="contained" onClick={() => setSizeModal('sm')}>
                  Small
                </Button>
                <Button variant="contained" onClick={() => setSizeModal('md')}>
                  Medium
                </Button>
                <Button variant="contained" onClick={() => setSizeModal('lg')}>
                  Large
                </Button>
              </Box>

              <Modal
                open={!!sizeModal}
                onClose={() => setSizeModal(null)}
                title={`${sizeModal?.toUpperCase()} Modal`}
                maxWidth={sizeModal as any}
                actions={
                  <Button variant="contained" onClick={() => setSizeModal(null)}>
                    Close
                  </Button>
                }
              >
                <Typography>
                  This modal demonstrates different maximum width options.
                </Typography>
              </Modal>
            </CardContent>
          </Card>
        </Grid>

        {/* Form Modal */}
        <Grid item xs={12} lg={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Form Modal
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Modal containing a form.
              </Typography>

              <Button variant="contained" onClick={() => setFormModal(true)}>
                Launch Form Modal
              </Button>

              <Modal
                open={formModal}
                onClose={() => setFormModal(false)}
                title="Login Form"
                actions={
                  <>
                    <Button onClick={() => setFormModal(false)}>Cancel</Button>
                    <Button variant="contained" onClick={() => setFormModal(false)}>
                      Login
                    </Button>
                  </>
                }
              >
                <Box component="form" sx={{ '& > :not(:last-child)': { mb: 2 } }}>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    type="email"
                  />
                  <TextField
                    fullWidth
                    label="Password"
                    variant="outlined"
                    type="password"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Remember me"
                  />
                </Box>
              </Modal>
            </CardContent>
          </Card>
        </Grid>

        {/* Full Screen Modal */}
        <Grid item xs={12} lg={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Full Screen Modal
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Modal that covers the entire screen.
              </Typography>

              <Button variant="contained" onClick={() => setFullScreenModal(true)}>
                Launch Full Screen Modal
              </Button>

              <Modal
                open={fullScreenModal}
                onClose={() => setFullScreenModal(false)}
                title="Full Screen Modal"
                fullScreen
                actions={
                  <Button variant="contained" onClick={() => setFullScreenModal(false)}>
                    Close
                  </Button>
                }
              >
                <Box sx={{ p: 2 }}>
                  <Typography paragraph>
                    This is a full screen modal that is especially useful for mobile devices
                    or when you need to show a lot of content.
                  </Typography>
                  {longContent}
                </Box>
              </Modal>
            </CardContent>
          </Card>
        </Grid>

        {/* Centered Title Modal */}
        <Grid item xs={12} lg={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Centered Title Modal
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Modal with centered title and custom styling.
              </Typography>

              <Button variant="contained" onClick={() => setCenterModal(true)}>
                Launch Centered Modal
              </Button>

              <Modal
                open={centerModal}
                onClose={() => setCenterModal(false)}
                title="Centered Title"
                centerTitle
                actions={
                  <Button variant="contained" onClick={() => setCenterModal(false)}>
                    Close
                  </Button>
                }
              >
                <Typography align="center">
                  This modal demonstrates centered title alignment and custom styling options.
                </Typography>
              </Modal>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
