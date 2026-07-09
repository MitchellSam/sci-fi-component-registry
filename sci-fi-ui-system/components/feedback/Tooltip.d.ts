import * as React from 'react';

/** Lightweight hover/focus tooltip. For rich item tooltips use Plate. */
export interface TooltipProps {
  label: React.ReactNode;
  /** @default "top" */
  side?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function Tooltip(props: TooltipProps): JSX.Element;
