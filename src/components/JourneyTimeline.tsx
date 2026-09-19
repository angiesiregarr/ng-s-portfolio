import { journey } from '../data/journey'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function JourneyTimeline() {
  return (
    <section id="resume" className="container-x py-24 md:py-32">
      <SectionHeader
        eyebrow="Experience"
        title="Professional"
        titleAccent="journey."
        description="The roles and teams that shaped how I design — and how I ship."
      />

      <div className="border-t border-stroke">
        {journey.map((entry, i) => (
          <Reveal key={entry.id} delay={Math.min(i * 0.05, 0.15)} y={20}>
            <article className="group grid grid-cols-1 gap-2 border-b border-stroke py-8 transition-colors duration-300 hover:bg-surface md:grid-cols-12 md:gap-6 md:py-10">
              <div className="md:col-span-4">
                <h3 className="text-xl font-normal text-text transition-colors duration-300 group-hover:text-accent-a md:text-2xl">
                  {entry.company}
                </h3>
                <p className="mt-1 text-sm font-light text-muted">{entry.role}</p>
              </div>

              <div className="md:col-span-3">
                <p className="text-sm text-muted">{entry.period}</p>
                <p className="mt-1 text-sm font-light text-muted">
                  {entry.location} · {entry.mode}
                </p>
              </div>

              <div className="md:col-span-5">
                <p className="text-sm font-light leading-relaxed text-muted md:text-base">
                  {entry.focus}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
