import useScrollReveal from '../../hooks/useScrollReveal'
import './WhyUs.css'

const whyItems = [
  {
    icon: '✦',
    title: 'Direct Communication',
    desc: 'Talk directly to the site supervisor and owner — no middlemen, no confusion.',
  },
  {
    icon: '⬡',
    title: 'Written Agreement',
    desc: 'Everything agreed in writing — scope, cost, timeline. No surprises later.',
  },
  {
    icon: '◈',
    title: 'Experienced Local Team',
    desc: 'Our masons, plumbers and electricians have 10+ years of Chennai construction experience.',
  },
  {
    icon: '◇',
    title: 'After-Work Support',
    desc: 'We stand by our work. Any issues after handover — we come back and fix it, no excuses.',
  },
]

const certs = ['RERA Registered', 'Licensed Contractor', 'GST Invoices', 'Local Chennai Team']

const visualCards = [
  { cls: 'v1', icon: '✦', number: '150+', label: 'Houses Built in Chennai' },
  { cls: 'v2', icon: '⬡', number: '10+',  label: 'Years Local Experience'  },
  { cls: 'v3', icon: '★', number: '4.9/5', label: 'Google Review Rating'   },
]

export default function WhyUs() {
  const contentRef = useScrollReveal()
  const visualRef = useScrollReveal()

  return (
    <section className="why-us section" id="why-us">
      <div className="container">
        <div className="why-us-grid">

          {/* Left — reasons list */}
          <div className="why-us-content reveal" ref={contentRef}>
            <p className="eyebrow">Why Choose Us</p>
            <h2 className="heading-section">
              Chennai Families<br />
              <em className="gold-text" style={{ fontStyle: 'italic' }}>Trust Noor</em>
            </h2>
            <p className="why-body">
              We're not a big corporate firm — we're a local Chennai team that cares about
              every client's home like it's our own.
            </p>

            <div className="why-list">
              {whyItems.map((item, i) => (
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
              {certs.map((cert) => (
                <div className="cert-badge" key={cert}>
                  <span>✦</span> {cert}
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual metric cards */}
          <div className="why-visual reveal" ref={visualRef}>
            <div className="why-grid-visual">
              {visualCards.map((card, i) => (
                <div className={`why-visual-card ${card.cls}`} key={i}>
                  <span className="wvc-icon">{card.icon}</span>
                  <div className="wvc-number">{card.number}</div>
                  <div className="wvc-label">{card.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

