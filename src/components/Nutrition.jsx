import { ArrowRight } from 'lucide-react'
import { nutritionSteps, nutritionIncluded, images, plans } from '../data'

const price = (id) => plans.find((p) => p.id === id)?.price

export default function Nutrition({ onChoose }) {
  return (
    <section className="section nutrition" id="nutrition">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Nutrition coaching</span>
          <h2>Eat for your goals. <em>Keep your life.</em></h2>
          <p className="lead">No meal plan you'll quit by Friday. Targets built from the food you already eat, adjusted every week.</p>
        </div>

        <ol className="ncards">
          {nutritionSteps.map(({ image, title, text }, i) => (
            <li className="ncard reveal" data-delay={i + ''} key={title}>
              <img src={images[image].src} alt={images[image].alt} loading="lazy" decoding="async" />
              <div className="ncard__body">
                <span className="mono">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ol>

        <ul className="included included--dark reveal" aria-label="Nutrition coaching includes">
          <li className="included__label mono">Included</li>
          {nutritionIncluded.map(({ icon: Icon, text }) => (
            <li key={text}><Icon strokeWidth={1.75} /> {text}</li>
          ))}
        </ul>

        <div className="nutrition__foot reveal">
          <p className="nutrition__tracks">
            <strong>Not a tracker?</strong> Nutrition coaching can run habit by habit instead. Same coach, same results.
          </p>
          <div className="nutrition__actions">
            <button className="btn btn--brass" onClick={() => onChoose('nutrition')}>
              Start nutrition coaching · ${price('nutrition')} / mo <ArrowRight />
            </button>
            <button className="btn btn--ghost" onClick={() => onChoose('complete')}>
              Pair with training · ${price('complete')} / mo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
