import React from 'react';

const CATEGORY = {
  story:       'var(--stasis)',   // blue — story/
  npc:         'var(--strand)',   // green — character/NPC
  competitive: 'var(--crimson)',  // red — PvP/competitive
  investment:  'var(--rarity-legendary)', // purple — item investment
  neutral:     'var(--slate-500)',
  gold:        'var(--gold)',
};

/**
 * Tooltip plate — the signature info card: a category-colored
 * header band (with optional emblem + eyebrow + title), then a body.
 * The category hue also paints the 3px top accent edge.
 */
export function Plate({
  category = 'story',
  eyebrow,
  title,
  emblem,
  headerRight,
  children,
  width,
  style,
  ...rest
}) {
  const accent = CATEGORY[category] || category;

  return (
    <div
      style={{
        width,
        background: 'color-mix(in srgb, var(--slate-800) 92%, transparent)',
        borderTop: `3px solid ${accent}`,
        boxShadow: 'var(--shadow-plate)',
        backdropFilter: 'blur(6px)',
        ...style,
      }}
      {...rest}
    >
      {(title || eyebrow || emblem) && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '12px 16px',
            background: `linear-gradient(90deg, color-mix(in srgb, ${accent} 26%, transparent), color-mix(in srgb, ${accent} 6%, transparent))`,
          }}
        >
          {emblem && <div style={{ flex: 'none', display: 'flex' }}>{emblem}</div>}
          <div style={{ flex: 1, minWidth: 0 }}>
            {eyebrow && (
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 11,
                  letterSpacing: 'var(--track-label)',
                  textTransform: 'uppercase',
                  color: 'color-mix(in srgb, var(--slate-100) 70%, ' + accent + ')',
                  marginBottom: 3,
                }}
              >
                {eyebrow}
              </div>
            )}
            {title && (
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 18,
                  fontWeight: 'var(--w-semibold)',
                  letterSpacing: 'var(--track-label)',
                  textTransform: 'uppercase',
                  color: 'var(--slate-100)',
                  lineHeight: 1.05,
                }}
              >
                {title}
              </div>
            )}
          </div>
          {headerRight && <div style={{ flex: 'none' }}>{headerRight}</div>}
        </div>
      )}
      {children && <div style={{ padding: '14px 16px' }}>{children}</div>}
    </div>
  );
}
