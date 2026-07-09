import React from 'react';

/**
 * Centered modal dialog over a dimmed scrim. Angular surface,
 * hairline border, gold top-edge accent bar, optional cyan corner
 * brackets, soft pop shadow. Renders nothing when `open` is false.
 */
export function Modal({ open, onClose, title, eyebrow, footer, brackets = true, width = 460, children }) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const bracket = (pos) => {
    const s = { position: 'absolute', width: 14, height: 14, pointerEvents: 'none', borderColor: 'var(--border-focus)' };
    const o = { tl: { top: -1, left: -1, borderTop: '2px solid', borderLeft: '2px solid' },
      tr: { top: -1, right: -1, borderTop: '2px solid', borderRight: '2px solid' },
      bl: { bottom: -1, left: -1, borderBottom: '2px solid', borderLeft: '2px solid' },
      br: { bottom: -1, right: -1, borderBottom: '2px solid', borderRight: '2px solid' } }[pos];
    return <span style={{ ...s, ...o }} />;
  };

  return (
    <div
      onMouseDown={(e) => e.target === e.currentTarget && onClose && onClose()}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'var(--overlay-scrim)', backdropFilter: 'blur(3px)', WebkitBackdropFilter: 'blur(3px)', padding: 20,
      }}
    >
      <div
        role="dialog" aria-modal="true"
        style={{
          position: 'relative', width, maxWidth: '100%', maxHeight: '90vh', overflow: 'auto',
          background: 'var(--surface-overlay)', borderRadius: 'var(--radius-0)',
          border: '1px solid var(--border-hairline)', borderTop: '3px solid var(--accent)',
          boxShadow: 'var(--shadow-pop)', backgroundImage: 'var(--wash-panel)',
        }}
      >
        {brackets && <React.Fragment>{bracket('tl')}{bracket('tr')}{bracket('bl')}{bracket('br')}</React.Fragment>}
        <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
            <div>
              {eyebrow && <div style={{ fontFamily: 'var(--font-display)', fontSize: 10, letterSpacing: 'var(--track-wide)', textTransform: 'uppercase', color: 'var(--accent-text)', marginBottom: 4 }}>{eyebrow}</div>}
              {title && <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 'var(--w-semibold)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', color: 'var(--text-primary)' }}>{title}</h2>}
            </div>
            {onClose && (
              <button onClick={onClose} aria-label="Close"
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: 18, lineHeight: 1, padding: 2 }}>✕</button>
            )}
          </div>
          <div style={{ fontFamily: 'var(--font-text)', fontSize: 15, lineHeight: 'var(--lh-body)', color: 'var(--text-body)' }}>{children}</div>
          {footer && <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 4 }}>{footer}</div>}
        </div>
      </div>
    </div>
  );
}
