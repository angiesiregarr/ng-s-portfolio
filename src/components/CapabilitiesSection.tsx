import { ArrowUpRight } from 'lucide-react'
import { capabilities } from '../data/capabilities'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="container-x py-24 md:py-32">
      <SectionHeader
        eyebrow="What I make"
        title="Capabilities"
        description="The core services I bring to every product — from first concept to a shipped, working interface."
      />

      <div className="border-t border-stroke">
        {capabilities.map((cap, i) => (
          <Reveal key={cap.id} delay={Math.min(i * 0.04, 0.2)} y={20}>
            <div
              data-cursor
              className="group flex flex-col gap-1 border-b border-stroke py-6 transition-colors duration-300 hover:bg-surface md:flex-row md:items-center md:justify-between md:gap-6"
            >
              <div className="flex items-center gap-5 md:gap-8">
                <span className="text-sm tabular-nums text-muted">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-2xl font-light text-text transition-transform duration-500 ease-out group-hover:translate-x-2 md:text-4xl">
                  {cap.title}
                </h3>
              </div>

              <div className="flex items-center justify-between gap-6 md:justify-end">
                <p className="max-w-sm text-sm font-light leading-relaxed text-muted md:translate-y-1 md:opacity-0 md:transition-all md:duration-500 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  {cap.description}
                </p>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent-a" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
