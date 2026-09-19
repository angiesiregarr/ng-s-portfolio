import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks, site } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'

const SECTION_IDS = ['home', 'work', 'process', 'resume'] as const

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection([...SECTION_IDS])
  const reduced = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex flex-col items-center px-4 pt-4 md:pt-5">
      <nav
        aria-label="Primary"
        className={`flex items-center gap-1 rounded-full border border-stroke bg-surface/70 p-1.5 backdrop-blur-xl transition-shadow duration-500 ${
          scrolled ? 'shadow-[0_8px_40px_rgba(0,0,0,0.55)]' : ''
        }`}
      >
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="mr-1 flex items-center gap-2 rounded-full px-2 py-1"
          aria-label="Carmelita Angelica — Home"
        >
          <span className="accent-ring flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold text-bg">
            {site.shortName}
          </span>
        </a>

        <div className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => {
            const isMail = link.href.startsWith('mailto')
            const isActive = !isMail && `#${active}` === link.href
            return (
              <a
                key={link.label}
                href={link.href}
                data-cursor
                className={`relative rounded-full px-4 py-2 text-sm font-normal transition-colors duration-300 ${
                  isActive
                    ? 'text-text'
                    : isMail
                      ? 'text-accent-a'
                      : 'text-muted hover:text-text'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-text/[0.07]" />
                )}
                <span className="relative flex items-center gap-1">
                  {link.label}
                  {isMail && <ArrowUpRight className="h-3.5 w-3.5" />}
                </span>
              </a>
            )
          })}
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-full text-text md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="mt-3 w-full max-w-sm rounded-2xl border border-stroke bg-surface/95 p-2 backdrop-blur-xl md:hidden"
            initial={reduced ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col">
              {navLinks.map((link) => {
                const isMail = link.href.startsWith('mailto')
                const isActive = !isMail && `#${active}` === link.href
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-base transition-colors ${
                      isActive
                        ? 'bg-text/[0.06] text-text'
                        : isMail
                          ? 'text-accent-a'
                          : 'text-muted hover:text-text'
                    }`}
                  >
                    {link.label}
                    {isMail && <ArrowUpRight className="h-4 w-4" />}
                  </a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <span className="sr-only" aria-live="polite">
        {navLinks.find((l) => l.href === `#${active}`)?.label ?? ''}
      </span>
    </header>
  )
}
