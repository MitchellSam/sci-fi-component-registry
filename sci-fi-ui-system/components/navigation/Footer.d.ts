import * as React from 'react';

export interface FooterColumn { heading: React.ReactNode; items: { label: React.ReactNode; href?: string }[]; }

/** Page footer — brand block + link columns + fine print. */
export interface FooterProps {
  brand?: React.ReactNode;
  columns?: FooterColumn[];
  legal?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Footer(props: FooterProps): JSX.Element;
