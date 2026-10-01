import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Narrative from './components/Narrative'
import Audiences from './components/Audiences'
import Gallery from './components/Gallery'
import Benefits from './components/Benefits'
import Nutrition from './components/Nutrition'
import About from './components/About'
import Transformation from './components/Transformation'
import Plans from './components/Plans'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [inquiry, setInquiry] = useState('strategy')
  const [hideCta, setHideCta] = useState(false)

  // Pick a plan anywhere on the page → pre-select it in the form and scroll there.
  const choose = (id) => {
    setInquiry(id)
    document.getElementById('contact')?.scrollIntoView() // smoothness comes from CSS, so reduced-motion is respected
  }

  // Hide the sticky mobile button while the hero's own buttons or the contact form are on screen.
  useEffect(() => {
    const targets = [document.querySelector('.hero__actions'), document.getElementById('contact')].filter(Boolean)
    const visible = new Map()
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => visible.set(e.target, e.isIntersecting))
      setHideCta([...visible.values()].some(Boolean))
    }, { threshold: 0.2 })
    targets.forEach((t) => io.observe(t))
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
        <Narrative />
        <Audiences />
        <Gallery onChoose={choose} />
        <Benefits />
        <Nutrition onChoose={choose} />
        <About onChoose={choose} />
        <Transformation onChoose={choose} />
        <Plans onChoose={choose} />
        <HowItWorks onChoose={choose} />
        <Testimonials />
        <FAQ onChoose={choose} />
        <Contact inquiry={inquiry} setInquiry={setInquiry} />
      </main>
      <Footer />
      <div className={`mobile-cta ${hideCta ? 'hidden' : ''}`}>
        <button className="btn btn--brass btn--block" onClick={() => choose('strategy')}>
          Book your free session <ArrowRight />
        </button>
      </div>
    </>
  )
}
