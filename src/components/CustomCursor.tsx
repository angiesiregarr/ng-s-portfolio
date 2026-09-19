import { useEffect, useRef, useState } from 'react'

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], [data-cursor], input, textarea, select, label, [tabindex]:not([tabindex="-1"])'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)
  const [reduced, setReduced] = useState(false)
  const [active, setActive] = useState(false)
  const [label, setLabel] = useState('')

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => {
      setEnabled(fine.matches)
      setReduced(reduce.matches)
    }
    apply()
    fine.addEventListener('change', apply)
    reduce.addEventListener('change', apply)
    return () => {
      fine.removeEventListener('change', apply)
      reduce.removeEventListener('change', apply)
    }
  }, [])

  useEffect(() => {
    if (!enabled) return
    document.documentElement.classList.add('has-cursor')
    return () => document.documentElement.classList.remove('has-cursor')
  }, [enabled])

  useEffect(() => {
    if (!enabled) return

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ring = { x: target.x, y: target.y }
    let raf = 0

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX
      target.y = e.clientY
    }

    const loop = () => {
      const dx = target.x - ring.x
      const dy = target.y - ring.y
      if (reduced) {
        ring.x = target.x
        ring.y = target.y
      } else {
        ring.x += dx * 0.16
        ring.y += dy * 0.16
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) translate(-50%, -50%)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(loop)
    }

    const onOver = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest?.(INTERACTIVE_SELECTOR)
      if (el) {
        setActive(true)
        setLabel(el.getAttribute('data-cursor-label') ?? '')
      }
    }

    const onOut = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest?.(INTERACTIVE_SELECTOR)
      if (el) {
        setActive(false)
        setLabel('')
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [enabled, reduced])

  if (!enabled) return null

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[300] h-2 w-2 rounded-full bg-accent"
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[299] flex items-center justify-center rounded-full border transition-[width,height,background-color,border-color] duration-300 ${
          active ? 'border-accent-a bg-accent-a/10' : 'border-text/40'
        }`}
        style={{
          width: active ? 56 : 32,
          height: active ? 56 : 32,
        }}
        aria-hidden="true"
      >
        {label && (
          <span className="text-[10px] font-medium uppercase tracking-widest text-text">
            {label}
          </span>
        )}
      </div>
    </>
  )
}
