import * as React from 'react';

export interface SelectOption { value: string; label: string; }

/** Native select styled to match Input, with chevron glyph. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  /** Option list; alternatively pass <option> children. */
  options?: SelectOption[];
  /** @default true */
  full?: boolean;
}

export function Select(props: SelectProps): JSX.Element;
