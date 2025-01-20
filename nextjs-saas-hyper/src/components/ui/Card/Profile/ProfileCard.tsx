'use client';

import React from 'react';
import {
  Typography,
  Chip,
  Button,
  IconButton,
  Tooltip,
  Box,
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  Verified as VerifiedIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Language as WebsiteIcon,
} from '@mui/icons-material';
import { Card } from '../Base';
import { ProfileCardProps } from './types';
import {
  CoverImage,
  AvatarWrapper,
  Avatar,
  StatusBadge,
  ProfileContent,
  StatsContainer,
  StatItem,
  ActionsContainer,
  SocialLinksContainer,
  BadgesContainer,
} from './styles';

const socialIcons = {
  twitter: TwitterIcon,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  website: WebsiteIcon,
};

const statusColors = {
  online: '#44b700',
  offline: '#bdbdbd',
  away: '#ffa726',
  busy: '#ef5350',
};

export function ProfileCard({
  avatar,
  coverImage,
  name,
  role,
  location,
  bio,
  stats,
  actions,
  socialLinks,
  verified,
  status,
  badges,
  ...props
}: ProfileCardProps) {
  const renderAvatar = () => {
    const avatarComponent = (
      <Avatar
        src={avatar}
        alt={name}
      >
        {!avatar && name.charAt(0)}
      </Avatar>
    );

    if (status) {
      return (
        <StatusBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
          sx={{
            '& .MuiBadge-badge': {
              backgroundColor: statusColors[status],
              color: statusColors[status],
            },
          }}
        >
          {avatarComponent}
        </StatusBadge>
      );
    }

    return avatarComponent;
  };

  const renderSocialLinks = () => {
    if (!socialLinks?.length) return null;

    return (
      <SocialLinksContainer>
        {socialLinks.map(({ platform, url }, index) => {
          const Icon = socialIcons[platform];
          return (
            <Tooltip key={index} title={platform}>
              <IconButton
                size="small"
                onClick={() => window.open(url, '_blank')}
                color="primary"
              >
                <Icon />
              </IconButton>
            </Tooltip>
          );
        })}
      </SocialLinksContainer>
    );
  };

  return (
    <Card variant="bordered" {...props}>
      {coverImage && (
        <CoverImage
          sx={{ backgroundImage: `url(${coverImage})` }}
        />
      )}
      
      <ProfileContent>
        {renderAvatar()}

        <Box sx={{ mt: 2, mb: 1, display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
          {verified && (
            <Tooltip title="Verified">
              <VerifiedIcon color="primary" fontSize="small" />
            </Tooltip>
          )}
        </Box>

        {role && (
          <Typography variant="subtitle1" color="text.secondary">
            {role}
          </Typography>
        )}

        {badges && badges.length > 0 && (
          <BadgesContainer>
            {badges.map((badge, index) => (
              <Chip
                key={index}
                label={badge.label}
                size="small"
                color={badge.color || 'default'}
              />
            ))}
          </BadgesContainer>
        )}

        {location && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 1 }}>
            <LocationIcon fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {location}
            </Typography>
          </Box>
        )}

        {bio && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 2, textAlign: 'center' }}
          >
            {bio}
          </Typography>
        )}

        {renderSocialLinks()}

        {stats && stats.length > 0 && (
          <StatsContainer>
            {stats.map((stat, index) => (
              <StatItem key={index}>
                {stat.icon && (
                  <Box color={stat.color ? `${stat.color}.main` : 'inherit'}>
                    {stat.icon}
                  </Box>
                )}
                <Typography variant="h6" color={stat.color ? `${stat.color}.main` : 'inherit'}>
                  {stat.value}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {stat.label}
                </Typography>
              </StatItem>
            ))}
          </StatsContainer>
        )}

        {actions && actions.length > 0 && (
          <ActionsContainer>
            {actions.map((action, index) => (
              <Button
                key={index}
                variant={action.variant || 'contained'}
                color={action.color || 'primary'}
                onClick={action.onClick}
                startIcon={action.icon}
                size="small"
              >
                {action.label}
              </Button>
            ))}
          </ActionsContainer>
        )}
      </ProfileContent>
    </Card>
  );
}
