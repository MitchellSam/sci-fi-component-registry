import React from 'react';

const TONES = {
  neutral:   { fg: 'var(--text-primary)', bd: 'var(--border-strong)', bg: 'color-mix(in srgb, var(--surface-panel) 60%, transparent)' },
  gold:      { fg: 'var(--gold-bright)', bd: 'var(--gold)', bg: 'color-mix(in srgb, var(--gold) 16%, transparent)' },
  cyan:      { fg: 'var(--cyan-bright)', bd: 'var(--cyan)', bg: 'color-mix(in srgb, var(--cyan) 16%, transparent)' },
  crimson:   { fg: 'var(--crimson-bright)', bd: 'var(--crimson)', bg: 'color-mix(in srgb, var(--crimson) 18%, transparent)' },
  arc:       { fg: 'var(--arc)', bd: 'var(--arc)', bg: 'color-mix(in srgb, var(--arc) 16%, transparent)' },
  solar:     { fg: 'var(--solar)', bd: 'var(--solar)', bg: 'color-mix(in srgb, var(--solar) 16%, transparent)' },
  void:      { fg: 'var(--void)', bd: 'var(--void)', bg: 'color-mix(in srgb, var(--void) 18%, transparent)' },
  stasis:    { fg: 'var(--stasis)', bd: 'var(--stasis)', bg: 'color-mix(in srgb, var(--stasis) 18%, transparent)' },
  // rarities
  common:    { fg: 'var(--rarity-common)', bd: 'var(--rarity-common)', bg: 'color-mix(in srgb, var(--rarity-common) 12%, transparent)' },
  uncommon:  { fg: 'var(--rarity-uncommon)', bd: 'var(--rarity-uncommon)', bg: 'color-mix(in srgb, var(--rarity-uncommon) 18%, transparent)' },
  rare:      { fg: 'var(--rarity-rare)', bd: 'var(--rarity-rare)', bg: 'color-mix(in srgb, var(--rarity-rare) 20%, transparent)' },
  legendary: { fg: 'color-mix(in srgb, var(--rarity-legendary) 60%, white)', bd: 'var(--rarity-legendary)', bg: 'color-mix(in srgb, var(--rarity-legendary) 28%, transparent)' },
  exotic:    { fg: 'var(--rarity-exotic)', bd: 'var(--rarity-exotic)', bg: 'color-mix(in srgb, var(--rarity-exotic) 16%, transparent)' },
};

/**
 * Small uppercase status / rarity / element tag.
 * `solid` fills with the tone color; otherwise it's an outlined chip.
 */
export function Badge({ children, tone = 'neutral', solid = false, style, ...rest }) {
  const t = TONES[tone] || TONES.neutral;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '4px 10px',
    fontFamily: 'var(--font-display)',
    fontSize: 11,
    fontWeight: 'var(--w-semibold)',
    letterSpacing: 'var(--track-label)',
    textTransform: 'uppercase',
    borderRadius: 'var(--radius-0)',
    lineHeight: 1,
    border: `1px solid ${t.bd}`,
    color: solid ? 'var(--slate-1000)' : t.fg,
    background: solid ? t.bd : t.bg,
    ...style,
  };
  return (
    <span style={base} {...rest}>
      {children}
    </span>
  );
}
