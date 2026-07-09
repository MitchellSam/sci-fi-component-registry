import React from 'react';

/**
 * Page footer. A top hairline, optional brand/lockup block, and
 * columns of links ([{ heading, items: [{label, href}] }]), with a
 * fine-print row beneath. Dark, generously spaced.
 */
export function Footer({ brand, columns = [], legal, style }) {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-hairline)', background: 'var(--bg-deep)',
        padding: '40px 24px 28px', width: '100%', boxSizing: 'border-box', ...style,
      }}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, maxWidth: 1100, margin: '0 auto' }}>
        {brand && <div style={{ flex: '1 1 220px', minWidth: 200 }}>{brand}</div>}
        {columns.map((col, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 10, minWidth: 130 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 10, letterSpacing: 'var(--track-wide)', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 2 }}>{col.heading}</div>
            {col.items.map((it, j) => (
              <a key={j} href={it.href || '#'} style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--text-muted)', textDecoration: 'none' }}>{it.label}</a>
            ))}
          </div>
        ))}
      </div>
      {legal && (
        <div style={{
          maxWidth: 1100, margin: '32px auto 0', paddingTop: 18, borderTop: '1px solid var(--border-hairline)',
          fontFamily: 'var(--font-text)', fontSize: 12, color: 'var(--text-faint)',
        }}>{legal}</div>
      )}
    </footer>
  );
}
