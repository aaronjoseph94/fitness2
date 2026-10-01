import { useState } from 'react'
import { ArrowRight, MoveHorizontal } from 'lucide-react'
import { transformation } from '../data'
import { Photo } from './Graphics'

// Before/after comparison. A native range input drives the reveal, so it works with mouse, touch and keyboard.
export default function Transformation({ onChoose }) {
  const [pos, setPos] = useState(50)
  const [missing, setMissing] = useState(false)
  const live = !missing && transformation.before && transformation.after

  return (
    <section className="section light results" id="results">
      <div className="container results__grid">
        <div className="reveal">
          <span className="eyebrow">Results</span>
          <h2>Before. <em>After.</em></h2>
          <p className="lead">Same person. New habits. Drag to compare.</p>
          <button className="btn btn--ink" onClick={() => onChoose('strategy')}>
            Start your own <ArrowRight />
          </button>
        </div>

        <figure className="reveal" data-delay="1">
          {live ? (
            <div className="ba" style={{ '--pos': `${pos}%` }}>
              <img src={transformation.after} alt="After" onError={() => setMissing(true)} />
              <img className="ba__before" src={transformation.before} alt="Before" onError={() => setMissing(true)} />
              <div className="ba__handle" aria-hidden="true"><MoveHorizontal /></div>
              <span className="ba__tag ba__tag--l mono">Before</span>
              <span className="ba__tag ba__tag--r mono">After</span>
              <input
                className="ba__range"
                type="range"
                min="0"
                max="100"
                value={pos}
                onChange={(e) => setPos(Number(e.target.value))}
                aria-label="Reveal before or after photo"
              />
            </div>
          ) : (
            <div className="ba ba--empty">
              <Photo alt="Before photo" />
              <Photo alt="After photo" />
              <span className="ba__tag ba__tag--l mono">Before</span>
              <span className="ba__tag ba__tag--r mono">After</span>
            </div>
          )}
          <figcaption className="caption mono">
            {live && transformation.caption ? transformation.caption : 'Client transformations coming soon, shared with permission.'}
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
