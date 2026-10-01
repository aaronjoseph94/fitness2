import { ArrowRight } from 'lucide-react'
import { steps, images } from '../data'
import { Img } from './Graphics'

export default function HowItWorks({ onChoose }) {
  return (
    <section className="section how" id="how">
      <div className="container how__grid">
        <div className="how__visual reveal">
          <Img src={images.coach.src} alt={images.coach.alt} ratio="4 / 5" position="center 35%" className="img--frame" />
        </div>
        <div className="reveal" data-delay="1">
          <span className="eyebrow">How it works</span>
          <h2>Three steps. <em>Zero</em> guesswork.</h2>
          <ol className="steps">
            {steps.map(({ title, text }, i) => (
              <li key={title}>
                <span className="mono">0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
          <button className="btn btn--brass" onClick={() => onChoose('strategy')}>
            Take step one, it's free <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}
