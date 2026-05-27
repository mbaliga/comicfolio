import { contact } from '../data/portfolio.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__continued">TO BE CONTINUED…</div>
      <div className="footer__panel">
        <h2 className="footer__title">LET'S TEAM UP!</h2>
        <a className="footer__email" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
        <nav className="footer__links" aria-label="Social links">
          {contact.links.map((link) => (
            <a key={link.label} href={link.href} className="footer__link">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
