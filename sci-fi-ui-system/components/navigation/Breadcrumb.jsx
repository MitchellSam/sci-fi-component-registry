import React from 'react';

/**
 * Breadcrumb trail. Pass `items` as [{label, href}]; the last item
 * renders as the current page (no link). Chevron separators.
 */
export function Breadcrumb({ items = [], separator = '›', style }) {
  return (
    <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 8, ...style }}>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <React.Fragment key={i}>
            {last ? (
              <span style={{
                fontFamily: 'var(--font-display)', fontSize: 11, letterSpacing: 'var(--track-label)', textTransform: 'uppercase',
                color: 'var(--text-primary)',
              }}>{it.label}</span>
            ) : (
              <a href={it.href || '#'} style={{
                fontFamily: 'var(--font-display)', fontSize: 11, letterSpacing: 'var(--track-label)', textTransform: 'uppercase',
                color: 'var(--text-muted)', textDecoration: 'none',
              }}>{it.label}</a>
            )}
            {!last && <span aria-hidden="true" style={{ color: 'var(--text-faint)', fontSize: 12 }}>{separator}</span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
