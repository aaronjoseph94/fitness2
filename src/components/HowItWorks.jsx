import { ArrowRight } from 'lucide-react'
import { steps } from '../data'

export default function HowItWorks({ onChoose }) {
  return (
    <section className="section how" id="how">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">How it works</span>
          <h2>Three steps to results</h2>
        </div>
        <ol className="steps">
          {steps.map(({ title, text }, i) => (
            <li className="step reveal" data-delay={i + ''} key={title}>
              <div className="step__num">{['one', 'two', 'three'][i]}</div>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="center reveal" style={{ marginTop: 40 }}>
          <button className="btn btn--ink" onClick={() => onChoose('strategy')}>
            Take step one, it's free <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}
