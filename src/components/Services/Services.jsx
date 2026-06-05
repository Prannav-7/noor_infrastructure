import './Services.css'

/* ── Data: edit this array to add/remove/change services ── */
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
    desc: 'Need an extra room, terrace cover, or compound wall? We handle all types of additions.',
    list: ['Room Extension', 'Terrace / Portico', 'Compound Wall', 'Staircase Build'],
  },
]

export default function Services() {
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
            <span className="gradient-text">Build &amp; Renovate</span>
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
