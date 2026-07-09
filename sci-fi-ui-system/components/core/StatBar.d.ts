import * as React from 'react';

/** Thin labeled stat bar — weapon/armor stat readout (Impact, Range, …). */
export interface StatBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Stat name shown at left. */
  label: React.ReactNode;
  /** Current value. @default 0 */
  value?: number;
  /** Max value. @default 100 */
  max?: number;
  /** Bar color tone or CSS color. @default "neutral" */
  tone?: 'neutral' | 'gold' | 'cyan' | 'arc' | 'solar' | 'void' | string;
  /** Show the numeric value at the right. */
  showValue?: boolean;
}

export function StatBar(props: StatBarProps): JSX.Element;
