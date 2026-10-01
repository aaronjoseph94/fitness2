import { brand } from '../data'
import { Logo } from './Nav'

const year = new Date().getFullYear()

export default function Footer() {
  const socials = brand.socials.filter((s) => s.url)
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <Logo />
            <p className="footer__tag">Personal training + nutrition coaching · Central Alberta + Online</p>
          </div>
          <ul className="footer__links">
            <li><a href="#plans">Plans</a></li>
            <li><a href="#coach">Your coach</a></li>
            <li><a href="#how">How it works</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href={`mailto:${brand.email}`}>{brand.email}</a></li>
            {socials.map((s) => (
              <li key={s.name}><a href={s.url} target="_blank" rel="noreferrer">{s.name}</a></li>
            ))}
          </ul>
        </div>
        <p className="footer__bottom mono">
          <span>© {year} {brand.name} Coaching · {brand.coach}</span>
          <span>{brand.gym.address}</span>
          <span>Photography via Unsplash</span>
        </p>
      </div>
    </footer>
  )
}
