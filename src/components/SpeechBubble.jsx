// Speech or thought bubble. The project title lives inside; the blurb sits
// below as the panel's "caption" narration.
export default function SpeechBubble({ variant = 'speech', title, blurb }) {
  return (
    <div className="bubble-wrap">
      <div className={`bubble bubble--${variant}`}>
        <span className="bubble__title">{title}</span>
      </div>
      {blurb && <p className="bubble__blurb">{blurb}</p>}
    </div>
  )
}
