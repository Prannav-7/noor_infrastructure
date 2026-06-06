import useScrollReveal from '../../hooks/useScrollReveal'
import './Testimonials.css'

/* ── Data: edit this array to add/remove client reviews ── */
const testimonials = [
  {
    quote: 'Noor Infrastructure built our house in Velachery within the budget and time they promised. The quality of work — plastering, tiling, everything — is excellent. Very happy with them!',
    name: 'Ramesh Kumar',
    role: 'Homeowner, Velachery',
    initial: 'RK',
  },
  {
    quote: 'I gave them a small shop renovation project in Tambaram. They finished in just 3 weeks and the final result was better than I imagined. Pricing was very fair and transparent.',
    name: 'Fatima Begum',
    role: 'Shop Owner, Tambaram',
    initial: 'FB',
  },
  {
    quote: 'Renovated our entire house in Porur — false ceiling, flooring, paint and bathroom. The team was professional and polite. I will definitely call them again for future work.',
    name: 'Suresh Anand',
    role: 'Homeowner, Porur',
    initial: 'SA',
  },
]

export default function Testimonials() {
  const headerRef = useScrollReveal()
  const gridRef = useScrollReveal()

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <p className="eyebrow">Testimonials</p>
          <h2 className="heading-section">
            What Chennai Families<br />
            <em className="gold-text" style={{ fontStyle: 'italic' }}>Say About Us</em>
          </h2>
          <div className="gold-rule"></div>
          <p className="sub-text">Real reviews from real homeowners and shop owners across Chennai.</p>
        </div>

        <div className="testimonials-grid reveal-stagger" ref={gridRef}>
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i} id={`testimonial-${i + 1}`}>
              <div className="stars">{'★'.repeat(5)}</div>
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

