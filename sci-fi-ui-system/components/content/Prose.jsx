import React from 'react';

/**
 * Long-form / article typography. Wrap raw HTML (headings, p, lists,
 * blockquote, links, code, hr, img, figure) and it styles the whole
 * tree with the type system tuned for *reading*: uppercase
 * tracked headings with a short gold rule, comfortable measure and
 * line-height, italic blockquotes, cyan links. Theme-aware.
 *
 * `measure` controls the max reading width; `size="lg"` bumps body up.
 */
export function Prose({ children, measure = 'var(--measure)', size = 'md', style, ...rest }) {
  const cls = React.useId().replace(/[:]/g, '');
  const bodyFs = size === 'lg' ? 18 : 16;

  const css = `
.${cls}{ color:var(--text-body); font-family:var(--font-text); font-size:${bodyFs}px;
  line-height:var(--lh-prose); max-width:${measure}; }
.${cls} > *:first-child{ margin-top:0; }
.${cls} > *:last-child{ margin-bottom:0; }
.${cls} p{ margin:0 0 var(--prose-gap); }
.${cls} h1,.${cls} h2,.${cls} h3,.${cls} h4{ font-family:var(--font-display); color:var(--text-primary);
  text-transform:uppercase; letter-spacing:var(--track-label); line-height:var(--lh-snug);
  font-weight:var(--w-semibold); margin:1.8em 0 0.6em; }
.${cls} h1{ font-size:var(--fs-h1); letter-spacing:var(--track-wide); }
.${cls} h2{ font-size:var(--fs-h2); position:relative; padding-top:18px; }
.${cls} h2::before{ content:''; position:absolute; top:0; left:0; width:40px; height:2px; background:var(--accent); }
.${cls} h3{ font-size:var(--fs-h3); }
.${cls} h4{ font-size:var(--fs-title); letter-spacing:var(--track-label); color:var(--text-muted); }
.${cls} a{ color:var(--text-link); text-decoration:none; border-bottom:1px solid color-mix(in srgb, var(--text-link) 40%, transparent); }
.${cls} a:hover{ border-bottom-color:var(--text-link); }
.${cls} strong{ color:var(--text-primary); font-weight:var(--w-semibold); }
.${cls} em{ font-style:italic; }
.${cls} ul,.${cls} ol{ margin:0 0 var(--prose-gap); padding-left:1.3em; }
.${cls} li{ margin:0 0 0.5em; }
.${cls} ul li::marker{ color:var(--accent); }
.${cls} ol li::marker{ color:var(--text-faint); font-family:var(--font-numeric); }
.${cls} blockquote{ margin:var(--space-6) 0; padding:4px 0 4px 20px; border-left:2px solid var(--accent);
  font-style:italic; color:var(--text-primary); font-size:1.12em; line-height:var(--lh-body); }
.${cls} blockquote cite{ display:block; margin-top:8px; font-style:normal; font-family:var(--font-display);
  font-size:12px; letter-spacing:var(--track-label); text-transform:uppercase; color:var(--text-faint); }
.${cls} code{ font-family:ui-monospace,'SF Mono',Menlo,monospace; font-size:0.88em; background:var(--surface-input);
  border:1px solid var(--border-hairline); padding:1px 6px; color:var(--accent-text); }
.${cls} pre{ background:var(--surface-input); border:1px solid var(--border-hairline); border-top:2px solid var(--accent);
  padding:16px 18px; overflow:auto; margin:0 0 var(--prose-gap); }
.${cls} pre code{ background:none; border:none; padding:0; color:var(--text-body); }
.${cls} hr{ border:none; border-top:1px solid var(--border-hairline); margin:var(--space-10) 0; }
.${cls} img,.${cls} figure img{ max-width:100%; display:block; border:1px solid var(--border-hairline); }
.${cls} figure{ margin:var(--space-8) 0; }
.${cls} figcaption{ margin-top:8px; font-size:13px; color:var(--text-faint); font-style:italic; }
`;

  return (
    <div className={cls} style={style} {...rest}>
      <style>{css}</style>
      {children}
    </div>
  );
}
