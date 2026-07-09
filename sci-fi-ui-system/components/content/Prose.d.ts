import * as React from 'react';

/**
 * Long-form / article typography wrapper. Styles raw HTML children
 * (headings, p, lists, blockquote, links, code, img…) with the
 * type system tuned for reading. Theme-aware.
 *
 * @startingPoint section="Content" subtitle="Article / long-form typography" viewport="760x520"
 */
export interface ProseProps {
  children?: React.ReactNode;
  /** Max reading column width (CSS length). @default "var(--measure)" */
  measure?: string;
  /** Body text size. @default "md" */
  size?: 'md' | 'lg';
  style?: React.CSSProperties;
}

export function Prose(props: ProseProps): JSX.Element;
