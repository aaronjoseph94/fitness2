import { Star } from 'lucide-react'
import { testimonials } from '../data'

// Renders nothing until real client quotes are added in data.js.
export default function Testimonials() {
  if (!testimonials.length) return null
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">Client stories</span>
          <h2>Real people, real progress</h2>
        </div>
        <div className="grid grid--3">
          {testimonials.map(({ quote, name, detail }, i) => (
            <blockquote className="quote reveal" data-delay={i + ''} key={name}>
              <div className="quote__stars" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} />)}
              </div>
              <p>"{quote}"</p>
              <footer><strong>{name}</strong>{detail ? ` · ${detail}` : ''}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
