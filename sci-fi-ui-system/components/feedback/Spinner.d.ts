import * as React from 'react';

/** Rotating angular ring loading spinner. */
export interface SpinnerProps {
  /** Diameter in px. @default 32 */
  size?: number;
  /** @default "gold" */
  tone?: 'gold' | 'cyan' | 'crimson' | string;
  /** Ring thickness in px. @default 3 */
  thickness?: number;
  /** Uppercase caption below the ring. */
  caption?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Spinner(props: SpinnerProps): JSX.Element;
