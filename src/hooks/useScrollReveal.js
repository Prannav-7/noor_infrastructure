/**
 * useScrollReveal
 * Attaches an IntersectionObserver to a ref.
 * Adds the class `is-visible` when the element enters the viewport.
 *
 * Usage:
 *   const ref = useScrollReveal()
 *   <div ref={ref} className="reveal"> ... </div>
 *
 * For stagger children:
 *   <div ref={ref} className="reveal-stagger"> ... </div>
 */
import { useEffect, useRef } from 'react'

export default function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)   // animate once
        }
      },
      {
        threshold: options.threshold ?? 0.15,
        rootMargin: options.rootMargin ?? '0px 0px -60px 0px',
        ...options,
      }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
