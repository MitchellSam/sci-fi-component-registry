import React from 'react';

/**
 * Angular text field. Angular, hairline border, uppercase
 * tracked label, cyan focus rim. Supports leading glyph, hint,
 * and error state. Forwards all native <input> props.
 */
export function Input({
  label,
  hint,
  error,
  glyph,
  size = 'md',
  full = true,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId();
  const fieldId = id || reactId;
  const pads = { sm: '8px 10px', md: '11px 13px', lg: '14px 16px' };
  const fsz = { sm: 13, md: 14, lg: 16 };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: full ? '100%' : 'auto', ...style }}>
      {label && (
        <label
          htmlFor={fieldId}
          style={{
            fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 'var(--w-semibold)',
            letterSpacing: 'var(--track-label)', textTransform: 'uppercase',
            color: error ? 'var(--crimson-bright)' : 'var(--text-muted)',
          }}
        >
          {label}
        </label>
      )}
      <div
        style={{
          display: 'flex', alignItems: 'center', gap: 8,
          background: 'var(--surface-input)',
          border: `1px solid ${error ? 'var(--crimson)' : focus ? 'var(--border-focus)' : 'var(--border-input)'}`,
          boxShadow: focus && !error ? 'var(--glow-focus)' : 'none',
          padding: pads[size],
          transition: 'border-color var(--dur-fast) var(--ease-sharp), box-shadow var(--dur-fast) var(--ease-sharp)',
        }}
      >
        {glyph && <span style={{ color: 'var(--text-faint)', display: 'inline-flex', flex: 'none' }}>{glyph}</span>}
        <input
          id={fieldId}
          onFocus={(e) => { setFocus(true); rest.onFocus && rest.onFocus(e); }}
          onBlur={(e) => { setFocus(false); rest.onBlur && rest.onBlur(e); }}
          {...rest}
          style={{
            flex: 1, minWidth: 0, background: 'transparent', border: 'none', outline: 'none',
            color: 'var(--text-primary)', fontFamily: 'var(--font-text)', fontSize: fsz[size],
            letterSpacing: 'var(--track-tight)',
          }}
        />
      </div>
      {(hint || error) && (
        <span style={{ fontFamily: 'var(--font-text)', fontSize: 12, color: error ? 'var(--crimson-bright)' : 'var(--text-faint)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
