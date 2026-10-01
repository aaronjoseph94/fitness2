import { audiences } from '../data'
import { Blob } from './Graphics'

export default function Audiences() {
  return (
    <section className="section audiences" id="for-you">
      <Blob style={{ width: 420, top: -120, right: -140 }} opacity={0.6} />
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">Built for every body</span>
          <h2>Beginner or athlete. 18 or 65.</h2>
          <p className="lead">If you want to get stronger, you're in.</p>
        </div>
        <div className="grid grid--4">
          {audiences.map(({ icon: Icon, title, text }, i) => (
            <div className="tile reveal" data-delay={(i % 4) + ''} key={title}>
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
