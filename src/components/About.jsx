import { ArrowRight } from 'lucide-react'
import { brand, photos, credentials } from '../data'
import { Photo } from './Graphics'

export default function About({ onChoose }) {
  return (
    <section className="section coach" id="coach">
      <div className="container coach__grid">
        <div className="coach__visual reveal">
          <Photo src={photos.about.src} alt={photos.about.alt} className="img--frame" />
        </div>
        <div className="reveal" data-delay="1">
          <span className="eyebrow">Your coach</span>
          <h2>Meet {brand.firstName}.</h2>
          <p className="coach__quote">"Fitness doesn't have to be perfect to be effective."</p>
          <div className="coach__body">
            <p>
              I manage {brand.gym.name} and coach people who want real results without turning their life upside down.
            </p>
            <p>
              You'll train with purpose, build habits that last, and follow a plan built around your goals, your
              schedule and your equipment.
            </p>
          </div>
          <ul className="tags">
            {credentials.map(({ text }) => <li key={text}>{text}</li>)}
          </ul>
          <button className="btn btn--brass" onClick={() => onChoose('strategy')}>
            Book a free session <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}
