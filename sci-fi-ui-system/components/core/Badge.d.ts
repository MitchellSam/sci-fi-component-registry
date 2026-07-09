import * as React from 'react';

/** Small uppercase tag for status, item rarity, or elemental type. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Color tone — semantic, elemental, or rarity.
   * @default "neutral"
   */
  tone?:
    | 'neutral' | 'gold' | 'cyan' | 'crimson'
    | 'arc' | 'solar' | 'void' | 'stasis'
    | 'common' | 'uncommon' | 'rare' | 'legendary' | 'exotic';
  /** Filled rather than outlined. */
  solid?: boolean;
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
