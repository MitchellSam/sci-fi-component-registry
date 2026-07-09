import React from 'react';

/**
 * Decorative HUD frame — the knob that controls VISUAL DENSITY.
 * Wraps any content and draws angular chrome around it:
 * L-shaped corner brackets, an optional scan-line top tick, and an
 * optional ambient glow.
 *
 *   density="full"    → brackets + ticks + glow (the dense HUD look)
 *   density="minimal" → just a hairline frame (calm, for sites/apps)
 *
 * Use it to dial the sci-fi intensity per surface without changing
 * the palette or type. Individual flags (brackets / glow / tick)
 * override the density preset.
 */
export function CornerFrame({
  children, density = 'minimal', tone = 'cyan',
  brackets, glow, tick, padding = 20, style, ...rest
}) {
  const full = density === 'full';
  const showBrackets = brackets ?? full;
  const showGlow = glow ?? full;
  const showTick = tick ?? full;
  const toneColor = { cyan: 'var(--border-focus)', gold: 'var(--accent)', crimson: 'var(--crimson)' }[tone] || tone;

  const corner = (pos) => {
    const len = 16, t = 2;
    const base = { position: 'absolute', width: len, height: len, pointerEvents: 'none', borderColor: toneColor };
    const map = {
      tl: { top: -1, left: -1, borderTop: `${t}px solid`, borderLeft: `${t}px solid` },
      tr: { top: -1, right: -1, borderTop: `${t}px solid`, borderRight: `${t}px solid` },
      bl: { bottom: -1, left: -1, borderBottom: `${t}px solid`, borderLeft: `${t}px solid` },
      br: { bottom: -1, right: -1, borderBottom: `${t}px solid`, borderRight: `${t}px solid` },
    };
    return <span key={pos} style={{ ...base, ...map[pos] }} />;
  };

  return (
    <div
      style={{
        position: 'relative', padding,
        background: 'color-mix(in srgb, var(--surface-card) 88%, transparent)',
        backgroundImage: 'var(--wash-panel)',
        border: '1px solid var(--border-hairline)',
        boxShadow: showGlow ? `0 0 24px -10px ${toneColor}, var(--shadow-plate)` : 'none',
        transition: 'box-shadow var(--dur-base) var(--ease-sharp)',
        ...style,
      }}
      {...rest}
    >
      {showBrackets && ['tl', 'tr', 'bl', 'br'].map(corner)}
      {showTick && (
        <span style={{ position: 'absolute', top: -1, left: '50%', transform: 'translateX(-50%)', width: 44, height: 2, background: toneColor, opacity: 0.8 }} />
      )}
      {children}
    </div>
  );
}
