import React, { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const contactDetails = [
  {
    icon: '◎',
    label: 'Address',
    value: '14, Greams Road, Thousand Lights, Chennai — 600 006, Tamil Nadu',
    link: null,
  },
  {
    icon: '◎',
    label: 'Phone',
    value: '+91 98765 43210',
    link: 'tel:+919876543210',
  },
  {
    icon: '◎',
    label: 'Email',
    value: 'hello@carnivalcafe.in',
    link: 'mailto:hello@carnivalcafe.in',
  },
  {
    icon: '◎',
    label: 'Hours',
    value: 'Mon – Fri  7:30 AM – 10:00 PM\nSat – Sun  8:00 AM – 11:00 PM',
    link: null,
  },
]

export default function Contact() {
  useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-espresso-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(201,168,76,0.06),transparent_60%)]" />
      <div className="gold-line absolute top-0 left-0 right-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="gold-line w-12 block" />
            <span className="font-sans text-gold text-[10px] tracking-[0.5em] uppercase">Get in Touch</span>
            <span className="gold-line w-12 block" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-cream mb-5">
            Visit Us or <span className="italic text-gold-gradient">Say Hello</span>
          </h2>
          <p className="font-body text-warm/55 text-lg max-w-md mx-auto italic">
            Whether you're planning a visit or just want to chat about coffee — we'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Details + Map */}
          <div className="reveal-left">
            {/* Contact info */}
            <div className="space-y-8 mb-12">
              {contactDetails.map((d, i) => (
                <div key={i} className="flex gap-5 group">
                  <span className="text-gold/40 text-lg mt-0.5 group-hover:text-gold transition-colors duration-300">{d.icon}</span>
                  <div>
                    <div className="font-sans text-[9px] tracking-[0.4em] uppercase text-warm/40 mb-1">{d.label}</div>
                    {d.link ? (
                      <a
                        href={d.link}
                        className="font-body text-cream/75 text-base hover:text-gold transition-colors duration-300 whitespace-pre-line"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="font-body text-cream/75 text-base whitespace-pre-line leading-relaxed">{d.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="relative overflow-hidden h-56 border border-gold/15">
              <iframe
                title="Carnival Cafe Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4837!2d80.2574!3d13.0620!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAzJzQzLjIiTiA4MMKwMTUnMjYuNiJF!5e0!3m2!1sen!2sin!4v1700000000000"
                className="w-full h-full grayscale opacity-60 hover:opacity-80 transition-opacity duration-500"
                style={{ filter: 'grayscale(1) invert(0.85) sepia(0.4) hue-rotate(5deg) brightness(0.7)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 border border-gold/10 pointer-events-none" />
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal-right">
            {sent ? (
              <div className="glass border border-gold/25 p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="text-5xl text-gold mb-6">✦</div>
                <h3 className="font-display text-3xl text-cream mb-3">Thank You!</h3>
                <p className="font-body text-warm/60 italic text-lg">
                  Your message has been received. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-sans text-[9px] tracking-[0.4em] uppercase text-warm/40 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Priya Ramachandran"
                    className="w-full bg-transparent border border-white/10 text-cream font-body text-base px-5 py-4 focus:outline-none focus:border-gold/50 placeholder:text-warm/20 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block font-sans text-[9px] tracking-[0.4em] uppercase text-warm/40 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="hello@you.com"
                    className="w-full bg-transparent border border-white/10 text-cream font-body text-base px-5 py-4 focus:outline-none focus:border-gold/50 placeholder:text-warm/20 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block font-sans text-[9px] tracking-[0.4em] uppercase text-warm/40 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your reservation, special request, or just say hi…"
                    className="w-full bg-transparent border border-white/10 text-cream font-body text-base px-5 py-4 focus:outline-none focus:border-gold/50 placeholder:text-warm/20 transition-colors duration-300 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full relative bg-gold text-espresso-dark font-sans text-xs font-semibold tracking-[0.3em] uppercase py-4 overflow-hidden hover:shadow-[0_0_30px_rgba(201,168,76,0.3)] transition-shadow duration-300"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Send Message
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gold-light translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
