import * as React from 'react';

export interface NavLink { label: React.ReactNode; href?: string; active?: boolean; }

/**
 * Top navigation bar — translucent blurred slate, hairline underline.
 *
 * @startingPoint section="Navigation" subtitle="Top bar: brand, links, actions" viewport="900x80"
 */
export interface NavbarProps {
  /** Left-side brand / wordmark node. */
  brand?: React.ReactNode;
  links?: NavLink[];
  /** Right-side actions (buttons, avatar). */
  actions?: React.ReactNode;
  sticky?: boolean;
  style?: React.CSSProperties;
}

export function Navbar(props: NavbarProps): JSX.Element;
