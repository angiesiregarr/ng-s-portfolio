import { useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { stats, type Stat } from '../data/stats'
import Reveal from './Reveal'

function useCountUp(target: number, active: boolean, duration = 1600) {
  const reduced = useReducedMotion()
  const [value, setValue] = useState(reduced ? target : 0)

  useEffect(() => {
    if (!active || reduced) return

    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration, reduced])

  return value
}

function StatItem({ stat, active }: { stat: Stat; active: boolean }) {
  const value = useCountUp(stat.value, active)

  return (
    <div className="flex flex-col items-center py-10 text-center md:py-12">
      <div className="font-display text-6xl leading-none text-text md:text-8xl">
        {value}
        <span className="text-accent-a">{stat.suffix}</span>
      </div>
      <p className="mt-4 text-xs font-medium uppercase tracking-[0.22em] text-muted md:text-sm">
        {stat.label}
      </p>
    </div>
  )
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="stats" className="container-x py-24 md:py-32">
      <Reveal>
        <div
          ref={ref}
          className="grid grid-cols-1 divide-y divide-stroke rounded-2xl border border-stroke bg-surface/40 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {stats.map((stat) => (
            <StatItem key={stat.id} stat={stat} active={inView} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
