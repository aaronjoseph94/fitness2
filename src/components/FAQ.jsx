import { ArrowRight } from 'lucide-react'
import { faqs, images } from '../data'
import { Img } from './Graphics'

export default function FAQ({ onChoose }) {
  return (
    <section className="section light faq" id="faq">
      <div className="container faq__grid">
        <div className="faq__intro reveal">
          <span className="eyebrow">Questions</span>
          <h2>Starting out? <em>Start here.</em></h2>
          <p className="lead">Everything people ask before their first session. Anything else, just ask.</p>
          <button className="btn btn--ink" onClick={() => onChoose('strategy')}>
            Ask at your free session <ArrowRight />
          </button>
          <figure className="faq__visual">
            <Img src={images.gym6.src} alt={images.gym6.alt} ratio="4 / 3" />
            <figcaption className="caption mono">Same floor. Same coach.</figcaption>
          </figure>
        </div>
        <div className="faq__list">
          {faqs.map(({ q, a }, i) => (
            <details className="reveal" key={q} open={i === 0}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
