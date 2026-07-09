import React from 'react';

/**
 * Rank chevron stack — the progression/valor insignia.
 * Renders `count` nested chevrons; `filled` of them are colored,
 * the rest are dim outlines.
 */
export function RankChevron({ count = 3, filled = 3, tone = 'gold', size = 40, style, ...rest }) {
  const color = {
    gold: 'var(--gold)', cyan: 'var(--cyan)', crimson: 'var(--crimson)',
    arc: 'var(--arc)', solar: 'var(--solar)', void: 'var(--void)',
  }[tone] || tone;

  const chevs = Array.from({ length: count }).map((_, i) => {
    const on = i < filled;
    return (
      <div
        key={i}
        style={{
          width: size,
          height: size * 0.34,
          clipPath: 'polygon(0 0, 50% 60%, 100% 0, 100% 38%, 50% 100%, 0 38%)',
          background: on ? color : 'color-mix(in srgb, var(--slate-400) 40%, transparent)',
          marginTop: i === 0 ? 0 : -size * 0.12,
        }}
      />
    );
  });

  return (
    <div
      style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', ...style }}
      {...rest}
    >
      {chevs}
    </div>
  );
}
