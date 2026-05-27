import SpeechBubble from './SpeechBubble.jsx'
import Tag from './Tag.jsx'
import CtaPanel from './CtaPanel.jsx'
import EffectBurst from './EffectBurst.jsx'
import { useReveal } from '../hooks/useReveal.js'

// Clip polygons per (lean, position-in-tier). Internal edges slant; the panel
// on the page edge keeps a straight outer edge so the page boundary stays
// rectangular. `only`/full-width tiers get a shallow slanted bottom. `--slant`
// (in px) is resolved from CSS, so the ink border stays an even width.
const SHAPES = {
  right: {
    only: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - var(--slant)))',
    first: 'polygon(0 0, 100% 0, calc(100% - var(--slant)) 100%, 0 100%)',
    middle: 'polygon(var(--slant) 0, 100% 0, calc(100% - var(--slant)) 100%, 0 100%)',
    last: 'polygon(var(--slant) 0, 100% 0, 100% 100%, 0 100%)',
  },
  left: {
    only: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - var(--slant)))',
    first: 'polygon(0 0, calc(100% - var(--slant)) 0, 100% 100%, 0 100%)',
    middle: 'polygon(0 0, calc(100% - var(--slant)) 0, 100% 100%, var(--slant) 100%)',
    last: 'polygon(0 0, 100% 0, 100% 100%, var(--slant) 100%)',
  },
}

export default function ComicPanel({ item, weight = 1, position = 'only', lean = 'right' }) {
  const { kind = 'project', size = 'md' } = item
  const [ref, isVisible] = useReveal()

  // fx bursts aren't framed panels — just a floating starburst sitting in the tier.
  if (kind === 'fx') {
    return (
      <div
        ref={ref}
        className={`panel panel--fx ${isVisible ? 'is-visible' : ''}`}
        style={{ '--w': weight }}
        aria-hidden="true"
      >
        <EffectBurst text={item.text} color={item.color} />
      </div>
    )
  }

  const clip = SHAPES[lean][position]

  return (
    <article
      ref={ref}
      className={`panel panel--${kind} panel--${size} ${isVisible ? 'is-visible' : ''}`}
      style={{ '--w': weight, '--clip': clip }}
    >
      <div className="panel__inner">
        {kind === 'project' && (
          <>
            <div className="panel__tags">
              {(item.tags || []).map((label, i) => (
                <Tag key={label} label={label} index={i} />
              ))}
            </div>
            <SpeechBubble variant={item.bubble} title={item.title} blurb={item.blurb} />
          </>
        )}

        {kind === 'cta' && <CtaPanel item={item} />}

        {kind === 'about' && (
          <div className="about">
            <span className="about__title">{item.title}</span>
            <p className="about__body">{item.body}</p>
          </div>
        )}
      </div>
    </article>
  )
}
