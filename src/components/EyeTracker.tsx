import { useEffect, useRef, useState } from 'react'

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], [data-cursor], input, textarea, select, [tabindex]:not([tabindex="-1"])'

export default function EyeTracker() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const pupilRef = useRef<HTMLDivElement>(null)
  const focusedRef = useRef(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReduced(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  useEffect(() => {
    if (reduced) return

    const max = 7
    let tx = 0
    let ty = 0
    let px = 0
    let py = 0
    let raf = 0

    const onMove = (e: MouseEvent) => {
      const rect = wrapRef.current?.getBoundingClientRect()
      if (!rect) return
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.hypot(dx, dy) || 1
      const range = focusedRef.current ? max * 0.5 : max
      const clamp = Math.min(dist, 140) / 140
      tx = (dx / dist) * range * clamp
      ty = (dy / dist) * range * clamp
    }

    const loop = () => {
      px += (tx - px) * 0.14
      py += (ty - py) * 0.14
      if (pupilRef.current) {
        pupilRef.current.style.transform = `translate(${px}px, ${py}px)`
      }
      raf = requestAnimationFrame(loop)
    }

    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest?.(INTERACTIVE_SELECTOR)) {
        focusedRef.current = true
      }
    }
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest?.(INTERACTIVE_SELECTOR)) {
        focusedRef.current = false
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
  }, [reduced])

  return (
    <div
      ref={wrapRef}
      className="relative h-16 w-32 md:h-20 md:w-40"
      aria-hidden="true"
    >
      <div className="animate-blink absolute inset-0 overflow-hidden rounded-[50%] border border-text/25 bg-surface/40 backdrop-blur-sm">
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            ref={pupilRef}
            className="h-5 w-5 rounded-full bg-accent transition-transform md:h-6 md:w-6"
            style={{ willChange: 'transform' }}
          />
        </div>
      </div>
    </div>
  )
}
