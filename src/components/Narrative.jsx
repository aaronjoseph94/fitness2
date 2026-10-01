import { ArrowDown } from 'lucide-react'
import { reasons, images } from '../data'
import { Img } from './Graphics'

export default function Narrative() {
  return (
    <section className="section light narrative">
      <div className="container narrative__grid">
        <div className="reveal">
          <span className="eyebrow">The honest part</span>
          <h2>Most plans fall apart by <em>week three.</em></h2>
          <p className="lead">
            Not because you're lazy. Because nobody was watching, and the plan was never built for your week.
          </p>
          <ol className="reasons">
            {reasons.map(({ title, text }, i) => (
              <li key={title} className="reveal" data-delay={i + ''}>
                <span className="mono">0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
          <a href="#how" className="textlink">See how it works <ArrowDown /></a>
        </div>
        <div className="narrative__visual reveal" data-delay="1">
          <Img src={images.narrative.src} alt={images.narrative.alt} ratio="4 / 5" position="center 30%" className="img--frame" />
          <p className="caption mono">Train with purpose. Every rep has a reason.</p>
        </div>
      </div>
    </section>
  )
}
