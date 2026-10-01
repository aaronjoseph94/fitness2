import { ArrowRight } from 'lucide-react'
import { brand, photos, credentials } from '../data'
import { Blob, Photo, Sparkle } from './Graphics'

export default function About({ onChoose }) {
  return (
    <section className="section about" id="about">
      <Blob style={{ width: 520, bottom: -200, left: -200 }} color="var(--white)" opacity={0.7} />
      <Sparkle style={{ top: '12%', right: '10%' }} size={20} />
      <div className="container">
        <div className="about__visual reveal">
          <Photo src={photos.about.src} alt={photos.about.alt} shape="arch" />
          <div className="about__card">
            <span className="script">Hi, I'm {brand.firstName}!</span>
            <small>ISSA certified trainer + nutrition coach</small>
          </div>
        </div>

        <div className="about__copy reveal" data-delay="1">
          <span className="eyebrow">Meet your coach</span>
          <h2>Coached by someone who does this every day.</h2>
          <div className="about__body">
            <p>
              I manage {brand.gym.name} and coach people who want real results without turning their life upside down.
            </p>
            <p className="about__quote">"Fitness doesn't have to be perfect to be effective."</p>
            <p>
              You'll train with purpose, build habits that last, and follow a plan built around your goals, your
              schedule and your equipment.
            </p>
          </div>
          <ul className="pills">
            {credentials.map(({ icon: Icon, text }) => (
              <li key={text}><Icon /> {text}</li>
            ))}
          </ul>
          <button className="btn btn--rose" onClick={() => onChoose('strategy')}>
            Book a free session <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}
