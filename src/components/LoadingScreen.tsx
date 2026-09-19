import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const WORDS = ['Design', 'Create', 'Inspire'] as const

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const reduced = useReducedMotion()
  const [count, setCount] = useState(reduced ? 100 : 0)
  const [wordIndex, setWordIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const completedRef = useRef(false)

  useEffect(() => {
    if (completedRef.current) return

    if (reduced) {
      const t = setTimeout(() => {
        completedRef.current = true
        setVisible(false)
      }, 700)
      return () => clearTimeout(t)
    }

    const duration = 2700
    const start = performance.now()
    let raf = 0

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setCount(Math.round(progress * 100))
      if (progress < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        completedRef.current = true
        setVisible(false)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [reduced, onComplete])

  useEffect(() => {
    if (reduced) return
    const interval = setInterval(
      () => setWordIndex((i) => (i + 1) % WORDS.length),
      900,
    )
    return () => clearInterval(interval)
  }, [reduced])

  useEffect(() => {
    if (visible) return
    const t = setTimeout(onComplete, 500)
    return () => clearTimeout(t)
  }, [visible, onComplete])

  const word = reduced ? WORDS[0] : WORDS[wordIndex]

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col justify-between bg-bg"
      initial={{ opacity: 1 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      aria-hidden="true"
    >
      <div className="flex items-start justify-between p-6 md:p-10">
        <span className="text-sm font-medium tracking-wide text-text">
          Carmelita&rsquo;s Portfolio
        </span>
        <span className="text-sm text-muted">
          {String(count).padStart(3, '0')}
        </span>
      </div>

      <div className="flex flex-1 items-center justify-center overflow-hidden px-6">
        <div className="relative h-[1.3em] w-full text-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={word}
              className="font-display block text-5xl leading-none text-text sm:text-7xl md:text-8xl"
              initial={reduced ? false : { y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={reduced ? { opacity: 0 } : { y: -24, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {word}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      <div className="p-6 md:p-10">
        <div className="mb-4 flex items-end justify-between">
          <span className="text-sm text-muted">Loading</span>
          <span className="text-sm tabular-nums text-text">
            {String(count).padStart(3, '0')}%
          </span>
        </div>
        <div className="h-px w-full overflow-hidden bg-stroke">
          <div
            className="accent-ring h-full"
            style={{ width: `${count}%`, transition: 'width 0.1s linear' }}
          />
        </div>
      </div>
    </motion.div>
  )
}
