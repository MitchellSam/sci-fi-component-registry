import React from 'react';

/**
 * Thin labeled stat bar — the weapon/armor stat readout
 * (Impact, Range, Stability…). Label left, thin track right.
 */
export function StatBar({ label, value = 0, max = 100, tone = 'neutral', showValue = false, style, ...rest }) {
  const color = {
    neutral: 'var(--slate-100)', gold: 'var(--gold)', cyan: 'var(--cyan)',
    arc: 'var(--arc)', solar: 'var(--solar)', void: 'var(--void)',
  }[tone] || tone;
  const pct = Math.max(0, Math.min(100, (value / max) * 100));

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '88px 1fr auto',
        alignItems: 'center',
        gap: 12,
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
          fontFamily: 'var(--font-text)',
          fontSize: 12,
          color: 'var(--text-muted)',
          letterSpacing: '0.02em',
        }}
      >
        {label}
      </span>
      <div style={{ height: 5, background: 'color-mix(in srgb, var(--text-primary) 14%, transparent)', borderRadius: 1 }}>
        <div style={{ width: `${pct}%`, height: '100%', background: color, transition: 'width var(--dur-base) var(--ease-out)' }} />
      </div>
      <span
        style={{
          fontFamily: 'var(--font-numeric)',
          fontSize: 13,
          fontWeight: 'var(--w-light)',
          color: 'var(--text-primary)',
          minWidth: 22,
          textAlign: 'right',
          visibility: showValue ? 'visible' : 'hidden',
        }}
      >
        {value}
      </span>
    </div>
  );
}
