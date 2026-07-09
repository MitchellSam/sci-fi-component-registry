import React from 'react';

/**
 * Round HUD prompt / icon button — the circular controller-glyph token
 * seen on "Return", "Dismiss", expand/launch prompts.
 */
export function IconButton({ children, size = 36, active = false, label, style, ...rest }) {
  const btn = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: size,
    height: size,
    borderRadius: 'var(--radius-pill)',
    background: active ? 'var(--cyan)' : 'color-mix(in srgb, var(--slate-700) 80%, transparent)',
    color: active ? 'var(--slate-1000)' : 'var(--text-primary)',
    border: `1px solid ${active ? 'var(--cyan-bright)' : 'var(--border-strong)'}`,
    boxShadow: active ? 'var(--glow-focus)' : 'none',
    cursor: 'pointer',
    fontFamily: 'var(--font-text)',
    fontSize: size * 0.42,
    transition: 'all var(--dur-fast) var(--ease-sharp)',
    flex: 'none',
    ...style,
  };

  const wrap = label
    ? { display: 'inline-flex', alignItems: 'center', gap: 10 }
    : null;

  const button = (
    <button type="button" style={btn} {...rest}>
      {children}
    </button>
  );

  if (!label) return button;
  return (
    <span style={wrap}>
      {button}
      <span
        style={{
          fontFamily: 'var(--font-display)',
          textTransform: 'uppercase',
          letterSpacing: 'var(--track-label)',
          fontSize: 12,
          color: 'var(--text-muted)',
        }}
      >
        {label}
      </span>
    </span>
  );
}
