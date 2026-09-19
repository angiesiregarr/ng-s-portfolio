import { useEffect, useState } from 'react'

export function useActiveSection(ids: string[], offset = 140): string {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + offset
      let current = ids[0] ?? ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= pos) current = id
      }
      if (
        window.innerHeight + Math.ceil(window.scrollY) >=
        document.documentElement.scrollHeight - 4
      ) {
        current = ids[ids.length - 1] ?? current
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids, offset])

  return active
}
