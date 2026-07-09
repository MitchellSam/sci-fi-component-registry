import React from 'react';

/**
 * Inline text link. Cyan by default with an animated underline on
 * hover; `variant="nav"` gives uppercase tracked nav-item styling
 * with an active gold underline.
 */
export function Link({ href = '#', children, variant = 'inline', active = false, style, ...rest }) {
  const [hover, setHover] = React.useState(false);

  if (variant === 'nav') {
    return (
      <a
        href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}
        style={{
          position: 'relative', textDecoration: 'none', display: 'inline-flex', alignItems: 'center',
          fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 'var(--w-semibold)',
          letterSpacing: 'var(--track-label)', textTransform: 'uppercase',
          color: active ? 'var(--text-primary)' : hover ? 'var(--text-primary)' : 'var(--text-muted)',
          paddingBottom: 4, transition: 'color var(--dur-fast) var(--ease-sharp)', ...style,
        }}
      >
        {children}
        <span style={{
          position: 'absolute', left: 0, bottom: 0, height: 2,
          width: active ? '100%' : hover ? '100%' : '0%',
          background: active ? 'var(--accent)' : 'var(--border-focus)',
          transition: 'width var(--dur-base) var(--ease-out)',
        }} />
      </a>
    );
  }

  return (
    <a
      href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}
      style={{
        color: 'var(--text-link)', textDecoration: 'none',
        borderBottom: `1px solid ${hover ? 'var(--text-link)' : 'transparent'}`,
        transition: 'border-color var(--dur-fast) var(--ease-sharp)',
        fontFamily: 'inherit', ...style,
      }}
    >
      {children}
    </a>
  );
}
