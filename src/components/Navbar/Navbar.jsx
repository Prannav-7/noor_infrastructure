import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container navbar-inner">

        {/* Monogram Logo */}
        <div className="navbar-logo" onClick={() => scrollTo('hero')}>
          <div className="logo-monogram">NI</div>
          <div className="logo-text-group">
            <span className="logo-name">Noor Infrastructure</span>
            <span className="logo-sub">Chennai · Est. 2014</span>
          </div>
        </div>

        {/* Nav Links */}
        <ul className="navbar-links">
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
                onClick={() => scrollTo(item.id)}
                id={`nav-${item.id}`}
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="navbar-cta">
          <button
            className="btn-primary"
            onClick={() => scrollTo('contact')}
            id="nav-cta-btn"
          >
            <span>Get a Quote</span>
          </button>
        </div>

        {/* Hamburger */}
        <div className="mobile-menu-toggle" id="mobile-menu-toggle">
          <span /><span /><span />
        </div>

      </div>
    </nav>
  )
}
