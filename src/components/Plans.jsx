import { Check, ArrowRight, MapPin } from 'lucide-react'
import { plans, included, brand } from '../data'

export default function Plans({ onChoose }) {
  return (
    <section className="section light plans" id="plans">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">Plans</span>
          <h2>Choose how you want to <em>work together.</em></h2>
          <p className="lead">Month to month, or commit to 3, 6 or 12 months. Every plan starts with a free Strategy Session.</p>
        </div>

        <div className="plans__grid">
          {plans.map((p, i) => (
            <article className={`plan reveal ${p.featured ? 'plan--featured' : ''}`} data-delay={i + ''} key={p.id}>
              {p.badge && <span className="plan__badge mono">{p.badge}</span>}
              <h3>{p.name}</h3>
              <p className="plan__tag">{p.tagline}</p>
              <div className="plan__price">
                <span className="cur">$</span>
                <span className="amt">{p.price}</span>
                <span className="per">/ month</span>
              </div>
              <ul className="plan__features">
                {p.features.map((f) => <li key={f}><Check /> {f}</li>)}
              </ul>
              {p.checkoutUrl ? (
                <a href={p.checkoutUrl} className={`btn btn--block ${p.featured ? 'btn--brass' : 'btn--ink'}`}>
                  {p.cta} <ArrowRight />
                </a>
              ) : (
                <button className={`btn btn--block ${p.featured ? 'btn--brass' : 'btn--ink'}`} onClick={() => onChoose(p.id)}>
                  {p.cta} <ArrowRight />
                </button>
              )}
              {p.note && <p className="plan__note">{p.note}</p>}
            </article>
          ))}
        </div>

        <ul className="included reveal" aria-label="Every plan includes">
          <li className="included__label mono">Every plan includes</li>
          {included.map(({ icon: Icon, text }) => (
            <li key={text}><Icon strokeWidth={1.75} /> {text}</li>
          ))}
        </ul>

        <div className="inperson reveal">
          <MapPin strokeWidth={1.5} />
          <p>
            <strong>Prefer in person?</strong> One-on-one sessions at {brand.gym.name} from $60 / session.
          </p>
          <button className="btn btn--ghost btn--sm" onClick={() => onChoose('inperson')}>Ask about sessions</button>
        </div>
      </div>
    </section>
  )
}
