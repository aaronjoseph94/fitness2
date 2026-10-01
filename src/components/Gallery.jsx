import { ArrowRight } from 'lucide-react'
import { gallery, images } from '../data'

export default function Gallery({ onChoose }) {
  return (
    <>
      <section className="section light gallery">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">In the gym</span>
            <h2>Real training. <em>Real people.</em></h2>
          </div>
          <div className="mosaic">
            {gallery.map(({ image, caption }, i) => (
              <figure className={`tile tile--${'abcd'[i]} reveal`} data-delay={(i % 2) + ''} key={image}>
                <img src={images[image].src} alt={images[image].alt} loading="lazy" decoding="async" />
                <figcaption className="caption mono">{caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <img className="band__bg" src={images.grip.src} alt="" aria-hidden="true" loading="lazy" decoding="async" />
        <div className="band__shade" aria-hidden="true" />
        <div className="container reveal">
          <h2>Strong is a decision. <em>Make it today.</em></h2>
          <button className="btn btn--brass" onClick={() => onChoose('strategy')}>
            Book your free session <ArrowRight />
          </button>
        </div>
      </section>
    </>
  )
}
