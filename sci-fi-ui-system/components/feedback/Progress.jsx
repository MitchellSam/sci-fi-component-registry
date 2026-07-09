import React from 'react';

/**
 * Linear progress / meter bar. A thin angular track with a filled
 * portion in the chosen tone, optional uppercase label + numeric
 * readout, and an optional indeterminate sweep. For the segmented
 * pill style use ProgressCapsule instead.
 */
export function Progress({ value = 0, max = 100, tone = 'gold', label, showValue = false, indeterminate = false, height = 6, style }) {
  const tones = { gold: 'var(--accent)', cyan: 'var(--cyan)', crimson: 'var(--crimson)', success: 'var(--success)' };
  const c = tones[tone] || tone;
  const pct = Math.max(0, Math.min(100, (value / max) * 100));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: '100%', ...style }}>
      {(label || showValue) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          {label && <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, letterSpacing: 'var(--track-label)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{label}</span>}
          {showValue && <span style={{ fontFamily: 'var(--font-numeric)', fontWeight: 'var(--w-light)', fontSize: 13, color: 'var(--text-primary)' }}>{Math.round(pct)}<span style={{ color: 'var(--text-faint)', fontSize: 11 }}>%</span></span>}
        </div>
      )}
      <div
        role="progressbar" aria-valuenow={indeterminate ? undefined : Math.round(pct)} aria-valuemin={0} aria-valuemax={100}
        style={{ position: 'relative', height, width: '100%', background: 'var(--surface-input)', border: '1px solid var(--border-hairline)', overflow: 'hidden' }}
      >
        {indeterminate ? (
          <div style={{ position: 'absolute', top: 0, bottom: 0, width: '40%', background: c, boxShadow: `0 0 10px -2px ${c}`, animation: 'ds-prog-sweep 1.1s var(--ease-sharp) infinite' }} />
        ) : (
          <div style={{ height: '100%', width: `${pct}%`, background: c, boxShadow: `0 0 10px -2px ${c}`, transition: 'width var(--dur-slow) var(--ease-out)' }} />
        )}
      </div>
      <style>{'@keyframes ds-prog-sweep{0%{left:-40%}100%{left:100%}}'}</style>
    </div>
  );
}
