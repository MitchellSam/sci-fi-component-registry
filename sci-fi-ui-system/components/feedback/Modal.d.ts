import * as React from 'react';

/**
 * Centered modal dialog over a dimmed, blurred scrim — angular surface,
 * gold top-edge accent, optional cyan corner brackets.
 *
 * @startingPoint section="Feedback" subtitle="Dialog with scrim, brackets & actions" viewport="700x420"
 */
export interface ModalProps {
  open: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  /** Small uppercase line above the title. */
  eyebrow?: React.ReactNode;
  /** Footer node — typically right-aligned Buttons. */
  footer?: React.ReactNode;
  /** Cyan L-brackets on the corners. @default true */
  brackets?: boolean;
  /** @default 460 */
  width?: number;
  children?: React.ReactNode;
}

export function Modal(props: ModalProps): JSX.Element | null;
