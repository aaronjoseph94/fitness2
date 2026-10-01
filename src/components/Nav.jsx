import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { brand } from '../data'

const links = [
  ['#plans', 'Plans'],
  ['#about', 'Meet Jaycelyn'],
  ['#how', 'How it works'],
  ['#faq', 'FAQ'],
]

export function Logo() {
  return (
    <a href="#top" className="logo" aria-label={`${brand.name} ${brand.sub}`}>
      <span className="logo__name">{brand.name}</span>
      <span className="logo__sub">{brand.sub}</span>
    </a>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // While open: lock page scroll, close on Escape or when the viewport grows past the breakpoint.
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') close() }
    const mq = window.matchMedia('(min-width: 901px)')
    const onResize = () => { if (mq.matches) close() }
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onResize)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onResize)
    }
  }, [open])

  return (
    <>
      <header className={`nav ${scrolled || open ? 'scrolled' : ''}`}>
        <div className="container">
          <Logo />
          <nav className="nav__links" aria-label="Primary">
            {links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <a href="#contact" className="btn btn--white btn--sm nav__cta">Free session</a>
          <button
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

      <div id="mobile-menu" className={`nav__sheet ${open ? 'open' : ''}`} inert={!open}>
        <nav className="nav__sheet-links" aria-label="Mobile">
          {links.map(([href, label], i) => (
            <a key={href} href={href} onClick={close}>
              <span className="nav__num">0{i + 1}</span>
              {label}
              <ArrowRight />
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn btn--rose btn--block" onClick={close}>
          Claim your free session <ArrowRight />
        </a>
        <p className="nav__sheet-meta">
          <a href={`mailto:${brand.email}`}>{brand.email}</a>
          <span>{brand.gym.name} · Central Alberta · Online</span>
        </p>
      </div>
    </>
  )
}
