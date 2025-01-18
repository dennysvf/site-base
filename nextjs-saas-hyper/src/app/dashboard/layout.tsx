import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard - SaaS Hyper',
  description: 'Dashboard do template SaaS Hyper',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}