import { useState } from 'react'
import { site } from '../data/site'

interface VideoBackgroundProps {
  className?: string
  flipped?: boolean
}

export default function VideoBackground({
  className = '',
  flipped = false,
}: VideoBackgroundProps) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {failed ? (
        <img
          src={site.heroPoster}
          alt=""
          aria-hidden="true"
          className={`h-full w-full object-cover ${flipped ? '-scale-y-100' : ''}`}
        />
      ) : (
        <video
          className={`h-full w-full object-cover ${flipped ? '-scale-y-100' : ''}`}
          src={site.heroVideo}
          poster={site.heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}
