import type { Project } from '../data/projects'
import TiltCard from './TiltCard'

interface ProjectCardProps {
  project: Project
  onSelect: () => void
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <TiltCard className="group h-full" maxTilt={3}>
      <button
        type="button"
        onClick={onSelect}
        data-cursor
        data-cursor-label="View"
        className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-stroke bg-surface text-left transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-accent-a/40"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <img
            src={project.image}
            alt={`${project.name} — ${project.category}`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            style={{ objectPosition: project.objectPosition ?? 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
            <span className="rounded-full border border-white/25 bg-white/10 px-5 py-2 text-sm font-medium text-text backdrop-blur-md">
              View — {project.name}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5 md:p-6">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-normal text-text">{project.name}</h3>
            <span className="text-sm tabular-nums text-muted">{project.year}</span>
          </div>
          <p className="mt-1 text-sm font-light text-muted">{project.category}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-stroke px-3 py-1 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </button>
    </TiltCard>
  )
}
