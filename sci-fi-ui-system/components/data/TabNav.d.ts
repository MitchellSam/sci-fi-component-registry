import * as React from 'react';

export interface TabItem {
  /** Stable id (falls back to label). */
  id?: string;
  /** Uppercase tab label. */
  label: string;
  /** Optional bumper hint chip (e.g. "L1", "R1"). */
  bumper?: string;
}

/** Top-center director-style tab navigation (MAP · DIRECTOR · ROSTER). */
export interface TabNavProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  tabs: TabItem[];
  /** Active tab id/label. */
  value?: string;
  /** Called with the new tab id/label. */
  onChange?: (id: string) => void;
}

export function TabNav(props: TabNavProps): JSX.Element;
