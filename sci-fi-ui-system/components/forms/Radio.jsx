import React from 'react';

/**
 * Radio control rendered as a diamond (rotated square).
 * Selected state fills the diamond core with the tone color and
 * lights a cyan rim. Use within a group sharing `name`.
 */
export function Radio({ label, checked = false, onChange, disabled = false, name, value, tone = 'gold', style, ...rest }) {
  const toneColor = { gold: 'var(--accent)', cyan: 'var(--cyan)', success: 'var(--success)' }[tone] || tone;
  return (
    <label
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1, fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--text-body)',
        userSelect: 'none', ...style,
      }}
    >
      <input type="radio" name={name} value={value} checked={checked} disabled={disabled} onChange={onChange} {...rest}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span
        aria-hidden="true"
        style={{
          width: 16, height: 16, flex: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          transform: 'rotate(45deg)',
          border: `1px solid ${checked ? toneColor : 'var(--border-strong)'}`,
          background: 'var(--surface-input)',
          transition: 'border-color var(--dur-fast) var(--ease-sharp)',
        }}
      >
        <span style={{
          width: 8, height: 8,
          background: checked ? toneColor : 'transparent',
          transition: 'background var(--dur-fast) var(--ease-sharp)',
        }} />
      </span>
      {label}
    </label>
  );
}
