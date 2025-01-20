'use client';

import { BaseCardProps } from '../Base';

export interface ProfileStat {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
}

export interface ProfileAction {
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  variant?: 'text' | 'outlined' | 'contained';
}

export interface SocialLink {
  platform: 'twitter' | 'linkedin' | 'github' | 'facebook' | 'instagram' | 'website';
  url: string;
}

export interface ProfileCardProps extends Omit<BaseCardProps, 'children'> {
  avatar?: string;
  coverImage?: string;
  name: string;
  role?: string;
  location?: string;
  bio?: string;
  stats?: ProfileStat[];
  actions?: ProfileAction[];
  socialLinks?: SocialLink[];
  verified?: boolean;
  status?: 'online' | 'offline' | 'away' | 'busy';
  badges?: Array<{
    label: string;
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  }>;
}
