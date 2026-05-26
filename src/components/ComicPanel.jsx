import SpeechBubble from './SpeechBubble.jsx'
import Tag from './Tag.jsx'
import { useReveal } from '../hooks/useReveal.js'

export default function ComicPanel({ project }) {
  const { title, blurb, tags = [], bubble, size } = project
  const [ref, isVisible] = useReveal()

  return (
    <article
      ref={ref}
      className={`panel panel--${size} ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="panel__tags">
        {tags.map((label, i) => (
          <Tag key={label} label={label} index={i} />
        ))}
      </div>
      <SpeechBubble variant={bubble} title={title} blurb={blurb} />
    </article>
  )
}
