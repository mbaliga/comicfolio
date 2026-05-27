// A utility panel that is really one big comic "button" — résumé, LinkedIn,
// email. The whole panel is a single focusable link.
export default function CtaPanel({ item }) {
  const { variant, label, sublabel, href = '#', ariaLabel } = item
  const isPlaceholder = href === '#'

  return (
    <a
      className={`cta cta--${variant}`}
      href={href}
      aria-label={ariaLabel || label}
      // Placeholder hrefs (no real URL yet) shouldn't jump the page to the top.
      onClick={isPlaceholder ? (e) => e.preventDefault() : undefined}
    >
      <span className="cta__label">{label}</span>
      {sublabel && <span className="cta__sub">{sublabel}</span>}
    </a>
  )
}
