import { audiences, images } from '../data'
import { Img } from './Graphics'

export default function Audiences() {
  return (
    <section className="section audiences" id="for-you">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Who it's for</span>
          <h2>Built for <em>every</em> body.</h2>
          <p className="lead">Beginner or athlete. 18 or 65. If you want to get stronger, you're in.</p>
        </div>
        <div className="audiences__grid">
          <div className="audiences__visual reveal">
            <Img src={images.strength.src} alt={images.strength.alt} ratio="4 / 5" position="center 40%" className="img--sticky" />
          </div>
          <ol className="roster">
            {audiences.map(({ title, text }, i) => (
              <li key={title} className="reveal" data-delay={(i % 2) + ''}>
                <span className="mono">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
