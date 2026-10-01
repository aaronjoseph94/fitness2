import { benefits } from '../data'
import { Blob, Sparkle } from './Graphics'

export default function Benefits() {
  return (
    <section className="section benefits" id="benefits">
      <Blob style={{ width: 440, top: -140, left: -160 }} opacity={0.5} />
      <Sparkle style={{ top: '14%', right: '8%' }} size={20} />
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">Why it works</span>
          <h2>More than a workout plan.</h2>
          <p className="lead">Everything a downloaded program can't give you.</p>
        </div>
        <div className="grid grid--4">
          {benefits.map(({ icon: Icon, title, text }, i) => (
            <div className="tile tile--soft reveal" data-delay={(i % 4) + ''} key={title}>
              <div className="icon-chip"><Icon /></div>
              <div>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
