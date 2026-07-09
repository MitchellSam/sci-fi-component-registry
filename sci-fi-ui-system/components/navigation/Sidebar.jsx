import React from 'react';

/**
 * Vertical sidebar navigation. Pass `sections` as
 * [{ label?, items: [{ label, icon?, value, badge? }] }]. The active
 * item gets a gold left-edge marker, lighter fill, and a ► caret.
 */
export function Sidebar({ sections = [], value, onSelect, header, footer, width = 240, style }) {
  return (
    <aside
      style={{
        display: 'flex', flexDirection: 'column', width, flex: 'none', boxSizing: 'border-box',
        background: 'var(--surface-raised)', borderRight: '1px solid var(--border-hairline)',
        height: '100%', ...style,
      }}
    >
      {header && <div style={{ padding: '18px 18px 14px', borderBottom: '1px solid var(--border-hairline)' }}>{header}</div>}
      <nav style={{ flex: 1, overflowY: 'auto', padding: '12px 10px' }}>
        {sections.map((sec, si) => (
          <div key={si} style={{ marginBottom: 18 }}>
            {sec.label && (
              <div style={{ padding: '0 10px 8px', fontFamily: 'var(--font-display)', fontSize: 10, letterSpacing: 'var(--track-wide)', textTransform: 'uppercase', color: 'var(--text-faint)' }}>{sec.label}</div>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {sec.items.map((it) => {
                const active = it.value === value;
                return (
                  <button
                    key={it.value} onClick={() => onSelect && onSelect(it.value)}
                    style={{
                      position: 'relative', display: 'flex', alignItems: 'center', gap: 10, width: '100%',
                      textAlign: 'left', cursor: 'pointer', border: 'none', borderRadius: 'var(--radius-0)',
                      padding: '9px 12px 9px 14px',
                      background: active ? 'color-mix(in srgb, var(--accent) 12%, transparent)' : 'transparent',
                      color: active ? 'var(--text-primary)' : 'var(--text-muted)',
                      fontFamily: 'var(--font-text)', fontSize: 14, fontWeight: active ? 'var(--w-medium)' : 'var(--w-regular)',
                      transition: 'background var(--dur-fast) var(--ease-sharp), color var(--dur-fast) var(--ease-sharp)',
                    }}
                    onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = 'color-mix(in srgb, var(--surface-panel) 50%, transparent)'; }}
                    onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = 'transparent'; }}
                  >
                    <span style={{ position: 'absolute', left: 0, top: 6, bottom: 6, width: 3, background: active ? 'var(--accent)' : 'transparent' }} />
                    {it.icon && <span style={{ flex: 'none', width: 18, display: 'inline-flex', justifyContent: 'center', color: active ? 'var(--accent-text)' : 'var(--text-faint)' }}>{it.icon}</span>}
                    <span style={{ flex: 1 }}>{it.label}</span>
                    {it.badge != null && <span style={{ fontFamily: 'var(--font-numeric)', fontSize: 11, color: 'var(--text-faint)' }}>{it.badge}</span>}
                    {active && <span aria-hidden="true" style={{ color: 'var(--accent)', fontSize: 11 }}>►</span>}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
      {footer && <div style={{ padding: '14px 18px', borderTop: '1px solid var(--border-hairline)' }}>{footer}</div>}
    </aside>
  );
}
