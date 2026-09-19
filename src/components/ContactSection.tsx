import { ArrowUpRight } from 'lucide-react'
import { site } from '../data/site'
import Reveal from './Reveal'
import VideoBackground from './VideoBackground'

const MARQUEE_COUNT = 10

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[80svh] flex-col justify-center overflow-hidden"
    >
      <VideoBackground flipped />

      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bg to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg to-transparent" />

      <div className="container-x relative z-10 flex flex-1 flex-col items-center justify-center py-24 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-stroke bg-surface/60 px-4 py-2 text-sm font-light text-text backdrop-blur-sm">
            <span className="animate-pulse-dot h-2.5 w-2.5 rounded-full bg-emerald-400" />
            Available for projects
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-display mt-8 max-w-4xl text-5xl leading-[1.02] text-text sm:text-6xl md:text-7xl">
            Let&rsquo;s make something people remember.
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-muted md:text-lg">
            Have a product in mind, a problem worth solving, or just want to say
            hi? My inbox is open.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${site.email}`}
              data-cursor
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-medium text-bg transition-transform duration-300 hover:-translate-y-0.5"
            >
              {site.email}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex items-center gap-6">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor
              data-cursor-label="Open"
              className="text-sm text-muted transition-colors duration-300 hover:text-text"
            >
              LinkedIn
            </a>
            <span className="h-1 w-1 rounded-full bg-muted" />
            <a
              href={site.dribbble}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor
              data-cursor-label="Open"
              className="text-sm text-muted transition-colors duration-300 hover:text-text"
            >
              Dribbble
            </a>
          </div>
        </Reveal>
      </div>

      <div className="relative z-10 border-t border-stroke/60">
        <div className="flex overflow-hidden py-5">
          <div className="animate-marquee flex shrink-0 whitespace-nowrap">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0">
                {Array.from({ length: MARQUEE_COUNT }).map((_, i) => (
                  <span
                    key={i}
                    className="mx-5 text-lg font-medium tracking-wide text-text/70 md:text-2xl"
                  >
                    BUILDING THE FUTURE <span className="text-accent-a">•</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
