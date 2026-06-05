import './Hero.css'

const heroStats = [
  { value: '150+', label: 'Homes Built'     },
  { value: '10+',  label: 'Years in Chennai' },
  { value: '500+', label: 'Happy Families'  },
  { value: '4.9★', label: 'Client Rating'   },
]

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">

      {/* Background image + overlays */}
      <div className="hero-bg">
        <img src="/hero.png" alt="Noor Infrastructure construction site Chennai" />
        <div className="hero-bg-overlay"></div>
        <div className="hero-grid-overlay"></div>
      </div>

      {/* Main content */}
      <div className="container hero-content">
        <div className="hero-content-inner">

          <div className="badge hero-badge">
            <span>🏠</span>
            Trusted Builder in Chennai
          </div>

          <h1 className="hero-title">
            Your Dream Home,{' '}
            <span className="gradient-text">Built Right</span>
            <br />
            in Chennai
          </h1>

          <p className="hero-subtitle">
            Noor Infrastructure specialises in building quality houses, renovations,
            and small commercial shops across Chennai. Honest pricing,
            skilled workmanship, and on-time delivery — every time.
          </p>

          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() => scrollTo('projects')}
              id="hero-explore-btn"
            >
              View Our Work →
            </button>
            <button
              className="btn-outline"
              onClick={() => scrollTo('contact')}
              id="hero-contact-btn"
            >
              Contact Us
            </button>
          </div>

          {/* Stats row */}
          <div className="hero-stats">
            {heroStats.map((s, i) => (
              <div className="stat-item" key={i}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <div className="scroll-dot"></div>
        <div className="scroll-line"></div>
      </div>

    </section>
  )
}
