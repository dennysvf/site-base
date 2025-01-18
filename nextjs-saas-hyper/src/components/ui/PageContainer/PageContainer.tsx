import { ReactNode } from 'react';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageContainerProps = {
  title: string;
  subtitle?: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  children: ReactNode;
};

export const PageContainer = ({ title, subtitle, description, children }: PageContainerProps) => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>{title}</h1>
        {description && <p className="description">{description}</p>}
      </div>
      <div className="page-content">
        {children}
      </div>
    </div>
  );
};
