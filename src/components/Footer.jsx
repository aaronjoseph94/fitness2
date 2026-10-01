import { brand } from '../data'
import { Logo } from './Nav'

const year = new Date().getFullYear()

export default function Footer() {
  const socials = brand.socials.filter((s) => s.url)
  return (
    <footer className="footer">
      <div className="container">
        <Logo />
        <ul className="footer__links">
          <li><a href="#plans">Plans</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href={`mailto:${brand.email}`}>{brand.email}</a></li>
          {socials.map((s) => (
            <li key={s.name}><a href={s.url} target="_blank" rel="noreferrer">{s.name}</a></li>
          ))}
        </ul>
        <p className="footer__bottom">
          © {year} {brand.name} Coaching · {brand.coach} · {brand.gym.address}
        </p>
      </div>
    </footer>
  )
}
