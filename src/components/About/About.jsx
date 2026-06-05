import { useEffect, useRef, useState } from 'react'
import './About.css'

const features = [
  {
    icon: '💰',
    title: 'Transparent Pricing',
    desc: 'No hidden costs. We give you a clear, detailed estimate before work begins.',
  },
  {
    icon: '🛡️',
    title: 'Quality Materials',
    desc: 'We use branded cement, TMT steel, and quality tiles — verified for every project.',
  },
  {
    icon: '📅',
    title: 'On-Time Handover',
    desc: 'We commit to timelines and keep you updated throughout the construction.',
  },
]

export default function About() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="container">
        <div className="about-grid">

          {/* Left — photo with floating badges */}
          <div className={`about-image-wrapper ${visible ? 'visible' : ''}`}>
            <img
              src="/about.png"
              alt="Noor Infrastructure team with homeowners"
              className="about-img-main"
            />

            {/* Top-left floating badge */}
            <div className="about-badge-float">
              <div className="float-icon">🏅</div>
              <div className="float-text">
                <strong>RERA Registered</strong>
                <span>Licensed Contractor</span>
              </div>
            </div>

            {/* Bottom-right accent card */}
            <div className="about-img-accent">
              <span className="accent-number">10+</span>
              <span className="accent-text">Years of Trust</span>
            </div>
          </div>

          {/* Right — text content */}
          <div className="about-content">
            <div className="badge">🏗️ &nbsp;About Noor Infrastructure</div>

            <h2>
              Building Chennai Homes{' '}
              <span className="gradient-text">Since 2014</span>
            </h2>

            <p className="lead-text">
              We are a Chennai-based construction company specialising in residential
              houses and small commercial shops. From foundation to finishing, we handle
              every stage of your build — so you can relax and watch your dream come to life.
            </p>

            <div className="about-features">
              {features.map((f, i) => (
                <div className="feature-item" key={i}>
                  <div className="feature-icon-wrap">{f.icon}</div>
                  <div className="feature-text">
                    <strong>{f.title}</strong>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="btn-primary"
              id="about-learn-more-btn"
              onClick={() => document.getElementById('why-us')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Why Choose Us →
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
