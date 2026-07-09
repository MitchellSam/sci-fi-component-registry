import * as React from 'react';

/** Reward / objective row — square checkbox + label + optional trailing value. */
export interface RewardRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Reward label. */
  label: React.ReactNode;
  /** Optional trailing value (e.g. "+1000"). */
  value?: React.ReactNode;
  /** Filled/checked state. */
  done?: boolean;
  /** Checkbox + value color tone. @default "gold" */
  tone?: 'gold' | 'cyan' | 'strand' | 'crimson' | string;
}

export function RewardRow(props: RewardRowProps): JSX.Element;
