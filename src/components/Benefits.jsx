import { benefits, images } from '../data'
import { Img } from './Graphics'

export default function Benefits() {
  // A gym photo sits in the grid after the third benefit for rhythm.
  const cells = [...benefits.slice(0, 3), 'image', ...benefits.slice(3)]
  return (
    <section className="section light benefits" id="benefits">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">What changes</span>
          <h2>Everything a downloaded program <em>can't</em> give you.</h2>
        </div>
        <div className="benefits__grid">
          {cells.map((c, i) =>
            c === 'image' ? (
              <figure className="benefit benefit--image reveal" key="image">
                <Img src={images.gym4.src} alt={images.gym4.alt} ratio="1 / 1" position="center 30%" />
                <figcaption className="caption mono">Form first. Then load.</figcaption>
              </figure>
            ) : (
              <div className="benefit reveal" data-delay={(i % 3) + ''} key={c.title}>
                <c.icon strokeWidth={1.5} />
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
