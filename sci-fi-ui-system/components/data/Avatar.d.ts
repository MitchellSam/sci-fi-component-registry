import * as React from 'react';

/** user emblem avatar — framed portrait tile with optional power-level badge. */
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Image source. */
  src?: string;
  /** Text fallback when no src. */
  initials?: string;
  /** Tile size in px. @default 48 */
  size?: number;
  /** Power-level badge value (gold diamond chip). */
  power?: number | string;
  /** Frame color tone. @default "cyan" */
  tone?: 'cyan' | 'gold' | 'crimson' | 'arc' | 'solar' | 'void' | string;
}

export function Avatar(props: AvatarProps): JSX.Element;
