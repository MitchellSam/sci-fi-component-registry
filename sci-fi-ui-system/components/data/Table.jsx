import React from 'react';

/**
 * Angular data table. Hairline grid, uppercase tracked header on a
 * raised panel fill, zebra-free rows with hover highlight, optional
 * gold left-edge on the active row. Sortable headers when `onSort`
 * is provided. Define columns declaratively; pass plain row objects.
 *
 * columns: [{ key, header, width?, align?, sortable?, render?(value,row) }]
 */
export function Table({ columns = [], rows = [], rowKey, activeKey, onRowClick, sort, onSort, dense = false, style }) {
  const pad = dense ? '8px 14px' : '13px 18px';

  const headerClick = (col) => {
    if (!col.sortable || !onSort) return;
    const dir = sort && sort.key === col.key && sort.dir === 'asc' ? 'desc' : 'asc';
    onSort({ key: col.key, dir });
  };

  return (
    <div style={{ border: '1px solid var(--border-hairline)', background: 'var(--surface-card)', overflowX: 'auto', ...style }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-text)' }}>
        <thead>
          <tr style={{ background: 'var(--surface-panel)' }}>
            {columns.map((col) => {
              const active = sort && sort.key === col.key;
              return (
                <th
                  key={col.key}
                  onClick={() => headerClick(col)}
                  style={{
                    textAlign: col.align || 'left', padding: pad, width: col.width,
                    whiteSpace: 'nowrap', userSelect: 'none',
                    cursor: col.sortable && onSort ? 'pointer' : 'default',
                    fontFamily: 'var(--font-display)', fontSize: 10, fontWeight: 'var(--w-semibold)',
                    letterSpacing: 'var(--track-label)', textTransform: 'uppercase',
                    color: active ? 'var(--accent-text)' : 'var(--text-faint)',
                    borderBottom: '1px solid var(--border-hairline)',
                  }}
                >
                  {col.header}
                  {col.sortable && (
                    <span style={{ marginLeft: 6, opacity: active ? 1 : 0.35, fontSize: 9 }}>
                      {active ? (sort.dir === 'asc' ? '▲' : '▼') : '▾'}
                    </span>
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const key = rowKey ? row[rowKey] : i;
            const active = activeKey != null && key === activeKey;
            return (
              <tr
                key={key}
                onClick={() => onRowClick && onRowClick(row)}
                style={{
                  borderTop: i === 0 ? 'none' : '1px solid var(--border-hairline)',
                  background: active ? 'color-mix(in srgb, var(--accent) 10%, transparent)' : 'transparent',
                  cursor: onRowClick ? 'pointer' : 'default',
                  transition: 'background var(--dur-fast) var(--ease-sharp)',
                }}
                onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = 'color-mix(in srgb, var(--surface-panel) 55%, transparent)'; }}
                onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = 'transparent'; }}
              >
                {columns.map((col, ci) => (
                  <td
                    key={col.key}
                    style={{
                      padding: pad, textAlign: col.align || 'left',
                      fontSize: 14, color: ci === 0 ? 'var(--text-primary)' : 'var(--text-body)',
                      fontWeight: ci === 0 ? 'var(--w-medium)' : 'var(--w-regular)',
                      position: 'relative',
                      fontFamily: col.numeric ? 'var(--font-numeric)' : 'var(--font-text)',
                      letterSpacing: col.numeric ? 'var(--track-tight)' : 'normal',
                    }}
                  >
                    {ci === 0 && active && <span style={{ position: 'absolute', left: 0, top: 6, bottom: 6, width: 3, background: 'var(--accent)' }} />}
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
