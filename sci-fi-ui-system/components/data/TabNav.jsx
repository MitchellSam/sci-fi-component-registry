import React from 'react';

/**
 * Top-center tab navigation — the director header
 * (MAP · DIRECTOR · ROSTER). Active tab is a bracketed pill;
 * neighbors show their bumper hint (L1/R1).
 */
export function TabNav({ tabs = [], value, onChange, style, ...rest }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'stretch',
        gap: 8,
        ...style,
      }}
      {...rest}
    >
      {tabs.map((t, i) => {
        const key = t.id ?? t.label ?? i;
        const active = (value ?? tabs[0]?.id ?? tabs[0]?.label) === (t.id ?? t.label);
        return (
          <button
            key={key}
            type="button"
            onClick={() => onChange && onChange(t.id ?? t.label)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '9px 22px',
              background: active ? 'color-mix(in srgb, var(--slate-100) 12%, transparent)' : 'transparent',
              border: `1px solid ${active ? 'var(--border-strong)' : 'transparent'}`,
              borderRadius: 'var(--radius-0)',
              color: active ? 'var(--slate-100)' : 'var(--text-faint)',
              fontFamily: 'var(--font-display)',
              fontSize: 13,
              fontWeight: active ? 'var(--w-semibold)' : 'var(--w-medium)',
              letterSpacing: 'var(--track-wide)',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'color var(--dur-fast) var(--ease-sharp), background var(--dur-fast) var(--ease-sharp)',
            }}
          >
            {t.bumper && (
              <span
                style={{
                  fontSize: 9,
                  padding: '2px 5px',
                  border: '1px solid var(--border-hairline)',
                  color: 'var(--text-faint)',
                  letterSpacing: '0.05em',
                }}
              >
                {t.bumper}
              </span>
            )}
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
