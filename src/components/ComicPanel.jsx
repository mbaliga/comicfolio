import SpeechBubble from './SpeechBubble.jsx'
import Tag from './Tag.jsx'
import CtaPanel from './CtaPanel.jsx'
import EffectBurst from './EffectBurst.jsx'
import { useReveal } from '../hooks/useReveal.js'

// One panel of the comic page. The outer <article> owns the frame, the reveal
// animation, and the tilt/shape plumbing for EVERY kind; only the inner content
// changes per `kind`.
export default function ComicPanel({ item }) {
  const { kind = 'project', size = 'md', tilt = 0, shape, overlap } = item
  const [ref, isVisible] = useReveal()

  const className = [
    'panel',
    `panel--${size}`,
    `panel--${kind}`,
    shape && `panel--${shape}`,
    overlap && 'panel--overlap',
    isVisible && 'is-visible',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <article
      ref={ref}
      className={className}
      style={{ '--tilt': `${tilt}deg` }}
      aria-hidden={kind === 'fx' ? 'true' : undefined}
    >
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

      {kind === 'fx' && <EffectBurst text={item.text} color={item.color} />}
    </article>
  )
}
