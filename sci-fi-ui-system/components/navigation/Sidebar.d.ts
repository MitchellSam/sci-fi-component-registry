import * as React from 'react';

export interface SidebarItem { label: React.ReactNode; value: string; icon?: React.ReactNode; badge?: React.ReactNode; }
export interface SidebarSection { label?: React.ReactNode; items: SidebarItem[]; }

/**
 * Vertical sidebar navigation with gold active marker + caret.
 *
 * @startingPoint section="Navigation" subtitle="Vertical app sidebar with sections" viewport="280x520"
 */
export interface SidebarProps {
  sections: SidebarSection[];
  /** Active item value. */
  value?: string;
  onSelect?: (value: string) => void;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  /** @default 240 */
  width?: number;
  style?: React.CSSProperties;
}

export function Sidebar(props: SidebarProps): JSX.Element;
