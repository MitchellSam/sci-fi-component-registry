import React from 'react';

/**
 * Segmented progress capsule — the pill-shaped reputation /
 * objective bar split into discrete segments. If `segments` is 0 it
 * renders a continuous fill at `value`%.
 */
export function ProgressCapsule({
  value = 50,
  segments = 0,
  filledSegments = 0,
  tone = 'cyan',
  height = 12,
  style,
  ...rest
}) {
  const color = {
    cyan: 'var(--cyan)', gold: 'var(--gold)', crimson: 'var(--crimson)',
    arc: 'var(--arc)', solar: 'var(--solar)', void: 'var(--void)', strand: 'var(--strand)',
  }[tone] || tone;

  const shell = {
    display: 'flex',
    gap: segments ? 3 : 0,
    height,
    width: '100%',
    background: 'color-mix(in srgb, var(--slate-900) 70%, transparent)',
    border: '1px solid var(--border-hairline)',
    borderRadius: 'var(--radius-pill)',
    overflow: 'hidden',
    padding: segments ? 2 : 0,
    boxSizing: 'border-box',
    ...style,
  };

  if (segments > 0) {
    return (
      <div style={shell} {...rest}>
        {Array.from({ length: segments }).map((_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              background: i < filledSegments ? color : 'transparent',
              borderRadius: 1,
              boxShadow: i < filledSegments ? `0 0 8px -2px ${color}` : 'none',
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div style={shell} {...rest}>
      <div
        style={{
          width: `${Math.max(0, Math.min(100, value))}%`,
          background: color,
          borderRadius: 'var(--radius-pill)',
          boxShadow: `0 0 10px -2px ${color}`,
          transition: 'width var(--dur-base) var(--ease-out)',
        }}
      />
    </div>
  );
}
