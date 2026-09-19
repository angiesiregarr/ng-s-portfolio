import { useState } from 'react'
import { projects } from '../data/projects'
import Lightbox, { type LightboxData } from './Lightbox'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function ProjectGrid() {
  const [selected, setSelected] = useState<LightboxData | null>(null)

  return (
    <section id="work" className="container-x py-24 md:py-32">
      <SectionHeader
        eyebrow="Selected work"
        title="Featured"
        titleAccent="projects."
        description="A selection of projects I've worked on, from concept to launch."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={(i % 2) * 0.08} y={32}>
            <ProjectCard
              project={project}
              onSelect={() =>
                setSelected({
                  title: project.name,
                  subtitle: project.category,
                  description: project.description,
                  image: project.image,
                  tags: project.tags,
                })
              }
            />
          </Reveal>
        ))}
      </div>

      <Lightbox item={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
