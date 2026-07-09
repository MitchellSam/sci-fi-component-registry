import * as React from 'react';

/** Angular toggle switch (hard-cornered track + knob). */
export interface SwitchProps {
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  label?: React.ReactNode;
  /** @default "gold" */
  tone?: 'gold' | 'cyan' | 'success' | string;
  style?: React.CSSProperties;
}

export function Switch(props: SwitchProps): JSX.Element;
