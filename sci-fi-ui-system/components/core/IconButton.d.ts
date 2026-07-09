import * as React from 'react';

/** Round controller-prompt / icon button with an optional uppercase label beside it. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Diameter in px. @default 36 */
  size?: number;
  /** Selected/cyan state. */
  active?: boolean;
  /** Uppercase label rendered to the right of the glyph. */
  label?: React.ReactNode;
  /** Glyph / icon inside the circle. */
  children?: React.ReactNode;
}

export function IconButton(props: IconButtonProps): JSX.Element;
