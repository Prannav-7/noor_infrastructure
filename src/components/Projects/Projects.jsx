import useScrollReveal from '../../hooks/useScrollReveal'
import './Projects.css'

/* ── Data: edit this array to add/remove/change projects ── */
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

export default function Projects() {
  const headerRef = useScrollReveal()
  const gridRef = useScrollReveal()

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <p className="eyebrow">Our Projects</p>
          <h2 className="heading-section">
            Work We're<br />
            <em className="gold-text" style={{ fontStyle: 'italic' }}>Proud Of</em>
          </h2>
          <div className="gold-rule"></div>
          <p className="sub-text">
            Real projects, real families. A glimpse into the homes and shops
            we've built across Chennai.
          </p>
        </div>

        <div className="projects-grid reveal-stagger" ref={gridRef}>
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

