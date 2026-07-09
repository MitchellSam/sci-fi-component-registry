import * as React from 'react';

/** Angular square checkbox that fills with a check when on. */
export interface CheckboxProps {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  /** Fill color when checked. @default "gold" */
  tone?: 'gold' | 'cyan' | 'success' | string;
  style?: React.CSSProperties;
}

export function Checkbox(props: CheckboxProps): JSX.Element;
