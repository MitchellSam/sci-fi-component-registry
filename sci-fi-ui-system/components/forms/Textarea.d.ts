import * as React from 'react';

/** Multi-line text field matching Input. */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  /** @default 4 */
  rows?: number;
  /** @default true */
  full?: boolean;
}

export function Textarea(props: TextareaProps): JSX.Element;
