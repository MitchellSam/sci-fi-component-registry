import * as React from 'react';

/** Stacked rank chevrons — progression / valor rank insignia. */
export interface RankChevronProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Total chevrons. @default 3 */
  count?: number;
  /** How many are filled (colored). @default 3 */
  filled?: number;
  /** Color tone or CSS color. @default "gold" */
  tone?: 'gold' | 'cyan' | 'crimson' | 'arc' | 'solar' | 'void' | string;
  /** Chevron width in px. @default 40 */
  size?: number;
}

export function RankChevron(props: RankChevronProps): JSX.Element;
