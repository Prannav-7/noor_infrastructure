import { useEffect, useRef, useState } from 'react'
import './Stats.css'

/* ── Animated counter hook ── */
function useCounter(end, duration = 2000, trigger) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!trigger) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [end, duration, trigger])

  return count
}

/* ── Single stat counter ── */
function AnimatedCounter({ end, suffix = '' }) {
  const ref = useRef(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const count = useCounter(end, 2000, triggered)

  return (
    <span className="stat-number" ref={ref}>
      {count}{suffix}
    </span>
  )
}

/* ── Data: edit this array to change the stats ── */
const statsData = [
  { icon: '🏠', end: 150, suffix: '+', label: 'Houses Built'    },
  { icon: '🏪', end: 80,  suffix: '+', label: 'Shops Constructed' },
  { icon: '😊', end: 500, suffix: '+', label: 'Happy Clients'   },
  { icon: '📍', end: 10,  suffix: '+', label: 'Years in Chennai' },
]

export default function Stats() {
  return (
    <section className="stats-section" id="stats">
      <div className="stats-bg"></div>
      <div className="container">
        <div className="stats-grid">
          {statsData.map((s, i) => (
            <div className="stat-card" key={i} id={`stat-card-${i + 1}`}>
              <span className="stat-icon">{s.icon}</span>
              <AnimatedCounter end={s.end} suffix={s.suffix} />
              <p className="stat-desc">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
