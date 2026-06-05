import { useState, useEffect, useRef } from 'react'
import './index.css'
import './App.css'

/* ============================================================
   NAVBAR COMPONENT
   ============================================================ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container navbar-inner">
        <div className="navbar-logo" onClick={() => scrollTo('hero')}>
          <div className="logo-icon">NI</div>
          <div className="logo-text">
            <span className="company-name">Noor Infrastructure</span>
            <span className="company-tag">Chennai, Tamil Nadu</span>
          </div>
        </div>

        <ul className="navbar-links">
          {['about', 'services', 'projects', 'why-us', 'contact'].map((item) => (
            <li key={item}>
              <span
                className="nav-link"
                onClick={() => scrollTo(item)}
                id={`nav-${item}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
              </span>
            </li>
          ))}
        </ul>

        <div className="navbar-cta">
          <button className="btn-primary" onClick={() => scrollTo('contact')} id="nav-cta-btn">
            Get a Quote
          </button>
        </div>

        <div className="mobile-menu-toggle" id="mobile-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

/* ============================================================
   HERO SECTION
   ============================================================ */
function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <img src="/hero.png" alt="Noor Infrastructure construction site Chennai" />
        <div className="hero-bg-overlay"></div>
        <div className="hero-grid-overlay"></div>
      </div>

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
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              id="hero-explore-btn"
            >
              View Our Work →
            </button>
            <button
              className="btn-outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              id="hero-contact-btn"
            >
              Contact Us
            </button>
          </div>

          <div className="hero-stats">
            {[
              { value: '150+', label: 'Homes Built' },
              { value: '10+', label: 'Years in Chennai' },
              { value: '500+', label: 'Happy Families' },
              { value: '4.9★', label: 'Client Rating' },
            ].map((s, i) => (
              <div className="stat-item" key={i}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-dot"></div>
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}

/* ============================================================
   ABOUT SECTION
   ============================================================ */
function About() {
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
          <div className={`about-image-wrapper ${visible ? 'visible' : ''}`}>
            <img src="/about.png" alt="Noor Infrastructure team with homeowners" className="about-img-main" />
            <div className="about-img-accent">
              <span className="accent-number">10+</span>
              <span className="accent-text">Years of Trust</span>
            </div>
            <div className="about-badge-float">
              <div className="float-icon">🏅</div>
              <div className="float-text">
                <strong>RERA Registered</strong>
                <span>Licensed Contractor</span>
              </div>
            </div>
          </div>

          <div className="about-content">
            <div className="badge">🏗️ &nbsp;About Noor Infrastructure</div>
            <h2>
              Building Chennai Homes{' '}
              <span className="gradient-text">Since 2014</span>
            </h2>
            <p className="lead-text">
              We are a Chennai-based construction company specialising in residential houses
              and small commercial shops. From foundation to finishing, we handle every stage
              of your build — so you can relax and watch your dream come to life.
            </p>

            <div className="about-features">
              {[
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
              ].map((f, i) => (
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

/* ============================================================
   SERVICES SECTION
   ============================================================ */
const services = [
  {
    icon: '🏠',
    iconClass: 'gold-bg',
    title: 'New House Construction',
    desc: 'Complete construction of your new home — from design and foundation all the way to finishing and handover.',
    list: ['Plan & Design Help', 'Foundation & Structure', 'Brick Work & Plastering', 'Roofing & Waterproofing'],
  },
  {
    icon: '🔨',
    iconClass: 'teal-bg',
    title: 'Home Renovation',
    desc: 'Give your existing home a fresh new look. We renovate kitchens, bathrooms, bedrooms and full interiors.',
    list: ['Kitchen Renovation', 'Bathroom Tiling', 'Flooring & Painting', 'False Ceiling / LED'],
  },
  {
    icon: '🏪',
    iconClass: 'blue-bg',
    title: 'Shop & Commercial Build',
    desc: 'We build small shops, office spaces, and commercial units with quality finish and fast turnaround.',
    list: ['Shop Front Build', 'Interior Fit-out', 'Electrical & Plumbing', 'Signboard & Shutters'],
  },
  {
    icon: '💧',
    iconClass: 'teal-bg',
    title: 'Plumbing & Electrical',
    desc: 'Licensed plumbing and electrical work done safely and to Chennai Corporation standards.',
    list: ['Water Lines & Tanks', 'Drainage & Sewage', 'Electrical Wiring', 'Switchboards & Fixtures'],
  },
  {
    icon: '🎨',
    iconClass: 'gold-bg',
    title: 'Painting & Finishing',
    desc: 'Interior and exterior painting using branded paints with smooth, long-lasting finish.',
    list: ['Interior Emulsion', 'Exterior Texture Paint', 'Primer & Putty Work', 'Wood Polishing'],
  },
  {
    icon: '🧱',
    iconClass: 'blue-bg',
    title: 'Extensions & Add-ons',
    desc: 'Need an extra room, terrace cover, or compound wall? We handle all types of additions and extensions.',
    list: ['Room Extension', 'Terrace / Portico', 'Compound Wall', 'Staircase Build'],
  },
]

function Services() {
  return (
    <section className="services section" id="services">
      <div className="services-bg">
        <img src="/services-bg.png" alt="" aria-hidden="true" />
      </div>
      <div className="container">
        <div className="section-header">
          <div className="badge">⚙️ &nbsp;Our Services</div>
          <h2>
            Everything You Need to{' '}
            <span className="gradient-text">Build & Renovate</span>
          </h2>
          <div className="divider-line"></div>
          <p>
            From a new house to a small shop renovation — we cover all construction
            and finishing services right here in Chennai.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i} id={`service-card-${i + 1}`}>
              <div className={`service-icon ${s.iconClass}`}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className="service-list">
                {s.list.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   PROJECTS SECTION
   ============================================================ */
const projects = [
  {
    img: '/project1.png',
    tag: 'Residential',
    title: 'Double-Storey House — Velachery',
    desc: 'New 1800 sqft two-storey house built with premium materials. Completed in 9 months, handed over on time.',
    location: 'Velachery, Chennai',
    value: '₹38 Lakhs',
  },
  {
    img: '/project2.png',
    tag: 'Commercial',
    title: 'Retail Shop Complex — Tambaram',
    desc: '4-unit commercial shop row with modern front elevation, shutters, and interior tile work.',
    location: 'Tambaram, Chennai',
    value: '₹14 Lakhs',
  },
  {
    img: '/project3.png',
    tag: 'Renovation',
    title: 'Full Home Renovation — Porur',
    desc: 'Complete interior renovation — flooring, false ceiling, paint, kitchen and bathroom makeover.',
    location: 'Porur, Chennai',
    value: '₹8 Lakhs',
  },
]

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="badge">📁 &nbsp;Our Projects</div>
          <h2>
            Work We're <span className="gradient-text">Proud Of</span>
          </h2>
          <div className="divider-line"></div>
          <p>
            Real projects, real families. A glimpse into the homes and shops
            we've built across Chennai.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={i} id={`project-card-${i + 1}`}>
              <img src={p.img} alt={p.title} className="project-img" />
              <div className="project-overlay">
                <span className="project-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="project-meta">
                  <div className="meta-item">
                    <span>Location</span>
                    <span>{p.location}</span>
                  </div>
                  <div className="meta-item">
                    <span>Project Value</span>
                    <span>{p.value}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   STATS SECTION
   ============================================================ */
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

function StatsCounter({ end, suffix = '' }) {
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

function Stats() {
  return (
    <section className="stats-section" id="stats">
      <div className="stats-bg"></div>
      <div className="container">
        <div className="stats-grid">
          {[
            { icon: '🏠', end: 150, suffix: '+', label: 'Houses Built' },
            { icon: '🏪', end: 80, suffix: '+', label: 'Shops Constructed' },
            { icon: '😊', end: 500, suffix: '+', label: 'Happy Clients' },
            { icon: '📍', end: 10, suffix: '+', label: 'Years in Chennai' },
          ].map((s, i) => (
            <div className="stat-card" key={i} id={`stat-card-${i + 1}`}>
              <span className="stat-icon">{s.icon}</span>
              <StatsCounter end={s.end} suffix={s.suffix} />
              <p className="stat-desc">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   WHY CHOOSE US SECTION
   ============================================================ */
function WhyUs() {
  return (
    <section className="why-us section" id="why-us">
      <div className="container">
        <div className="why-us-grid">
          <div className="why-us-content">
            <div className="badge">⭐ &nbsp;Why Choose Us</div>
            <h2>
              Chennai Families{' '}
              <span className="gradient-text">Trust Noor</span>
            </h2>
            <p className="lead-text">
              We're not a big corporate firm — we're a local Chennai team that cares about
              every client's home like it's our own. Here's why our customers keep coming
              back and referring us to their neighbours.
            </p>

            <div className="why-list">
              {[
                {
                  icon: '💬',
                  title: 'Direct Communication',
                  desc: 'Talk directly to the site supervisor and owner — no middlemen, no confusion.',
                },
                {
                  icon: '📋',
                  title: 'Written Agreement',
                  desc: 'Everything agreed in writing — scope, cost, timeline. No surprises later.',
                },
                {
                  icon: '🏗️',
                  title: 'Experienced Local Team',
                  desc: 'Our masons, plumbers and electricians have 10+ years of Chennai construction experience.',
                },
                {
                  icon: '🤝',
                  title: 'After-Work Support',
                  desc: 'We stand by our work. Any issues after handover — we come back and fix it, no excuses.',
                },
              ].map((item, i) => (
                <div className="why-item" key={i} id={`why-item-${i + 1}`}>
                  <div className="why-item-icon">{item.icon}</div>
                  <div className="why-item-text">
                    <strong>{item.title}</strong>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="certifications">
              {['RERA Registered', 'Licensed Contractor', 'GST Invoices', 'Local Chennai Team'].map((cert) => (
                <div className="cert-badge" key={cert}>
                  <span>✓</span> {cert}
                </div>
              ))}
            </div>
          </div>

          <div className="why-visual">
            <div className="why-grid-visual">
              <div className="why-visual-card v1">
                <span className="wvc-icon">🏠</span>
                <div className="wvc-number">150+</div>
                <div className="wvc-label">Houses Built in Chennai</div>
              </div>
              <div className="why-visual-card v2">
                <span className="wvc-icon">📍</span>
                <div className="wvc-number">10+</div>
                <div className="wvc-label">Years Local Experience</div>
              </div>
              <div className="why-visual-card v3">
                <span className="wvc-icon">⭐</span>
                <div className="wvc-number">4.9/5</div>
                <div className="wvc-label">Google Review Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   TESTIMONIALS SECTION
   ============================================================ */
const testimonials = [
  {
    quote: 'Noor Infrastructure built our house in Velachery within the budget and time they promised. The quality of work — plastering, tiling, everything — is excellent. Very happy with them!',
    name: 'Ramesh Kumar',
    role: 'Homeowner, Velachery',
    initial: 'RK',
  },
  {
    quote: 'I gave them a small shop renovation project in Tambaram. They finished in just 3 weeks and the final result was better than I imagined. Pricing was very fair and transparent.',
    name: 'Fatima Begum',
    role: 'Shop Owner, Tambaram',
    initial: 'FB',
  },
  {
    quote: 'Renovated our entire house in Porur — false ceiling, flooring, paint and bathroom. The team was professional and polite. I will definitely call them again for future work.',
    name: 'Suresh Anand',
    role: 'Homeowner, Porur',
    initial: 'SA',
  },
]

function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <div className="badge">💬 &nbsp;Testimonials</div>
          <h2>
            What Chennai Families <span className="gradient-text">Say About Us</span>
          </h2>
          <div className="divider-line"></div>
          <p>Real reviews from real homeowners and shop owners across Chennai.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i} id={`testimonial-${i + 1}`}>
              <div className="stars">{'⭐'.repeat(5)}</div>
              <span className="quote-icon">"</span>
              <p className="testimonial-text">{t.quote}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{t.initial}</div>
                <div className="author-info">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   CONTACT SECTION
   ============================================================ */
function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', area: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', phone: '', area: '', service: '', message: '' })
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="badge">📞 &nbsp;Get In Touch</div>
          <h2>
            Start Your <span className="gradient-text">Project</span> Today
          </h2>
          <div className="divider-line"></div>
          <p>
            Tell us about your house or shop project in Chennai — we'll call you back
            within a few hours with a free estimate.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="badge">📍 &nbsp;Find Us</div>
            <h2>
              Let's Build Your <span className="gradient-text">Dream Space</span>
            </h2>
            <p className="lead-text">
              We work across all major areas of Chennai. Call us or fill the form and
              our team will visit your site for a free consultation.
            </p>

            <div className="contact-methods">
              {[
                { icon: '📍', title: 'Office Address', info: 'No. 12, Gandhi Nagar, Tambaram West, Chennai – 600 045' },
                { icon: '📞', title: 'Call / WhatsApp', info: '+91 98412 56789 (Mohammed Noor)' },
                { icon: '✉️', title: 'Email', info: 'noorinfrastructure.chn@gmail.com' },
                { icon: '⏰', title: 'We Work', info: 'Monday – Sunday, 8:00 AM – 8:00 PM' },
              ].map((m, i) => (
                <div className="contact-method" key={i} id={`contact-method-${i + 1}`}>
                  <div className="contact-method-icon">{m.icon}</div>
                  <div className="contact-method-info">
                    <strong>{m.title}</strong>
                    <span>{m.info}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '12px', color: 'var(--clr-white)' }}>
                  We'll Call You Soon!
                </h3>
                <p style={{ color: 'var(--clr-gray-400)' }}>
                  Thank you for contacting Noor Infrastructure. Our team will call you back within a few hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} id="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="e.g. Ramesh Kumar"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone / WhatsApp</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="area">Area in Chennai</label>
                    <input
                      id="area"
                      name="area"
                      type="text"
                      placeholder="e.g. Tambaram, Velachery, Porur"
                      value={form.area}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Type of Work</label>
                    <select id="service" name="service" value={form.service} onChange={handleChange}>
                      <option value="">Select work type</option>
                      <option>New House Construction</option>
                      <option>Home Renovation</option>
                      <option>Shop / Commercial Build</option>
                      <option>Plumbing & Electrical</option>
                      <option>Painting & Finishing</option>
                      <option>Extensions & Add-ons</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Tell Us More</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Describe your project — plot size, number of floors, budget, timeline, etc."
                    value={form.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary form-submit" id="contact-submit-btn">
                  Send Free Enquiry →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   FOOTER COMPONENT
   ============================================================ */
function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo-wrap navbar-logo">
                <div className="logo-icon">NI</div>
                <div className="logo-text">
                  <span className="company-name">Noor Infrastructure</span>
                  <span className="company-tag">Chennai, Tamil Nadu</span>
                </div>
              </div>
              <p>
                A trusted local construction company in Chennai, building quality
                homes and shops for families since 2014. We work with honesty,
                skill, and care.
              </p>
              <div className="social-links">
                {['📘', '📷', '📞', '💬'].map((icon, i) => (
                  <a className="social-link" key={i} href="#" aria-label={`Social link ${i + 1}`}>
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-col">
              <h4>Quick Links</h4>
              <div className="footer-links">
                {[
                  { label: 'About Us', id: 'about' },
                  { label: 'Services', id: 'services' },
                  { label: 'Projects', id: 'projects' },
                  { label: 'Why Choose Us', id: 'why-us' },
                  { label: 'Contact', id: 'contact' },
                ].map((link) => (
                  <a key={link.id} onClick={() => scrollTo(link.id)} id={`footer-link-${link.id}`}>
                    → {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-col">
              <h4>Our Services</h4>
              <div className="footer-links">
                {[
                  'New House Build',
                  'Home Renovation',
                  'Shop Construction',
                  'Plumbing & Electrical',
                  'Painting & Finishing',
                  'Extensions & Add-ons',
                ].map((s) => (
                  <a key={s} onClick={() => scrollTo('services')} id={`footer-service-${s.replace(/\s+/g, '-').toLowerCase()}`}>
                    → {s}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-col">
              <h4>Contact</h4>
              <div className="footer-links">
                <a>📍 Tambaram West, Chennai</a>
                <a>📞 +91 98412 56789</a>
                <a>💬 WhatsApp Us</a>
                <a>⏰ Mon–Sun, 8 AM – 8 PM</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Noor Infrastructure, Chennai. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a id="footer-privacy">Privacy Policy</a>
            <a id="footer-terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ============================================================
   APP ROOT
   ============================================================ */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Stats />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
