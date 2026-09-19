import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'
import { useLayoutEffect, useRef, useState } from 'react'
import { playgroundItems } from '../data/playground'
import { site } from '../data/site'
import Lightbox, { type LightboxData } from './Lightbox'
import PlaygroundCard from './PlaygroundCard'
import Reveal from './Reveal'

gsap.registerPlugin(ScrollTrigger)

export default function PlaygroundSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selected, setSelected] = useState<LightboxData | null>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const cards = gsap.utils.toArray<HTMLElement>('[data-playground-card]')
      cards.forEach((card, i) => {
        const speed = ((i % 3) - 1) * 18
        gsap.fromTo(
          card,
          { y: -speed },
          {
            y: speed,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="playground" ref={sectionRef} className="container-x py-24 md:py-32">
      <div className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-muted">
            Visual experiments
          </p>
          <h2 className="text-4xl font-light leading-[1.02] tracking-tight text-text sm:text-5xl md:text-6xl">
            User Interface
            <span className="font-display text-gradient mt-1 block">
              Playground
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href={site.dribbble}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor
            className="group inline-flex items-center gap-2 rounded-full border border-stroke px-6 py-3 text-sm font-medium text-text transition-colors duration-300 hover:border-accent-a/60"
          >
            See more on Dribbble
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
        {playgroundItems.map((item, i) => (
          <Reveal key={item.id} delay={(i % 3) * 0.06} y={24}>
            <div data-playground-card className="h-full">
              <PlaygroundCard
                item={item}
                onSelect={() =>
                  setSelected({
                    title: item.title,
                    subtitle: item.subtitle,
                    image: item.image,
                    href: item.href,
                  })
                }
              />
            </div>
          </Reveal>
        ))}
      </div>

      <Lightbox item={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
