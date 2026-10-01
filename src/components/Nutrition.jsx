import { ArrowRight } from 'lucide-react'
import { nutritionSteps, nutritionIncluded, foodImages, plans } from '../data'
import { Blob, Sparkle } from './Graphics'

const price = (id) => plans.find((p) => p.id === id)?.price

export default function Nutrition({ onChoose }) {
  return (
    <section className="section nutrition" id="nutrition">
      <Blob style={{ width: 460, top: -160, right: -160 }} color="var(--white)" opacity={0.8} />
      <Sparkle style={{ top: '10%', left: '8%' }} size={20} />
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">Nutrition coaching</span>
          <h2>Eat for your goals. Keep your life.</h2>
          <p className="lead">No meal plan you'll quit by Friday. Targets built from the food you already eat, adjusted every week.</p>
        </div>

        <ol className="ncards">
          {nutritionSteps.map(({ image, title, text }, i) => (
            <li className="ncard reveal" data-delay={i + ''} key={title}>
              <img src={foodImages[image].src} alt={foodImages[image].alt} loading="lazy" decoding="async" />
              <div className="ncard__body">
                <span className="ncard__num">{['one', 'two', 'three', 'four'][i]}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ol>

        <ul className="included reveal" aria-label="Nutrition coaching includes">
          <li className="included__label">Included</li>
          {nutritionIncluded.map(({ icon: Icon, text }) => (
            <li key={text}><Icon /> {text}</li>
          ))}
        </ul>

        <div className="nutrition__foot reveal">
          <p><strong>Not a tracker?</strong> Nutrition coaching can run habit by habit instead. Same coach, same results.</p>
          <div className="nutrition__actions">
            <button className="btn btn--rose" onClick={() => onChoose('nutrition')}>
              Start nutrition · ${price('nutrition')}/mo <ArrowRight />
            </button>
            <button className="btn btn--ghost" onClick={() => onChoose('complete')}>
              Add training · ${price('complete')}/mo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
