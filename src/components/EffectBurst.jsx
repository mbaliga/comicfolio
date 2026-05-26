import Tag from './Tag.jsx'

// A standalone decorative sound-effect burst (BOOM!, ZAP!, …). Reuses the
// starburst from Tag at a larger size; rotation comes from the panel tilt, so
// the burst itself isn't independently rotated.
export default function EffectBurst({ text, color }) {
  return <Tag label={text} color={color} size="lg" rotate={0} />
}
