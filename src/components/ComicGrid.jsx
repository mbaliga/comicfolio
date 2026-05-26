import ComicPanel from './ComicPanel.jsx'
import { items } from '../data/portfolio.js'

export default function ComicGrid() {
  return (
    <section className="grid-section" aria-label="Selected work">
      <div className="section-banner">
        <span>SELECTED WORK</span>
      </div>
      <div className="comic-grid">
        {items.map((item) => (
          <ComicPanel key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
