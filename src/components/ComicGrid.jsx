import ComicPanel from './ComicPanel.jsx'
import { items } from '../data/portfolio.js'

const WEIGHT = { sm: 1, md: 1.5, lg: 2, wide: 3 }
export const weightOf = (item) => (item.kind === 'fx' ? 0.6 : WEIGHT[item.size] || 1)

// Greedily group the flat item list into comic "tiers" (rows): a `wide` item
// gets its own full-width tier, otherwise fill until the row weight reaches ~3
// (max 3 panels). Array order is preserved, so adding/removing an item just
// re-packs the page.
function packTiers(list) {
  const tiers = []
  let tier = []
  let weight = 0
  const flush = () => {
    if (tier.length) tiers.push(tier)
    tier = []
    weight = 0
  }

  for (const item of list) {
    if (item.size === 'wide') {
      flush()
      tiers.push([item])
      continue
    }
    const w = weightOf(item)
    if (tier.length >= 3 || weight + w > 3.01) flush()
    tier.push(item)
    weight += w
  }
  flush()
  return tiers
}

export default function ComicGrid() {
  const tiers = packTiers(items)

  return (
    <section className="grid-section" aria-label="Selected work">
      <div className="section-banner">
        <span>SELECTED WORK</span>
      </div>
      <div className="comic-page">
        {tiers.map((tier, ti) => {
          const lean = ti % 2 === 0 ? 'right' : 'left'
          return (
            <div className="tier" key={ti}>
              {tier.map((item, pi) => {
                const position =
                  tier.length === 1
                    ? 'only'
                    : pi === 0
                      ? 'first'
                      : pi === tier.length - 1
                        ? 'last'
                        : 'middle'
                return (
                  <ComicPanel
                    key={item.id}
                    item={item}
                    weight={weightOf(item)}
                    position={position}
                    lean={lean}
                  />
                )
              })}
            </div>
          )
        })}
      </div>
    </section>
  )
}
