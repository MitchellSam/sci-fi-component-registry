import React from 'react';

/**
 * Notification toast. Angular plate with a tone-colored left edge,
 * a status glyph, title + message. Use standalone or stack several
 * in a fixed corner container.
 */
export function Toast({ tone = 'info', title, children, onClose, glyph, style }) {
  const tones = {
    info:    { c: 'var(--info)',    g: 'ℹ' },
    success: { c: 'var(--success)', g: '✓' },
    warning: { c: 'var(--warning)', g: '!' },
    danger:  { c: 'var(--crimson)', g: '✕' },
    gold:    { c: 'var(--accent)',  g: '★' },
  };
  const t = tones[tone] || tones.info;
  return (
    <div
      role="status"
      style={{
        display: 'flex', alignItems: 'flex-start', gap: 12, width: 340, maxWidth: '100%',
        background: 'var(--surface-overlay)', border: '1px solid var(--border-hairline)',
        borderLeft: `3px solid ${t.c}`, borderRadius: 'var(--radius-0)', boxShadow: 'var(--shadow-pop)',
        padding: '12px 14px', backgroundImage: 'var(--wash-panel)', ...style,
      }}
    >
      <span style={{
        flex: 'none', width: 22, height: 22, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        border: `1px solid ${t.c}`, color: t.c, fontSize: 12, transform: 'rotate(45deg)', marginTop: 1,
      }}><span style={{ transform: 'rotate(-45deg)' }}>{glyph || t.g}</span></span>
      <div style={{ flex: 1, minWidth: 0 }}>
        {title && <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 'var(--w-semibold)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: 2 }}>{title}</div>}
        {children && <div style={{ fontFamily: 'var(--font-text)', fontSize: 13, lineHeight: 1.45, color: 'var(--text-muted)' }}>{children}</div>}
      </div>
      {onClose && (
        <button onClick={onClose} aria-label="Dismiss"
          style={{ background: 'none', border: 'none', color: 'var(--text-faint)', cursor: 'pointer', fontSize: 14, lineHeight: 1, padding: 0, flex: 'none' }}>✕</button>
      )}
    </div>
  );
}
