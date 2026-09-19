import { useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import type { ReactNode } from 'react'

interface TiltCardProps {
  children: ReactNode
  className?: string
  maxTilt?: number
}

export default function TiltCard({
  children,
  className = '',
  maxTilt = 3.5,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rx = (0.5 - y) * maxTilt
    const ry = (x - 0.5) * maxTilt
    el.style.transition = 'transform 0.08s ease-out'
    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
  }

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ willChange: 'transform' }}
    >
      {children}
    </div>
  )
}
