import { Star } from 'lucide-react'
import { testimonials } from '../data'

// Renders nothing until real client quotes are added in data.js.
export default function Testimonials() {
  if (!testimonials.length) return null
  return (
    <section className="section light testimonials">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Client stories</span>
          <h2>Real people, <em>real</em> progress.</h2>
        </div>
        <div className="quotes">
          {testimonials.map(({ quote, name, detail, stars }, i) => (
            <blockquote className="quote reveal" data-delay={i + ''} key={name}>
              {stars > 0 && (
                <div className="quote__stars" aria-label={`${stars} stars`}>
                  {Array.from({ length: stars }).map((_, j) => <Star key={j} />)}
                </div>
              )}
              <p>"{quote}"</p>
              <footer className="mono"><strong>{name}</strong>{detail ? ` · ${detail}` : ''}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
