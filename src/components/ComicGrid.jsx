import ComicPanel from './ComicPanel.jsx'
import { projects } from '../data/portfolio.js'

export default function ComicGrid() {
  return (
    <section className="grid-section" aria-label="Selected work">
      <div className="section-banner">
        <span>SELECTED WORK</span>
      </div>
      <div className="comic-grid">
        {projects.map((project) => (
          <ComicPanel key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
