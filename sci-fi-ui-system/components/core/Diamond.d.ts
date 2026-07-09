import * as React from 'react';

/** Diamond/rhombus emblem container — objective & faction marker. */
export interface DiamondProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Width/height in px. @default 72 */
  size?: number;
  /** Color tone or any CSS color. @default "crimson" */
  tone?: 'crimson' | 'cyan' | 'gold' | 'void' | 'solar' | 'arc' | 'neutral' | string;
  /** Solid fill vs. outline. @default true */
  filled?: boolean;
  /** Add the thin outer diamond bracket frame. */
  framed?: boolean;
  /** Centered content — icon, numeral, or glyph. */
  children?: React.ReactNode;
}

export function Diamond(props: DiamondProps): JSX.Element;
