import * as React from 'react';

export interface BreadcrumbItem { label: React.ReactNode; href?: string; }

/** Breadcrumb trail; last item renders as current page. */
export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  /** @default "›" */
  separator?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Breadcrumb(props: BreadcrumbProps): JSX.Element;
