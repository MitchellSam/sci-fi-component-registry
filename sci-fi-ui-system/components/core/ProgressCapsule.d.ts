import * as React from 'react';

/** Pill-shaped progress bar, continuous or segmented (reputation/objective bar). */
export interface ProgressCapsuleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Continuous fill percent (used when segments = 0). @default 50 */
  value?: number;
  /** Number of discrete segments. 0 = continuous. @default 0 */
  segments?: number;
  /** How many segments are filled. @default 0 */
  filledSegments?: number;
  /** Color tone or CSS color. @default "cyan" */
  tone?: 'cyan' | 'gold' | 'crimson' | 'arc' | 'solar' | 'void' | 'strand' | string;
  /** Bar height in px. @default 12 */
  height?: number;
}

export function ProgressCapsule(props: ProgressCapsuleProps): JSX.Element;
