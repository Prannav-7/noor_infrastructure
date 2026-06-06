import './Hero.css'

const stats = [
  { val: '150+', label: 'Homes Built'      },
  { val: '10+',  label: 'Years in Chennai' },
  { val: '500+', label: 'Happy Families'   },
  { val: '4.9',  label: 'Star Rating'      },
]

export default function Hero() {
  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="hero">

      {/* Background */}
      <div className="hero-bg">
        <img src="/hero.png" alt="Noor Infrastructure — Chennai construction" />
        <div className="hero-overlay" />
        <div className="hero-grid" />
      </div>

      {/* Main copy */}
      <div className="container hero-content">
        <div className="hero-inner">

          <p className="eyebrow hero-eyebrow">
            Trusted Builder · Chennai
          </p>

          <h1 className="hero-heading">
            Your Dream Home,<br />
            <em>Built Right</em><br />
            in Chennai
          </h1>

          <p className="hero-body">
            Noor Infrastructure specialises in quality houses, renovations,
            and commercial shops across Chennai — honest pricing, skilled
            workmanship, on-time delivery.
          </p>

          <div className="hero-actions">
            <button className="btn-primary" onClick={() => go('projects')} id="hero-explore-btn">
              <span>View Our Work</span>
              <span>→</span>
            </button>
            <button className="btn-outline" onClick={() => go('contact')} id="hero-contact-btn">
              <span>Free Consultation</span>
            </button>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            {stats.map((s, i) => (
              <div className="hero-stat" key={i}>
                <span className="hero-stat-val">{s.val}</span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero-scroll">
        <span className="hero-scroll-label">Scroll</span>
        <div className="hero-scroll-line" />
      </div>

    </section>
  )
}
