import { ArrowRight, Check } from 'lucide-react'
import { brand, images, credentials } from '../data'

export default function Hero({ onChoose }) {
  return (
    <>
      <section className="hero" id="top">
        <img
          className="hero__bg"
          src={images.hero.src}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero__shade" aria-hidden="true" />
        <div className="container hero__inner">
          <span className="eyebrow">Personal training + nutrition coaching · Central Alberta + Online</span>
          <h1>
            Your strongest year starts with <em>one conversation.</em>
          </h1>
          <p className="lead">
            One-on-one coaching with {brand.coach}, ISSA certified trainer and nutrition coach.
            A plan built around your life, and someone in your corner every week.
          </p>
          <div className="hero__actions">
            <button className="btn btn--brass" onClick={() => onChoose('strategy')}>
              Book your free Strategy Session <ArrowRight />
            </button>
            <a href="#plans" className="btn btn--ghost">View plans</a>
          </div>
          <p className="hero__note mono">Free first session · Month to month available · In person or online</p>
        </div>
      </section>

      <ul className="proof" aria-label="Credentials">
        {credentials.map(({ text }) => (
          <li key={text}><Check /> {text}</li>
        ))}
      </ul>
    </>
  )
}
