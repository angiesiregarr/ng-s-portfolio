import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import { useEffect, useRef } from 'react'

export interface LightboxData {
  title: string
  subtitle?: string
  description?: string
  image: string
  tags?: string[]
  href?: string
}

interface LightboxProps {
  item: LightboxData | null
  onClose: () => void
}

export default function Lightbox({ item, onClose }: LightboxProps) {
  const reduced = useReducedMotion()
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!item) return

    const previouslyFocused = document.activeElement as HTMLElement | null
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      const panel = panelRef.current
      if (!panel) return
      const focusables = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      if (focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)
    requestAnimationFrame(() => panelRef.current?.focus())

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
      previouslyFocused?.focus?.()
    }
  }, [item, onClose])

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[250] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={item.title}
            tabIndex={-1}
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-stroke bg-surface outline-none"
            initial={reduced ? false : { opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-text transition-colors hover:bg-black/70"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="aspect-[16/10] w-full overflow-hidden bg-bg">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  {item.subtitle && (
                    <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-muted">
                      {item.subtitle}
                    </p>
                  )}
                  <h3 className="text-2xl font-light text-text md:text-3xl">
                    {item.title}
                  </h3>
                </div>
                {item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex shrink-0 items-center gap-1.5 rounded-full border border-stroke px-4 py-2 text-sm text-text transition-colors hover:border-accent-a/60"
                  >
                    Open
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>

              {item.description && (
                <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-muted md:text-base">
                  {item.description}
                </p>
              )}

              {item.tags && item.tags.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-stroke px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
