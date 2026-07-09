import React from 'react';

/**
 * Reward / objective row — empty square checkbox (or filled when `done`)
 * plus a label and optional trailing value. Used in  reward lists.
 */
export function RewardRow({ label, value, done = false, tone = 'gold', style, ...rest }) {
  const color = {
    gold: 'var(--gold)', cyan: 'var(--cyan)', strand: 'var(--strand)',
    crimson: 'var(--crimson)',
  }[tone] || tone;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '6px 0',
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
          width: 14,
          height: 14,
          flex: 'none',
          border: `1px solid ${done ? color : 'var(--border-strong)'}`,
          background: done ? color : 'transparent',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {done && (
          <span style={{ width: 6, height: 6, background: 'var(--slate-1000)' }} />
        )}
      </span>
      <span
        style={{
          flex: 1,
          fontFamily: 'var(--font-text)',
          fontSize: 14,
          color: 'var(--text-body)',
        }}
      >
        {label}
      </span>
      {value != null && (
        <span
          style={{
            fontFamily: 'var(--font-numeric)',
            fontSize: 14,
            fontWeight: 'var(--w-medium)',
            color: color,
            letterSpacing: '0.02em',
          }}
        >
          {value}
        </span>
      )}
    </div>
  );
}
