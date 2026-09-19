import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'
import { processSteps } from '../data/process'
import SectionHeader from './SectionHeader'

gsap.registerPlugin(ScrollTrigger)

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: 'top center',
          ease: 'none',
          scrollTrigger: {
            trigger: stepsRef.current,
            start: 'top 72%',
            end: 'bottom 62%',
            scrub: 0.5,
          },
        },
      )

      const steps = gsap.utils.toArray<HTMLElement>('[data-process-step]')
      steps.forEach((step) => {
        gsap.fromTo(
          step,
          { opacity: 0.2, y: 32, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 82%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="process" ref={sectionRef} className="container-x py-24 md:py-32">
      <SectionHeader
        eyebrow="How I work"
        title="Design"
        titleAccent="process."
        description="My product-design approach — a loop that keeps the user, the business, and the constraints in balance."
      />

      <div ref={stepsRef} className="relative">
        <div className="absolute bottom-0 left-[19px] top-0 w-px bg-stroke md:left-[23px]" />
        <div
          ref={lineRef}
          className="accent-ring absolute bottom-0 left-[19px] top-0 w-px md:left-[23px]"
        />

        <div className="space-y-12 md:space-y-16">
          {processSteps.map((step) => (
            <div
              key={step.id}
              data-process-step
              className="relative flex gap-6 md:gap-10"
            >
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-stroke bg-bg md:h-12 md:w-12">
                <span className="text-xs tabular-nums text-text md:text-sm">
                  {step.number}
                </span>
              </div>
              <div className="pt-1 md:pt-2">
                <h3 className="text-2xl font-light text-text md:text-4xl">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm font-light leading-relaxed text-muted md:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
