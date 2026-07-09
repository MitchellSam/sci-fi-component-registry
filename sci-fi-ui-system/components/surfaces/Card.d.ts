import * as React from 'react';

/** Generic angular dark panel — hairline border, hard corners, optional accent stripe & selection glow. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Left-edge accent stripe — rarity, element, or CSS color. */
  accent?:
    | 'common' | 'uncommon' | 'rare' | 'legendary' | 'exotic'
    | 'gold' | 'cyan' | 'crimson' | 'arc' | 'solar' | 'void' | string;
  /** Cyan selection rim + glow. */
  selected?: boolean;
  /** Pointer cursor + hover affordance. */
  interactive?: boolean;
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
