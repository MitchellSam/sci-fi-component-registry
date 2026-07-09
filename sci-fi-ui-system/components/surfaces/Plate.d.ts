import * as React from 'react';

/**
 * The signature tooltip plate — a category-colored header band over a body.
 * The category hue encodes content type and paints the top accent edge.
 *
 * @startingPoint section="Surfaces" subtitle="Category-coded tooltip / info plate" viewport="700x320"
 */
export interface PlateProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Content category → header/accent color.
   * story=blue, npc=green, competitive=red, investment=purple.
   * @default "story"
   */
  category?: 'story' | 'npc' | 'competitive' | 'investment' | 'neutral' | 'gold' | string;
  /** Small uppercase eyebrow above the title. */
  eyebrow?: React.ReactNode;
  /** Main uppercase title. */
  title?: React.ReactNode;
  /** Emblem/icon node at the left of the header. */
  emblem?: React.ReactNode;
  /** Node pinned to the right of the header (progress dots, etc). */
  headerRight?: React.ReactNode;
  /** Optional fixed width. */
  width?: number | string;
  /** Body content. */
  children?: React.ReactNode;
}

export function Plate(props: PlateProps): JSX.Element;
