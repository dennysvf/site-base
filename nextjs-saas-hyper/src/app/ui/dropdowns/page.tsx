'use client';

import { Card, CardContent, Grid, Typography, Button } from '@mui/material';
import {
  Settings as SettingsIcon,
  Person as PersonIcon,
  ExitToApp as ExitToAppIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  MoreVert as MoreVertIcon,
} from '@mui/icons-material';
import { Dropdown } from '@/components/ui/Dropdown';
import type { DropdownItem } from '@/components/ui/Dropdown';
import { PageContainer } from '@/components/ui/PageContainer';

const coloredItems: DropdownItem[] = [
  {
    key: 'item1',
    label: 'Primary Item',
    color: 'primary',
  },
  {
    key: 'item2',
    label: 'Success Item',
    color: 'success',
  },
  {
    key: 'item3',
    label: 'Warning Item',
    color: 'warning',
  },
  {
    key: 'item4',
    label: 'Error Item',
    color: 'error',
  },
];

const iconItems: DropdownItem[] = [
  {
    key: 'profile',
    label: 'Profile',
    icon: <PersonIcon />,
  },
  {
    key: 'settings',
    label: 'Settings',
    icon: <SettingsIcon />,
  },
  {
    key: 'divider1',
    label: '',
    divider: true,
  },
  {
    key: 'logout',
    label: 'Logout',
    icon: <ExitToAppIcon />,
    color: 'error',
  },
];

const actionItems: DropdownItem[] = [
  {
    key: 'edit',
    label: 'Edit',
    icon: <EditIcon />,
  },
  {
    key: 'delete',
    label: 'Delete',
    icon: <DeleteIcon />,
    color: 'error',
  },
];

export default function DropdownsPage() {
  return (
    <PageContainer title="Dropdowns" subtitle="Demonstração dos diferentes tipos de Dropdowns">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Dropdowns
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Basic Dropdowns
              </Typography>

              <Grid container spacing={2}>
                <Grid item>
                  <Dropdown
                    items={coloredItems}
                    trigger="Basic"
                    variant="outlined"
                  />
                </Grid>
                <Grid item>
                  <Dropdown
                    items={coloredItems}
                    trigger="With Icon"
                    variant="outlined"
                    icon={<SettingsIcon />}
                  />
                </Grid>
                <Grid item>
                  <Dropdown
                    items={coloredItems}
                    trigger={<MoreVertIcon />}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Dropdown Variants
              </Typography>

              <Grid container spacing={2}>
                <Grid item>
                  <Dropdown items={iconItems} variant="text" trigger="Text" />
                </Grid>
                <Grid item>
                  <Dropdown items={iconItems} variant="outlined" trigger="Outlined" />
                </Grid>
                <Grid item>
                  <Dropdown items={iconItems} variant="contained" trigger="Contained" />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Dropdown Colors
              </Typography>

              <Grid container spacing={2}>
                <Grid item>
                  <Dropdown items={coloredItems} color="primary" variant="contained" trigger="Primary" />
                </Grid>
                <Grid item>
                  <Dropdown items={coloredItems} color="success" variant="contained" trigger="Success" />
                </Grid>
                <Grid item>
                  <Dropdown items={coloredItems} color="warning" variant="contained" trigger="Warning" />
                </Grid>
                <Grid item>
                  <Dropdown items={coloredItems} color="error" variant="contained" trigger="Error" />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                With Actions
              </Typography>

              <Grid container spacing={2}>
                <Grid item>
                  <Dropdown
                    items={actionItems}
                    trigger={
                      <Button variant="outlined" startIcon={<MoreVertIcon />}>
                        Actions
                      </Button>
                    }
                  />
                </Grid>
                <Grid item>
                  <Dropdown
                    items={actionItems}
                    trigger={
                      <Button variant="contained" startIcon={<MoreVertIcon />}>
                        Actions
                      </Button>
                    }
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
