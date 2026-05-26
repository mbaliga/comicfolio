import { tagColors } from '../data/portfolio.js'

// A "sound-effect" starburst badge stuck onto a panel.
export default function Tag({ label, index = 0 }) {
  const color = tagColors[label] || '#111111'
  // Alternate the tilt so a row of tags looks hand-applied, not aligned.
  const rotation = (index % 2 === 0 ? -1 : 1) * (5 + (index % 3) * 3)

  return (
    <span
      className="tag"
      style={{ '--tag-color': color, '--tag-rotate': `${rotation}deg` }}
    >
      <span className="tag__text">{label}</span>
    </span>
  )
}
