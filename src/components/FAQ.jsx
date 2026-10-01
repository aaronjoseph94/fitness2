import { faqs } from '../data'

export default function FAQ() {
  return (
    <section className="section faq" id="faq">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">Questions</span>
          <h2>Quick answers</h2>
        </div>
        <div className="faq__list">
          {faqs.map(({ q, a }, i) => (
            <details className="reveal" key={q} open={i === 0}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
