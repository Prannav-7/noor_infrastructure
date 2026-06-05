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
            <span className="company-tag">Building Tomorrow</span>
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
        <img src="/hero.png" alt="Noor Infrastructure hero" />
        <div className="hero-bg-overlay"></div>
        <div className="hero-grid-overlay"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-content-inner">
          <div className="badge hero-badge">
            <span>⚡</span>
            Award-Winning Infrastructure Company
          </div>

          <h1 className="hero-title">
            Building Tomorrow's{' '}
            <span className="gradient-text">Infrastructure</span>
            <br />
            Today
          </h1>

          <p className="hero-subtitle">
            Noor Infrastructure delivers world-class civil engineering and construction
            projects across highways, buildings, bridges, and utilities — with unrivalled
            precision and an unwavering commitment to excellence.
          </p>

          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              id="hero-explore-btn"
            >
              Explore Projects →
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
              { value: '250+', label: 'Projects Completed' },
              { value: '18+', label: 'Years Experience' },
              { value: '₹500Cr+', label: 'Project Value' },
              { value: '40+', label: 'Awards Won' },
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
            <img src="/about.png" alt="Noor Infrastructure team at work" className="about-img-main" />
            <div className="about-img-accent">
              <span className="accent-number">18+</span>
              <span className="accent-text">Years of Excellence</span>
            </div>
            <div className="about-badge-float">
              <div className="float-icon">🏆</div>
              <div className="float-text">
                <strong>ISO 9001:2015</strong>
                <span>Certified Company</span>
              </div>
            </div>
          </div>

          <div className="about-content">
            <div className="badge">🏗️ &nbsp;About Noor Infrastructure</div>
            <h2>
              Engineering Excellence Since{' '}
              <span className="gradient-text">2006</span>
            </h2>
            <p className="lead-text">
              Noor Infrastructure Private Limited is a premier civil engineering and construction
              firm headquartered in India. We specialize in delivering complex infrastructure
              projects with precision, safety, and sustainability at our core.
            </p>

            <div className="about-features">
              {[
                {
                  icon: '🛡️',
                  title: 'Safety First Culture',
                  desc: 'Zero-compromise safety protocols across all our project sites with industry-leading standards.',
                },
                {
                  icon: '🌱',
                  title: 'Sustainable Practices',
                  desc: 'Green-certified construction methods minimizing environmental impact and carbon footprint.',
                },
                {
                  icon: '🔬',
                  title: 'Advanced Technology',
                  desc: 'Using BIM, drone surveys, and AI-assisted project management for superior outcomes.',
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
    icon: '🏗️',
    iconClass: 'gold-bg',
    title: 'Civil & Structural Engineering',
    desc: 'Complete civil engineering solutions from design to execution for commercial, residential, and industrial structures.',
    list: ['Structural Design', 'Foundation Engineering', 'Seismic Analysis', 'Load Calculations'],
  },
  {
    icon: '🛣️',
    iconClass: 'teal-bg',
    title: 'Highway & Road Construction',
    desc: 'World-class highway and expressway development including national highways and state road projects.',
    list: ['Expressways', 'Flyovers & Bridges', 'Road Widening', 'Traffic Engineering'],
  },
  {
    icon: '🏢',
    iconClass: 'blue-bg',
    title: 'Commercial Building Projects',
    desc: 'Premium commercial complexes, corporate campuses, and large-scale mixed-use developments.',
    list: ['Office Complexes', 'Shopping Malls', 'Industrial Parks', 'IT Campuses'],
  },
  {
    icon: '💧',
    iconClass: 'teal-bg',
    title: 'Water & Utilities Infrastructure',
    desc: 'Comprehensive water supply, sewage, and utility infrastructure for urban and rural development.',
    list: ['Water Treatment Plants', 'Pipeline Networks', 'Sewage Systems', 'Pump Stations'],
  },
  {
    icon: '🌉',
    iconClass: 'gold-bg',
    title: 'Bridges & Elevated Structures',
    desc: 'Engineering and constructing robust bridges, viaducts, and elevated corridors to modern standards.',
    list: ['Cable-Stayed Bridges', 'Box Girder Bridges', 'Pedestrian Bridges', 'Metro Viaducts'],
  },
  {
    icon: '⚡',
    iconClass: 'blue-bg',
    title: 'Project Management & PMC',
    desc: 'End-to-end project management consultancy ensuring on-time, on-budget delivery for complex projects.',
    list: ['PMC Services', 'Quality Assurance', 'Procurement Management', 'Risk Analysis'],
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
            Comprehensive <span className="gradient-text">Infrastructure</span> Solutions
          </h2>
          <div className="divider-line"></div>
          <p>
            From concept to completion, we deliver the full spectrum of infrastructure services
            with cutting-edge technology and unmatched expertise.
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
    tag: 'Highway',
    title: 'NH-44 Six-Lane Expressway',
    desc: 'Widening and modernization of 82 km of national highway with smart traffic management systems.',
    location: 'Rajasthan',
    value: '₹420 Cr',
  },
  {
    img: '/project2.png',
    tag: 'Commercial',
    title: 'TechPark One — Hyderabad',
    desc: 'A 1.2 million sqft integrated IT campus with LEED Platinum green building certification.',
    location: 'Hyderabad',
    value: '₹280 Cr',
  },
  {
    img: '/project3.png',
    tag: 'Utilities',
    title: 'Smart Water Grid — Pune',
    desc: '340 km water pipeline network serving 1.8 million residents with IoT monitoring systems.',
    location: 'Pune',
    value: '₹190 Cr',
  },
]

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="badge">📁 &nbsp;Our Projects</div>
          <h2>
            Landmark <span className="gradient-text">Projects</span> That Define Us
          </h2>
          <div className="divider-line"></div>
          <p>
            Each project represents our commitment to quality, innovation, and lasting impact
            on communities across India.
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
            { icon: '🏗️', end: 250, suffix: '+', label: 'Projects Completed' },
            { icon: '👷', end: 1200, suffix: '+', label: 'Skilled Professionals' },
            { icon: '🌍', end: 18, suffix: '+', label: 'States Operating' },
            { icon: '🏆', end: 40, suffix: '+', label: 'Industry Awards' },
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
              Your Trusted Partner in{' '}
              <span className="gradient-text">World-Class Construction</span>
            </h2>
            <p className="lead-text">
              With 18+ years of field expertise, we've earned a reputation for delivering on
              our promises — on time, within budget, and beyond expectations.
            </p>

            <div className="why-list">
              {[
                {
                  icon: '⏱️',
                  title: 'On-Time Delivery',
                  desc: '97% of our projects are delivered on schedule, backed by Gantt-chart-driven project management.',
                },
                {
                  icon: '🔍',
                  title: 'Rigorous Quality Control',
                  desc: 'ISO 9001:2015 certified processes with multi-layer QC checks at every project stage.',
                },
                {
                  icon: '💡',
                  title: 'Innovation-Driven',
                  desc: 'We leverage BIM, AI scheduling, and drone surveys to bring efficiency to every build.',
                },
                {
                  icon: '🤝',
                  title: 'Client Partnership',
                  desc: 'Transparent reporting, dedicated account managers, and 24/7 site-level communication.',
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
              {['ISO 9001:2015', 'ISO 14001', 'OHSAS 18001', 'LEED Certified'].map((cert) => (
                <div className="cert-badge" key={cert}>
                  <span>✓</span> {cert}
                </div>
              ))}
            </div>
          </div>

          <div className="why-visual">
            <div className="why-grid-visual">
              <div className="why-visual-card v1">
                <span className="wvc-icon">📊</span>
                <div className="wvc-number">₹500Cr+</div>
                <div className="wvc-label">Total Project Value Executed</div>
              </div>
              <div className="why-visual-card v2">
                <span className="wvc-icon">🗂️</span>
                <div className="wvc-number">250+</div>
                <div className="wvc-label">Projects Delivered</div>
              </div>
              <div className="why-visual-card v3">
                <span className="wvc-icon">⭐</span>
                <div className="wvc-number">4.9/5</div>
                <div className="wvc-label">Client Satisfaction</div>
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
    quote: 'Noor Infrastructure delivered our NH-44 widening project 3 months ahead of schedule. Their engineering team\'s technical depth and site management is simply world-class.',
    name: 'Rajeev Sharma',
    role: 'Director, NHAI Region-IV',
    initial: 'RS',
  },
  {
    quote: 'We\'ve partnered with Noor on 4 major IT campus projects. Their quality standards, communication, and commitment to sustainable construction are unparalleled in the industry.',
    name: 'Priya Menon',
    role: 'VP Real Estate, TechCorp India',
    initial: 'PM',
  },
  {
    quote: 'The water grid project they delivered for Pune Municipal has transformed water supply for nearly 2 million people. Exceptional execution, zero compromises on quality.',
    name: 'Arun Desai',
    role: 'Commissioner, Pune Municipal Corp.',
    initial: 'AD',
  },
]

function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <div className="badge">💬 &nbsp;Testimonials</div>
          <h2>
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <div className="divider-line"></div>
          <p>Trusted by government bodies, corporations, and municipalities across India.</p>
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
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', phone: '', service: '', message: '' })
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="badge">📞 &nbsp;Get In Touch</div>
          <h2>
            Start Your <span className="gradient-text">Project</span> With Us
          </h2>
          <div className="divider-line"></div>
          <p>
            Tell us about your infrastructure project and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="badge">📍 &nbsp;Our Offices</div>
            <h2>
              Let's Build Something <span className="gradient-text">Extraordinary</span>
            </h2>
            <p className="lead-text">
              Whether it's a new project inquiry, partnership opportunity, or just a conversation about
              infrastructure — we'd love to hear from you.
            </p>

            <div className="contact-methods">
              {[
                { icon: '📍', title: 'Headquarters', info: '14th Floor, Noor Tower, Banjara Hills, Hyderabad — 500034' },
                { icon: '📞', title: 'Phone', info: '+91 40 4567 8900 | +91 98765 43210' },
                { icon: '✉️', title: 'Email', info: 'info@noorinfrastructure.in | projects@noorinfra.in' },
                { icon: '⏰', title: 'Working Hours', info: 'Monday – Saturday, 9:00 AM – 6:30 PM IST' },
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
                  Message Received!
                </h3>
                <p style={{ color: 'var(--clr-gray-400)' }}>
                  Thank you for reaching out. Our team will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} id="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service Required</label>
                    <select id="service" name="service" value={form.service} onChange={handleChange}>
                      <option value="">Select a service</option>
                      <option>Civil & Structural Engineering</option>
                      <option>Highway & Road Construction</option>
                      <option>Commercial Building Projects</option>
                      <option>Water & Utilities Infrastructure</option>
                      <option>Bridges & Elevated Structures</option>
                      <option>Project Management (PMC)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Briefly describe your project scope, location, and timeline..."
                    value={form.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary form-submit" id="contact-submit-btn">
                  Send Enquiry →
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
                  <span className="company-tag">Building Tomorrow</span>
                </div>
              </div>
              <p>
                India's leading infrastructure construction company, delivering world-class
                projects for over 18 years with engineering excellence and commitment.
              </p>
              <div className="social-links">
                {['🔗', '💼', '📘', '🐦'].map((icon, i) => (
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
              <h4>Services</h4>
              <div className="footer-links">
                {[
                  'Civil Engineering',
                  'Highway Construction',
                  'Commercial Buildings',
                  'Water Infrastructure',
                  'Bridge Construction',
                  'Project Management',
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
                <a>📍 Hyderabad, India</a>
                <a>📞 +91 40 4567 8900</a>
                <a>✉️ info@noorinfra.in</a>
                <a>⏰ Mon–Sat, 9 AM – 6:30 PM</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Noor Infrastructure Pvt. Ltd. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a id="footer-privacy">Privacy Policy</a>
            <a id="footer-terms">Terms of Service</a>
            <a id="footer-sitemap">Sitemap</a>
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
