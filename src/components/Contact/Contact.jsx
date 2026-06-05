import { useState } from 'react'
import './Contact.css'

const contactMethods = [
  {
    icon: '📍',
    title: 'Office Address',
    info: 'No. 12, Gandhi Nagar, Tambaram West, Chennai – 600 045',
  },
  {
    icon: '📞',
    title: 'Call / WhatsApp',
    info: '+91 98412 56789 (Mohammed Noor)',
  },
  {
    icon: '✉️',
    title: 'Email',
    info: 'noorinfrastructure.chn@gmail.com',
  },
  {
    icon: '⏰',
    title: 'We Work',
    info: 'Monday – Sunday, 8:00 AM – 8:00 PM',
  },
]

const initialForm = {
  name: '', phone: '', area: '', service: '', message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm(initialForm)
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">

        {/* Section header */}
        <div className="section-header">
          <div className="badge">📞 &nbsp;Get In Touch</div>
          <h2>
            Start Your <span className="gradient-text">Project</span> Today
          </h2>
          <div className="divider-line"></div>
          <p>
            Tell us about your house or shop project in Chennai — we'll call you back
            within a few hours with a free estimate.
          </p>
        </div>

        <div className="contact-grid">

          {/* Left — contact info */}
          <div className="contact-info">
            <div className="badge">📍 &nbsp;Find Us</div>
            <h2>
              Let's Build Your{' '}
              <span className="gradient-text">Dream Space</span>
            </h2>
            <p className="lead-text">
              We work across all major areas of Chennai. Call us or fill the form and
              our team will visit your site for a free consultation.
            </p>

            <div className="contact-methods">
              {contactMethods.map((m, i) => (
                <div className="contact-method" key={i} id={`contact-method-${i + 1}`}>
                  <div className="contact-method-icon">{m.icon}</div>
                  <div className="contact-method-info">
                    <strong>{m.title}</strong>
                    <span>{m.info}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — enquiry form */}
          <div className="contact-form">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '12px', color: 'var(--clr-white)' }}>
                  We'll Call You Soon!
                </h3>
                <p style={{ color: 'var(--clr-gray-400)' }}>
                  Thank you for contacting Noor Infrastructure. Our team will call you back within a few hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} id="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      id="name" name="name" type="text"
                      placeholder="e.g. Ramesh Kumar"
                      value={form.name} onChange={handleChange} required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone / WhatsApp</label>
                    <input
                      id="phone" name="phone" type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone} onChange={handleChange} required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="area">Area in Chennai</label>
                    <input
                      id="area" name="area" type="text"
                      placeholder="e.g. Tambaram, Velachery"
                      value={form.area} onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Type of Work</label>
                    <select
                      id="service" name="service"
                      value={form.service} onChange={handleChange}
                    >
                      <option value="">Select work type</option>
                      <option>New House Construction</option>
                      <option>Home Renovation</option>
                      <option>Shop / Commercial Build</option>
                      <option>Plumbing &amp; Electrical</option>
                      <option>Painting &amp; Finishing</option>
                      <option>Extensions &amp; Add-ons</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Tell Us More</label>
                  <textarea
                    id="message" name="message"
                    placeholder="Describe your project — plot size, floors, budget, timeline…"
                    value={form.message} onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary form-submit"
                  id="contact-submit-btn"
                >
                  Send Free Enquiry →
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
