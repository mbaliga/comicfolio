import { designer } from '../data/portfolio.js'

// Cover panel. The name is split into words so each line can be a stacked,
// outlined "logo" slab the way a Wonder Woman masthead reads.
export default function Hero() {
  const words = designer.name.split(' ')

  return (
    <header className="hero">
      <div className="hero__corner hero__corner--issue">{designer.issue}</div>
      <div className="hero__corner hero__corner--price">$0.99</div>

      <p className="hero__kicker">THE ADVENTURES OF</p>

      <h1 className="hero__name" aria-label={designer.name}>
        {words.map((word, i) => (
          <span className="hero__word" key={i} data-text={word}>
            {word}
          </span>
        ))}
      </h1>

      <div className="hero__tagline">{designer.tagline}</div>

      {designer.blurb && <p className="hero__blurb">{designer.blurb}</p>}

      <div className="hero__scroll" aria-hidden="true">
        SCROLL ▾
      </div>
    </header>
  )
}
