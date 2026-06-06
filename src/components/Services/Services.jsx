import useScrollReveal from '../../hooks/useScrollReveal'
import './Services.css'

/* ── Data: edit this array to add/remove/change services ── */
const services = [
  {
    icon: '✦',
    title: 'New House Construction',
    desc: 'Complete construction of your new home — from design and foundation all the way to finishing and handover.',
    list: ['Plan & Design Help', 'Foundation & Structure', 'Brick Work & Plastering', 'Roofing & Waterproofing'],
  },
  {
    icon: '⬡',
    title: 'Home Renovation',
    desc: 'Give your existing home a fresh new look. We renovate kitchens, bathrooms, bedrooms and full interiors.',
    list: ['Kitchen Renovation', 'Bathroom Tiling', 'Flooring & Painting', 'False Ceiling / LED'],
  },
  {
    icon: '◈',
    title: 'Shop & Commercial Build',
    desc: 'We build small shops, office spaces, and commercial units with quality finish and fast turnaround.',
    list: ['Shop Front Build', 'Interior Fit-out', 'Electrical & Plumbing', 'Signboard & Shutters'],
  },
  {
    icon: '◇',
    title: 'Plumbing & Electrical',
    desc: 'Licensed plumbing and electrical work done safely and to Chennai Corporation standards.',
    list: ['Water Lines & Tanks', 'Drainage & Sewage', 'Electrical Wiring', 'Switchboards & Fixtures'],
  },
  {
    icon: '✦',
    title: 'Painting & Finishing',
    desc: 'Interior and exterior painting using branded paints with smooth, long-lasting finish.',
    list: ['Interior Emulsion', 'Exterior Texture Paint', 'Primer & Putty Work', 'Wood Polishing'],
  },
  {
    icon: '⬢',
    title: 'Extensions & Add-ons',
    desc: 'Need an extra room, terrace cover, or compound wall? We handle all types of additions.',
    list: ['Room Extension', 'Terrace / Portico', 'Compound Wall', 'Staircase Build'],
  },
]

export default function Services() {
  const headerRef = useScrollReveal()
  const gridRef = useScrollReveal()

  return (
    <section className="services section" id="services">
      <div className="services-bg">
        <img src="/services-bg.png" alt="" aria-hidden="true" />
      </div>

      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <p className="eyebrow">Our Services</p>
          <h2 className="heading-section">
            Everything You Need to<br />
            <em className="gold-text" style={{ fontStyle: 'italic' }}>Build &amp; Renovate</em>
          </h2>
          <div className="gold-rule"></div>
          <p className="sub-text">
            From a new house to a small shop renovation — we cover all construction
            and finishing services right here in Chennai.
          </p>
        </div>

        <div className="services-grid reveal-stagger" ref={gridRef}>
          {services.map((s, i) => (
            <div className="service-card" key={i} id={`service-card-${i + 1}`}>
              <div className="service-icon">{s.icon}</div>
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

