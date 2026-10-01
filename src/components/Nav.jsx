import { useEffect, useRef, useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { brand } from '../data'

const links = [
  ['#plans', 'Plans'],
  ['#nutrition', 'Nutrition'],
  ['#coach', 'Your coach'],
  ['#how', 'How it works'],
  ['#faq', 'FAQ'],
]

export function Logo({ onClick }) {
  return (
    <a href="#top" className="logo" aria-label={`${brand.name} ${brand.sub}`} onClick={onClick}>
      <span className="logo__name">{brand.name}</span>
      <span className="logo__sub">{brand.sub}</span>
    </a>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const burgerRef = useRef(null)
  const lockRef = useRef(null) // { y, behind } while the page behind the sheet is frozen
  const close = () => setOpen(false)

  // Idempotent: called from the effect cleanup and, earlier, from link clicks.
  const unlock = () => {
    const l = lockRef.current
    if (!l) return
    lockRef.current = null
    l.behind.forEach((el) => { el.inert = false })
    Object.assign(document.body.style, { position: '', top: '', left: '', right: '', overflow: '' })
    window.scrollTo({ top: l.y, behavior: 'instant' })
  }

  // Links inside the open sheet: release the lock synchronously, then jump.
  // (A plain hash navigation fires while body is still position:fixed and goes nowhere.)
  const go = (e) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    unlock()
    close()
    document.querySelector(href)?.scrollIntoView()
    history.replaceState(null, '', href)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // While open: freeze the page behind the sheet (position:fixed lock, which iOS Safari honors where
  // overflow:hidden does not), take it out of the tab order, and close on Escape or when the
  // viewport grows past the breakpoint. Focus returns to the burger on keyboard/resize close.
  useEffect(() => {
    if (!open) return
    const y = window.scrollY
    Object.assign(document.body.style, { position: 'fixed', top: `-${y}px`, left: '0', right: '0', overflow: 'hidden' })
    const behind = document.querySelectorAll('main, footer, .mobile-cta')
    behind.forEach((el) => { el.inert = true })
    lockRef.current = { y, behind }
    const closeAndRefocus = () => { close(); burgerRef.current?.focus() }
    const onKey = (e) => { if (e.key === 'Escape') closeAndRefocus() }
    const mq = window.matchMedia('(max-width: 900px)')
    const onResize = () => { if (!mq.matches) closeAndRefocus() }
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onResize)
    return () => {
      unlock()
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onResize)
    }
  }, [open])

  return (
    <>
      <header className={`nav ${scrolled || open ? 'scrolled' : ''}`}>
        <div className="container">
          <Logo onClick={go} />
          <nav className="nav__links" aria-label="Primary">
            {links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <a href="#contact" className="btn btn--brass btn--sm nav__cta">Free session</a>
          <button
            ref={burgerRef}
            className="nav__burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <div id="mobile-menu" className={`nav__sheet ${open ? 'open' : ''}`} inert={!open} role="dialog" aria-modal="true" aria-label="Menu">
        <nav className="nav__sheet-links" aria-label="Mobile">
          {links.map(([href, label], i) => (
            <a key={href} href={href} onClick={go}>
              <span className="mono">0{i + 1}</span>
              {label}
              <ArrowRight />
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn btn--brass btn--block" onClick={go}>
          Book your free session <ArrowRight />
        </a>
        <p className="nav__sheet-meta">
          <a href={`mailto:${brand.email}`}>{brand.email}</a>
          <span>{brand.gym.name} · Central Alberta · Online</span>
        </p>
      </div>
    </>
  )
}
