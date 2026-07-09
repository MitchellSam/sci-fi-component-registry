import React from 'react';

/**
 * Multi-line text field matching Input. Angular, cyan focus rim,
 * uppercase tracked label, hint / error states.
 */
export function Textarea({ label, hint, error, rows = 4, full = true, id, style, ...rest }) {
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
      <textarea
        id={fieldId}
        rows={rows}
        onFocus={(e) => { setFocus(true); rest.onFocus && rest.onFocus(e); }}
        onBlur={(e) => { setFocus(false); rest.onBlur && rest.onBlur(e); }}
        {...rest}
        style={{
          width: '100%', boxSizing: 'border-box', resize: 'vertical',
          background: 'var(--surface-input)',
          border: `1px solid ${error ? 'var(--crimson)' : focus ? 'var(--border-focus)' : 'var(--border-input)'}`,
          boxShadow: focus && !error ? 'var(--glow-focus)' : 'none',
          padding: '11px 13px', outline: 'none',
          color: 'var(--text-primary)', fontFamily: 'var(--font-text)', fontSize: 14,
          lineHeight: 'var(--lh-body)', letterSpacing: 'var(--track-tight)',
          transition: 'border-color var(--dur-fast) var(--ease-sharp), box-shadow var(--dur-fast) var(--ease-sharp)',
        }}
      />
      {(hint || error) && (
        <span style={{ fontFamily: 'var(--font-text)', fontSize: 12, color: error ? 'var(--crimson-bright)' : 'var(--text-faint)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
