import { Card, CardContent, Avatar, Typography, Box, List, ListItem } from '@mui/material';

type StatItem = {
  label: string;
  value: string;
};

type UserProfileCardProps = {
  avatar: string;
  name: string;
  role: string;
  stats: StatItem[];
};

export function UserProfileCard({ avatar, name, role, stats }: UserProfileCardProps) {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
          <Avatar
            src={avatar}
            sx={{
              width: 100,
              height: 100,
              mr: 4,
              border: (theme) => `5px solid ${theme.palette.background.paper}`,
              boxShadow: 1,
            }}
          />
          <Box>
            <Typography variant="h4" sx={{ mt: 1, mb: 1 }}>
              {name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {role}
            </Typography>

            <List sx={{ display: 'flex', p: 0, mt: 2 }}>
              {stats.map((stat, index) => (
                <ListItem key={index} sx={{ display: 'block', px: 3, py: 0, '&:first-of-type': { pl: 0 } }}>
                  <Typography variant="h5" sx={{ mb: 1 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.label}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
