import * as React from 'react';

/** Notification toast with tone-colored edge + status glyph. */
export interface ToastProps {
  /** @default "info" */
  tone?: 'info' | 'success' | 'warning' | 'danger' | 'gold';
  title?: React.ReactNode;
  children?: React.ReactNode;
  onClose?: () => void;
  /** Override the default status glyph. */
  glyph?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Toast(props: ToastProps): JSX.Element;
