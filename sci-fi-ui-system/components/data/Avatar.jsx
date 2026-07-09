import React from 'react';

/**
 * user emblem avatar — a small framed portrait tile with a
 * thin bracket border and optional power-level / class badge.
 * Pass `src` for an image, or `initials` for a text fallback.
 */
export function Avatar({ src, initials, size = 48, power, tone = 'cyan', style, ...rest }) {
  const color = {
    cyan: 'var(--cyan)', gold: 'var(--gold)', crimson: 'var(--crimson)',
    arc: 'var(--arc)', solar: 'var(--solar)', void: 'var(--void)',
  }[tone] || tone;

  return (
    <div style={{ position: 'relative', display: 'inline-flex', ...style }} {...rest}>
      <div
        style={{
          width: size,
          height: size,
          border: `1px solid ${color}`,
          background: 'var(--slate-800)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          boxShadow: `inset 0 0 14px -6px ${color}`,
        }}
      >
        {src ? (
          <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: size * 0.34,
              fontWeight: 'var(--w-semibold)',
              letterSpacing: '0.04em',
              color: 'var(--text-primary)',
            }}
          >
            {initials}
          </span>
        )}
      </div>
      {power != null && (
        <span
          style={{
            position: 'absolute',
            bottom: -7,
            right: -7,
            padding: '1px 5px',
            background: 'var(--gold)',
            color: 'var(--slate-1000)',
            fontFamily: 'var(--font-numeric)',
            fontSize: 11,
            fontWeight: 'var(--w-semibold)',
            letterSpacing: '0.02em',
            lineHeight: 1.4,
          }}
        >
          ◆{power}
        </span>
      )}
    </div>
  );
}
