import * as React from 'react';

/**
 * Decorative HUD frame — the VISUAL DENSITY control. Draws angular
 * corner brackets, a top tick, and an ambient glow around content.
 *
 * @startingPoint section="Surfaces" subtitle="HUD frame — full vs minimal density" viewport="700x240"
 */
export interface CornerFrameProps {
  children?: React.ReactNode;
  /** Preset intensity. @default "full" */
  density?: 'full' | 'minimal';
  /** Bracket / glow / tick color. @default "cyan" */
  tone?: 'cyan' | 'gold' | 'crimson' | string;
  /** Override density: show L-corner brackets. */
  brackets?: boolean;
  /** Override density: ambient glow. */
  glow?: boolean;
  /** Override density: top center tick. */
  tick?: boolean;
  /** Inner padding (px). @default 20 */
  padding?: number;
  style?: React.CSSProperties;
}

export function CornerFrame(props: CornerFrameProps): JSX.Element;
