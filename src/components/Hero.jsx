import { ArrowRight, GraduationCap, Apple, Award } from 'lucide-react'
import { brand, photos, credentials } from '../data'
import { Blob, Sparkle, Photo, Wave } from './Graphics'

const marquee = [
  'ISSA Certified Personal Trainer',
  'Certified Nutrition Coach',
  'Strength & Conditioning Specialist',
  'Manager · Anytime Fitness Lacombe',
  'In person · Central Alberta',
  'Online · Anywhere',
]

export default function Hero({ onChoose }) {
  return (
    <>
      <section className="hero" id="top">
        <Blob style={{ width: 520, top: -140, left: -160 }} color="#fff" opacity={0.08} />
        <Blob style={{ width: 640, bottom: -260, right: -200 }} color="#fff" opacity={0.08} flip />
        <Sparkle style={{ top: '20%', left: '44%' }} size={18} />
        <Sparkle style={{ top: '30%', right: '6%', animationDelay: '-2s' }} size={22} />

        <div className="container">
          <div className="hero__copy">
            <span className="hero__kicker"><span className="dot" /> Now accepting clients · Central Alberta + Online</span>
            <span className="script hero__script">Pretty N Fit</span>
            <h1>Strong. Confident. <span className="hero__accent">Consistent.</span></h1>
            <p className="hero__lead">
              Personal training and nutrition coaching with {brand.coach}, ISSA certified.
              In person across Central Alberta or online anywhere. <strong>Your first session is free.</strong>
            </p>
            <div className="hero__actions">
              <button className="btn btn--ink" onClick={() => onChoose('strategy')}>
                Claim your free session <ArrowRight />
              </button>
              <a href="#plans" className="btn btn--ghost">Plans from $149 / mo</a>
            </div>
            <ul className="hero__trust">
              {credentials.slice(0, 3).map(({ icon: Icon, text }) => (
                <li key={text}><Icon /> {text}</li>
              ))}
            </ul>
          </div>

          <div className="hero__visual reveal">
            <div className="hero__frame">
              <div className="hero__ring" aria-hidden="true" />
              <Photo src={photos.hero.src} alt={photos.hero.alt} shape="arch" />
              <div className="hero__small">
                <Photo src={photos.heroSmall.src} alt={photos.heroSmall.alt} shape="soft" />
              </div>
              <span className="badge badge--1"><GraduationCap /> ISSA Certified PT</span>
              <span className="badge badge--2"><Apple /> Nutrition Coach</span>
              <span className="badge badge--3"><Award /> Strength &amp; Conditioning</span>
            </div>
          </div>
        </div>
        <Wave color="var(--ink)" className="wave--bottom" />
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...marquee, ...marquee].map((t, i) => <span key={i}>{t}</span>)}
        </div>
      </div>
    </>
  )
}
