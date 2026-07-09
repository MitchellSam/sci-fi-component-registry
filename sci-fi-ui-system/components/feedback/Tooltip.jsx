import React from 'react';

/**
 * Lightweight hover/focus tooltip. Wraps its trigger child and
 * shows an angular dark label on a chosen side. For rich item
 * tooltips use the Plate component instead.
 */
export function Tooltip({ label, side = 'top', children, style }) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top:    { bottom: '100%', left: '50%', marginBottom: 8, translate: '-50% 0' },
    bottom: { top: '100%', left: '50%', marginTop: 8, translate: '-50% 0' },
    left:   { right: '100%', top: '50%', marginRight: 8, translate: '0 -50%' },
    right:  { left: '100%', top: '50%', marginLeft: 8, translate: '0 -50%' },
  }[side];

  return (
    <span
      style={{ position: 'relative', display: 'inline-flex', ...style }}
      onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)} onBlur={() => setShow(false)}
    >
      {children}
      {show && (
        <span
          role="tooltip"
          style={{
            position: 'absolute', zIndex: 1100, whiteSpace: 'nowrap', pointerEvents: 'none',
            background: 'var(--surface-overlay)', color: 'var(--text-primary)',
            border: '1px solid var(--border-strong)', borderTop: '2px solid var(--border-focus)',
            boxShadow: 'var(--shadow-pop)', padding: '6px 10px',
            fontFamily: 'var(--font-display)', fontSize: 11, letterSpacing: 'var(--track-label)', textTransform: 'uppercase',
            ...pos,
          }}
        >
          {label}
        </span>
      )}
    </span>
  );
}
