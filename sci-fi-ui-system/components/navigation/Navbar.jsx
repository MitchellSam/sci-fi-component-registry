import React from 'react';
import { Link } from './Link.jsx';

/**
 * Top navigation bar. A translucent, blurred slate bar with a thin
 * bottom hairline. Slots: `brand` (left), `links` ([{label,href,active}]
 * rendered as nav Links, center/left), and `actions` (right).
 */
export function Navbar({ brand, links = [], actions, sticky = false, style }) {
  return (
    <header
      style={{
        display: 'flex', alignItems: 'center', gap: 28,
        padding: '0 24px', height: 60, width: '100%', boxSizing: 'border-box',
        background: 'color-mix(in srgb, var(--bg-base) 82%, transparent)',
        backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border-hairline)',
        position: sticky ? 'sticky' : 'static', top: 0, zIndex: 50, ...style,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', flex: 'none' }}>{brand}</div>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 22, flex: 1 }}>
        {links.map((l, i) => (
          <Link key={i} href={l.href} variant="nav" active={l.active}>{l.label}</Link>
        ))}
      </nav>
      {actions && <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 'none' }}>{actions}</div>}
    </header>
  );
}
