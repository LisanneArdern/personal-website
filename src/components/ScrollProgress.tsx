import { useEffect, useRef } from 'react'

/**
 * Thin scroll progress bar at the top of the viewport.
 * Fallback to a lightweight rAF-throttled scroll listener for browsers
 * that don't support `animation-timeline: scroll()`.
 */
export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const supportsTimeline =
      typeof CSS !== 'undefined' &&
      typeof CSS.supports === 'function' &&
      CSS.supports('animation-timeline: scroll()')

    if (supportsTimeline) return

    let raf = 0
    const update = () => {
      raf = 0
      const el = document.documentElement
      const max = Math.max(1, el.scrollHeight - el.clientHeight)
      const p = Math.min(1, Math.max(0, el.scrollTop / max))
      if (ref.current) ref.current.style.transform = `scaleX(${p})`
    }

    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress__bar" ref={ref} />
    </div>
  )
}
