import './Footer.css'

const quickLinks = [
  { label: 'About Us',      id: 'about'     },
  { label: 'Services',      id: 'services'  },
  { label: 'Projects',      id: 'projects'  },
  { label: 'Why Choose Us', id: 'why-us'    },
  { label: 'Contact',       id: 'contact'   },
]

const serviceLinks = [
  'New House Build',
  'Home Renovation',
  'Shop Construction',
  'Plumbing & Electrical',
  'Painting & Finishing',
  'Extensions & Add-ons',
]

const socialLinks = [
  { label: 'Fb', aria: 'Facebook',  url: '#' },
  { label: 'In', aria: 'Instagram', url: '#' },
  { label: 'Wa', aria: 'WhatsApp',  url: '#' },
  { label: 'Ph', aria: 'Call Us',   url: '#' },
]

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-grid">

            {/* Brand column */}
            <div className="footer-brand">
              <div className="navbar-logo" onClick={() => scrollTo('hero')}>
                <div className="logo-img-wrapper">
                  <img src="/image.png" alt="Noor Infrastructure Logo" className="logo-img-file" />
                </div>
                <div className="logo-text-group">
                  <span className="logo-name">Noor</span>
                  <span className="logo-sub">Infrastructure Works</span>
                </div>
              </div>
              <p>
                A trusted local construction company in Chennai, building quality
                homes and shops for families since 2014. We work with honesty,
                skill, and care.
              </p>
              <div className="social-links">
                {socialLinks.map((s, i) => (
                  <a
                    className="social-link"
                    key={i}
                    href={s.url}
                    aria-label={s.aria}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links column */}
            <div className="footer-col">
              <h4>Quick Links</h4>
              <div className="footer-links">
                {quickLinks.map((link) => (
                  <a
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    id={`footer-link-${link.id}`}
                  >
                    <span>✦</span> {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Services column */}
            <div className="footer-col">
              <h4>Our Services</h4>
              <div className="footer-links">
                {serviceLinks.map((s) => (
                  <a
                    key={s}
                    onClick={() => scrollTo('services')}
                    id={`footer-service-${s.replace(/\s+/g, '-').toLowerCase()}`}
                  >
                    <span>✦</span> {s}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact column */}
            <div className="footer-col">
              <h4>Contact</h4>
              <div className="footer-links">
                <a><span>✦</span> Tambaram West, Chennai</a>
                <a><span>✦</span> +91 98412 56789</a>
                <a><span>✦</span> WhatsApp Us</a>
                <a><span>✦</span> Mon–Sun, 8 AM – 8 PM</a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Noor Infrastructure, Chennai. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a id="footer-privacy">Privacy Policy</a>
            <a id="footer-terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

