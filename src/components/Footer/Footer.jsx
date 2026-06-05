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

const socialIcons = ['📘', '📷', '📞', '💬']

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
                {socialIcons.map((icon, i) => (
                  <a
                    className="social-link"
                    key={i}
                    href="#"
                    aria-label={`Social link ${i + 1}`}
                  >
                    {icon}
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
                    → {link.label}
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
                    → {s}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact column */}
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
