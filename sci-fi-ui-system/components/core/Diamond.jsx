import React from 'react';

const TONE_MAP = {
  crimson: 'var(--crimson)',
  cyan: 'var(--cyan)',
  gold: 'var(--gold)',
  void: 'var(--void)',
  solar: 'var(--solar)',
  arc: 'var(--arc)',
  neutral: 'var(--slate-500)',
};

/**
 * Diamond / rhombus emblem container — the objective &
 * faction marker. Renders children (an icon, number, or glyph) centered.
 * `framed` adds the thin outer bracket frame seen behind HUD markers.
 */
export function Diamond({ children, size = 72, tone = 'crimson', filled = true, framed = false, style, ...rest }) {
  const color = TONE_MAP[tone] || tone;
  const shape = {
    width: size,
    height: size,
    clipPath: 'polygon(50% 0, 100% 50%, 50% 100%, 0 50%)',
    background: filled ? color : 'transparent',
    border: filled ? 'none' : `2px solid ${color}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: filled ? 'var(--slate-100)' : color,
    fontFamily: 'var(--font-numeric)',
    fontWeight: 'var(--w-light)',
    fontSize: size * 0.3,
  };

  const inner = filled ? (
    <div style={shape} {...rest}>{children}</div>
  ) : (
    <div style={shape} {...rest}>{children}</div>
  );

  if (!framed) return inner;

  return (
    <div
      style={{
        position: 'relative',
        width: size * 1.5,
        height: size * 1.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: size * 1.25,
          height: size * 1.25,
          clipPath: 'polygon(50% 0, 100% 50%, 50% 100%, 0 50%)',
          border: `1px solid color-mix(in srgb, ${color} 55%, transparent)`,
        }}
      />
      {inner}
    </div>
  );
}
