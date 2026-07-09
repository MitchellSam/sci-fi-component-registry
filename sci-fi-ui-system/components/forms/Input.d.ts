import * as React from 'react';

/**
 * Angular text field in the HUD style — uppercase tracked
 * label, hairline border, cyan focus rim, hint / error states.
 *
 * @startingPoint section="Forms" subtitle="Text input with label, hint & error" viewport="700x150"
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Uppercase tracked label above the field. */
  label?: React.ReactNode;
  /** Helper text below the field. */
  hint?: React.ReactNode;
  /** Error message — also turns the field crimson. Overrides hint. */
  error?: React.ReactNode;
  /** Leading glyph/icon inside the field. */
  glyph?: React.ReactNode;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Stretch to fill container width. @default true */
  full?: boolean;
}

export function Input(props: InputProps): JSX.Element;
