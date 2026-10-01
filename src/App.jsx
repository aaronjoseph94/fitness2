import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Audiences from './components/Audiences'
import About from './components/About'
import Benefits from './components/Benefits'
import Plans from './components/Plans'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [inquiry, setInquiry] = useState('strategy')
  const [term, setTerm] = useState('monthly')
  const [atContact, setAtContact] = useState(false)

  // Pick a plan anywhere on the page → pre-select it in the form and scroll there.
  const choose = (id) => {
    setInquiry(id)
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Hide the sticky mobile button while the contact form is on screen.
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setAtContact(e.isIntersecting), { threshold: 0.2 })
    io.observe(document.getElementById('contact'))
    return () => io.disconnect()
  }, [])

  // Scroll-in reveal for anything with .reveal
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }),
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero onChoose={choose} />
        <Audiences />
        <About onChoose={choose} />
        <Benefits />
        <Plans onChoose={choose} />
        <HowItWorks onChoose={choose} />
        <Testimonials />
        <FAQ />
        <Contact inquiry={inquiry} setInquiry={setInquiry} term={term} setTerm={setTerm} />
      </main>
      <Footer />
      <div className={`mobile-cta ${atContact ? 'hidden' : ''}`}>
        <button className="btn btn--ink btn--block" onClick={() => choose('strategy')}>
          Claim your free session <ArrowRight />
        </button>
      </div>
    </>
  )
}
