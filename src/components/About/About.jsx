import useScrollReveal from '../../hooks/useScrollReveal'
import './About.css'

const features = [
  {
    icon: '◆',
    title: 'Transparent Pricing',
    desc: 'Detailed estimate before work begins — no hidden costs, ever.',
  },
  {
    icon: '◆',
    title: 'Premium Materials',
    desc: 'Branded cement, TMT steel, and quality tiles verified for every project.',
  },
  {
    icon: '◆',
    title: 'On-Time Handover',
    desc: 'We commit to timelines and send you weekly progress updates.',
  },
]

export default function About() {
  const photoRef  = useScrollReveal()
  const textRef   = useScrollReveal()
  const featRef   = useScrollReveal()

  return (
    <section className="about section" id="about">
      <div className="about-grid">

        {/* Left — Photo */}
        <div className="about-photo-side reveal from-left" ref={photoRef}>
          <img src="/about.png" alt="Noor Infrastructure — Chennai homeowner handshake" />
          <div className="about-photo-overlay" />
          <div className="about-badge">
            <span className="about-badge-num">10+</span>
            <div className="about-badge-label">
              <strong>Years of Trust</strong>
              <span>Est. 2014 · Chennai</span>
            </div>
          </div>
        </div>

        {/* Right — Text */}
        <div className="about-text-side">
          <div className="reveal" ref={textRef}>
            <p className="eyebrow">About Us</p>
            <h2 className="heading-section">
              Building Chennai Homes<br />
              <em style={{ fontStyle: 'italic', background: 'var(--clr-gold-grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Since 2014</em>
            </h2>
            <p className="about-body">
              We are a Chennai-based construction company specialising in residential
              houses and small commercial shops. From foundation to finishing, we handle
              every stage — so you can relax and watch your dream come to life.
            </p>
          </div>

          <div className="about-features reveal-stagger" ref={featRef}>
            {features.map((f, i) => (
              <div className="about-feature" key={i}>
                <div className="about-feature-icon">{f.icon}</div>
                <div className="about-feature-text">
                  <strong>{f.title}</strong>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal" ref={useScrollReveal()}>
            <button
              className="btn-primary"
              id="about-cta-btn"
              onClick={() => document.getElementById('why-us')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>Why Choose Us</span>
              <span>→</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
