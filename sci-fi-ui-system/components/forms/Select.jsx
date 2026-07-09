import React from 'react';

/**
 * Native <select> styled to match Input — angular, hairline,
 * cyan focus rim, with a chevron glyph. Pass options as
 * [{value,label}] or use children <option>s.
 */
export function Select({ label, hint, error, options, children, full = true, id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId();
  const fieldId = id || reactId;

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
      <div style={{ position: 'relative', display: 'flex' }}>
        <select
          id={fieldId}
          onFocus={(e) => { setFocus(true); rest.onFocus && rest.onFocus(e); }}
          onBlur={(e) => { setFocus(false); rest.onBlur && rest.onBlur(e); }}
          {...rest}
          style={{
            appearance: 'none', WebkitAppearance: 'none', width: '100%',
            background: 'var(--surface-input)',
            border: `1px solid ${error ? 'var(--crimson)' : focus ? 'var(--border-focus)' : 'var(--border-input)'}`,
            boxShadow: focus && !error ? 'var(--glow-focus)' : 'none',
            padding: '11px 36px 11px 13px', outline: 'none', cursor: 'pointer',
            color: 'var(--text-primary)', fontFamily: 'var(--font-text)', fontSize: 14,
            letterSpacing: 'var(--track-tight)', borderRadius: 0,
            transition: 'border-color var(--dur-fast) var(--ease-sharp), box-shadow var(--dur-fast) var(--ease-sharp)',
          }}
        >
          {options ? options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>) : children}
        </select>
        <span style={{
          position: 'absolute', right: 13, top: '50%', transform: 'translateY(-50%)',
          pointerEvents: 'none', color: 'var(--text-faint)', fontSize: 11,
        }}>▼</span>
      </div>
      {(hint || error) && (
        <span style={{ fontFamily: 'var(--font-text)', fontSize: 12, color: error ? 'var(--crimson-bright)' : 'var(--text-faint)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
