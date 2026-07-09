import * as React from 'react';

/** Linear progress / meter bar. For segmented pills use ProgressCapsule. */
export interface ProgressProps {
  value?: number;
  /** @default 100 */
  max?: number;
  /** @default "gold" */
  tone?: 'gold' | 'cyan' | 'crimson' | 'success' | string;
  label?: React.ReactNode;
  /** Show a numeric percentage readout. */
  showValue?: boolean;
  /** Indeterminate sweeping animation. */
  indeterminate?: boolean;
  /** Track height in px. @default 6 */
  height?: number;
  style?: React.CSSProperties;
}

export function Progress(props: ProgressProps): JSX.Element;
