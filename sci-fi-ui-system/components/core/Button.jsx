import React from 'react';

/**
 * 2 Button — angular, uppercase, tracked.
 * Variants: primary (gold fill), secondary (hairline outline), ghost (text),
 * danger (crimson). Optional `glyph` renders a round HUD prompt token before the label.
 */
export function Button({
  children,
  variant = 'secondary',
  size = 'md',
  glyph,
  disabled = false,
  full = false,
  style,
  ...rest
}) {
  const sizes = {
    sm: { padding: '7px 16px', fontSize: 12 },
    md: { padding: '11px 24px', fontSize: 13 },
    lg: { padding: '15px 34px', fontSize: 15 },
  };

  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      border: '1px solid var(--accent)',
      fontWeight: 'var(--w-semibold)',
    },
    secondary: {
      background: 'color-mix(in srgb, var(--surface-card) 70%, transparent)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-strong)',
      fontWeight: 'var(--w-medium)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-muted)',
      border: '1px solid transparent',
      fontWeight: 'var(--w-medium)',
    },
    danger: {
      background: 'var(--crimson)',
      color: 'var(--white)',
      border: '1px solid var(--crimson)',
      fontWeight: 'var(--w-semibold)',
    },
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: full ? '100%' : 'auto',
    fontFamily: 'var(--font-display)',
    letterSpacing: 'var(--track-label)',
    textTransform: 'uppercase',
    borderRadius: 'var(--radius-0)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    transition: 'background var(--dur-fast) var(--ease-sharp), box-shadow var(--dur-fast) var(--ease-sharp), transform var(--dur-fast) var(--ease-sharp)',
    ...sizes[size],
    ...variants[variant],
    ...style,
  };

  const glyphEl = glyph ? (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 20,
        height: 20,
        borderRadius: 'var(--radius-pill)',
        border: '1px solid currentColor',
        fontSize: 11,
        fontFamily: 'var(--font-text)',
        flex: 'none',
      }}
    >
      {glyph}
    </span>
  ) : null;

  return (
    <button
      type="button"
      disabled={disabled}
      style={base}
      onMouseDown={(e) => !disabled && (e.currentTarget.style.transform = 'scale(0.98)')}
      onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      {...rest}
    >
      {glyphEl}
      {children}
    </button>
  );
}
