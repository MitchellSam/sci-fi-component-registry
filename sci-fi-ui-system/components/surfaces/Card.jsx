import React from 'react';

/**
 * Generic angular dark card / panel. Hairline border, hard corners,
 * optional rarity/element accent stripe on the left edge, and an
 * optional cyan selection glow.
 */
export function Card({ children, accent, selected = false, interactive = false, style, ...rest }) {
  const accentColor = accent
    ? ({
        common: 'var(--rarity-common)', uncommon: 'var(--rarity-uncommon)',
        rare: 'var(--rarity-rare)', legendary: 'var(--rarity-legendary)',
        exotic: 'var(--rarity-exotic)', gold: 'var(--gold)', cyan: 'var(--cyan)',
        crimson: 'var(--crimson)', arc: 'var(--arc)', solar: 'var(--solar)', void: 'var(--void)',
      }[accent] || accent)
    : null;

  return (
    <div
      style={{
        position: 'relative',
        background: 'color-mix(in srgb, var(--surface-card) 88%, transparent)',
        border: `1px solid ${selected ? 'var(--border-focus)' : 'var(--border-hairline)'}`,
        borderLeft: accentColor ? `3px solid ${accentColor}` : undefined,
        borderRadius: 'var(--radius-0)',
        boxShadow: selected ? 'var(--glow-focus)' : 'none',
        backgroundImage: 'var(--wash-panel)',
        cursor: interactive ? 'pointer' : 'default',
        transition: 'border-color var(--dur-fast) var(--ease-sharp), box-shadow var(--dur-fast) var(--ease-sharp)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
