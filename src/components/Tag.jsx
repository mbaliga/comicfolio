import { tagColors } from '../data/portfolio.js'

// A "sound-effect" starburst badge. Used both as a project tag (small, color
// from `tagColors`) and as a standalone decorative burst (large, explicit
// color, rotation supplied by the caller).
export default function Tag({ label, index = 0, color, size = 'sm', rotate }) {
  const fill = color || tagColors[label] || '#111111'
  // Alternate the tilt so a row of tags looks hand-applied, not aligned —
  // unless an explicit rotation is supplied.
  const rotation =
    rotate !== undefined
      ? rotate
      : (index % 2 === 0 ? -1 : 1) * (5 + (index % 3) * 3)

  return (
    <span
      className={`tag tag--${size}`}
      style={{ '--tag-color': fill, '--tag-rotate': `${rotation}deg` }}
    >
      <span className="tag__text">{label}</span>
    </span>
  )
}
