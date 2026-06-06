import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const handleLinkClick = (id) => {
    setMenuOpen(false)
    scrollTo(id)
  }

  const handleCtaClick = () => {
    setMenuOpen(false)
    scrollTo('contact')
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-is-open' : ''}`} id="navbar">
      <div className="container navbar-inner">

        {/* Logo Image & Text Group */}
        <div className="navbar-logo" onClick={() => handleLinkClick('hero')}>
          <div className="logo-img-wrapper">
            <img src="/image.png" alt="Noor Infrastructure Logo" className="logo-img-file" />
          </div>
          <div className="logo-text-group">
            <span className="logo-name">Noor</span>
            <span className="logo-sub">Infrastructure Works</span>
          </div>
        </div>

        {/* Nav Links */}
        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          {[
            { label: 'About',    id: 'about'    },
            { label: 'Services', id: 'services' },
            { label: 'Projects', id: 'projects' },
            { label: 'Why Us',   id: 'why-us'   },
            { label: 'Contact',  id: 'contact'  },
          ].map((item) => (
            <li key={item.id}>
              <span
                className="nav-link"
                onClick={() => handleLinkClick(item.id)}
                id={`nav-${item.id}`}
              >
                {item.label}
              </span>
            </li>
          ))}
          {/* Mobile-only CTA */}
          <li className="mobile-cta-li">
            <button
              className="btn-primary"
              onClick={handleCtaClick}
              id="nav-cta-btn-mobile"
            >
              <span>Get a Quote</span>
            </button>
          </li>
        </ul>

        {/* CTA */}
        <div className="navbar-cta">
          <button
            className="btn-primary"
            onClick={() => handleLinkClick('contact')}
            id="nav-cta-btn"
          >
            <span>Get a Quote</span>
          </button>
        </div>

        {/* Hamburger */}
        <div
          className={`mobile-menu-toggle ${menuOpen ? 'active' : ''}`}
          id="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </div>

      </div>
    </nav>
  )
}

