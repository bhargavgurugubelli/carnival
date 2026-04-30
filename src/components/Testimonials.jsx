import React, { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const testimonials = [
  {
    id: 1,
    name: 'Priya Ramachandran',
    role: 'Food Blogger · Chennai',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    quote:
      'Carnival Cafe is not just a café — it\'s an experience. The saffron cardamom latte changed how I think about coffee. The ambience is warm, the team is wonderful, and every visit feels like a special occasion.',
    stars: 5,
  },
  {
    id: 2,
    name: 'Arjun Mehta',
    role: 'Architect · Mumbai',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    quote:
      'I\'ve been to cafés across the world, and Carnival holds its own effortlessly. The truffle toast is phenomenal, the espresso is perfectly pulled, and the interior design is stunning. This is what a premium café should look like.',
    stars: 5,
  },
  {
    id: 3,
    name: 'Sneha Iyer',
    role: 'Pastry Chef · Bangalore',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    quote:
      'As someone who works in the industry, I have high standards. Carnival Cafe exceeds them. The gold leaf croissant is a masterpiece — buttery, perfectly laminated, and visually gorgeous. I keep coming back.',
    stars: 5,
  },
]

export default function Testimonials() {
  useReveal()
  const [active, setActive] = useState(0)

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-espresso" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(201,168,76,0.06),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="gold-line w-12 block" />
            <span className="font-sans text-gold text-[10px] tracking-[0.5em] uppercase">Guest Voices</span>
            <span className="gold-line w-12 block" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-cream mb-5">
            What Our Guests <span className="italic text-gold-gradient">Say</span>
          </h2>
        </div>

        {/* Large featured testimonial */}
        <div className="max-w-4xl mx-auto mb-16 reveal">
          <div className="glass border border-gold/15 p-10 md:p-14 relative">
            {/* Giant quote mark */}
            <span className="absolute top-6 left-8 font-display text-8xl text-gold/10 leading-none select-none">"</span>

            {/* Stars */}
            <div className="flex gap-1 mb-8">
              {[...Array(testimonials[active].stars)].map((_, i) => (
                <span key={i} className="text-gold text-lg">★</span>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-body text-xl md:text-2xl text-cream/85 italic leading-relaxed mb-10">
              "{testimonials[active].quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-gold/30 flex-shrink-0">
                <img
                  src={testimonials[active].avatar}
                  alt={testimonials[active].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-sans text-cream font-medium tracking-wide">{testimonials[active].name}</div>
                <div className="font-sans text-[10px] text-warm/50 tracking-widest uppercase mt-0.5">{testimonials[active].role}</div>
              </div>
            </div>

            {/* Bottom gold line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          </div>
        </div>

        {/* Selector dots / mini cards */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-4xl mx-auto reveal">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`flex-1 text-left p-5 border transition-all duration-400 group ${
                active === i
                  ? 'border-gold/40 bg-gold/5 shadow-[0_0_20px_rgba(201,168,76,0.1)]'
                  : 'border-white/5 hover:border-gold/20'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-8 h-8 rounded-full overflow-hidden border transition-colors duration-300 ${active === i ? 'border-gold/50' : 'border-white/10'}`}>
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className={`font-sans text-xs font-medium transition-colors duration-300 ${active === i ? 'text-gold' : 'text-cream/60'}`}>
                    {t.name}
                  </div>
                </div>
              </div>
              <p className="font-body text-xs text-warm/40 italic line-clamp-2 leading-relaxed">
                "{t.quote.slice(0, 80)}…"
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
