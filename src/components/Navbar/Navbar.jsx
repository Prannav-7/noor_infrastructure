import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
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

        {/* Logo */}
        <div className="navbar-logo" onClick={() => scrollTo('hero')}>
          <div className="logo-icon">NI</div>
          <div className="logo-text">
            <span className="company-name">Noor Infrastructure</span>
            <span className="company-tag">Chennai, Tamil Nadu</span>
          </div>
        </div>

        {/* Nav Links */}
        <ul className="navbar-links">
          {[
            { label: 'About',    id: 'about'       },
            { label: 'Services', id: 'services'     },
            { label: 'Projects', id: 'projects'     },
            { label: 'Why Us',   id: 'why-us'       },
            { label: 'Contact',  id: 'contact'      },
          ].map((item) => (
            <li key={item.id}>
              <span
                className="nav-link"
                onClick={() => scrollTo(item.id)}
                id={`nav-${item.id}`}
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="navbar-cta">
          <button
            className="btn-primary"
            onClick={() => scrollTo('contact')}
            id="nav-cta-btn"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile hamburger */}
        <div className="mobile-menu-toggle" id="mobile-menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </nav>
  )
}
