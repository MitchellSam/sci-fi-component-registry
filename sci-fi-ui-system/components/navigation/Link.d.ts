import * as React from 'react';

/** Inline text link, or an uppercase nav-item with active underline. */
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** @default "inline" */
  variant?: 'inline' | 'nav';
  /** Active state (nav variant): gold underline. */
  active?: boolean;
  children?: React.ReactNode;
}

export function Link(props: LinkProps): JSX.Element;
