import React from 'react';

/**
 * Angular toggle switch. Hard-cornered track + knob (no full pill),
 * fills gold when on, slides with a snappy ease. Controlled via `checked`.
 */
export function Switch({ checked = false, onChange, disabled = false, label, tone = 'gold', style, ...rest }) {
  const toneColor = { gold: 'var(--accent)', cyan: 'var(--cyan)', success: 'var(--success)' }[tone] || tone;
  const W = 42, H = 22, pad = 3, knob = H - pad * 2;
  return (
    <label
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1, fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--text-body)',
        userSelect: 'none', ...style,
      }}
    >
      <input type="checkbox" role="switch" checked={checked} disabled={disabled} onChange={onChange} {...rest}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span
        aria-hidden="true"
        style={{
          position: 'relative', width: W, height: H, flex: 'none',
          background: checked ? toneColor : 'var(--surface-input)',
          border: `1px solid ${checked ? toneColor : 'var(--border-strong)'}`,
          borderRadius: 'var(--radius-sm)',
          transition: 'background var(--dur-base) var(--ease-sharp), border-color var(--dur-base) var(--ease-sharp)',
        }}
      >
        <span style={{
          position: 'absolute', top: pad, left: checked ? W - knob - pad - 2 : pad,
          width: knob, height: knob, borderRadius: 'var(--radius-sm)',
          background: checked ? 'var(--text-on-accent)' : 'var(--border-strong)',
          transition: 'left var(--dur-base) var(--ease-out)',
        }} />
      </span>
      {label}
    </label>
  );
}
