import { useState } from 'react'

// Jaycelyn's photo slots: show a quiet placeholder until the real file exists in /public/images.
export function Photo({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className={`photo ${className}`}>
      {src && !failed ? (
        <img src={src} alt={alt} loading="lazy" decoding="async" onError={() => setFailed(true)} />
      ) : (
        <div className="photo__placeholder" role="img" aria-label={alt}>
          <svg viewBox="0 0 120 160" aria-hidden="true">
            <rect width="120" height="160" fill="#1c1c1f" />
            <circle cx="60" cy="58" r="24" fill="#2b2b30" />
            <path d="M18 150c4-32 22-46 42-46s38 14 42 46z" fill="#2b2b30" />
          </svg>
          <span>Photo coming soon</span>
        </div>
      )}
    </div>
  )
}

// Stock photo with the site's grade applied. `ratio` is a CSS aspect-ratio value.
export function Img({ src, alt, ratio = '4 / 5', position = 'center', className = '', eager = false }) {
  return (
    <div className={`img ${className}`} style={{ aspectRatio: ratio }}>
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        style={{ objectPosition: position }}
      />
    </div>
  )
}

// Social brand marks (lucide dropped brand icons).
export function SocialIcon({ name, size = 18 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': true }
  switch (name) {
    case 'Instagram':
      return (
        <svg {...common}>
          <path d="M12 2.2c3.2 0 3.6 0 4.8.1 3.2.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.2-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 4 4 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zM12 0C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.2 4.4 2.6 6.8 7 7 1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.2-4.4-2.6-6.8-7-7C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.9 1.4 1.4 0 0 0 0-2.9z" />
        </svg>
      )
    case 'TikTok':
      return (
        <svg {...common}>
          <path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-1.8-2.5V9.7a5.7 5.7 0 1 0 4.9 5.7V9.2a7.4 7.4 0 0 0 4.3 1.4V7.5a4.3 4.3 0 0 1-3.2-1.7z" />
        </svg>
      )
    case 'Facebook':
      return (
        <svg {...common}>
          <path d="M13.5 22v-8.2h2.8l.4-3.3h-3.2V8.4c0-.9.3-1.6 1.6-1.6h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.4v3.3h2.8V22h3.3z" />
        </svg>
      )
    default:
      return null
  }
}
