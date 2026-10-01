import { useState } from 'react'
import { Mail, MapPin, Send } from 'lucide-react'
import { brand, inquiryOptions, terms, images } from '../data'
import { SocialIcon } from './Graphics'

const formats = ['Online', 'In person', 'Either']

export default function Contact({ inquiry, setInquiry }) {
  const [sent, setSent] = useState(false)

  // No backend: compose the email in the visitor's mail app.
  // ponytail: swap for a Cloudflare Pages Function or form service when you want submissions stored.
  const onSubmit = (e) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const interest = inquiryOptions.find((o) => o.id === f.get('inquiry'))?.name ?? 'Not sure yet'
    const subject = `New inquiry: ${interest} — ${f.get('name')}`
    const body = [
      `Name: ${f.get('name')}`,
      `Email: ${f.get('email')}`,
      `Phone: ${f.get('phone') || 'not provided'}`,
      `Interested in: ${interest}`,
      `Commitment: ${terms.find((x) => x.id === f.get('term'))?.label ?? 'Month to month'}`,
      `Format: ${f.get('format')}`,
      '',
      'Goals:',
      f.get('goals'),
    ].join('\n')
    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const socials = brand.socials.filter((s) => s.url)

  return (
    <section className="section contact" id="contact">
      <img className="contact__bg" src={images.cta.src} alt="" aria-hidden="true" loading="lazy" decoding="async" />
      <div className="contact__shade" aria-hidden="true" />
      <div className="container contact__grid">
        <div className="reveal">
          <span className="eyebrow">Let's talk</span>
          <h2>Your first session is <em>free.</em></h2>
          <p className="lead">
            Tell {brand.firstName} where you're at. She'll reply to book your free Strategy Session, in person at{' '}
            {brand.gym.name} or online.
          </p>
          <ul className="contact__info">
            <li><Mail strokeWidth={1.5} /><a href={`mailto:${brand.email}`}>{brand.email}</a></li>
            <li><MapPin strokeWidth={1.5} /><a href={brand.gym.mapUrl} target="_blank" rel="noreferrer">{brand.gym.name}<br />{brand.gym.address}</a></li>
          </ul>
          {socials.length > 0 && (
            <div className="socials">
              {socials.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name}>
                  <SocialIcon name={s.name} />
                </a>
              ))}
            </div>
          )}
        </div>

        <form className="form reveal" data-delay="1" onSubmit={onSubmit}>
          <h3>Claim your free session</h3>
          <div className="form__row">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" required autoComplete="name" placeholder="Your name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" />
            </div>
          </div>
          <div className="form__row">
            <div className="field">
              <label htmlFor="phone">Phone <span className="opt">(optional)</span></label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="(403) 555-0100" />
            </div>
            <div className="field">
              <label htmlFor="inquiry">Interested in</label>
              <select id="inquiry" name="inquiry" value={inquiry} onChange={(e) => setInquiry(e.target.value)}>
                {inquiryOptions.map((o) => <option key={o.id} value={o.id}>{o.name}</option>)}
              </select>
            </div>
          </div>
          <div className="form__row">
            <div className="field">
              <label htmlFor="term">Commitment</label>
              <select id="term" name="term" defaultValue="monthly">
                {terms.map((x) => <option key={x.id} value={x.id}>{x.label}</option>)}
              </select>
            </div>
            <div className="field">
              <span className="field__label">Train</span>
              <div className="chips" role="radiogroup" aria-label="Training format">
                {formats.map((f, i) => (
                  <label className="chip" key={f}>
                    <input type="radio" name="format" value={f} defaultChecked={i === 2} />
                    <span>{f}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="field">
            <label htmlFor="goals">Your goal</label>
            <textarea id="goals" name="goals" required placeholder="Where are you now, and where do you want to be?" />
          </div>
          <button className="btn btn--brass btn--block" type="submit">
            Send to {brand.firstName} <Send />
          </button>
          {sent && (
            <p className="form__sent">
              Your email app opened with everything filled in. Hit send. If it didn't open, email {brand.email}.
            </p>
          )}
          <p className="form__fine">No spam. No pressure. {brand.firstName} replies personally.</p>
        </form>
      </div>
    </section>
  )
}
