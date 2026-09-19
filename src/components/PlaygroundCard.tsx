import { ArrowUpRight } from 'lucide-react'
import type { PlaygroundItem } from '../data/playground'

interface PlaygroundCardProps {
  item: PlaygroundItem
  onSelect: () => void
}

export default function PlaygroundCard({
  item,
  onSelect,
}: PlaygroundCardProps) {
  const inner = (
    <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-stroke bg-surface">
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        style={{ objectPosition: item.objectPosition ?? 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/0 to-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-between p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
            {item.subtitle}
          </p>
          <p className="mt-0.5 text-sm font-normal text-text">{item.title}</p>
        </div>
        <ArrowUpRight className="h-4 w-4 text-text" />
      </div>
    </div>
  )

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor
        data-cursor-label="Open"
        className="block h-full"
      >
        {inner}
      </a>
    )
  }

  return (
    <button
      type="button"
      onClick={onSelect}
      data-cursor
      data-cursor-label="View"
      className="block h-full w-full text-left"
    >
      {inner}
    </button>
  )
}
