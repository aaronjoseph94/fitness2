import { useState } from 'react'

// Soft organic shape used as background decoration.
export function Blob({ className = '', style, color = 'var(--blush)', opacity = 0.5, flip = false }) {
  return (
    <svg
      className={`blob ${className}`}
      style={{ ...style, transform: flip ? 'scaleX(-1)' : undefined }}
      viewBox="0 0 200 200"
      aria-hidden="true"
    >
      <path
        fill={color}
        opacity={opacity}
        d="M45.3,-58.9C58.9,-50.5,70.4,-37.1,75.6,-21.4C80.8,-5.7,79.6,12.3,72.1,27C64.6,41.7,50.8,53.1,35.7,61.3C20.6,69.5,4.3,74.5,-12.7,73.6C-29.7,72.7,-47.4,65.9,-58.9,53.2C-70.4,40.5,-75.7,21.9,-75.4,3.6C-75.1,-14.7,-69.2,-32.7,-57.6,-42.7C-46,-52.7,-28.7,-54.7,-12.6,-58.6C3.5,-62.5,31.7,-67.3,45.3,-58.9Z"
        transform="translate(100 100)"
      />
    </svg>
  )
}

export function Sparkle({ className = '', style, size = 24 }) {
  return (
    <svg className={`sparkle ${className}`} style={style} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 0c.6 7 5 11.4 12 12-7 .6-11.4 5-12 12-.6-7-5-11.4-12-12 7-.6 11.4-5 12-12z" />
    </svg>
  )
}

export function HeartMark({ className = '', style, size = 20 }) {
  return (
    <svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 21s-7.5-4.6-10-9.5C.3 8 2.3 4 6.2 4c2.2 0 3.9 1.3 4.8 2.7C12 5.3 13.6 4 15.8 4c3.9 0 5.9 4 4.2 7.5C19.5 16.4 12 21 12 21z" />
    </svg>
  )
}

// Wave divider between sections.
export function Wave({ color = 'var(--cream)', flip = false, className = '' }) {
  return (
    <svg
      className={`wave ${className}`}
      style={{ transform: flip ? 'scaleY(-1)' : undefined }}
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path fill={color} d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" />
    </svg>
  )
}

// Photo with graceful fallback until real images are dropped in /public/images.
export function Photo({ src, alt, shape = 'arch', className = '' }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className={`photo photo--${shape} ${className}`}>
      {src && !failed ? (
        <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
      ) : (
        <div className="photo__placeholder" role="img" aria-label={alt}>
          <svg viewBox="0 0 120 160" aria-hidden="true">
            <defs>
              <linearGradient id="ph" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0" stopColor="#fbe6e6" />
                <stop offset="1" stopColor="#f0b9bd" />
              </linearGradient>
            </defs>
            <rect width="120" height="160" fill="url(#ph)" />
            <circle cx="60" cy="58" r="24" fill="#d4767d" opacity=".55" />
            <path d="M18 150c4-32 22-46 42-46s38 14 42 46z" fill="#d4767d" opacity=".55" />
          </svg>
          <span>Photo coming soon</span>
        </div>
      )}
    </div>
  )
}

// Social brand marks (lucide dropped brand icons).
export function SocialIcon({ name, size = 20 }) {
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
