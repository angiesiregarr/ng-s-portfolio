import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  titleAccent?: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  children?: ReactNode
}

export default function SectionHeader({
  eyebrow,
  title,
  titleAccent,
  description,
  align = 'left',
  className = '',
  children,
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === 'center' ? 'text-center' : 'text-left'
      } ${className}`}
    >
      {eyebrow && (
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-muted">
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="text-4xl font-light leading-[1.05] tracking-tight text-text sm:text-5xl md:text-6xl">
          {title}{' '}
          {titleAccent && <span className="font-display">{titleAccent}</span>}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={`mt-5 max-w-xl text-base font-light leading-relaxed text-muted md:text-lg ${
              align === 'center' ? 'mx-auto' : ''
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
      {children}
    </div>
  )
}
