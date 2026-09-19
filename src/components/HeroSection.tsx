import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { site } from '../data/site'
import EyeTracker from './EyeTracker'
import VideoBackground from './VideoBackground'

const ROLES = ['Creative', 'UI Designer', 'UX Researcher', 'Freelancer'] as const

function Butterfly({
  id,
  className = '',
}: {
  id: string
  className?: string
}) {
  return (
    <svg viewBox="0 0 120 100" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#89AACC" />
          <stop offset="1" stopColor="#4E85BF" />
        </linearGradient>
      </defs>
      <g stroke={`url(#${id})`} strokeWidth="1.4" fill={`url(#${id})`} fillOpacity="0.12">
        <path d="M60 48 C48 22 24 14 14 28 C4 42 24 54 60 48 Z" />
        <path d="M60 48 C72 22 96 14 106 28 C116 42 96 54 60 48 Z" />
        <path d="M60 50 C46 62 34 82 26 94 C42 98 56 74 60 50 Z" />
        <path d="M60 50 C74 62 86 82 94 94 C78 98 64 74 60 50 Z" />
      </g>
      <path
        d="M60 46 C58 60 58 72 60 84"
        stroke={`url(#${id})`}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return
    const interval = setInterval(
      () => setRoleIndex((i) => (i + 1) % ROLES.length),
      2200,
    )
    return () => clearInterval(interval)
  }, [reduced])

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden"
    >
      <VideoBackground />

      <div className="absolute inset-0 bg-bg/40" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-bg/70 to-transparent" />

      <Butterfly
        id="bfly-left"
        className="animate-float pointer-events-none absolute left-[3%] top-[33.3%] w-[5.6rem] opacity-70 md:left-[5%] md:w-[8.8rem] md:opacity-80"
      />
      <Butterfly
        id="bfly-right"
        className="animate-float-alt pointer-events-none absolute bottom-[33.3%] right-[4%] w-[2.8rem] opacity-60 md:right-[6%] md:w-[4.8rem] md:opacity-70"
      />

      <div className="absolute bottom-[16%] right-[6%] hidden md:block">
        <EyeTracker />
      </div>

      <div className="container-x relative z-10 pt-28 pb-24 md:pt-32">
        <motion.p
          className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-muted"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Collection &rsquo;26
        </motion.p>

        <motion.h1
          className="font-display max-w-5xl text-5xl leading-[0.98] tracking-tight text-text sm:text-7xl md:text-8xl"
          initial={reduced ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          Design that makes people look twice.
        </motion.h1>

        <motion.div
          className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-lg text-text md:text-2xl"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-medium">{site.name}</span>
          <span className="text-muted">—</span>
          <span className="inline-flex items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={ROLES[roleIndex]}
                className="font-display text-accent-a"
                initial={reduced ? false : { y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={reduced ? { opacity: 0 } : { y: -12, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                {ROLES[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.div>

        <motion.p
          className="mt-6 max-w-xl text-base font-light leading-relaxed text-muted md:text-lg"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
        >
          I design simple, user-focused digital products — balancing visual craft
          with the clarity and structure that real people need.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#work"
            data-cursor
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-bg transition-transform duration-300 hover:-translate-y-0.5"
          >
            See Works
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
          <a
            href={`mailto:${site.email}`}
            data-cursor
            className="group inline-flex items-center gap-2 rounded-full border border-stroke px-7 py-3.5 text-sm font-medium text-text transition-colors duration-300 hover:border-accent-a/60"
          >
            Reach Out
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-muted">
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </div>
    </section>
  )
}
