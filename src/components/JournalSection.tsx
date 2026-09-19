import { ArrowRight } from 'lucide-react'
import { journalEntries } from '../data/journal'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function JournalSection() {
  return (
    <section id="journal" className="container-x py-24 md:py-32">
      <SectionHeader
        eyebrow="Writing"
        title="Recent"
        titleAccent="thoughts."
        description="Notes on design thinking, product work, usability, and visual craft."
      />

      <div className="space-y-3">
        {journalEntries.map((entry, i) => (
          <Reveal key={entry.id} delay={Math.min(i * 0.05, 0.15)} y={20}>
            <a
              href={entry.href ?? '#'}
              onClick={(e) => {
                if (!entry.href) e.preventDefault()
              }}
              data-cursor
              className="group flex items-center gap-5 rounded-2xl border border-stroke bg-surface p-3 transition-all duration-300 hover:-translate-y-1 hover:border-accent-a/40 md:p-4"
            >
              <div className="h-16 w-24 shrink-0 overflow-hidden rounded-xl bg-bg md:h-20 md:w-32">
                <img
                  src={entry.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-base font-normal text-text transition-colors duration-300 group-hover:text-accent-a md:text-xl">
                  {entry.title}
                </h3>
                <p className="mt-1 text-sm font-light text-muted">
                  {entry.date} · {entry.readTime}
                </p>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent-a" />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
