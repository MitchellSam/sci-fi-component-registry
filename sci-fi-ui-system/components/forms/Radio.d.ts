import * as React from 'react';

/** Radio control rendered as a diamond. Group via shared `name`. */
export interface RadioProps {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  name?: string;
  value?: string;
  /** @default "gold" */
  tone?: 'gold' | 'cyan' | 'success' | string;
  style?: React.CSSProperties;
}

export function Radio(props: RadioProps): JSX.Element;
