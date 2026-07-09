import React from 'react';

/**
 * Loading spinner — a rotating angular ring (conic sweep) in the
 * chosen tone. Sci-fi, mechanical; no bouncy easing. Optional
 * uppercase caption below.
 */
export function Spinner({ size = 32, tone = 'gold', thickness = 3, caption, style }) {
  const tones = { gold: 'var(--accent)', cyan: 'var(--cyan)', crimson: 'var(--crimson)' };
  const c = tones[tone] || tone;
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 10, ...style }}>
      <span
        aria-label="Loading" role="status"
        style={{
          width: size, height: size, borderRadius: '50%', display: 'inline-block',
          background: `conic-gradient(from 0deg, transparent 0deg, ${c} 300deg)`,
          WebkitMask: `radial-gradient(farthest-side, transparent calc(100% - ${thickness}px), #000 calc(100% - ${thickness}px))`,
          mask: `radial-gradient(farthest-side, transparent calc(100% - ${thickness}px), #000 calc(100% - ${thickness}px))`,
          animation: 'ds-spin 0.8s linear infinite',
        }}
      />
      {caption && <span style={{ fontFamily: 'var(--font-display)', fontSize: 10, letterSpacing: 'var(--track-wide)', textTransform: 'uppercase', color: 'var(--text-faint)' }}>{caption}</span>}
      <style>{'@keyframes ds-spin{to{transform:rotate(360deg)}}'}</style>
    </div>
  );
}
