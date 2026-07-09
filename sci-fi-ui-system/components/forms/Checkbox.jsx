import React from 'react';

/**
 * Angular checkbox — a hard-cornered square that fills gold (or a
 * given tone) with a check when on. Matches the empty-square
 * checkboxes used in reward lists. Controlled via `checked`.
 */
export function Checkbox({ label, checked = false, onChange, disabled = false, tone = 'gold', style, ...rest }) {
  const toneColor = { gold: 'var(--accent)', cyan: 'var(--cyan)', success: 'var(--success)' }[tone] || tone;
  return (
    <label
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1, fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--text-body)',
        userSelect: 'none', ...style,
      }}
    >
      <input type="checkbox" checked={checked} disabled={disabled} onChange={onChange} {...rest}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span
        aria-hidden="true"
        style={{
          width: 18, height: 18, flex: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          border: `1px solid ${checked ? toneColor : 'var(--border-strong)'}`,
          background: checked ? toneColor : 'var(--surface-input)',
          color: 'var(--text-on-accent)', fontSize: 12, lineHeight: 1,
          transition: 'background var(--dur-fast) var(--ease-sharp), border-color var(--dur-fast) var(--ease-sharp)',
        }}
      >
        {checked ? '✓' : ''}
      </span>
      {label}
    </label>
  );
}
