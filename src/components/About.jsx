import React from 'react'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  useReveal()

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-espresso" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,168,76,0.06),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section label */}
        <div className="reveal flex items-center gap-4 mb-20">
          <span className="gold-line w-10 block" />
          <span className="font-sans text-gold text-[10px] tracking-[0.5em] uppercase">Our Story</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <div className="reveal-left relative group">
            <div className="relative overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=85"
                alt="Carnival Cafe interior"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-dark/60 via-transparent to-transparent" />
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-6 glass-dark p-6 hidden md:block">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: '6+', label: 'Years of Joy' },
                  { num: '50k+', label: 'Happy Guests' },
                  { num: '120+', label: 'Menu Items' },
                  { num: '4.9', label: 'Star Rating' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-display text-2xl text-gold">{s.num}</div>
                    <div className="font-sans text-[9px] tracking-widest uppercase text-warm/60 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative border accent */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-l border-t border-gold/30 pointer-events-none" />
          </div>

          {/* Text side */}
          <div className="reveal-right lg:pl-6">
            <h2 className="font-display text-5xl md:text-6xl text-cream leading-tight mb-8">
              A Cup of Story,<br />
              <span className="italic text-gold-gradient">Brewed with Love</span>
            </h2>

            <div className="gold-line w-16 mb-8" />

            <p className="font-body text-lg text-warm/70 leading-relaxed mb-6">
              Born from a passion for extraordinary flavors and warm gatherings, Carnival Cafe opened its doors in 2018 with one simple belief — every visit should feel like a celebration.
            </p>
            <p className="font-body text-lg text-warm/60 leading-relaxed mb-10">
              Nestled in the heart of the city, we blend the finest single-origin coffees with artisanal pastries and seasonal small plates. Each element — from the hand-selected beans to the hand-painted ceramic cups — is chosen with intention, inviting you to slow down and truly savor.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              {[
                { icon: '◆', text: 'Single-origin beans, ethically sourced' },
                { icon: '◆', text: 'House-baked pastries every morning' },
                { icon: '◆', text: 'Seasonal, locally-sourced ingredients' },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <span className="text-gold text-[8px] mt-1.5">{item.icon}</span>
                  <span className="font-sans text-xs text-warm/60 tracking-wide leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>

            <a
              href="#menu"
              onClick={(e) => { e.preventDefault(); document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center gap-3 text-gold font-sans text-xs tracking-[0.3em] uppercase border-b border-gold/30 pb-1 hover:border-gold transition-colors duration-300 group"
            >
              Discover Our Menu
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
