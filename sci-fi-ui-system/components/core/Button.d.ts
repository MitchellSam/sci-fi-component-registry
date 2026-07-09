import * as React from 'react';

/**
 * Angular, uppercase, tracked button in the 2 HUD style.
 *
 * @startingPoint section="Core" subtitle="Primary / secondary / ghost / danger actions" viewport="700x180"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "secondary" */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** Size. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Optional round HUD prompt token rendered before the label (e.g. "X", "▢"). */
  glyph?: React.ReactNode;
  /** Stretch to fill container width. */
  full?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
